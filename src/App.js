import { lazy, Suspense } from 'react';
import { ScaleLoader } from 'react-spinners';
// import { RingLoader } from 'react-spinners';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const SingleHotel = lazy(() => import("./ServiceMenu/Hotel/SingleHotel/SingleHotel.js"));
const Explore = lazy(() => import('./NavMenu/Explore.js'));
const Fun = lazy(() => import('./NavMenu/Fun.js'));
const Stay = lazy(() => import('./NavMenu/Stay.js'));
const Flights = lazy(() => import('./ServiceMenu/Flights'));
const Ship = lazy(() => import('./ServiceMenu/Ship'));
const Shop = lazy(() => import('./ServiceMenu/Shop'));
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
const Tandoor = lazy(() =>
  import('./ServiceMenu/Dining/hotel-pages/Tandoor')
);
const Trio = lazy(() => import('./ServiceMenu/Dining/hotel-pages/Trio'));
const Tillai = lazy(() =>
  import('./ServiceMenu/Dining/hotel-pages/Tillai')
);
const Icyspicy = lazy(() =>
  import('./ServiceMenu/Dining/hotel-pages/Icyspicy')
);
const Annapurna = lazy(() =>
  import('./ServiceMenu/Dining/hotel-pages/Annapurna')
);
const Brewbeans = lazy(() =>
  import('./ServiceMenu/Dining/hotel-pages/Brewbeans')
);
const Chaisuttabar = lazy(() =>
  import('./ServiceMenu/Dining/hotel-pages/Chaisuttabar')
);
const Rooftop = lazy(() =>
  import('./ServiceMenu/Dining/hotel-pages/Rooftop')
);
const Cardamom = lazy(() =>
  import('./ServiceMenu/Dining/hotel-pages/Cardamom')
);

export default function App() {
  return (
    <div className="bg-gradient-to-br from-white text-slate-800 font-mono h-full m-0 p-0">
      <Router>
        <Suspense
          fallback={
            <div className="h-screen w-full flex flex-col bg-white">
              <ScaleLoader
                size={500}
                color="green"
                className="mx-auto w-screen h-full items-center justify-center border-transparent"
              />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Nav />} />
            <Route path="/Explore" element={<Explore />} />
            <Route path="/Stay" element={<Stay />} />
            <Route path="/Fun" element={<Fun />} />
            <Route path="/Flight" element={<Flights />} />
            <Route path="/Ship" element={<Ship />} />
            <Route path="/Hotel" element={<Hotel />} />
            <Route path="/Bus" element={<Bus />} />
            <Route path="/Ferry" element={<Ferry />} />
            <Route path="/Activity" element={<Activity />} />
            <Route path="/Pg" element={<Pg />} />
            <Route path="/Travelpackage" element={<Travelpackage />} />
            <Route path="/Cab" element={<Cab />} />
            <Route path="/Dinning" element={<Dinning />} />
            <Route path="/Trekking" element={<Trekking />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Tandoor" element={<Tandoor />} />
            <Route path="/Trio" element={<Trio />} />
            <Route path="/Tillai" element={<Tillai />} />
            <Route path="/Icyspicy" element={<Icyspicy />} />
            <Route path="/Annapurna" element={<Annapurna />} />
            <Route path="/Brewbeans" element={<Brewbeans />} />
            <Route path="/Chaisuttabar" element={<Chaisuttabar />} />
            <Route path="/Rooftop" element={<Rooftop />} />
            <Route path="/Cardamom" element={<Cardamom />} />
            <Route path="/SingleHotel" element={<SingleHotel />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}