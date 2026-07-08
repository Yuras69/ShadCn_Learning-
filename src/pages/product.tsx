import React from 'react'
import NavBar from '../components/NavBar';


const image = [
  "yuras.jpg",
  "yuras.jpg",
  "yuras.jpg",
  "yuras.jpg",
  "yuras.jpg",
];
const product = () => {
  return (
    <>
    <NavBar />
    <div>
        <h1>Product</h1>
        <p>Product Description</p>
        <img src={image[0]} alt="Product Image 1" />
        <img src={image[1]} alt="Product Image 2" />
        <img src={image[2]} alt="Product Image 3" />
        <img src={image[3]} alt="Product Image 4" />
        <img src={image[4]} alt="Product Image 5" />
    </div>
    </>



    
  )
}

export default product
