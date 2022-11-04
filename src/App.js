import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Explore from "./NavMenu/Explore.js";
import Fun from "./NavMenu/Fun.js";
import Stay from "./NavMenu/Stay.js";
import Flight from "./ServiceMenu/Flights";
import Ship from "./ServiceMenu/Ship";
import Hotel from "./ServiceMenu/hotel";
import Cab from "./ServiceMenu/cab";
import Bus from "./ServiceMenu/bus";
import Activity from "./ServiceMenu/activity";
import Pg from "./ServiceMenu/Pg";
import Travelpg from "./ServiceMenu/travelpackage";
import Dinning from "./ServiceMenu/dinning";
import Trekking from "./ServiceMenu/trekking.js";
import Nav from "./Nav"
export default function App() {


  return (
    
      <Router>
        <Routes>
                <Route  path="/" element={<Nav />} />
                <Route path="/Explore" element={<Explore />} />
                <Route path="/Stay" element={<Stay/>} />
                <Route path="/Fun" element={<Fun/>} />
                <Route path="/Flight" element={<Flight/>} />
                <Route path="/Ship" element={<Ship/>} />
                <Route path="/hotel" element={<Hotel/>} />
                <Route path="/bus" element={<Bus/>} />
                <Route path="/activity" element={<Activity />} />
                <Route path="/pg" element={<Pg />} />
                <Route path="/travelpg" element={<Travelpg />} />
                <Route path="/cab" element={<Cab />} />
                <Route path="/dinning" element={<Dinning />} />
                <Route path="/trekking" element={<Trekking />} />

                    
        </Routes>
      </Router>
  
  );
}
