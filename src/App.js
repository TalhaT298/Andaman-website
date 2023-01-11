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
const Ferry = lazy(() => import('./ServiceMenu/Ferry'));
const Activity = lazy(() => import('./ServiceMenu/Activity'));
const Pg = lazy(() => import('./ServiceMenu/Pg'));
const Travelpackage = lazy(() => import('./ServiceMenu/Travelpackage'));
const Dinning = lazy(() => import('./ServiceMenu/Dinning'));
const Trekking = lazy(() => import('./ServiceMenu/Trekking.js'));
const Nav = lazy(() => import('./Nav'));

export default function App() {
  return (
    <div className='bg-gradient-to-br from-white text-slate-800 font-mono h-full m-0 p-0'>
      <Router>
        <Suspense fallback={<h1> Loading.. .. ..... .</h1>}>
          <Routes>
            <Route path='/' element={<Nav />} />
            <Route path='/Explore' element={<Explore />} />
            <Route path='/Stay' element={<Stay />} />
            <Route path='/Fun' element={<Fun />} />
            <Route path='/Flight' element={<Flights />} />
            <Route path='/Ship' element={<Ship />} />
            <Route path='/Hotel' element={<Hotel />} />
            <Route path='/Bus' element={<Bus />} />
            <Route path='/Ferry' element={<Ferry />} />
            <Route path='/Activity' element={<Activity />} />
            <Route path='/Pg' element={<Pg />} />
            <Route path='/Travelpackage' element={<Travelpackage />} />
            <Route path='/Cab' element={<Cab />} />
            <Route path='/Dinning' element={<Dinning />} />
            <Route path='/Trekking' element={<Trekking />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}
