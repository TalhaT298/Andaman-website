import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Explore from "./NavMenu/Explore.js";
import Fun from "./NavMenu/Fun.js";
import Stay from "./NavMenu/Stay.js";

import Nav from "./Nav"
export default function App() {


  return (
    
      <Router>
        <Routes>
                <Route  path="/" element={<Nav />} />
                <Route path="/Explore" element={<Explore />} />
                <Route path="/Stay" element={<Stay/>} />
                <Route path="/Fun" component={Fun}/>

                    
        </Routes>
      </Router>
  
  );
}
