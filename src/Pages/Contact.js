import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Cform from '../Components/Cform';
import Socialmedia from '../Components/Socialmedia';
export default function Contact() {
  return (
    <div className='contact'>
      <Navbar/>
      <Cform/>
      <Socialmedia/>
      <Footer/>
    </div>
  )
}
