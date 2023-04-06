import { Link } from 'react-router-dom';

import KeyFeatues from './KeyFeatues';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { faShower } from '@fortawesome/free-solid-svg-icons';
import classes from './SingleHotel.module.css';
import { datas } from '../../../Data/Hotel-Section/HotelsData/hotelsData';
import { useParams } from 'react-router-dom';
const Features = () => {

  const { id } = useParams();
  console.log(id);
  console.log(datas);

  // const {Manager,Beds,Bathrooms,Price,stay,Check_in_Time,Check_out_Time, Guests } = datas[id-1];  // Alternative method for fetching data from  datas section
  const {
    Manager,
    Beds,
    Bathrooms,
    Price,
    stay,
    Check_in_Time,
    Check_out_Time,
    Guests,
  } = datas.find((hotel) => hotel.id === parseInt(id));
  // find the corresponding data object based on the "id" using find

  return (
    <>
      <div className="flex flex-row  lg:flex-col items-center lg:pt-8">
        <div className="pl-2" style={{ fontFamily: "'Inter', sans-serif" }}>
          <h2 className="font-extrabold text-2xl lg:text-md text-black md:text-[20px]">
            Entire property exclusively managed by
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              {' '}
              {Manager}
            </span>
          </h2>
          <div className="pt-2 font-[600] flex flex-col">
            <div style={{ paddingBottom: '10px' }}>
              <FontAwesomeIcon icon={faPerson} size="lg" />
              <span style={{ paddingLeft: '17px' }}>{Guests}</span>
            </div>
            <div style={{ paddingBottom: '10px' }}>
              <FontAwesomeIcon icon={faBed} />
              <span style={{ paddingLeft: '10px' }}>{Beds}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faShower} />
              <span style={{ paddingLeft: '10px' }}>{Bathrooms}</span>
            </div>
          </div>
        </div>
        {/* Pricing Section */}
        <div
          className={`${classes.pricing} ml-auto text-center xs:pl-[1.8px] `}
        >
          <div className="lg:pt-10 lg:w-[365px]  relative right-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-xl border border-gray-300 p-6 md:p-6 lg:p-8">
              <div className="font-bold text-lg mb-4">Pricing</div>
              <div className="text-gray-700 mb-4">
                <div className="flex justify-between">
                  <div>Per night:</div>
                  <div className="font-bold">{Price}</div>
                </div>
              </div>
              <div className="text-gray-700 mb-4">
                <div className="flex justify-between">
                  <div>Minimum stay:</div>
                  <div className="font-bold">{stay}</div>
                </div>
              </div>
              <div className="text-gray-700 mb-4">
                <div className="flex justify-between">
                  <div>Check-in:</div>
                  <div className="font-bold ">{Check_in_Time}</div>
                </div>
              </div>
              <div className="text-gray-700 mb-4">
                <div className="flex justify-between">
                  <div>Check-out:</div>
                  <div className="font-bold">{Check_out_Time}</div>
                </div>
              </div>
              <div className="pt-3">
                <Link to="/ContactForm" target="_blank">
                  <button
                    type="button"
                    style={{ fontFamily: 'Glook' }}
                    className="bg-indigo-600 shadow-2xl hover:bg-indigo-500
                  text-white text-[22px] tracking-wider font-bold rounded-full
                  p-3 w-48"
                  >
                    {' '}
                    Reserve now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <KeyFeatues />
    </>
  );
};

export default Features;
