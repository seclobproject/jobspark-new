import React from "react";
import Collapse from "./Collapse";

const Footer = () => {
  return (
    <>
      <div className="footer-one-div">
        <div className="container lg:max-w-7xl mx-auto px-4 lg:pt-8 lg:pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="p-0 lg:p-3">
              <div className="relative">
                <img
                  className="object-cover rounded-2xl w-full"
                  src="src/assets/footer-service.png"
                  alt="service-1"
                />
                <div className="image-overlay rounded-2xl"></div>
                <div className="overlay-text absolute top-1/2 left-5 sm:left-16 transform -translate-y-1/2">
                  <p>Wedding services</p>
                  <h4>All your wedding needs at your finger tips!</h4>
                  <button>Explore</button>
                </div>
              </div>
            </div>

            <div className="p-0 lg:p-3">
              <div className="relative">
                <img
                  className="object-cover rounded-2xl w-full"
                  src="src/assets/footer-service.png"
                  alt="service-1"
                />
                <div className="image-overlay rounded-2xl"></div>
                <div className="overlay-text absolute top-1/2 left-5 sm:left-16 transform -translate-y-1/2">
                  <p>Wedding services</p>
                  <h4>All your wedding needs at your finger tips!</h4>
                  <button>Explore</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-two-div hidden md:block">
        <div className="container lg:max-w-7xl mx-auto px-4 lg:pt-8 lg:pb-8">
          <h4>Why Seclob?</h4>
          <div className="grid justify-between grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="icons-div text-center flex flex-col items-center">
              <img src="src/assets/schedule-icon.png" alt="schedule-icon" />
              <p>
                On Demand/
                <br />
                Scheduled
              </p>
            </div>

            <div className="icons-div text-center flex flex-col items-center">
              <img src="src/assets/partner-icon.png" alt="partner-icon" />
              <p>
                Verified <br />
                Partners
              </p>
            </div>

            <div className="icons-div text-center flex flex-col items-center">
              <img src="src/assets/warranty-icon.png" alt="warranty-icon" />
              <p>
                Service <br />
                Warranty
              </p>
            </div>

            <div className="icons-div text-center flex flex-col items-center">
              <img
                src="src/assets/transparent-icon.png"
                alt="transparent-icon"
              />
              <p>
                Transparent <br />
                Pricing
              </p>
            </div>

            <div className="icons-div text-center flex flex-col items-center">
              <img src="src/assets/onlinepay-icon.png" alt="onlinepay-icon" />
              <p>
                Online <br />
                Payments
              </p>
            </div>

            <div className="icons-div text-center flex flex-col items-center">
              <img src="src/assets/support-icon.png" alt="support-icon" />
              <p>
                24 x 7 <br />
                Support
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container lg:max-w-7xl mx-auto px-4 lg:pt-8 lg:pb-8 md:hidden mt-5">
        <Collapse title="Why Seclob?">
          <div className="grid justify-between grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="icons-div text-center flex flex-col items-center">
              <img src="src/assets/schedule-icon.png" alt="schedule-icon" />
              <p>
                On Demand/
                <br />
                Scheduled
              </p>
            </div>

            <div className="icons-div text-center flex flex-col items-center">
              <img src="src/assets/partner-icon.png" alt="partner-icon" />
              <p>
                Verified <br />
                Partners
              </p>
            </div>

            <div className="icons-div text-center flex flex-col items-center">
              <img src="src/assets/warranty-icon.png" alt="warranty-icon" />
              <p>
                Service <br />
                Warranty
              </p>
            </div>

            <div className="icons-div text-center flex flex-col items-center">
              <img
                src="src/assets/transparent-icon.png"
                alt="transparent-icon"
              />
              <p>
                Transparent <br />
                Pricing
              </p>
            </div>

            <div className="icons-div text-center flex flex-col items-center">
              <img src="src/assets/onlinepay-icon.png" alt="onlinepay-icon" />
              <p>
                Online <br />
                Payments
              </p>
            </div>

            <div className="icons-div text-center flex flex-col items-center">
              <img src="src/assets/support-icon.png" alt="support-icon" />
              <p>
                24 x 7 <br />
                Support
              </p>
            </div>
          </div>
        </Collapse>

        <Collapse title="Our Services">
          <p>This is the content of Section 2.</p>
        </Collapse>

        <Collapse title="Know us">
          <p>This is the content of Section 3.</p>
        </Collapse>

        <Collapse title="Follow Us On">
          <p>This is the content of Section 3.</p>
        </Collapse>
      </div>
    </>
  );
};

export default Footer;
