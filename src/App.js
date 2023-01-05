import { lazy, Suspense } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Explore = lazy(() => import('./NavMenu/Explore.js'));
const Fun = lazy(() => import('./NavMenu/Fun.js'));
const Stay = lazy(() => import('./NavMenu/Stay.js'));
const Flights = lazy(() => import('./ServiceMenu/Flights'));
const Ship = lazy(() => import('./ServiceMenu/Ship'));
const Hotel = lazy(() => import('./ServiceMenu/Hotel'));
const Cab = lazy(() => import('./ServiceMenu/Cab'));
const Bus = lazy(() => import('./ServiceMenu/Bus'));
const Activity = lazy(() => import('./ServiceMenu/Activity'));
const Pg = lazy(() => import('./ServiceMenu/Pg'));
const Travelpackage = lazy(() => import('./ServiceMenu/Travelpackage'));
const Dinning = lazy(() => import('./ServiceMenu/Dinning'));
const Trekking = lazy(() => import('./ServiceMenu/Trekking.js'));
const Nav = lazy(() => import('./Nav'));

export default function App() {
  return (
    <div className='bg-gradient-to-br from-indigo-900 via-pink-800 to-blue-800 text-white font-mono h-full m-0 p-0'>
      <Router>
        <Suspense fallback={<h1> Loading.. .. ..... .</h1>}>
          <Routes>
            <Route path='/' element={<Nav />} />
            <Route path='/Explore' element={<Explore />} />
            <Route path='/Stay' element={<Stay />} />
            <Route path='/Fun' element={<Fun />} />
            <Route path='/Flight' element={<Flights />} />
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
        </Suspense>
      </Router>
    </div>
  );
}
