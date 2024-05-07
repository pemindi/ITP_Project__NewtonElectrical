
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../adminStyles/JobsTable.css';
import SideBar from '../components/SideBar'
import Header from '../components/Header'




const CVTable = () => {
    const [cvs, setCVs] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCVs = async () => {
            try {
                const response = await axios.get('http://localhost:3000/cv/getcvs');
                setCVs(response.data);
            } catch (error) {
                setError(error.message);
                console.error('Error fetching CVs:', error);
            }
        };
        fetchCVs();
    }, []);

    const handleViewCV = (cvUrl) => {
        window.open(cvUrl, '_blank', 'noopener,noreferrer');
    };

    const handleChangeStatus = async (id, status) => {
        try {
            const response = await axios.put(`http://localhost:3000/cvs/${id}`, { status });
            if (response.status === 200) {
                const updatedCVs = cvs.map(cv => (cv._id === id ? { ...cv, status } : cv));
                setCVs(updatedCVs);
            }
        } catch (error) {
            console.error('Error updating CV status:', error);
        }
    };

    return (
       <>
       <div className='backgroundBody'>
      <div className='grid-container'>
          <Header/>
          <SideBar/>  
          
      
        <div className='container pt-8 pl-8'>
        <div className="text-gray-900 bg-gray-200">
        <div className="p-4 flex justify-between items-center">
            <h1 className="text-3xl">CVs</h1>
            <div className="flex items-center">
            </div>
        </div>
        <div className="px-3 py-4">
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">User ID</th>
                        <th className="px-4 py-2">Job Title</th>
                        <th className="px-4 py-2">Uploaded At</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cvs.map(cv => (
                        <tr key={cv._id}>
                            <td className="border px-4 py-2">{cv.userId}</td>
                            <td className="border px-4 py-2">{cv.JobTitle}</td>
                            <td className="border px-4 py-2">{cv.uploadedAt}</td>
                            <td className="border px-4 py-2">{cv.status}</td>
                            <td className="border px-4 py-2">
                                <button className="view-button" onClick={() => handleViewCV(cv.jobCv)}>View CV</button>
                                <select className="status-select" onChange={(e) => handleChangeStatus(cv._id, e.target.value)}>
                                    <option value="pending" selected={cv.status === 'pending'}>Pending</option>
                                    <option value="reviewed" selected={cv.status === 'reviewed'}>Reviewed</option>
                                    <option value="accepted" selected={cv.status === 'accepted'}>Accepted</option>
                                    <option value="rejected" selected={cv.status === 'rejected'}>Rejected</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    </div>
  </div>
 </div>
  </>
    );
};

export default  CVTable;