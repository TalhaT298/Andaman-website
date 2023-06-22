import {
  Button,
  Paper,
  Step,
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

  return (
    <div>
      {" "}
      <Stepper
        orientation="vertical"
        activeStep={activeStep}
        style={{ backgroundColor: "inherit" }}
      >
        <Step>
          <StepLabel onClick={() => setActiveStep(0)}>
            <span className="text-lg airbnbml:text-xl font-bold">DAY 1</span>
          </StepLabel>
          <StepContent>
            <div className="py-8 ms:py-3 ms:px-4 px-9 ml-10 h-80 airbnbml:h-auto relative bg-[#050505]">
              <div className="flex">
                <div className=" text-white text-lg airbnbml:w-full w-[30vw]">
                  <h1 className="airbnbml:hidden airbnbml:hidden text-[24px] flex items-center mb-7 text-[#FF8682]">
                    <span>DAY 1 </span>
                    <HiArrowLongRight />
                    <span>
                      {" "}
                      <Button
                        size="small"
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
                  className="h-96 w-[40%] airbnbml:w-2/3 airbnbml:mx-auto  sm:w-auto brightness-150 absolute object-cover right-[59px] bottom-0 airbnbml:hidden"
                  src={props.imageLink1 ? props.imageLink1 : "-"}
                  alt="."
                />
              </div>
            </div>
          </StepContent>
        </Step>

        <Step>
          <StepLabel onClick={() => setActiveStep(1)}>
            <span className="text-lg airbnbml:text-xl font-bold">DAY 2</span>{" "}
          </StepLabel>
          <StepContent>
            <div className="ms:py-3 ms:px-4 py-8 px-9 ml-10 h-80 airbnbml:h-auto relative bg-[#050505]">
              <div className="flex">
                <div className="text-white text-lg airbnbml:w-full w-[30vw]">
                  <h1 className="airbnbml:hidden text-[24px] flex items-center mb-7 text-[#FF8682]">
                    <span>
                      {" "}
                      <Button
                        size="small"
                        variant="contained"
                        color="secondary"
                        onClick={backHandler}
                      >
                        Prev
                      </Button>
                    </span>
                    <HiArrowLongLeft />

                    <span>DAY 2</span>
                    <HiArrowLongRight />
                    <span>
                      {" "}
                      <Button
                        size="small"
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
                  className="h-96 w-[40%] airbnbml:w-2/3 airbnbml:mx-auto  sm:w-auto  absolute object-cover right-[59px] bottom-0 airbnbml:hidden"
                  src={props.imageLink2 ? props.imageLink2 : "-"}
                  alt="."
                />
              </div>
            </div>
          </StepContent>
        </Step>

        <Step>
          <StepLabel onClick={() => setActiveStep(2)}>
            <span className="text-lg airbnbml:text-xl font-bold">DAY 3</span>{" "}
          </StepLabel>
          <StepContent>
            <div className="py-8 px-9 ml-10 h-80 relative bg-[#050505] airbnbml:h-auto ms:py-3 ms:px-4">
              <div className="flex">
                <div className="text-white text-lg w-[30vw] airbnbml:w-full">
                  <h1 className="airbnbml:hidden text-[24px] flex items-center mb-7 text-[#FF8682]">
                    <span>
                      {" "}
                      <Button
                        size="small"
                        variant="contained"
                        color="secondary"
                        onClick={backHandler}
                      >
                        Prev
                      </Button>
                    </span>
                    <HiArrowLongLeft />

                    <span>DAY 3</span>
                    <HiArrowLongRight />
                    <span>
                      {" "}
                      <Button
                        size="small"
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
                  className="h-96 w-[40%] airbnbml:w-2/3 airbnbml:mx-auto  sm:w-auto  absolute object-cover right-[59px] bottom-0 airbnbml:hidden"
                  src={props.imageLink3 ? props.imageLink3 : "-"}
                  alt="."
                />
              </div>
            </div>
          </StepContent>
        </Step>

        <Step>
          <StepLabel onClick={() => setActiveStep(3)}>
            <span className="text-lg airbnbml:text-xl font-bold">DAY 4</span>{" "}
          </StepLabel>
          <StepContent>
            <div className="py-8 px-9 ml-10 h-80 relative bg-[#050505] airbnbml:h-auto ms:py-3 ms:px-4">
              <div className="flex">
                <div className="text-white text-lg w-[30vw] airbnbml:w-full">
                  <h1 className="airbnbml:hidden text-[24px] flex items-center mb-7 text-[#FF8682]">
                    <span>
                      {" "}
                      <Button
                        size="small"
                        variant="contained"
                        color="secondary"
                        onClick={backHandler}
                      >
                        Prev
                      </Button>
                    </span>
                    <HiArrowLongLeft />

                    <span>DAY 4</span>
                    <HiArrowLongRight />
                    <span>
                      {" "}
                      <Button
                        size="small"
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
                  className="h-96 w-[40%] airbnbml:w-2/3 airbnbml:mx-auto  sm:w-auto  absolute object-cover right-[59px] bottom-0 airbnbml:hidden"
                  src={props.imageLink4 ? props.imageLink4 : "-"}
                  alt="."
                />
              </div>
            </div>
          </StepContent>
        </Step>

        {props.fullDescription5 ? (
          <Step>
            <StepLabel onClick={() => setActiveStep(4)}>
              <span className="text-lg airbnbml:text-xl font-bold">DAY 5</span>{" "}
            </StepLabel>
            <StepContent>
              <div className="py-8 px-9 ml-10 h-80 relative bg-[#050505] airbnbml:h-auto ms:py-3 ms:px-4">
                <div className="flex">
                  <div className="text-white text-lg w-[30vw] airbnbml:w-full">
                    <h1 className="airbnbml:hidden text-[24px] flex items-center mb-7 text-[#FF8682]">
                      <span>
                        {" "}
                        <Button
                          size="small"
                          variant="contained"
                          color="secondary"
                          onClick={backHandler}
                        >
                          Prev
                        </Button>
                      </span>
                      <HiArrowLongLeft />

                      <span>DAY 5</span>
                      <HiArrowLongRight />
                      <span>
                        {" "}
                        <Button
                          size="small"
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
                    className="h-96 w-[40%] airbnbml:w-2/3 airbnbml:mx-auto  sm:w-auto  absolute object-cover right-[59px] bottom-0 airbnbml:hidden"
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
            <StepLabel onClick={() => setActiveStep(5)}>
              <span className="text-lg airbnbml:text-xl font-bold">DAY 6</span>{" "}
            </StepLabel>
            <StepContent>
              <div className="py-8 px-9 ml-10 h-80 relative bg-[#050505] airbnbml:h-auto ms:py-3 ms:px-4">
                <div className="flex">
                  <div className="text-white text-lg w-[30vw] airbnbml:w-full">
                    <h1 className="airbnbml:hidden text-[24px] flex items-center mb-7 text-[#FF8682]">
                      <span>
                        {" "}
                        <Button
                          size="small"
                          variant="contained"
                          color="secondary"
                          onClick={backHandler}
                        >
                          Prev
                        </Button>
                      </span>
                      <HiArrowLongLeft />

                      <span>DAY 6</span>
                      <HiArrowLongRight />
                      <span>
                        {" "}
                        <Button
                          size="small"
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
                    className="h-96 w-[40%] airbnbml:w-2/3 airbnbml:mx-auto  sm:w-auto  absolute object-cover right-[59px] bottom-0 airbnbml:hidden"
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
            <StepLabel onClick={() => setActiveStep(6)}>
              <span className="text-lg airbnbml:text-xl font-bold">DAY 7</span>{" "}
            </StepLabel>
            <StepContent>
              <div className="py-8 px-9 ml-10 h-80 relative bg-[#050505] airbnbml:h-auto ms:py-3 ms:px-4">
                <div className="flex">
                  <div className="text-white text-lg w-[30vw] airbnbml:w-full">
                    <h1 className="airbnbml:hidden text-[24px] flex items-center mb-7 text-[#FF8682]">
                      <span>
                        {" "}
                        <Button
                          size="small"
                          variant="contained"
                          color="secondary"
                          onClick={backHandler}
                        >
                          Prev
                        </Button>
                      </span>
                      <HiArrowLongLeft />

                      <span>DAY 7</span>
                      <HiArrowLongRight />
                      <span>
                        {" "}
                        <Button
                          size="small"
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
                    className="h-96 w-[40%] airbnbml:w-2/3 airbnbml:mx-auto  sm:w-auto  absolute object-cover right-[59px] bottom-0 airbnbml:hidden"
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
            <StepLabel onClick={() => setActiveStep(7)}>
              <span className="text-lg airbnbml:text-xl font-bold">DAY 8</span>{" "}
            </StepLabel>
            <StepContent>
              <div className="py-8 px-9 ml-10 h-80 relative bg-[#050505] airbnbml:h-auto ms:py-3 ms:px-4">
                <div className="flex">
                  <div className="text-white text-lg w-[30vw] airbnbml:w-full">
                    <h1 className="airbnbml:hidden text-[24px] flex items-center mb-7 text-[#FF8682]">
                      <span>
                        {" "}
                        <Button
                          size="small"
                          variant="contained"
                          color="secondary"
                          onClick={backHandler}
                        >
                          Prev
                        </Button>
                      </span>
                      <HiArrowLongLeft />

                      <span>DAY 8</span>
                      <HiArrowLongRight />
                      <span>
                        {" "}
                        <Button
                          size="small"
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
                    className="h-96 w-[40%] airbnbml:w-2/3 airbnbml:mx-auto  sm:w-auto  absolute object-cover right-[59px] bottom-0 airbnbml:hidden"
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
            <StepLabel onClick={() => setActiveStep(8)}>
              <span className="text-lg airbnbml:text-xl font-bold">DAY 9</span>{" "}
            </StepLabel>
            <StepContent>
              <div className="py-8 px-9 ml-10 h-80 relative bg-[#050505] airbnbml:h-auto ms:py-3 ms:px-4">
                <div className="flex">
                  <div className="text-white text-lg w-[30vw] airbnbml:w-full">
                    <h1 className="airbnbml:hidden text-[24px] flex items-center mb-7 text-[#FF8682]">
                      <span>
                        {" "}
                        <Button
                          size="small"
                          variant="contained"
                          color="secondary"
                          onClick={backHandler}
                        >
                          Prev
                        </Button>
                      </span>
                      <HiArrowLongLeft />

                      <span>DAY 9</span>
                      <HiArrowLongRight />
                      <span>
                        {" "}
                        <Button
                          size="small"
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
                    className="h-96 w-[40%] airbnbml:w-2/3 airbnbml:mx-auto  sm:w-auto  absolute object-cover right-[59px] bottom-0 airbnbml:hidden"
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
            <StepLabel onClick={() => setActiveStep(9)}>
              <span className="text-lg airbnbml:text-xl font-bold">DAY 10</span>{" "}
            </StepLabel>
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
            <StepLabel onClick={() => setActiveStep(10)}>
              <span className="text-lg airbnbml:text-xl font-bold">DAY 11</span>{" "}
            </StepLabel>
            <StepContent>
              <div className="py-8 px-9 ml-10 h-80 relative bg-[#050505] airbnbml:h-auto ms:py-3 ms:px-4">
                <div className="flex">
                  <div className="text-white text-lg w-[30vw] airbnbml:w-full">
                    <h1 className="airbnbml:hidden text-[24px] flex items-center mb-7 text-[#FF8682]">
                      <span>
                        {" "}
                        <Button
                          size="small"
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
                          size="small"
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
                    className="h-96 w-[40%] airbnbml:w-2/3 airbnbml:mx-auto  sm:w-auto  absolute object-cover right-[59px] bottom-0 airbnbml:hidden"
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
    </div>
  );
};

export default PackageStepper;
