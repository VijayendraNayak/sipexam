import React from 'react';
import Footer from '../Components/Footer';
import Tform from '../Components/Tform';
import Navbar from '../Components/Navbar';

export default function japan() {
  return (
    <div className='tcard'>
      <Navbar/>
      <div className="card1 mb-3">
  <img src="https://wallpaperaccess.com/full/27748.jpg" className="card1-img-top" alt="Image not found"/>
  <div className="card-body">
    <h1 className=" card1-title ">Enter the details</h1>
   
  </div>
</div>
      <Tform/>
      <Footer/>
    </div>
  )
}
