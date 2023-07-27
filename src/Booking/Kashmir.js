import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Tform from '../Components/Tform';

export default function kashmir() {
  return (
    <div className='tcard'>
      <Navbar/>
      <div className="card1 mb-3">
  <img src="https://free4kwallpapers.com/uploads/originals/2015/10/13/kashmir-landscape-wallpaper.jpg" className="card1-img-top" alt="Image not found"/>
  <div className="card-body">
    <h1 className=" card1-title ">Enter the details</h1>
  </div>
</div>
      <Tform/>
      <Footer/>
    </div>
  )
}
