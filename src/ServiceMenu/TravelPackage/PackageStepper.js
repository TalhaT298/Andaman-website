import {
  Button,
  Paper,
  Step,
  StepButton,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { LazyLoadImage } from "react-lazy-load-image-component";
const PackageStepper = (props) => {
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
    <div>
      {" "}
      <Stepper
        orientation="vertical"
        activeStep={activeStep}
        style={{ backgroundColor: "inherit" }}
      >
        <Step>
          <StepLabel>DAY 1</StepLabel>
          <StepContent>
            <div className="py-8 px-9 ml-10 h-80 relative bg-[#050505]">
              <div className="flex">
                <div className="text-white text-2xl w-[30vw]">
                  <h1 className="text-[40px] flex items-center mb-7 text-[#FF8682]">
                    <span>{props.fullDescription1.split(":")[0]} </span>
                    <HiArrowLongRight />
                    <span>
                      {" "}
                      <Button
                        size="large"
                        variant="contained"
                        color="secondary"
                        onClick={nextHandler}
                      >
                        Next
                      </Button>
                    </span>
                  </h1>
                  <p>{props.fullDescription1.split(":").slice(1).join(":")} </p>
                </div>
                <LazyLoadImage
                  className="h-96 w-[40%] airbnbml:w-2/3 airbnbml:mx-auto  sm:w-auto brightness-150 absolute object-cover right-[59px] bottom-0"
                  src={props.imageLink1 ? props.imageLink1 : "-"}
                  alt="."
                />
              </div>
            </div>
            {/* <Button
        disabled={activeStep === 0}
        onClick={backHandler}
        style={{ marginRight: "5px" }}
      >
        Back
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={nextHandler}
      >
        Next
      </Button> */}
          </StepContent>
        </Step>

        <Step>
          <StepLabel>DAY 2</StepLabel>
          <StepContent>
            <div className="py-8 px-9 ml-10 h-80 relative bg-[#050505]">
              <div className="flex">
                <div className="text-white text-2xl w-[30vw]">
                  <h1 className="text-[40px] flex items-center mb-7 text-[#FF8682]">
                    <span>
                      {" "}
                      <Button
                        size="large"
                        variant="contained"
                        color="secondary"
                        onClick={backHandler}
                      >
                        Prev
                      </Button>
                    </span>
                    <HiArrowLongLeft />

                    <span>{props.fullDescription2.split(":")[0]} </span>
                    <HiArrowLongRight />
                    <span>
                      {" "}
                      <Button
                        size="large"
                        variant="contained"
                        color="secondary"
                        onClick={nextHandler}
                      >
                        Next
                      </Button>
                    </span>
                  </h1>
                  <p>{props.fullDescription2.split(":").slice(1).join(":")} </p>
                </div>
                <LazyLoadImage
                  className="h-96 w-[40%] airbnbml:w-2/3 airbnbml:mx-auto  sm:w-auto  absolute object-cover right-[59px] bottom-0"
                  src={props.imageLink2 ? props.imageLink2 : "-"}
                  alt="."
                />
              </div>
            </div>
          </StepContent>
        </Step>

        <Step>
          <StepLabel>DAY 3</StepLabel>
          <StepContent>
            <div className="py-8 px-9 ml-10 h-80 relative bg-[#050505]">
              <div className="flex">
                <div className="text-white text-2xl w-[30vw]">
                  <h1 className="text-[40px] flex items-center mb-7 text-[#FF8682]">
                    <span>
                      {" "}
                      <Button
                        size="large"
                        variant="contained"
                        color="secondary"
                        onClick={backHandler}
                      >
                        Prev
                      </Button>
                    </span>
                    <HiArrowLongLeft />

                    <span>{props.fullDescription3.split(":")[0]} </span>
                    <HiArrowLongRight />
                    <span>
                      {" "}
                      <Button
                        size="large"
                        variant="contained"
                        color="secondary"
                        onClick={nextHandler}
                      >
                        Next
                      </Button>
                    </span>
                  </h1>
                  <p>{props.fullDescription3.split(":").slice(1).join(":")} </p>
                </div>
                <LazyLoadImage
                  className="h-96 w-[40%] airbnbml:w-2/3 airbnbml:mx-auto  sm:w-auto  absolute object-cover right-[59px] bottom-0"
                  src={props.imageLink3 ? props.imageLink3 : "-"}
                  alt="."
                />
              </div>
            </div>
          </StepContent>
        </Step>

        <Step>
          <StepLabel>DAY 4</StepLabel>
          <StepContent>
            <div className="py-8 px-9 ml-10 h-80 relative bg-[#050505]">
              <div className="flex">
                <div className="text-white text-2xl w-[30vw]">
                  <h1 className="text-[40px] flex items-center mb-7 text-[#FF8682]">
                    <span>
                      {" "}
                      <Button
                        size="large"
                        variant="contained"
                        color="secondary"
                        onClick={backHandler}
                      >
                        Prev
                      </Button>
                    </span>
                    <HiArrowLongLeft />

                    <span>{props.fullDescription4.split(":")[0]} </span>
                    <HiArrowLongRight />
                    <span>
                      {" "}
                      <Button
                        size="large"
                        variant="contained"
                        color="secondary"
                        onClick={nextHandler}
                      >
                        Next
                      </Button>
                    </span>
                  </h1>
                  <p>{props.fullDescription4.split(":").slice(1).join(":")} </p>
                </div>
                <LazyLoadImage
                  className="h-96 w-[40%] airbnbml:w-2/3 airbnbml:mx-auto  sm:w-auto  absolute object-cover right-[59px] bottom-0"
                  src={props.imageLink4 ? props.imageLink4 : "-"}
                  alt="."
                />
              </div>
            </div>
          </StepContent>
        </Step>

        {props.fullDescription5 ? (
          <Step>
            <StepLabel>DAY 5</StepLabel>
            <StepContent>
              <div className="py-8 px-9 ml-10 h-80 relative bg-[#050505]">
                <div className="flex">
                  <div className="text-white text-2xl w-[30vw]">
                    <h1 className="text-[40px] flex items-center mb-7 text-[#FF8682]">
                      <span>
                        {" "}
                        <Button
                          size="large"
                          variant="contained"
                          color="secondary"
                          onClick={backHandler}
                        >
                          Prev
                        </Button>
                      </span>
                      <HiArrowLongLeft />

                      <span>{props.fullDescription5.split(":")[0]} </span>
                      <HiArrowLongRight />
                      <span>
                        {" "}
                        <Button
                          size="large"
                          variant="contained"
                          color="secondary"
                          onClick={nextHandler}
                        >
                          Next
                        </Button>
                      </span>
                    </h1>
                    <p>
                      {props.fullDescription5.split(":").slice(1).join(":")}{" "}
                    </p>
                  </div>
                  <LazyLoadImage
                    className="h-96 w-[40%] airbnbml:w-2/3 airbnbml:mx-auto  sm:w-auto  absolute object-cover right-[59px] bottom-0"
                    src={props.imageLink5 ? props.imageLink5 : "-"}
                    alt="."
                  />
                </div>
              </div>
            </StepContent>
          </Step>
        ) : (
          <div></div>
        )}

        {props.fullDescription6 ? (
          <Step>
            <StepLabel>DAY 6</StepLabel>
            <StepContent>
              <div className="py-8 px-9 ml-10 h-80 relative bg-[#050505]">
                <div className="flex">
                  <div className="text-white text-2xl w-[30vw]">
                    <h1 className="text-[40px] flex items-center mb-7 text-[#FF8682]">
                      <span>
                        {" "}
                        <Button
                          size="large"
                          variant="contained"
                          color="secondary"
                          onClick={backHandler}
                        >
                          Prev
                        </Button>
                      </span>
                      <HiArrowLongLeft />

                      <span>{props.fullDescription6.split(":")[0]} </span>
                      <HiArrowLongRight />
                      <span>
                        {" "}
                        <Button
                          size="large"
                          variant="contained"
                          color="secondary"
                          onClick={nextHandler}
                        >
                          Next
                        </Button>
                      </span>
                    </h1>
                    <p>
                      {props.fullDescription6.split(":").slice(1).join(":")}{" "}
                    </p>
                  </div>
                  <LazyLoadImage
                    className="h-96 w-[40%] airbnbml:w-2/3 airbnbml:mx-auto  sm:w-auto  absolute object-cover right-[59px] bottom-0"
                    src={props.imageLink6 ? props.imageLink6 : "-"}
                    alt="."
                  />
                </div>
              </div>
            </StepContent>
          </Step>
        ) : (
          <div></div>
        )}

        {props.fullDescription7 ? (
          <Step>
            <StepLabel>DAY 7</StepLabel>
            <StepContent>
              <div className="py-8 px-9 ml-10 h-80 relative bg-[#050505]">
                <div className="flex">
                  <div className="text-white text-2xl w-[30vw]">
                    <h1 className="text-[40px] flex items-center mb-7 text-[#FF8682]">
                      <span>
                        {" "}
                        <Button
                          size="large"
                          variant="contained"
                          color="secondary"
                          onClick={backHandler}
                        >
                          Prev
                        </Button>
                      </span>
                      <HiArrowLongLeft />

                      <span>{props.fullDescription7.split(":")[0]} </span>
                      <HiArrowLongRight />
                      <span>
                        {" "}
                        <Button
                          size="large"
                          variant="contained"
                          color="secondary"
                          onClick={nextHandler}
                        >
                          Next
                        </Button>
                      </span>
                    </h1>
                    <p>
                      {props.fullDescription7.split(":").slice(1).join(":")}{" "}
                    </p>
                  </div>
                  <LazyLoadImage
                    className="h-96 w-[40%] airbnbml:w-2/3 airbnbml:mx-auto  sm:w-auto  absolute object-cover right-[59px] bottom-0"
                    src={props.imageLink7 ? props.imageLink7 : "-"}
                    alt="."
                  />
                </div>
              </div>
            </StepContent>
          </Step>
        ) : (
          <div></div>
        )}

        {props.fullDescription8 ? (
          <Step>
            <StepLabel>DAY 8</StepLabel>
            <StepContent>
              <div className="py-8 px-9 ml-10 h-80 relative bg-[#050505]">
                <div className="flex">
                  <div className="text-white text-2xl w-[30vw]">
                    <h1 className="text-[40px] flex items-center mb-7 text-[#FF8682]">
                      <span>
                        {" "}
                        <Button
                          size="large"
                          variant="contained"
                          color="secondary"
                          onClick={backHandler}
                        >
                          Prev
                        </Button>
                      </span>
                      <HiArrowLongLeft />

                      <span>{props.fullDescription8.split(":")[0]} </span>
                      <HiArrowLongRight />
                      <span>
                        {" "}
                        <Button
                          size="large"
                          variant="contained"
                          color="secondary"
                          onClick={nextHandler}
                        >
                          Next
                        </Button>
                      </span>
                    </h1>
                    <p>
                      {props.fullDescription8.split(":").slice(1).join(":")}{" "}
                    </p>
                  </div>
                  <LazyLoadImage
                    className="h-96 w-[40%] airbnbml:w-2/3 airbnbml:mx-auto  sm:w-auto  absolute object-cover right-[59px] bottom-0"
                    src={props.imageLink8 ? props.imageLink8 : "-"}
                    alt="."
                  />
                </div>
              </div>
            </StepContent>
          </Step>
        ) : (
          <div></div>
        )}

        {props.fullDescription9 ? (
          <Step>
            <StepLabel>DAY 9</StepLabel>
            <StepContent>
              <div className="py-8 px-9 ml-10 h-80 relative bg-[#050505]">
                <div className="flex">
                  <div className="text-white text-2xl w-[30vw]">
                    <h1 className="text-[40px] flex items-center mb-7 text-[#FF8682]">
                      <span>
                        {" "}
                        <Button
                          size="large"
                          variant="contained"
                          color="secondary"
                          onClick={backHandler}
                        >
                          Prev
                        </Button>
                      </span>
                      <HiArrowLongLeft />

                      <span>{props.fullDescription6.split(":")[0]} </span>
                      <HiArrowLongRight />
                      <span>
                        {" "}
                        <Button
                          size="large"
                          variant="contained"
                          color="secondary"
                          onClick={nextHandler}
                        >
                          Next
                        </Button>
                      </span>
                    </h1>
                    <p>
                      {props.fullDescription9.split(":").slice(1).join(":")}{" "}
                    </p>
                  </div>
                  <LazyLoadImage
                    className="h-96 w-[40%] airbnbml:w-2/3 airbnbml:mx-auto  sm:w-auto  absolute object-cover right-[59px] bottom-0"
                    src={props.imageLink9 ? props.imageLink9 : "-"}
                    alt="."
                  />
                </div>
              </div>
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
                  src={props.imageLink10 ? props.imageLink10 : "-"}
                  alt="."
                />
              </div>
              <Button style={{ marginRight: "5px" }} onClick={backHandler}>
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={nextHandler}>
                Next
              </Button>
            </StepContent>
          </Step>
        ) : (
          <div></div>
        )}

        {props.fullDescription11 ? (
          <Step>
            <StepLabel>DAY 6</StepLabel>
            <StepContent>
              <div className="py-8 px-9 ml-10 h-80 relative bg-[#050505]">
                <div className="flex">
                  <div className="text-white text-2xl w-[30vw]">
                    <h1 className="text-[40px] flex items-center mb-7 text-[#FF8682]">
                      <span>
                        {" "}
                        <Button
                          size="large"
                          variant="contained"
                          color="secondary"
                          onClick={backHandler}
                        >
                          Prev
                        </Button>
                      </span>
                      <HiArrowLongLeft />

                      <span>{props.fullDescription10.split(":")[0]} </span>
                      <HiArrowLongRight />
                      <span>
                        {" "}
                        <Button
                          size="large"
                          variant="contained"
                          color="secondary"
                          onClick={nextHandler}
                        >
                          Next
                        </Button>
                      </span>
                    </h1>
                    <p>
                      {props.fullDescription10.split(":").slice(1).join(":")}{" "}
                    </p>
                  </div>
                  <LazyLoadImage
                    className="h-96 w-[40%] airbnbml:w-2/3 airbnbml:mx-auto  sm:w-auto  absolute object-cover right-[59px] bottom-0"
                    src={props.imageLink10 ? props.imageLink10 : "-"}
                    alt="."
                  />
                </div>
              </div>
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
            padding: "10px",
            marginLeft: "10px",
            backgroundColor: "inherit",
          }}
        >
          <Typography>Your Journey Completes Here</Typography>
          <Button
            onClick={handleReset}
            style={{ marginTop: "5px" }}
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
        style={{ marginTop: "20px", backgroundColor: "inherit" }}
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
              Exclusive Air – conditioned Car for sight seeing and arrival and
              departure transfers
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
              {" "}
              Any additional expenses incurred due to any technical fault
            </li>
            <li>Expenses of personal nature such as drinks & late check-out</li>
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
    </div>
  );
};

export default PackageStepper;
