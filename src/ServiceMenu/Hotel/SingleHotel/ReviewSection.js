import React from "react";
import classes from "./ReviewSection.module.css";
const ReviewSection = () => {
  return (
    <>
      <h1 className="text-center text-black text-4xl mt-16 mb-6">
        Hotel Reviews
      </h1>
      <div className={classes.outerdiv}>
        <div className={classes.innerdiv}>
          <div className={`${classes.div1} ${classes.eachdiv}`}>
            <div className={classes.userdetails}>
              <div className={classes.imgbox}>
                <img
                  src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg"
                  alt=""
                />
              </div>
              <div className={classes.detbox}>
                <p clasName={classes.name}>Daniel Clifford</p>
                <p clasName={classes.designation}>Verified Guest</p>
              </div>
            </div>
            <div className={classes.review}>
              <h4>I had a Excellent Stay</h4>
              <p>
                “ I had an excellent stay at this hotel! The staff was friendly
                and attentive, and the room was clean and comfortable. The
                location was also convenient, with easy access to public
                transportation. ”
              </p>
            </div>
          </div>

          <div className={`${classes.div2} ${classes.eachdiv}`}>
            <div className={classes.userdetails}>
              <div className={classes.imgbox}>
                <img
                  src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jonathan.jpg"
                  alt=""
                />
              </div>
              <div className={classes.detbox}>
                <p clasName={classes.name}>Jonathan Walters</p>
                <p clasName={classes.designation}>Verified Guest</p>
              </div>
            </div>
            <div className={classes.review}>
              <h4>Amazing Views</h4>
              <p>
                “The views from this hotel were amazing! My room had a balcony
                overlooking the ocean, and I spent hours just taking in the
                scenery. The staff was also helpful and accommodating, making
                for a truly memorable stay. ”
              </p>
            </div>
          </div>

          <div className={`${classes.div3} ${classes.eachdiv}`}>
            <div className={classes.userdetails}>
              <div className={classes.imgbox}>
                <img
                  src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-kira.jpg"
                  alt=""
                />
              </div>
              <div clasName={classes.name}>
                <p className={`${classes.name} ${classes.dark}`}>
                  Kira Whittle
                </p>
                <p className={`${classes.designation} ${classes.dark}`}>
                  Verified Guest
                </p>
              </div>
            </div>
            <div className={`${classes.review} ${classes.dark}`}>
              <h4>Disappointing Experience</h4>
              <p>
                “ My experience at this hotel was disappointing. The room was
                not clean and smelled musty, and the staff was unhelpful when I
                tried to address the issue. Additionally, the noise from nearby
                construction made it difficult to sleep. ”
              </p>
            </div>
          </div>

          <div className={`${classes.div4} ${classes.eachdiv}`}>
            <div clasName={classes.userdetails}>
              <div className={classes.imgbox}>
                <img
                  src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg"
                  alt=""
                />
              </div>
              <div clasName={classes.detbox}>
                <p className={`${classes.name} ${classes.dark}`}>
                  Jeanette Harmon
                </p>
                <p className={`${classes.designation} ${classes.dark}`}>
                  Verified Guest
                </p>
              </div>
            </div>
            <div className={`${classes.review} ${classes.dark}`}>
              <h4>An overall wonderful and wonderful experience</h4>
              <p>
                “ Thank you for the wonderful experience! I now have a job I
                really enjoy, and make a good living while doing something I
                love. ”
              </p>
            </div>
          </div>

          <div className={`${classes.div5} ${classes.eachdiv}`}>
            <div clasName={classes.userdetails}>
              <div className={classes.imgbox}>
                <img
                  src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-patrick.jpg"
                  alt=""
                />
              </div>
              <div clasName={classes.detbox}>
                <p clasName={classes.name}>Patrick Abrams</p>
                <p clasName={classes.designation}>Verified Guest</p>
              </div>
            </div>
            <div className={classes.review}>
              <h4>A Luxury at Its Finest</h4>
              <p>
                “ If you're looking for a truly luxurious experience, this hotel
                is the perfect choice. From the high-end furnishings to the
                personalized service, every detail was carefully considered.
                It's definitely worth the splurge for a special occasion or
                indulgent getaway. ”
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewSection;
