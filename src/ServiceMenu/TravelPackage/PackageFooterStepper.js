import { Step, StepButton, StepContent, Stepper } from "@material-ui/core";
import { useState } from "react";
const PackageFooterStepper = () => {
  const [activeStepFooter, setActiveStepFooter] = useState(4);
  const handleActiveFooter = (step) => {
    setActiveStepFooter(step);
  };
  return (
    <div>
      <hr className="my-20 md:my-10 ms:my-5" />
      <h2 className="font-bold ms:text-lg text-xl">Package Extra Info</h2>
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

export default PackageFooterStepper;
