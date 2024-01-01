import React, { useEffect } from "react";
import MainJobCard from "../Components/MainJobCard";
import Footer from "../Components/Footer";

import { useAppDispatch, useAppSelector } from "../store";
import { getRecommendedJobs } from "../Slice/jobSlice";
import TopCategories from "../partials/TopCategories";
import { Link } from "react-router-dom";

interface ComponentProps {
  data: any;
}

const HomeScreen: React.FC<ComponentProps> = () => {

  const dispatch = useAppDispatch();

  const { data } = useAppSelector(
    (state: any) => state.getRecommendedJobsReducer
  );

  const { userInfo } = useAppSelector((state: any) => state.fetchUserReducer);

  useEffect(() => {
    dispatch(getRecommendedJobs());
  }, [dispatch, userInfo]);

  return (
    <>
      {/* Banner - big screen */}
      <div className="relative hidden md:block">
        <img
          src="src/assets/banner-main.jpg"
          alt="main-banner"
          className="w-full h-auto"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h4 className="banner-heading mb-4">Explore your jobs!</h4>

            {/* Search bar */}
            <div className="flex items-center banner-input-div max-w-md mx-auto bg-white shadow-md">
              <img className="w-6 mx-3" src="src/assets/search.png" alt="search" />
              <input
                type="text"
                placeholder="Search"
                className="p-1 rounded-md"
              />
              <button className="search-btn">Explore</button>
            </div>
          </div>
        </div>
      </div>
      {/* Banner - big screen */}

      {/* Search - mobile */}
      <div className="mobile-search md:hidden">
        <div className="flex items-center banner-input-div max-w-md mx-auto bg-white shadow-md">
          <img className="w-6 mx-3" src="src/assets/search.png" alt="" />
          <input type="text" placeholder="Search" className="p-1 rounded-md" />
        </div>
      </div>
      {/* Search - mobile */}

      {/* Top categries */}
      <TopCategories />
      {/* Top categries */}

      {/* Job cards */}
      <div className="container lg:max-w-7xl mx-auto px-4 pt-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {data &&
            data.jobs.map((job: any) => {
              const createdAtDate: any = new Date(job.createdAt);

              // Get the current date without the time part
              const currentDate: any = new Date();
              currentDate.setHours(0, 0, 0, 0);

              // Calculate the time difference in milliseconds
              const timeDifference: any = currentDate - createdAtDate;

              // Calculate the number of days
              const daysDifference: number = Math.floor(
                timeDifference / (1000 * 60 * 60 * 24)
              );

              return (
                <div className="lg:p-3" key={job._id}>
                  <Link to={`/job/${job._id}`}>
                    <MainJobCard job={job} daysDifference={daysDifference} />
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
      {/* Job cards */}

      {/* Footer section */}
      <Footer />
      {/* Footer section */}
    </>
  );
};

export default HomeScreen;
