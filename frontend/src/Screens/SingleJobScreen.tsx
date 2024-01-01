import React, { useEffect, useState } from "react";
import RecentJobs from "../partials/RecentJobs";
import Footer from "../Components/Footer";
import store, { useAppDispatch, useAppSelector } from "../store";
import { getRecommendedJobs, getSingleJobDetails } from "../Slice/jobSlice";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// interface UserInfo {
//   id: string;
// }

const SingleJobScreen: React.FC = () => {
  // const [userInfo, setUserInfo] = useState(null);

  const { jobId } = useParams();
  const dispatch = useAppDispatch();

  const { data } = useAppSelector(
    (state: any) => state.getSingleJobDetailsReducer
  );

  // Fetch user data from localstorage
  let storedUserInfo: any;
  const storedUserInfoString = localStorage.getItem("userInfo");
  if (storedUserInfoString) {
    storedUserInfo = JSON.parse(storedUserInfoString);
  }

  let daysDifference = 0;
  let isIdPresent = false;

  useEffect(() => {
    window.scrollTo(0, 0);

    dispatch(getSingleJobDetails(jobId));
  }, [dispatch, jobId]);

  data &&
    data.peopleApplied.map((people: any) => {
      if (people._id == storedUserInfo.id) {
        isIdPresent = true;
        return;
      }
    });

  if (data) {
    const createdAtDate: any = new Date(data.createdAt);

    // Get the current date without the time part
    const currentDate: any = new Date();
    currentDate.setHours(0, 0, 0, 0);

    // Calculate the time difference in milliseconds
    const timeDifference: any = currentDate - createdAtDate;

    // Calculate the number of days
    daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  }

  return (
    <>
      <div className="container lg:max-w-7xl mx-auto px-4 py-8">
        {/* Job heading */}
        <div className="my-2 px-4 py-3 md:px-16 md:py-12 job-heading-div">
          <h1>{data && data.jobTitle}</h1>
          <h5>{data && data.companyName}</h5>
          <p>{data && data.locality}</p>
          <h6>
            {data && data.salaryMin} - {data && data.salaryMax} a month
          </h6>
          <div className="grid grid-cols-2 justify-between">
            <div className="date-n-count md:flex">
              <span>
                {daysDifference && daysDifference == 0
                  ? `Recently posted`
                  : `Posted ${daysDifference} days ago`}
              </span>
              <div className="spacer"></div>
              <span>Openings: {data && data.openingsCount}</span>
            </div>

            <div className="flex justify-end">
              {isIdPresent ? (
                <button className="applied-btn">Applied</button>
              ) : (
                <Link to={`/upload-resume/${jobId}`}>
                  <button className="apply-btn">Apply</button>
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 job-details">
          <div className="job-page-subheads my-2">Job Description</div>
          <p>{data && data.jobDesc}</p>
        </div>

        <div className="mt-10 job-details">
          <div className="job-page-subheads my-2">
            Roles and Responsibilities
          </div>
          <ul>
            <li>{data && data.rolesAndResponse}</li>
          </ul>
        </div>

        <div className="mt-10 job-details">
          <div className="flex gap-2 py-2">
            <h4>Role: </h4>
            <span>{data && data.jobTitle}</span>
            <br />
          </div>
          <div className="flex gap-2 py-2">
            <h4>Employment Type: </h4>
            <span>{data && data.employmentType}</span>
            <br />
          </div>
          <div className="flex gap-2 py-2">
            <h4>Experience: </h4>
            <span>
              {data && data.expMin} - {data && data.expMax} years
            </span>
            <br />
          </div>
          <div className="flex gap-2 py-2">
            <h4>Package: </h4>
            <span className="package-box">
              {data && data.salaryMin} - {data && data.salaryMax} per month
            </span>
            <br />
          </div>
          <div className="flex gap-2 py-2">
            <h4>Education: </h4>
            <span>{data && data.education}</span>
            <br />
          </div>
          <div className="flex gap-2 py-2">
            <h4>Location: </h4>
            <span>{data && data.district}</span>
            <br />
          </div>
          <div className="flex gap-2 py-2">
            <h4>Locality: </h4>
            <span>{data && data.locality}</span>
            <br />
          </div>
          <div className="flex gap-2 py-2">
            <h4>Gender: </h4>
            <span>{data && data.gender}</span>
            <br />
          </div>
          <div className="flex gap-2 py-2">
            <h4>Email: </h4>
            <span>{data && data.email}</span>
            <br />
          </div>
          <div className="md:flex gap-2 py-2">
            <h4>Key Skills: </h4>
            <div className="flex flex-wrap mt-1 md:mt-0">
              {data &&
                data.keySkills.map((keySkill: string) => (
                  <span key={keySkill} className="package-box mr-2 mb-2">
                    {keySkill}
                  </span>
                ))}
            </div>
          </div>
        </div>

        <RecentJobs />
      </div>
      <Footer />
    </>
  );
};

export default SingleJobScreen;
