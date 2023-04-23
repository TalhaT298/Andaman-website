import React from 'react';
import { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import Modal from '@mui/material/Modal';
import { Button, Divider, Paper } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import DoneIcon from '@mui/icons-material/CheckCircle';
import { useLocation, useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',  
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 3,
};

const ShipCover = (props) => {
  const { tripSummaries, setTripSummaries } = props

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const navigate = useNavigate()
  const location = useLocation();
  const { state } = location
  const { origin, destination, departDate, returnDate, travellerDetails, wayType } = state

  const [open, setOpen] = useState(false)
  const [showFlightInfo, setShowFlightInfo] = useState(false);

  //display images
  let shipImage = ""
  switch(props.shipName){
    case "Makruzz Pearl" : shipImage = "https://ocean.go2andaman.com/wp-content/uploads/2021/08/1DD36AC9-E6EA-4450-BDFA-8BD805AB81F0_4_5005_c.jpeg?compress=true&quality=90&w=600&dpr=1.3"
              break
    case "Green Ocean 1" : shipImage = "https://tourtravelandaman.com/images/GreenOcean.jpg"
              break
    case "Nautika Lite" : shipImage = "https://tourtravelandaman.com/images/Nautica.jpg"
              break
    default : shipImage = ""
  }

  //for two way
  const returnOrigin = destination
  const returnDestination = origin

  //select option (premium)
  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };  
  
  //proceed to traveller details
  const proceedHandler = () => {
    setOpen(false)  
    
    let object = {
      origin,
      destination,
      returnOrigin,
      returnDestination,
      departDate,
      returnDate,
      shipName: props.shipName,
      shipClass: selectedOption,
      departTime: props.departureTime,
      arrivalTime: props.arrivalTime,
      adultFare: 1450,
      infantFare: 0,
      travellerDetails
    }
    
    setTripSummaries(prev => [...prev, object])    
    
  }

  //navigate if
  if(wayType === "Two Way"){
    if(tripSummaries.length === 2){        
      navigate('/travellerDetails', { 
        state : {
          origin, 
          destination, 
          departDate ,
          shipName: props.shipName,
          shipClass: selectedOption,
          departTime: props.departureTime,
          arrivalTime: props.arrivalTime,
          travellerDetails,
          tripSummaries,
          adultFare: 1450,
          infantFare: 0
        } 
      })
    }
  }
  else{
    if(tripSummaries.length === 1){
    navigate('/travellerDetails', { 
      state : {
        origin, 
        destination, 
        departDate ,
        shipName: props.shipName,
        shipClass: selectedOption,
        departTime: props.departureTime,
        arrivalTime: props.arrivalTime,
        travellerDetails,
        tripSummaries,
        adultFare: 1450,
        infantFare: 0
      } 
    })
  }}  

  return (
    <>
      <div className="py-3 flex-col w-5/6 mx-auto my-auto hover:cursor-pointer ">
        <div
          onClick={() => {
            setShowFlightInfo(!showFlightInfo);
          }}
          className="flex-row rounded-lg bg-slate-900 w-auto py-8 h-auto drop-shadow-2xl shadow-black shadow-lg transition:origin-center hover:ease-in-out hover:scale-110 transition:duration-1000 transition-transform"
        >
          <div className="text-slate-200 flex items-center justify-between mx-auto py-auto px-4 text-center px-auto w-auto xs:flex-col xs:py-2 xs:gap-y-3">
            <span className="uppercase">{props.shipName}</span>

            <div className="flex gap-2">
              <div>
                <span>{props.departureTime}</span>
              </div>
              <span> - </span>
              <div>
                <span>{props.arrivalTime}</span>
              </div>
            </div>

            <span>{props.currentDestination} -&gt; {props.nextDestination}</span>
            
            <span>₹ {props.adultPrice}</span>
          </div>
        </div>

        {showFlightInfo && (
          <div className="mx-auto h-60 w-auto bg-slate-900 my-6 text-white px-auto rounded-lg">
            <div className="h-60 w-auto bg-slate-900 mx-auto px-auto rounded-lg">
              <div className="flex flex-col h-56 w-full justify-between mx-auto py-3 p-1 text-center px-auto">
                <div className="flex flex-row px-auto">
                  <div className="flex flex-col mx-auto py-1 w-36 px-auto">
                    <span className="text-lg uppercase font-thin py-1 my-auto">
                      {props.shipName}
                    </span>                    
                  </div>                  
                  <div className="flex flex-col mx-auto py-2 w-36">
                    <span className="text-xl uppercase font-bold my-auto">
                      ₹ {props.adultPrice}
                    </span>
                    {/* <span>₹ {props.childrenPrice}</span> */}
                  </div>
                </div>
                <div className="flex flex-row px-auto">
                  <div className="flex flex-col mx-auto py-2 w-32">
                    <span className="text-xl uppercase font-medium py-1 my-auto">
                      {props.departureTime}
                    </span>
                    <span className="text-sm uppercase font-thin py-1">
                      {props.currentDestination}
                    </span>
                  </div>
                
                  <div className="flex flex-col mx-auto py-2 w-32">
                    <span className="text-xl uppercase font-medium py-1 my-auto">
                      {props.arrivalTime}
                    </span>
                    <span className="text-sm uppercase font-thin py-1">
                      {props.nextDestination}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col mx-auto py-1 w-28">
                  <button className="pb-1 rounded-sm h-10 bg-gradient-to-br to-amber-400 from-pink-500 hover:bg-gradient-to-br hover:to-amber-600 hover:from-pink-600"
                    onClick={() => setOpen(true)}
                  >
                    Book Now
                  </button>
                  <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className='overflow-scroll'
                  >
                  <Paper sx={style} className='mt-3 sm:text-sm text-center w-[45%] xl:w-[60%] sm:w-full md:w-[80%]'>
                    <img
                      src={shipImage}
                      alt={props.shipName}
                      className="object-center mx-auto w-[80%]"
                    />

                    <div className=''>
                       <h1 className='my-2 font-semibold'>Select your Seat types</h1>
                      <div>
                        <label>
                          <input 
                            type="radio" 
                            value="Premium" 
                            checked={selectedOption === 'Premium'} 
                            onChange={handleOptionChange}                             
                          />
                           <Button variant='contained' sx={{fontSize:'0.8rem',ml:2}} disableRipple disableElevation disableFocusRipple >
                            ₹ 1,450 Premium
                           </Button>
                          {/* <div className='border border-black py-1 px-2 inline-block ml-2 text-white bg-green-500 text-[15px]'>
                          ₹ 1,450 Premium
                          </div>  */}
                        </label>
                      </div>
                    </div>

                  <div className='mt-5'>
                    <h1 className='my-2 flex justify-start items-center gap-1'>
                      <StarIcon fontSize='small' className='text-black' /> 
                      <h1 className='font-semibold'>Amenities -</h1> 
                      <h1 className='italic text-green-700 font-semibold'>{selectedOption ? selectedOption : "Premium"}</h1>
                    </h1>
                    
                    <Divider style={{ background: 'gray', borderBottomWidth: '1px' }}  />
                    
                    <div className='w-[94%] mt-3 mx-auto flex justify-between sm:text-[11px]'>
                      <div className='flex flex-col g-2 items-start'>
                      <h1 className='text-blue-800'><DoneIcon fontSize='small' /> High-Speed Ferry</h1>
                      <h1 className='text-blue-800'><DoneIcon fontSize='small'  /> Air Conditioned</h1>
                      <h1 className='text-blue-800'><DoneIcon fontSize='small'  /> Cafeteria</h1>
                      <h1 className='text-blue-800'><DoneIcon fontSize='small'  /> Premium Seating</h1>
                      <h1 className='text-gray-500'><DoneIcon fontSize='small'  /> Open Deck Access</h1>
                      </div>

                      <div className='flex flex-col g-2 items-start'>
                      <h1 className='text-gray-500'><DoneIcon fontSize='small' /> Extra Leg Space</h1>
                      <h1 className='text-gray-500'><DoneIcon fontSize='small' /> Exclusive Cabin</h1>
                      <h1 className='text-gray-500'><DoneIcon fontSize='small' /> Snacks Included</h1>
                      <h1 className='text-gray-500'><DoneIcon fontSize='small' /> Meal Included</h1>   
                      </div>                   
                    </div>
                  </div>

                  <Button variant='contained' sx={{fontSize:'0.8rem',mt:4}} onClick={proceedHandler} disabled={selectedOption === ""}>
                    Proceed with Premium
                  </Button>

                  </Paper>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ShipCover;
