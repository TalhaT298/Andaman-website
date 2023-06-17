import React from "react";
import { BsFlagFill } from "react-icons/bs";
import user1 from "../images/user1.png";
import user2 from "../images/user2.png";
import user3 from "../images/user3.png";
import user4 from "../images/user4.png";
const UsersReview = () => {
  const srcImg = [user1, user2, user3, user4];
  return (
    <>
      <hr className="my-20 md:my-10 ms:my-5" />
      <div className="mt-3">
        <div className="flex justify-between">
          <h3 className="font-bold ms:text-lg text-xl">Reviews</h3>
          {/* <BookButton>Give your review</BookButton> */}
        </div>

        {/*------------- Review Start------------ */}
        {srcImg.map((item, i) => (
          <div key={i} className="flex gap-4 py-6  border-b-[0.5px]">
            <img
              src={item}
              alt="user"
              className="rounded-full h-[45px] max-w-[45px] w-full overflow-hidden"
            />
            <article>
              <div className="flex justify-between w-auto">
                <div>
                  <span className="font-semibold">5.0 Amazing |</span>{" "}
                  <span>Omar Siphron</span>
                </div>
                <BsFlagFill className="fill-[#4c584c]" />
              </div>
              <p className="text-justify ms:text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum,
                enim harum ipsa labore voluptatem sit laborum voluptatibus,
                reiciendis dignissimos reprehenderit provident exercitationem
                fuga omnis architecto iure eaque modi.
              </p>
            </article>
          </div>
        ))}
      </div>
    </>
  );
};

export default UsersReview;
