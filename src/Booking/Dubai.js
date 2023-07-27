import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Tform from '../Components/Tform';

export default function dubai() {
  return (
    <div className='tcard'>
      <Navbar/>
      <div className="card1 mb-3">
  <img src="https://wallpaperaccess.com/full/222675.jpg" className="card1-img-top" alt="Image not found"/>
  <div className="card-body">
    <h1 className=" card1-title ">Enter the details</h1>
   
  </div>
</div>
<Tform/>
      <Footer/>
    </div>
  )
}
