import React, { useEffect } from "react";
import Footer from "../Components/Footer";
import { useAppDispatch, useAppSelector } from "../store";
import { useParams } from "react-router-dom";
import { uploadResume } from "../Slice/employeeSlice";

const PersonalDetailsScreen: React.FC = () => {
  const dispatch = useAppDispatch();

  const { pending, data, error } = useAppSelector(
    (state: any) => state.uploadResumeReducer
  );

  const { jobId: appliedJobId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [dispatch, pending, data, error]);

  const handleFileUpload = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="resume-upload-div p-20 container lg:max-w-5xl mx-auto px-15 flex flex-col my-10">
        <h4 className="details-subhead mb-5">Personal details</h4>
        <form className="">
          <label className="inputs-label" id="" htmlFor="your-name">
            First Name
          </label>
          <input
            className="details-input-form rounded-lg w-full p-2 mt-2 mb-4"
            type="text"
            id="your-name"
            name="your-name"
          />

          <label className="inputs-label" id="" htmlFor="your-name">
            Last Name
          </label>
          <input
            className="details-input-form rounded-lg w-full p-2 mt-2"
            type="text"
            id="your-name"
            name="your-name"
          />

          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="inputs-label" id="" htmlFor="your-name">
                Phone Number
              </label>
              <div className="flex details-input-form rounded-lg p-2 mt-2">
                <div className="mr-2">+91</div>
                <input
                  className="rounded-lg w-full"
                  type="number"
                  id="your-name"
                  name="your-name"
                />
              </div>
            </div>

            <div>
              <label className="inputs-label" id="" htmlFor="your-name">
                Email
              </label>
              <input
                className="details-input-form rounded-lg w-full p-2 mt-2"
                type="email"
                id="your-name"
                name="your-name"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="inputs-label" id="" htmlFor="street-address">
                Street Address
              </label>
              <input
                className="details-input-form rounded-lg w-full p-2 mt-2"
                type="text"
                id="street-address"
                name="street-address"
              />
            </div>

            <div>
              <label className="inputs-label" id="" htmlFor="city-state">
                City, State
              </label>
              <input
                className="details-input-form rounded-lg w-full p-2 mt-2"
                type="email"
                id="city-state"
                name="city-state"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="inputs-label" id="" htmlFor="district">
                District
              </label>
              <input
                className="details-input-form rounded-lg w-full p-2 mt-2"
                type="text"
                id="district"
                name="district"
              />
            </div>

            <div>
              <label className="inputs-label" id="" htmlFor="job-location">
                Job Location
              </label>
              <input
                className="details-input-form rounded-lg w-full p-2 mt-2"
                type="text"
                id="job-location"
                name="job-location"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div></div>
            <div>
              <label className="inputs-label" id="" htmlFor="gender">
                Gender
              </label>
              <input
                className="details-input-form rounded-lg w-full p-2 mt-2"
                type="text"
                id="gender"
                name="gender"
              />
            </div>
          </div>

          <div>
            <label className="inputs-label" id="" htmlFor="job-title">
              Job Title
            </label>
            <input
              className="details-input-form rounded-lg w-full p-2 mt-2 mb-4"
              type="text"
              id="job-title"
              name="job-title"
            />
          </div>
        </form>

        <div className="resume-page-bottom-btns">
          <button>Next</button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PersonalDetailsScreen;
