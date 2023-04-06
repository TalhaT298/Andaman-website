import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// import TravelPackagePage from './TravelPackagePage';
import {
  Button,
  Paper,
  Step,
  StepButton,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from '@material-ui/core';
import Modal from 'react-modal';

import { Link } from 'react-router-dom';

const TravelPackageCover = (props) => {

  const [openTripDetails, setOpenTripDetails] = useState(false);

  //Stepper
  const [activeStep, setActiveStep] = useState(0);
  const [activeStepFooter, setActiveStepFooter] = useState(4);

  //getting no of days
  let packageLength = 0;
  for (let key in props) {
    if (key === `fullDescription${packageLength + 1}`) packageLength++;
  }

  const backHandler = () => {
    setActiveStep((prev) => prev - 1);
  };

  const nextHandler = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleActiveFooter = (step) => {
    setActiveStepFooter(step);
  };

  return (
    <div className="m-2 py-3 p-2 flex flex-col w-88">
      <div
        onClick={() => {
          setOpenTripDetails(!openTripDetails);
        }}
        className="max-w-80 items:center"
      >
        <LazyLoadImage
          src={props.imageLink}
          alt={props.name}
          className="flex rounded-md w-88 h-64 transition:origin-center hover:ease-in-out hover:scale-110 transition:duration-1000 transition-transform"
        />
      </div>
      <div className="flex flex-col py-3 p-1 gap-1">
        <div className="flex justify-between">
          <p className="text-sm font-bold text-start text-slate-900">
            {props.name}
          </p>
          <p className="text-sm font-semibold text-end">{props.duration}</p>
        </div>
        <div className="flex justify-between mx-auto">
          <p className="text-sm font-semibold text-center">
            {props.description}
          </p>
        </div>
      </div>
      {/* <TravelPackagePage2 /> */}

      <Modal
        isOpen={openTripDetails}
        onRequestClose={() => setOpenTripDetails(false)}
        overlayClassName="" // modal-overlay bg-black opacity
        className="" // modal-content w-auto h-auto
      >
        <div className="flex flex-col w-auto h-auto font-Nunito_Sans bg-slate-50 shadow-2xl shadow-slate-200 my-10">
          <div className="mx-auto">
            <span className="text-3xl font-semibold text-slate-900">
              Package Details
            </span>
          </div>
          <div className="flex flex-row justify-between py-3 mx-4">
            <span className="text-2xl text- font-semibold text-black">
              {props.name}
            </span>
            <button
              className="px-2 h-10 font-medium font-Nunito_Sans text-slate-400 hover:text-slate-800 text-2xl border-solid border-2"
              onClick={() => setOpenTripDetails(false)}
            >
              X
            </button>
          </div>
          <Link to="/TravelPackageContactForm" target="_blank">
            <div className="flex flex-row pb-2">
              <button className="mx-auto px-2 h-10 font-semibold font-Nunito_Sans text-white bg-gradient-to-br rounded-md to-amber-400 from-pink-500 hover:bg-gradient-to-br hover:to-amber-600 hover:from-pink-600 hover:text-white">
                Book Now
              </button>
            </div>
          </Link>

          <Stepper
            orientation="vertical"
            activeStep={activeStep}
            style={{ backgroundColor: 'inherit' }}
          >
            <Step>
              <StepLabel>DAY 1</StepLabel>
              <StepContent>
                <div className="py-2">
                  <span className="text-slate-700 text-base">
                    {props.fullDescription1}
                  </span>
                  <LazyLoadImage
                    className="h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-52 sm:w-auto"
                    src={props.imageLink1 ? props.imageLink1 : '-'}
                    alt="."
                  />
                </div>
                <Button
                  disabled={activeStep === 0}
                  onClick={backHandler}
                  style={{ marginRight: '5px' }}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={nextHandler}
                >
                  Next
                </Button>
              </StepContent>
            </Step>

            <Step>
              <StepLabel>DAY 2</StepLabel>
              <StepContent>
                <div className="py-3">
                  <span className="text-slate-700 text-base">
                    {props.fullDescription2}
                  </span>
                  <LazyLoadImage
                    className="h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40"
                    src={props.imageLink2 ? props.imageLink2 : '-'}
                    alt="."
                  />
                </div>
                <Button style={{ marginRight: '5px' }} onClick={backHandler}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={nextHandler}
                >
                  Next
                </Button>
              </StepContent>
            </Step>

            <Step>
              <StepLabel>DAY 3</StepLabel>
              <StepContent>
                <div className="py-3">
                  <span className="text-slate-700 text-base">
                    {props.fullDescription3}
                  </span>
                  <LazyLoadImage
                    className="h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40"
                    src={props.imageLink3 ? props.imageLink3 : '-'}
                    alt="."
                  />
                </div>
                <Button style={{ marginRight: '5px' }} onClick={backHandler}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={nextHandler}
                >
                  Next
                </Button>
              </StepContent>
            </Step>

            <Step>
              <StepLabel>DAY 4</StepLabel>
              <StepContent>
                <div className="py-3">
                  <span className="text-slate-700 text-base">
                    {props.fullDescription4}
                  </span>
                  <LazyLoadImage
                    className="h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40"
                    src={props.imageLink4 ? props.imageLink4 : '-'}
                    alt="."
                  />
                </div>
                <Button style={{ marginRight: '5px' }} onClick={backHandler}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={nextHandler}
                >
                  Next
                </Button>
              </StepContent>
            </Step>

            {props.fullDescription5 ? (
              <Step>
                <StepLabel>DAY 5</StepLabel>
                <StepContent>
                  <div className="py-3">
                    <span className="text-slate-700 text-base">
                      {props.fullDescription5}
                    </span>
                    <LazyLoadImage
                      className="h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40"
                      src={props.imageLink5 ? props.imageLink5 : '-'}
                      alt="."
                    />
                  </div>
                  <Button style={{ marginRight: '5px' }} onClick={backHandler}>
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={nextHandler}
                  >
                    Next
                  </Button>
                </StepContent>
              </Step>
            ) : (
              <div></div>
            )}

            {props.fullDescription6 ? (
              <Step>
                <StepLabel>DAY 6</StepLabel>
                <StepContent>
                  <div className="py-3">
                    <span className="text-slate-700 text-base">
                      {props.fullDescription6}
                    </span>
                    <LazyLoadImage
                      className="h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40"
                      src={props.imageLink6 ? props.imageLink6 : '-'}
                      alt="."
                    />
                  </div>
                  <Button style={{ marginRight: '5px' }} onClick={backHandler}>
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={nextHandler}
                  >
                    Next
                  </Button>
                </StepContent>
              </Step>
            ) : (
              <div></div>
            )}

            {props.fullDescription7 ? (
              <Step>
                <StepLabel>DAY 7</StepLabel>
                <StepContent>
                  <div className="py-3">
                    <span className="text-slate-700 text-base">
                      {props.fullDescription7}
                    </span>
                    <LazyLoadImage
                      className="h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40"
                      src={props.imageLink7 ? props.imageLink7 : '-'}
                      alt="."
                    />
                  </div>
                  <Button style={{ marginRight: '5px' }} onClick={backHandler}>
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={nextHandler}
                  >
                    Next
                  </Button>
                </StepContent>
              </Step>
            ) : (
              <div></div>
            )}

            {props.fullDescription8 ? (
              <Step>
                <StepLabel>DAY 8</StepLabel>
                <StepContent>
                  <div className="py-3">
                    <span className="text-slate-700 text-base">
                      {props.fullDescription8}
                    </span>
                    <LazyLoadImage
                      className="h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40"
                      src={props.imageLink8 ? props.imageLink8 : '-'}
                      alt="."
                    />
                  </div>
                  <Button style={{ marginRight: '5px' }} onClick={backHandler}>
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={nextHandler}
                  >
                    Next
                  </Button>
                </StepContent>
              </Step>
            ) : (
              <div></div>
            )}

            {props.fullDescription9 ? (
              <Step>
                <StepLabel>DAY 9</StepLabel>
                <StepContent>
                  <div className="py-3">
                    <span className="text-slate-700 text-base">
                      {props.fullDescription9}
                    </span>
                    <LazyLoadImage
                      className="h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40"
                      src={props.imageLink9 ? props.imageLink9 : '-'}
                      alt="."
                    />
                  </div>
                  <Button style={{ marginRight: '5px' }} onClick={backHandler}>
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={nextHandler}
                  >
                    Next
                  </Button>
                </StepContent>
              </Step>
            ) : (
              <div></div>
            )}

            {props.fullDescription10 ? (
              <Step>
                <StepLabel>DAY 10</StepLabel>
                <StepContent>
                  <div className="py-3">
                    <span className="text-slate-700 text-base">
                      {props.fullDescription10}
                    </span>
                    <LazyLoadImage
                      className="h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40"
                      src={props.imageLink10 ? props.imageLink10 : '-'}
                      alt="."
                    />
                  </div>
                  <Button style={{ marginRight: '5px' }} onClick={backHandler}>
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={nextHandler}
                  >
                    Next
                  </Button>
                </StepContent>
              </Step>
            ) : (
              <div></div>
            )}

            {props.fullDescription11 ? (
              <Step>
                <StepLabel>DAY 11</StepLabel>
                <StepContent>
                  <div className="py-3">
                    <span className="text-slate-700 text-base">
                      {props.fullDescription11}
                    </span>
                    <LazyLoadImage
                      className="h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40"
                      src={props.imageLink11 ? props.imageLink11 : '-'}
                      alt="."
                    />
                  </div>
                  <Button style={{ marginRight: '5px' }} onClick={backHandler}>
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={nextHandler}
                  >
                    Next
                  </Button>
                </StepContent>
              </Step>
            ) : (
              <div></div>
            )}
          </Stepper>

          {activeStep === packageLength && (
            <Paper
              square
              elevation={0}
              style={{
                padding: '10px',
                marginLeft: '10px',
                backgroundColor: 'inherit',
              }}
            >
              <Typography>Your Journey Completes Here</Typography>
              <Button
                onClick={handleReset}
                style={{ marginTop: '5px' }}
                color="primary"
              >
                Get Back
              </Button>
            </Paper>
          )}

          <Stepper
            nonLinear
            orientation="vertical"
            activeStep={activeStepFooter}
            style={{ marginTop: '20px', backgroundColor: 'inherit' }}
          >
            <Step>
              <StepButton onClick={() => handleActiveFooter(0)}>
                INCLUSIVES
              </StepButton>
              <StepContent>
                <li>Accommodation as per the class chosen</li>
                <li>Breakfast for 5 occasions during the stay</li>
                <li>Meet and Greet services</li>
                <li>
                  Exclusive Air – conditioned Car for sight seeing and arrival
                  and departure transfers
                </li>
                <li>
                  Entry tickets / Entry permits / Boat tickets / Ferry tickets
                  wherever required
                </li>
                <li>Parking Charges</li>
              </StepContent>
            </Step>

            <Step>
              <StepButton onClick={() => handleActiveFooter(1)}>
                EXCLUSIVES
              </StepButton>
              <StepContent>
                <li>Charges for early check-in & late check-out</li>
                <li>Tips and porter charges</li>
                <li>Lunch and Dinner</li>
                <li>Any items or services not specified in the cost</li>
                <li>Any Travel Insurance Premium</li>
                <li>
                  {' '}
                  Any additional expenses incurred due to any technical fault
                </li>
                <li>
                  Expenses of personal nature such as drinks & late check-out
                </li>
              </StepContent>
            </Step>

            <Step>
              <StepButton onClick={() => handleActiveFooter(2)}>
                CANCELLATION
              </StepButton>
              <StepContent>
                <li>Before 31 days of arrival – 95% will be refunded</li>
                <li>Between 16 – 30 days of arrival – 50% will be refunded</li>
                <li>Between 8 – 15 days – 25% will be refunded</li>
                <li>Less than 7 days of arrival – No refund</li>
                <li>
                  No refund for the bookings made for 15 December to 15 January
                </li>
              </StepContent>
            </Step>
          </Stepper>

          <div className="mx-auto pt-10 pb-7">
            <button
              className="h-10 w-20 rounded-lg font-Nunito_Sans uppercase mx-auto border-2 bg-rose-600 text-slate-100 hover:bg-gradient-to-br hover:from-red-600 hover:via-red-500 hover:to-yellow-400"
              onClick={() => setOpenTripDetails(false)}
            >
              Back
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TravelPackageCover;
