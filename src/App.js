import { lazy, Suspense, useEffect } from "react";
import { ScaleLoader } from 'react-spinners';
// import { RingLoader } from 'react-spinners';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TravellersDetailsFlight from "./ServiceMenu/Flight/TravellersDetailsFlight.js";
import ReviewBookingFlight from "./ServiceMenu/Flight/ReviewBookingFlight.js";
import FlightPreview from "./ServiceMenu/Flight/FlightPreview.js";
import ShipOverviewBooking  from './ServiceMenu/Ship/ShipBookingPreview.js';
import TravellerDetailsShip from './ServiceMenu/Ship/TravelarDetailsShip.js';

const Explore = lazy(() => import('./NavMenu/Explore.js'));
const Fun = lazy(() => import('./NavMenu/Fun.js'));
const Stay = lazy(() => import('./NavMenu/Stay.js'));
const Nav = lazy(() => import('./Nav'));
const SingleInland = lazy(() =>
  import('./ServiceMenu/Ship/SingleInland/SingleInland.js')
);

const ShipBooking = lazy(() => import('./ServiceMenu/Ship/Booking/ShipBooking.js'));
const ShipResults = lazy(() => import('./ServiceMenu/Ship/Booking/ShipResults.js'));
const TravellerDetails = lazy(() => import('./ServiceMenu/Ship/Booking/TravellerDetails.js'));
const ReviewBooking = lazy(() => import('./ServiceMenu/Ship/Booking/ReviewBooking.js'));

const MakkruzGoldDetails = lazy(() =>
  import(
    './ServiceMenu/Ship/SingleInland/SingleInlandDetailsPage/MakkruzGoldDetails'
  )
);
const ContactForm = lazy(() => import('./Component/ContactForm.js'));
const CabContactForm = lazy(() => import('./Component/CabContactForm.js'));
const FlightContactForm = lazy(() =>
  import('./Component/FlightContactForm.js')
);
const ActivityContactForm = lazy(() =>
  import('./Component/ActivityContactForm.js')
);
const PgContactForm = lazy(() => import('./Component/PgContactForm.js'));
const TravelPackageContactForm = lazy(() => import('./Component/TravelPackageContactForm.js'));
const TrekContactForm = lazy(() => import('./Component/TrekContactForm.js'));

const SingleHotel = lazy(() =>
  import('./ServiceMenu/Hotel/SingleHotel/SingleHotel.js')
);

const PgHotel = lazy(() =>
  import('./ServiceMenu/Pg/SingleHotel/SinglePgHotel')
);

const Tandoor = lazy(() => import('./ServiceMenu/Dining/hotel-pages/Tandoor'));
const Trio = lazy(() => import('./ServiceMenu/Dining/hotel-pages/Trio'));
const Tillai = lazy(() => import('./ServiceMenu/Dining/hotel-pages/Tillai'));
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
const Rooftop = lazy(() => import('./ServiceMenu/Dining/hotel-pages/Rooftop'));
const Cardamom = lazy(() =>
  import('./ServiceMenu/Dining/hotel-pages/Cardamom')
);

export default function App() {
  // useEffect(() => {
  //   if (window.performance) {
  //     if (performance.navigation.type === 1) {
  //       window.location.href = "/";
  //     }
  //   }
  // }, []);

  return (
    <div className="bg-gradient-to-br from-white text-slate-800 font-Ubuntu_Mono h-full m-0 p-0">
      <Router>
        <Suspense
          fallback={
            <div className="h-screen w-full flex flex-col bg-white">
              <ScaleLoader
                size={2000}
                color="blue"
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
            <Route path="/Tandoor" element={<Tandoor />} />
            <Route path="/Trio" element={<Trio />} />
            <Route path="/Tillai" element={<Tillai />} />
            <Route path="/Icyspicy" element={<Icyspicy />} />
            <Route path="/Annapurna" element={<Annapurna />} />
            <Route path="/Brewbeans" element={<Brewbeans />} />
            <Route path="/Chaisuttabar" element={<Chaisuttabar />} />
            <Route path="/Rooftop" element={<Rooftop />} />
            <Route path="/Cardamom" element={<Cardamom />} />
            {/* <Route path="/Tandoor1" element={<Tandoor1 />} />
            <Route path="/Trio1" element={<Trio1 />} />
            <Route path="/Tillai1" element={<Tillai1 />} />
            <Route path="/Icyspicy1" element={<Icyspicy1 />} />
            <Route path="/Annapurna1" element={<Annapurna1 />} />
            <Route path="/Brewbeans1" element={<Brewbeans1 />} />
            <Route path="/Chaisuttabar1" element={<Chaisuttabar1 />} />
            <Route path="/Rooftop1" element={<Rooftop1 />} />
            <Route path="/Cardamom1" element={<Cardamom1 />} /> */}
            <Route path="/SingleHotel/:id" element={<SingleHotel />} />
            <Route path="/SingleInland/:id" element={<SingleInland />} />
            <Route path="/MakkruzGold" element={<MakkruzGoldDetails />} />
            <Route path="/PgSingleHotel" element={<PgHotel />} />
            <Route path="/ContactForm" element={<ContactForm />} />

            <Route path="/FlightPreview" element={<FlightPreview />} />
            <Route path="/ReviewFlight" element={<TravellersDetailsFlight />} />
            <Route path="/FlightReviewBooking" element={<ReviewBookingFlight />} />

            {/* Ship Booking */}
            <Route path="/ShipBooking" element={<ShipBooking />} />
            <Route path="/ShipBookingPreview" element={<ShipOverviewBooking />} />
            <Route path="/selectFerry" element={<ShipResults />} />
            <Route path="/travellerDetails" element={<TravellerDetails />} />
            <Route path="/ReviewBooking" element={<ReviewBooking />} />
            <Route path="/travellerShip" element={< TravellerDetailsShip />} />

            <Route path="/CabContactForm" element={<CabContactForm />} />
            <Route path="/FlightContactForm" element={<FlightContactForm />} />
            <Route
              path="/ActivityContactForm"
              element={<ActivityContactForm />}
            />
            <Route path="/PgContactForm" element={<PgContactForm />} />
            <Route path="/TravelPackageContactForm" element={<TravelPackageContactForm />} />
            <Route path="/TrekContactForm" element={<TrekContactForm />} />
            <Route path="*" element={<Nav />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}
