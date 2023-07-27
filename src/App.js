import {
  BrowserRouter as Router,
 Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Signup from './Pages/Signup';
import About from './Pages/About';
import Destination from './Pages/Destination';
import Australia from "./Booking/Australia";
import Dubai from "./Booking/Dubai";
import Goa from "./Booking/Goa";
import Japan from "./Booking/Japan";
import Kashmir from "./Booking/Kashmir";
import Kedarnath from "./Booking/Kedarnath";
import London from "./Booking/London";
import Maldives from "./Booking/Maldives";
import Nepal from "./Booking/Nepal";
import Newyork from "./Booking/Newyork";
import Russia from "./Booking/Russia";
import Singapore from "./Booking/Singapore";


function App() {
  return (
    <>
    <Router>
      <Routes>
          <Route exact path="/"
            element={<Home />}>
          </Route>
          <Route exact path="/about"
            element={<About />}>
          </Route>
          <Route exact path="/signup"
            element={<Signup />}>
          </Route>
          <Route exact path="/contact"
            element={<Contact />}>
          </Route>
          <Route exact path="/destination"
            element={<Destination />}>
          </Route>
          <Route exact path="/aus"
            element={<Australia />}>
          </Route>
          <Route exact path="/dub"
            element={<Dubai />}>
          </Route>
          <Route exact path="/goa"
            element={<Goa />}>
          </Route>
          <Route exact path="/jap"
            element={<Japan />}>
          </Route>
          <Route exact path="/kas"
            element={<Kashmir />}>
          </Route>
          <Route exact path="/ked"
            element={<Kedarnath />}>
          </Route>
          <Route exact path="/lon"
            element={<London />}>
          </Route>
          <Route exact path="/mal"
            element={<Maldives />}>
          </Route>
          <Route exact path="/nep"
            element={<Nepal />}>
          </Route>
          <Route exact path="/new"
            element={<Newyork />}>
          </Route>
          <Route exact path="/rus"
            element={<Russia />}>
          </Route>
          <Route exact path="/sin"
            element={<Singapore />}>
          </Route>
        </Routes>
    </Router>
    
    </>
  );
}

export default App;
//bye
//bye
