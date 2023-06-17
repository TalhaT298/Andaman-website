import { lazy, Suspense, useEffect } from "react";
import { ScaleLoader } from "react-spinners";
// import { RingLoader } from 'react-spinners';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FlightPreview from "./ServiceMenu/Flight/FlightPreview.js";
import ReviewBookingFlight from "./ServiceMenu/Flight/ReviewBookingFlight.js";
import TravellersDetailsFlight from "./ServiceMenu/Flight/TravellersDetailsFlight.js";
import ReviewBookingShip from "./ServiceMenu/Ship/ReviewBookingShip.js";
import ShipPreview from "./ServiceMenu/Ship/ShipPreview.js";
import TravellerDetailsShip from "./ServiceMenu/Ship/TravellersDetailsShip.js";
// anik comment
// import BusSchedule from "./ServiceMenu/Bus/BusSchedule.js";
// anik comment
// anik import
import BusBookingSeats from "./ServiceMenu/Bus/Bus/BusBookingSeats/BusBookingSeats.js";
import BusDetailsCard from "./ServiceMenu/Bus/Bus/BusDetailsCard/BusDetailsCard.js";
import BusPayment from "./ServiceMenu/Bus/Bus/BusPayment/BusPaymet.js";
import BusSchedule from "./ServiceMenu/Bus/Bus/BusSchedule/BusSchedule.js";
import BusTravellerDetails from "./ServiceMenu/Bus/Bus/BusTravellerDetails/BusTravellerDetails.js";
import PackagePayment from "./ServiceMenu/TravelPackage/PackagePayment.js";
import WaterBookingTickets from "./ServiceMenu/WaterSports/WaterBookingTickets/WaterBookingTickets.js";

// anik import

// const Explore = lazy(() => import('./NavMenu/Explore.js'));
// const Fun = lazy(() => import('./NavMenu/Fun.js'));
// const Stay = lazy(() => import('./NavMenu/Stay.js'));
const Nav = lazy(() => import("./Nav"));
const SingleInland = lazy(() =>
  import("./ServiceMenu/Ship/SingleInland/SingleInland.js")
);

// const ShipBooking = lazy(() =>
// import("./ServiceMenu/Ship/Booking/ShipBooking.js")
// );
// const ShipResults = lazy(() =>
//   import("./ServiceMenu/Ship/Booking/ShipResults.js")
// );
// const TravellerDetails = lazy(() =>
//   import("./ServiceMenu/Ship/Booking/TravellerDetails.js")
// );
// const ReviewBooking = lazy(() =>
//   import("./ServiceMenu/Ship/Booking/ReviewBooking.js")
// );

const MakkruzGoldDetails = lazy(() =>
  import(
    "./ServiceMenu/Ship/SingleInland/SingleInlandDetailsPage/MakkruzGoldDetails"
  )
);
const ContactForm = lazy(() => import("./Component/ContactForm.js"));
const CabContactForm = lazy(() => import("./Component/CabContactForm.js"));
const FlightContactForm = lazy(() =>
  import("./Component/FlightContactForm.js")
);
const ActivityContactForm = lazy(() =>
  import("./Component/ActivityContactForm.js")
);
const PgContactForm = lazy(() => import("./Component/PgContactForm.js"));
const TravelPackageContactForm = lazy(() =>
  import("./Component/TravelPackageContactForm.js")
);
const TrekContactForm = lazy(() => import("./Component/TrekContactForm.js"));

// const SingleHotel = lazy(() =>
//   import("./ServiceMenu/Hotel/SingleHotel/SingleHotel.js")
// );

// const PgHotel = lazy(() =>
//   import("./ServiceMenu/Pg/SingleHotel/SinglePgHotel")
// );

const HotelSearchResult = lazy(() =>
  import("./ServiceMenu/Hotel/Search/HotelSearchResult.js")
);
const HotelSearchDetailsCard = lazy(() =>
  import("./ServiceMenu/Hotel/Search/HotelSearchDetailsCard.js")
);
const HotelCard = lazy(() => import("./ServiceMenu/Hotel/Card/HotelCard.js"));
const HotelPayment = lazy(() => import("./ServiceMenu/Hotel/HotelPayment.js"));

const Tandoor = lazy(() => import("./ServiceMenu/Dining/hotel-pages/Tandoor"));
const Trio = lazy(() => import("./ServiceMenu/Dining/hotel-pages/Trio"));
const Tillai = lazy(() => import("./ServiceMenu/Dining/hotel-pages/Tillai"));
const Icyspicy = lazy(() =>
  import("./ServiceMenu/Dining/hotel-pages/Icyspicy")
);
const Annapurna = lazy(() =>
  import("./ServiceMenu/Dining/hotel-pages/Annapurna")
);
const Brewbeans = lazy(() =>
  import("./ServiceMenu/Dining/hotel-pages/Brewbeans")
);
const PgCard = lazy(() => import("./ServiceMenu/Pg/Card/PgCard.js"));
const PgPayment = lazy(() => import("./ServiceMenu/Pg/PgPayment.js"));

