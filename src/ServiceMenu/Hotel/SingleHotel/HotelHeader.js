// import Nav from '../../Nav'
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./SingleHotel.module.css";

import { Tooltip, Fade } from "@mui/material";

const SingleHotelHeader = () => {
  return (
    <>
      {/* <Nav/> */}
      <div >
        <h1 className="font-bold text-[25px] tracking-wide  ">
          Vihang Farmhouse: Florican Room
        </h1>
        <div className="flex justify-between ">
          <h3 className="mt-3 ">
            <span className="font-semibold">
              4.5/5{" "}
              <StarRateRoundedIcon
                style={{ color: "#FFD700", paddingBottom: "3px" }}
              />
            </span>
            {"|"}
            <span className="text-black  pl-2  underline font-bold text-[15px] cursor-pointer">
              123 Reviews
            </span>
            <span className="inline pl-3 lg:pl-0 lg:block  font-semibold">
              Gunawata, Rajasthan, India
            </span>
          </h3>
          <div>
            <div className="pt-2 lg:pt-6 xs:pt-3 cursor-pointer  sm:relative bottom-[5.35rem] ">
              <Tooltip
                title="Save"
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
              >
                <div className="inline-block pr-7  lg:pr-5">
                  <FontAwesomeIcon
                    icon={faHeart}
                    size="lg"
                    className={`${classes.heart_icon} lg:mt-3 lg:pr-1 pr-1.5 `}
                  />
                  <span className="  sm:hidden font-semibold md:pr-4">Save</span>
                </div>
              </Tooltip>
              <Tooltip
                title="Share"
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
              >
                <div className="inline-block">
                  <FontAwesomeIcon
                    icon={faShare}
                    size="lg"
                    className={`${classes.share_icon} lg:mt-3 lg:pr-1 pr-1.5`}
                  />
                  <span className="sm:hidden  font-semibold">Share</span>
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleHotelHeader;
