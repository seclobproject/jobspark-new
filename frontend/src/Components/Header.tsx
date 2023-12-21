import { useState } from "react";
import React from "react";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header className="header-tag bg-white text-white">
        <div className="container mx-auto max-w-full px-4 lg:max-w-7xl flex items-center justify-between h-full">
          {/* Logo on the left */}
          <div className="flex items-center">
            <img
              src="src/assets/seclob-logo.png"
              alt="Logo"
              className="header-logo mr-2"
            />
          </div>

          {/* Hamburger menu for smaller screens */}
          <div className="flex items-center md:hidden">
            <div className="flex items-center">
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="22"
                  viewBox="0 0 18 22"
                  fill="none"
                >
                  <path
                    d="M9 18.9535L13.95 13.9894C14.9289 13.0077 15.5955 11.7569 15.8655 10.3952C16.1356 9.03347 15.9969 7.62205 15.4671 6.33939C14.9373 5.05672 14.04 3.96042 12.8889 3.1891C11.7378 2.41778 10.3844 2.00609 9 2.00609C7.61556 2.00609 6.26221 2.41778 5.11108 3.1891C3.95996 3.96042 3.06275 5.05672 2.53291 6.33939C2.00308 7.62205 1.86442 9.03347 2.13445 10.3952C2.40449 11.7569 3.07111 13.0077 4.05 13.9894L9 18.9535ZM9 21.7895L2.636 15.4074C1.37734 14.1452 0.520186 12.537 0.172928 10.7862C-0.17433 9.03547 0.00390685 7.22075 0.685098 5.57156C1.36629 3.92238 2.51984 2.51279 3.99988 1.52106C5.47992 0.529333 7.21997 0 9 0C10.78 0 12.5201 0.529333 14.0001 1.52106C15.4802 2.51279 16.6337 3.92238 17.3149 5.57156C17.9961 7.22075 18.1743 9.03547 17.8271 10.7862C17.4798 12.537 16.6227 14.1452 15.364 15.4074L9 21.7895ZM9 11.0311C9.53043 11.0311 10.0391 10.8198 10.4142 10.4436C10.7893 10.0675 11 9.55735 11 9.02542C11 8.49348 10.7893 7.98333 10.4142 7.6072C10.0391 7.23106 9.53043 7.01975 9 7.01975C8.46957 7.01975 7.96086 7.23106 7.58579 7.6072C7.21071 7.98333 7 8.49348 7 9.02542C7 9.55735 7.21071 10.0675 7.58579 10.4436C7.96086 10.8198 8.46957 11.0311 9 11.0311ZM9 13.0368C7.93913 13.0368 6.92172 12.6141 6.17157 11.8619C5.42143 11.1096 5 10.0893 5 9.02542C5 7.96155 5.42143 6.94125 6.17157 6.18898C6.92172 5.43671 7.93913 5.01409 9 5.01409C10.0609 5.01409 11.0783 5.43671 11.8284 6.18898C12.5786 6.94125 13 7.96155 13 9.02542C13 10.0893 12.5786 11.1096 11.8284 11.8619C11.0783 12.6141 10.0609 13.0368 9 13.0368Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="location-header-mob">Palazhi, Kozhikode</div>
            </div>
            <button onClick={toggleMenu} className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
              >
                <path
                  d="M0.625 0.5H16.375V2.25H0.625V0.5ZM5.875 6.625H16.375V8.375H5.875V6.625ZM0.625 12.75H16.375V14.5H0.625V12.75Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>

          {/* Buttons on the right */}
          <div className="hidden md:flex items-center">
            <button className="button-primary mr-4">Employers</button>
            <button className="button-primary mr-4">Apply job</button>
            <button className="button-primary mr-4">Kozhikkode</button>
            <button className="button-secondary mr-4">Log in</button>
            <div className="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="23"
                viewBox="0 0 26 23"
                fill="none"
              >
                <path
                  d="M24.4277 9.78564V15.6426C24.4277 19.7424 22.085 21.4995 18.5708 21.4995H6.85693C3.34277 21.4995 1 19.7424 1 15.6426V7.44287C1 3.34302 3.34277 1.58594 6.85693 1.58594H15.0566"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.85693 8.02832L10.5234 10.9568C11.7299 11.9173 13.7095 11.9173 14.9161 10.9568L16.2983 9.85568"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.4993 6.85693C23.1166 6.85693 24.4277 5.54581 24.4277 3.92847C24.4277 2.31112 23.1166 1 21.4993 1C19.8819 1 18.5708 2.31112 18.5708 3.92847C18.5708 5.54581 19.8819 6.85693 21.4993 6.85693Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M21.1559 12.833C21.8347 19.1044 24.5 20.9997 24.5 20.9997H3.5C3.5 20.9997 7 18.5108 7 9.79967C7 7.81939 7.7375 5.92022 9.05025 4.51995C10.363 3.11967 12.1435 2.33301 14 2.33301C14.3935 2.33301 14.7836 2.36836 15.1667 2.43741"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.1665 9.33301C24.0996 9.33301 25.6665 7.766 25.6665 5.83301C25.6665 3.90002 24.0996 2.33301 22.1665 2.33301C20.2335 2.33301 18.6665 3.90002 18.6665 5.83301C18.6665 7.766 20.2335 9.33301 22.1665 9.33301Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.0181 24.5C15.813 24.8536 15.5187 25.1471 15.1643 25.3511C14.8101 25.5551 14.4086 25.6626 13.9998 25.6626C13.591 25.6626 13.1894 25.5551 12.8352 25.3511C12.481 25.1471 12.1865 24.8536 11.9814 24.5"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <img
                className="w-7"
                src="src/assets/account-icon.png"
                alt="account-icon"
              />
            </div>
          </div>

          {/* Hamburger menu for smaller screens */}
          <div
            className={`md:hidden fixed top-0 right-0 h-full w-64 text-black bg-slate-200 p-4 transform z-10 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-700 ease-in-out`}
          >
            <button onClick={toggleMenu} className="text-black">
              <svg
                fill="#000000"
                height="12px"
                width="12px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 492 492"
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872
			c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872
			c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052
			L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116
			c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952
			c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116
			c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z"
                    />
                  </g>
                </g>
              </svg>
            </button>
            <div className="flex flex-col mt-4">
              <button className="mb-2">Employers</button>
              <button className="mb-2">Apply job</button>
              <div className="flex justify-center">
                <div className="mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="23"
                    viewBox="0 0 26 23"
                    fill="none"
                  >
                    <path
                      d="M24.4277 9.78564V15.6426C24.4277 19.7424 22.085 21.4995 18.5708 21.4995H6.85693C3.34277 21.4995 1 19.7424 1 15.6426V7.44287C1 3.34302 3.34277 1.58594 6.85693 1.58594H15.0566"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.85693 8.02832L10.5234 10.9568C11.7299 11.9173 13.7095 11.9173 14.9161 10.9568L16.2983 9.85568"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21.4993 6.85693C23.1166 6.85693 24.4277 5.54581 24.4277 3.92847C24.4277 2.31112 23.1166 1 21.4993 1C19.8819 1 18.5708 2.31112 18.5708 3.92847C18.5708 5.54581 19.8819 6.85693 21.4993 6.85693Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M21.1559 12.833C21.8347 19.1044 24.5 20.9997 24.5 20.9997H3.5C3.5 20.9997 7 18.5108 7 9.79967C7 7.81939 7.7375 5.92022 9.05025 4.51995C10.363 3.11967 12.1435 2.33301 14 2.33301C14.3935 2.33301 14.7836 2.36836 15.1667 2.43741"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22.1665 9.33301C24.0996 9.33301 25.6665 7.766 25.6665 5.83301C25.6665 3.90002 24.0996 2.33301 22.1665 2.33301C20.2335 2.33301 18.6665 3.90002 18.6665 5.83301C18.6665 7.766 20.2335 9.33301 22.1665 9.33301Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.0181 24.5C15.813 24.8536 15.5187 25.1471 15.1643 25.3511C14.8101 25.5551 14.4086 25.6626 13.9998 25.6626C13.591 25.6626 13.1894 25.5551 12.8352 25.3511C12.481 25.1471 12.1865 24.8536 11.9814 24.5"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <img
                    className="w-7"
                    src="src/assets/account-icon.png"
                    alt="account-icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
