import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ProjectUpdate from './ProjectUpdate';
import DeleteProject from './DeleteProject';

// Define styles for PDF document
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
        padding: 20,
    },
    section: {
        flexGrow: 1,
    },
    header: {
        fontSize: 18,
        marginBottom: 20,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        paddingBottom: 10,
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        paddingBottom: 5,
        paddingTop: 5,
    },
    tableCell: {
        width: '25%',
        padding: 5,
    },
});

export default function ProjectTable() {
    const columns = [
        {
            name: "Title",
            selector: (row) => row.title,
        },
        {
            name: "Status",
            selector: (row) => row.status,
        },
        {
            name: "Description",
            selector: (row) => row.description,
        },
        {
            name: "Cost",
            selector: (row) => row.cost,
        },
        {
            name: "Edit project",
            cell: (row) => <ProjectUpdate projectId={row._id} />,
            button: true,
        },
        {
            name: "Delete",
            cell: (row) => <DeleteProject projectId={row._id} />,
            button: true,
        },
    ];

    const [records, setRecords] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/project/projects');
                setRecords(response.data.readProject);
            } catch (error) {
                console.error('Error fetching project data:', error);
            }
        };
        fetchData();
    }, []);

    function handleFilter(event) {
        const newData = records.filter(row => {
            return (
                row.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
                row.status.toLowerCase().includes(event.target.value.toLowerCase()) ||
                row.duration.toLowerCase().includes(event.target.value.toLowerCase())
            );
        });
        setRecords(newData);
    }

    // Render PDF document content using react-pdf
    const PDFDocument = (
        <Document>
            <Page style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.header}>Project Table</Text>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableCell}>Title</Text>
                        <Text style={styles.tableCell}>Status</Text>
                        <Text style={styles.tableCell}>Description</Text>
                        <Text style={styles.tableCell}>Cost</Text>
                    </View>
                    {records.map(row => (
                        <View key={row._id} style={styles.tableRow}>
                            <Text style={styles.tableCell}>{row.title}</Text>
                            <Text style={styles.tableCell}>{row.status}</Text>
                            <Text style={styles.tableCell}>{row.description}</Text>
                            <Text style={styles.tableCell}>{row.cost}</Text>
                        </View>
                    ))}
                </View>
            </Page>
        </Document>
    );

    return (
        <div className='mainTable'>
            <div className='text-right mb-4'>
                <input className='searchbox' type='text' placeholder='Search..' onChange={handleFilter} />
                <PDFDownloadLink document={PDFDocument} fileName="project-table.pdf">
    {({ blob, url, loading, error }) => (
        <button
            style={{
                padding: '10px 20px',
                backgroundColor: '#007bff',        
                marginLeft: '100px',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                textDecoration: 'none',
            }}
        >
            {loading ? 'Loading document...' : 'Download PDF'}
        </button>
    )}
</PDFDownloadLink>

            </div>
            <DataTable
                columns={columns}
                data={records}
                fixedHeader
                pagination
            />
        </div>
    );
}