const Chaisuttabar = lazy(() =>
  import("./ServiceMenu/Dining/hotel-pages/Chaisuttabar")
);
const Rooftop = lazy(() => import("./ServiceMenu/Dining/hotel-pages/Rooftop"));
const Cardamom = lazy(() =>
  import("./ServiceMenu/Dining/hotel-pages/Cardamom")
);
const TravelPackageDetails = lazy(() =>
  import("./ServiceMenu/TravelPackage/TravelPackageDetails.js")
);

export default function App() {
  useEffect(() => {
    switch (window.location.pathname) {
      case "/FlightPreview":
      case "/ReviewFlight":
      case "/FlightPayment":
        window.location.href = "/";
        break;
      case "/ShipPreview":
      case "/ReviewBooking":
      case "/ReviewShip":
        window.location.href = "/Ships";
        break;
      default:
        break;
    }
    if (
      window.location.pathname === "/FlightPreview" ||
      window.location.pathname === "/ReviewFlight"
    ) {
      // Redirect to /home
      window.location.href = "/";
    }
  }, []);

  return (
    <div className="bg-[#FAFBFC] text-slate-800 font-Ubuntu_Mono h-full m-0 p-0">
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
            {/* <Route path="/Explore" element={<Explore />} />
            <Route path="/Stay" element={<Stay />} />
            <Route path="/Fun" element={<Fun />} /> */}
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
            {/* <Route path="/SingleHotel/:id" element={<SingleHotel />} /> */}
            <Route path="/SingleInland/:id" element={<SingleInland />} />
            <Route path="/MakkruzGold" element={<MakkruzGoldDetails />} />
            {/* <Route path="/PgSingleHotel" element={<PgHotel />} /> */}
            <Route
              path="/hotel-search-result"
              element={<HotelSearchResult />}
            />
            <Route
              path="/hotel-search-details"
              element={<HotelSearchDetailsCard />}
            />

            <Route path="/hotel-details" element={<HotelCard />} />
            <Route path="/hotel-payment" element={<HotelPayment />} />

            <Route path="/ContactForm" element={<ContactForm />} />

            <Route path="/FlightPreview" element={<FlightPreview />} />
            <Route path="/ReviewFlight" element={<TravellersDetailsFlight />} />
            <Route path="/FlightPayment" element={<ReviewBookingFlight />} />

            {/* Ship Booking */}
            {/* <Route path="/ShipBooking" element={<ShipBooking />} /> */}
            <Route path="/ShipPreview" element={<ShipPreview />} />
            {/* <Route path="/ShipPayment" element={<ShipBookingPreview />} /> */}
            {/* <Route path="/selectFerry" element={<ShipResults />} /> */}
            {/* <Route path="/travellerDetails" element={<TravellerDetails />} /> */}
            {/* <Route path="/ReviewBooking" element={<ReviewBooking />} /> */}
            <Route path="/ReviewBooking" element={<ReviewBookingShip />} />
            <Route path="/ReviewShip" element={<TravellerDetailsShip />} />

            <Route path="/CabContactForm" element={<CabContactForm />} />
            <Route path="/FlightContactForm" element={<FlightContactForm />} />
            <Route
              path="/ActivityContactForm"
              element={<ActivityContactForm />}
            />
            <Route path="/PgContactForm" element={<PgContactForm />} />
            <Route path="/pg-details" element={<PgCard />} />
            <Route path="/pg-payment" element={<PgPayment />} />
            <Route
              path="/TravelPackageContactForm"
              element={<TravelPackageContactForm />}
            />
            <Route path="/TrekContactForm" element={<TrekContactForm />} />

            {/* anik routes */}
            <Route
              path="/bus/schedules/:name"
              element={<BusSchedule></BusSchedule>}
            />

            <Route
              path="/bus/details/:id"
              element={<BusDetailsCard></BusDetailsCard>}
            ></Route>

            <Route
              path="bus/booking/seats"
              element={<BusBookingSeats></BusBookingSeats>}
            ></Route>

            <Route
              path="/bus/traveler/details"
              element={<BusTravellerDetails></BusTravellerDetails>}
            ></Route>

            <Route
              path="/bus/payment"
              element={<BusPayment></BusPayment>}
            ></Route>
            {/* anik routes */}

            {/* ---package routes */}
            <Route
              path="/package-details"
              element={<TravelPackageDetails />}
            ></Route>
            <Route path="/package-payment" element={<PackagePayment />}></Route>

            {/* anik water routes  */}
            <Route
              path="/water/tickets"
              element={<WaterBookingTickets></WaterBookingTickets>}
            ></Route>
            {/* anik water routes  */}
            <Route path="*" element={<Nav />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}
