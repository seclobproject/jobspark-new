import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { getRecommendedJobs } from "../Slice/jobSlice";
import RecentJobCard from "../Components/RecentJobCard";

const RecentJobs: React.FC = () => {
  const dispatch = useAppDispatch();

  const { data } = useAppSelector(
    (state: any) => state.getRecommendedJobsReducer
  );

  useEffect(() => {
    dispatch(getRecommendedJobs());
  }, [dispatch]);

  return (
    <div>
      <h4 className="recent-jobs-head my-5">Recent Jobs</h4>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {data &&
          data.jobs.map((job: any) => (
            <div className="lg:p-3 mb-5" key={job._id}>
              <RecentJobCard job={job} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecentJobs;
