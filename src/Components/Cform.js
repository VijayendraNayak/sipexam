import React, { useState } from "react";
import Axios from "axios";
<div></div>
function App() {
  const [fdata, setFdata] = useState({
    Name: "",
    email: "",
    Phone: "",
  });
  const [msg, setMsg] = useState();

  const changeHandler = (e) => {
    let name1 = e.target.name;
    let val = e.target.value;
    setFdata({ ...fdata, [name1]: val });
  };


  const submitHandler = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/Cform", { fdata }).then((res) => {
      let ack = res.data;
      if (ack === "success") {
        setMsg("Thankyou, We'll contact you shortly");
        console.log(msg);
        alert("Thankyou, We'll contact you shortly");
      } else {
        setMsg("Data not inserted");
        console.log(msg);
        alert("Data not inserted");
      }
    });
  };

  return (
    <>
    <h1 className="contacthead">Contact us</h1>
    <div className="outbox">
      
<div className="form">
  
  <form onSubmit={submitHandler}>
    <div className="form-items">

    {/* <label>Name:</label> */}
    <input
    className="inputfor"
    placeholder="Enter your name"
      type="text"
      name="Name"
      value={fdata.Name}
      onChange={changeHandler}
      />
      </div>
<div className="form-items">

{/* <label>Email:</label> */}
<input
className="inputfor"
placeholder="Enter yout email"
type="email"
name="email"
value={fdata.email}
onChange={changeHandler}
/>
</div>
<div className="form-items">

    {/* <label>Phone number:</label> */}
    <input
    className="inputfor"
    placeholder="Enter your Phone number"
      type="Phone"
      name="Phone"
      value={fdata.Phone}
      onChange={changeHandler}
      />
      </div>
    <button className="formbut" type="submit">Submit</button>
  </form>
</div>
<div >
<img className="formimg" src="https://www.pngimages.pics/images/quotes/english/general/two-people-shaking-hands-png-52650-255435.png" alt="img not found"/>
</div>
    </div>
    </>
  );
}

export default App;