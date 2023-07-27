import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Details from '../Components/Details';

const Destination = () => {

    return (
      <>
      <Navbar/>
        <h1 style={{fontSize:"3rem",fontFamily:"serif",textAlign:"center"}}>Our Destinations</h1>
        <div class="container">
          <div class="row">
            <div class=" col-sm-12 col-md-6 col-lg-6">
              <div class="card">
              <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1piZhgXJugO_Adue8_O4js2P3aBvj4g8-cA&usqp=CAU" width="400" height="400"class="card-img-top" alt="..." style={{objectFit:"cover"}}></img>
                          <div class="card-body">
                              <h5 class="card-title">kerala Package (5N/6D)</h5>
                              <p class="card-text">Embark on a captivating journey through Kerala, India's enchanting gem. Experience the breathtaking backwaters of Alleppey, explore the lush tea plantations in Munnar, and bask in the serene beauty of the mist-clad hills in Wayanad. Indulge in mouthwatering cuisine, witness vibrant cultural festivals, and unwind on pristine palm-fringed beaches. Kerala awaits your discovery.</p>
                              <div style={{fontFamily:"cursive",fontSize:"1.5rem",}}>Price:16,000 per person</div>
                          </div>
                      </div>
            </div>
            <div class=" col-sm-12 col-md-6 col-lg-6">
              <div class="card">
                          <img  src="https://images.unsplash.com/photo-1593181629936-11c609b8db9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFuYWxpfGVufDB8fDB8fHww&w=1000&q=80" width="400" height="400" class="card-img-top" alt="..." ></img>
                          <div class="card-body">
                              <h5 class="card-title">Manali Package (5N/6D)</h5>
                              <p class="card-text">Manali, nestled in the breathtaking Himalayas, is a paradise for nature lovers. Its snow-capped peaks, lush valleys, and gushing rivers offer a mesmerizing escape. Adventure seekers can indulge in thrilling activities like skiing and paragliding, while spiritual souls can find solace in ancient temples. Manali is a haven for unforgettable memories.</p>
                              <div style={{fontFamily:"cursive",fontSize:"1.5rem",}}>Price:16,000 per person</div>
                          </div>
                      </div>
            </div>
            <div class=" col-sm-12 col-md-6 col-lg-6">
              <div class="card">
                          <img  src="https://images.unsplash.com/photo-1581892197913-fd2e407e698a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"class="card-img-top" width="400" height="400"  alt="..." ></img>
                          <div class="card-body">
                              <h5 class="card-title">Goa Package (5N/6D)</h5>
                              <p class="card-text">Experience the mesmerizing beauty of Goa, a coastal paradise on the western coast of India. Explore pristine sandy beaches, indulge in thrilling water sports, savor delicious seafood, and immerse yourself in the vibrant nightlife. Goa offers a perfect blend of sun, sand, and sea, making it an unforgettable destination for every traveler.</p>
                              <div style={{fontFamily:"cursive",fontSize:"1.5rem",}}>Price:8,000 per person</div>
                          </div>
                      </div>
            </div>
            <div class=" col-sm-12 col-md-6 col-lg-6">
              <div class="card">
                          <img  src="https://images.unsplash.com/photo-1549468057-5b7fa1a41d7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFubiUyMG9mJTIwa3V0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"class="card-img-top" width="400" height="400" alt="..." ></img>
                          <div class="card-body">
                              <h5 class="card-title">Rajasthan Package (5N/6D)</h5>
                              <p class="card-text">Experience the captivating wonders of Rajasthan! Explore the majestic forts, like Amer and Mehrangarh, and immerse yourself in the vibrant markets of Jaipur. Witness the golden sand dunes of Jaisalmer and indulge in the rich culture of Udaipur. Rajasthan, a land of royalty and heritage, guarantees an unforgettable journey of a lifetime.</p>
                              <div style={{fontFamily:"cursive",fontSize:"1.5rem",}}>Price:12,000 per person</div>
                          </div>
                      </div>
            </div>
          </div>
        </div>
       <Footer/>
      </>
    );
  };
  
  export default Destination;