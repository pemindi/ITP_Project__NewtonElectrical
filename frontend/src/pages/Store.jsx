import React from "react";
import Header from "../components/Header";
import "../styles/store.css";

export default function Store() {
  return (
    <div>
      <Header />
      <div className="pt-20 flex justify-between">
        <div className="">
          gfgfdhf
        </div>
        <div className="cardContents ml-9 mr-9">
        <div class="grid grid-cols-3 gap-10">
          <div class="item-card">
            <div class="item-image">
              <img src="https://via.placeholder.com/150" alt="Product Image" />
            </div>
            <div class="item-details">
              <h2 class="itemName">Product Name</h2>
              <div class="item-price">LKR 19.99</div>
              <div className="btnSection flex justify mt-4">
                <button class="addToCartBtn">Add to Cart</button>
                <button class="buyNowBtn  ml-3">Buy Now</button>
              </div>
            </div>
          </div>
          <div class="item-card">
            <div class="item-image">
              <img src="https://via.placeholder.com/150" alt="Product Image" />
            </div>
            <div class="item-details">
              <h2 class="itemName">Product Name</h2>
              <div class="item-price">LKR 19.99</div>
              <div className="btnSection flex justify mt-4">
                <button class="addToCartBtn">Add to Cart</button>
                <button class="buyNowBtn  ml-3">Buy Now</button>
              </div>
            </div>
          </div>
          <div class="item-card">
            <div class="item-image">
              <img src="https://via.placeholder.com/150" alt="Product Image" />
            </div>
            <div class="item-details">
              <h2 class="itemName">Product Name</h2>
              <div class="item-price">LKR 19.99</div>
              <div className="btnSection flex justify mt-4">
                <button class="addToCartBtn">Add to Cart</button>
                <button class="buyNowBtn  ml-3">Buy Now</button>
              </div>
            </div>
          </div>
          <div class="item-card">
            <div class="item-image">
              <img src="https://via.placeholder.com/150" alt="Product Image" />
            </div>
            <div class="item-details">
              <h2 class="itemName">Product Name</h2>
              <div class="item-price">LKR 19.99</div>
              <div className="btnSection flex justify mt-4">
                <button class="addToCartBtn">Add to Cart</button>
                <button class="buyNowBtn  ml-3">Buy Now</button>
              </div>
            </div>
          </div>
          <div class="item-card">
            <div class="item-image">
              <img src="https://via.placeholder.com/150" alt="Product Image" />
            </div>
            <div class="item-details">
              <h2 class="itemName">Product Name</h2>
              <div class="item-price">LKR 19.99</div>
              <div className="btnSection flex justify mt-4">
                <button class="addToCartBtn">Add to Cart</button>
                <button class="buyNowBtn  ml-3">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
