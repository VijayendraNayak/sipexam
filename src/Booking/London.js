import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Tform from '../Components/Tform';

export default function london() {
  return (
    <div className='tcard'>
      <Navbar/>
      <div className="card1 mb-3">
  <img src="https://www.pixel4k.com/wp-content/uploads/2018/03/London%20at%20Night5688118012.jpg" className="card1-img-top" alt="Image not found"/>
  <div className="card-body">
    <h1 className=" card1-title ">Enter the details</h1>
    <p className="card-text">form</p>
  </div>
</div>
      <Tform/>
      <Footer/>
    </div>
  )
}
