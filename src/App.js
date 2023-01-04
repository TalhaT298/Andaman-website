import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Explore from './NavMenu/Explore.js';
import Fun from './NavMenu/Fun.js';
import Stay from './NavMenu/Stay.js';
import Flight from './ServiceMenu/Flights';
import Ship from './ServiceMenu/Ship';
import Hotel from './ServiceMenu/Hotel';
import Cab from './ServiceMenu/Cab';
import Bus from './ServiceMenu/Bus';
import Activity from './ServiceMenu/Activity';
import Pg from './ServiceMenu/Pg';
import Travelpackage from './ServiceMenu/Travelpackage';
import Dinning from './ServiceMenu/Dinning';
import Trekking from './ServiceMenu/Trekking.js';
import Nav from './Nav';

export default function App() {
  return (
    <div className='bg-gradient-to-br from-indigo-900 via-pink-800 to-blue-800 text-white font-mono h-full m-0 p-0'>
      <Router>
        <Routes>
          <Route path='/' element={<Nav />} />
          <Route path='/Explore' element={<Explore />} />
          <Route path='/Stay' element={<Stay />} />
          <Route path='/Fun' element={<Fun />} />
          <Route path='/Flight' element={<Flight />} />
          <Route path='/Ship' element={<Ship />} />
          <Route path='/hotel' element={<Hotel />} />
          <Route path='/bus' element={<Bus />} />
          <Route path='/activity' element={<Activity />} />
          <Route path='/pg' element={<Pg />} />
          <Route path='/travelpg' element={<Travelpackage />} />
          <Route path='/cab' element={<Cab />} />
          <Route path='/dinning' element={<Dinning />} />
          <Route path='/trekking' element={<Trekking />} />
        </Routes>
      </Router>
    </div>
  );
}
