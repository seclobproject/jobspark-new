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

      <div className="footer-three-div hidden md:block">
        <div className="container lg:max-w-7xl mx-auto px-4 pt-8 pb-8">
          <div className="flex justify-between items-center">
            <span>About us</span>
            <span>|</span>
            <span>Terms & Conditions</span>
            <span>|</span>
            <span>Privacy Policy</span>
            <span>|</span>
            <span>Cancellation Policy</span>
            <span>|</span>
            <span>FAQ</span>
            <span>|</span>
            <span>Blog</span>
            <span>|</span>
            <span>Services</span>
            <span>|</span>
            <span>Shopping</span>
            <span>|</span>
            <span>Contact</span>
          </div>
          <div className="footer-services">
            <p className="my-10">
              Some of our services that will prove useful to you on a day-to-day
              basis are:
            </p>
            <div className="grid grid-cols-4 gap-8">
              <div className="flex">
                <div className="icon">
                  <img
                    className="w-100"
                    src="src/assets/footer-service-icon.png"
                    alt="footer-service"
                  />
                </div>
                <div className="footer-service-text ms-4">
                  <h5>Shop Online</h5>
                  <p>
                    This online shopping feature brings forth a plethora of
                    gadgets like phones, refrigerators, washing machines,
                    cameras, etc. for you to choose from and make a smart buy.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="icon">
                  <img
                    className="w-100"
                    src="src/assets/footer-service-icon.png"
                    alt="footer-service"
                  />
                </div>
                <div className="footer-service-text ms-4">
                  <h5>Shop Online</h5>
                  <p>
                    This online shopping feature brings forth a plethora of
                    gadgets like phones, refrigerators, washing machines,
                    cameras, etc. for you to choose from and make a smart buy.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="icon">
                  <img
                    className="w-100"
                    src="src/assets/footer-service-icon.png"
                    alt="footer-service"
                  />
                </div>
                <div className="footer-service-text ms-4">
                  <h5>Shop Online</h5>
                  <p>
                    This online shopping feature brings forth a plethora of
                    gadgets like phones, refrigerators, washing machines,
                    cameras, etc. for you to choose from and make a smart buy.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="icon">
                  <img
                    className="w-100"
                    src="src/assets/footer-service-icon.png"
                    alt="footer-service"
                  />
                </div>
                <div className="footer-service-text ms-4">
                  <h5>Shop Online</h5>
                  <p>
                    This online shopping feature brings forth a plethora of
                    gadgets like phones, refrigerators, washing machines,
                    cameras, etc. for you to choose from and make a smart buy.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="my-10">
            Some of the other services that can be of assistance to you for
            leisure, health and home convenience are - Courier Service, Laundry
            Service, AC Repair, Thyrocare, Metropolis, Order Mineral Water, Book
            a Table, Doctor's Appointment, Order Food Online, etc. With an
            endless number of things under the sun, you can be sure this will be
            your 'One Stop Shop' to find everything and more.
          </p>
          <div className="flex justify-center items-center flex-col">
            <img
              className="w-40"
              src="src/assets/seclob-footer.png"
              alt="footer-icon"
            />
            <div className="w-96 text-center text-xs my-8">
              Seclob brings the best of Home Maintenance and Repairs, Utility,
              Lifestyle, Health, Beauty Services, and Local Shopping to the
              customer, right where they are, all through an easy to use
              platform.
            </div>

            <div className="footer-social-icons flex gap-3 items-center">
              <h5>Follow Us On</h5>
              <img src="src/assets/instagram.png" alt="instagram" />
              <img src="src/assets/facebook.png" alt="facebook" />
              <img src="src/assets/linkedin.png" alt="linkedin" />
              <img src="src/assets/twitter.png" alt="twitter" />
              <img src="src/assets/youtube.png" alt="youtube" />
            </div>
          </div>
        </div>

        <div className="footer-end py-5 text-center">
          <span>
            © 2024 Seclob Technologies Pvt.Ltd. All Rights Reserved | Designed &
            Developed by Seclob Technologies
          </span>
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
          <div className="services-mob grid grid-cols-5 gap-1">
            <div>Service</div>
            <div>ExploreX</div>
            <div>SecDeals</div>
            <div>JobSpark</div>
            <div>VehiFix</div>
            <div>E Card</div>
            <div>SecMart</div>
            <div>Eatzy</div>
            <div>Mediconnect</div>
            <div>Lawlink</div>
            <div>RentAll</div>
            <div>GoCab</div>
            <div>Rooms</div>
            <div>Top-Up</div>
            <div>Quickhands</div>
            <div>Buy & Sell</div>
            <div>Soulmatez</div>
            <div>LearnZone</div>
            <div>Blog</div>
            <div>News</div>
          </div>
        </Collapse>

        <Collapse title="Know us">
          <div className="know-us-mob">
            <p>About Us</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Cancellation Policy</p>
            <p>FAQ</p>
            <p>Contact Us</p>
          </div>
        </Collapse>

        <Collapse title="Follow Us On">
          <div className="footer-social-icons flex gap-3 items-center mt-4 justify-center">
            <img src="src/assets/instagram.png" alt="instagram" />
            <img src="src/assets/facebook.png" alt="facebook" />
            <img src="src/assets/linkedin.png" alt="linkedin" />
            <img src="src/assets/twitter.png" alt="twitter" />
            <img src="src/assets/youtube.png" alt="youtube" />
          </div>
        </Collapse>
      </div>

      <div className="footer-end pt-5 flex items-center flex-col md:hidden">
        <img
          className="w-40"
          src="src/assets/seclob-footer.png"
          alt="footer-icon"
        />

        <div className="w-full footer-end-part mt-5 text-center text-xs py-2">
          ©2024 Seclob Technologies Pvt.Ltd. All Rights Reserved
          <br />
          Designed & Developed by Seclob Technologies
        </div>
      </div>
    </>
  );
};

export default Footer;
