import React, { useState } from 'react';
import govt from '../../images/bannerbus.png'
import { TbBus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom';
import './busBanner.css'
import BusSearch from '../BusSearch/BusSearch';

const BusBanner = () => {
  const [show, setShow] = useState(true);
  const [bus, setBus] = useState(null);
  // console.log(bus)

  const handleSelectedBus = (select) => {
    setShow(!show);
    setBus(select);
  };

  
    const navigate = useNavigate();
    const handleNaviateSchedule = (route) => {
        navigate(`/bus/schedules/${route}`)
    }

    const buses = [
        { title: 'Government Bus', subTitle: 'Search Goverment STS Inter-Island Seater Bus Schedule', buttonTitle: 'Show bus', schedule: 'Government-Bus' },
        { title: 'Private Bus', subTitle: 'Search Private Inter-Island Seater Bus Schedule', buttonTitle: 'Show bus', schedule: 'Private-Bus' }
    ]
    return (
        <div className='my-20'>
            <h3 className='font-montserrat text-2xl text-center font-bold mb-5'>Inter Island Bus Service</h3>
            <div className={`w-full max-w-[1232px] h-[550px] flex items-center justify-between mx-auto gap-6 ${show ? 'block' : 'hidden'}`
            }>

                {
                    buses?.map((bus) => <div
                        key={bus?.title}
                        className='w-full max-w-[604px] h-[550px] relative rounded-[20px] overflow-hidden mx-auto'>
                        <button
                            onClick={() => handleNaviateSchedule(bus?.schedule)}
                            className='w-full max-w-[300px] text-xl font-montserrat text-[#112211] bg-red-500 h-12 ml-5 rounded-md mb-5'>
                            {bus?.title} Schedule
                        </button>
                        {/* <Link className='w-full max-w-[300px] text-xl font-montserrat text-[#112211] bg-red-500 h-12' to={`/bus/schedules/${bus?.schedule}`}>
                            {bus?.title} Schedule</Link> */}
                        {/* <p className='text-center mb-5 text-xl text-[#112211] font-montserrat'>
                            Check The Schedule Of {bus?.title}
                            <Link className=' font-montserrat text-xl underline text-blue-600 ml-2' to={`/bus/schedules/${bus?.schedule}`}>
                                Click Here</Link>
                        </p> */}

                {/* navigate button  */}
                <button
                  onClick={() => handleSelectedBus("government")}
                  className="w-[122px] h-12 bg-[#FF8682] rounded font-montserrat font-medium text-sm text-[#112211] leading-4 flex items-center justify-center"
                >
                  <TbBus className="text-base mr-[5px] text-[#112211]"></TbBus>
                  {bus?.buttonTitle}
                </button>
              </div>
            </div>
            {
                !show && <BusSearch bus={bus}></BusSearch>
            }
        </div>
    );
};

export default BusBanner;
