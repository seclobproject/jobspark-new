import React from "react";

interface ComponentProps {
  job: any;
  daysDifference: number;
  // other prop types
}

const MainJobCard: React.FC<ComponentProps> = ({ job, daysDifference }) => {
  return (
    <div className="job-card-div">
      <img src="src/assets/boosted.png" alt="boosted-icon" />
      <h4>{job.jobTitle}</h4>
      <p>{job.companyName}</p>
      <div className="job-card-sub">
        <div className="flex gap-2 mb-2">
          <div className="salary-type flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#clip0_801_462)">
                <path
                  d="M14.1667 13.3337H15.8333V3.33366H7.5V5.00033H14.1667V13.3337ZM14.1667 15.0003V17.5003C14.1667 17.9603 13.7917 18.3337 13.3275 18.3337H3.33917C3.22927 18.3343 3.12033 18.3133 3.0186 18.2717C2.91687 18.2301 2.82436 18.1688 2.74638 18.0914C2.6684 18.014 2.60649 17.9219 2.56421 17.8205C2.52193 17.719 2.50011 17.6102 2.5 17.5003L2.5025 5.83366C2.5025 5.37366 2.8775 5.00033 3.34167 5.00033H5.83333V2.50033C5.83333 2.27931 5.92113 2.06735 6.07741 1.91107C6.23369 1.75479 6.44565 1.66699 6.66667 1.66699H16.6667C16.8877 1.66699 17.0996 1.75479 17.2559 1.91107C17.4122 2.06735 17.5 2.27931 17.5 2.50033V14.167C17.5 14.388 17.4122 14.6 17.2559 14.7562C17.0996 14.9125 16.8877 15.0003 16.6667 15.0003H14.1667ZM4.16917 6.66699L4.16667 16.667H12.5V6.66699H4.16917ZM5.83333 13.3337H9.58333C9.69384 13.3337 9.79982 13.2898 9.87796 13.2116C9.9561 13.1335 10 13.0275 10 12.917C10 12.8065 9.9561 12.7005 9.87796 12.6224C9.79982 12.5442 9.69384 12.5003 9.58333 12.5003H7.08333C6.5308 12.5003 6.0009 12.2808 5.61019 11.8901C5.21949 11.4994 5 10.9695 5 10.417C5 9.86446 5.21949 9.33455 5.61019 8.94385C6.0009 8.55315 6.5308 8.33366 7.08333 8.33366H7.5V7.50033H9.16667V8.33366H10.8333V10.0003H7.08333C6.97283 10.0003 6.86685 10.0442 6.7887 10.1224C6.71057 10.2005 6.66667 10.3065 6.66667 10.417C6.66667 10.5275 6.71057 10.6335 6.7887 10.7116C6.86685 10.7898 6.97283 10.8337 7.08333 10.8337H9.58333C10.1359 10.8337 10.6658 11.0532 11.0565 11.4439C11.4472 11.8346 11.6667 12.3645 11.6667 12.917C11.6667 13.4695 11.4472 13.9994 11.0565 14.3901C10.6658 14.7808 10.1359 15.0003 9.58333 15.0003H9.16667V15.8337H7.5V15.0003H5.83333V13.3337Z"
                  fill="#4E4E4E"
                />
              </g>
              <defs>
                <clipPath id="clip0_801_462">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>
              {job.salaryMin} - {job.salaryMin} per month
            </span>
          </div>
          <div className="salary-type flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#clip0_801_468)">
                <path
                  d="M7.50033 10.833V13.333H12.5003V10.833H18.3337V16.6663C18.3337 16.8874 18.2459 17.0993 18.0896 17.2556C17.9333 17.4119 17.7213 17.4997 17.5003 17.4997H2.50033C2.27931 17.4997 2.06735 17.4119 1.91107 17.2556C1.75479 17.0993 1.66699 16.8874 1.66699 16.6663V10.833H7.50033ZM9.16699 9.16634H10.8337V11.6663H9.16699V9.16634ZM5.83366 4.16634V1.66634C5.83366 1.44533 5.92146 1.23337 6.07774 1.07709C6.23402 0.920805 6.44598 0.833008 6.66699 0.833008H13.3337C13.5547 0.833008 13.7666 0.920805 13.9229 1.07709C14.0792 1.23337 14.167 1.44533 14.167 1.66634V4.16634H17.5003C17.7213 4.16634 17.9333 4.25414 18.0896 4.41042C18.2459 4.5667 18.3337 4.77866 18.3337 4.99967V9.16634H12.5003V7.49967H7.50033V9.16634H1.66699V4.99967C1.66699 4.77866 1.75479 4.5667 1.91107 4.41042C2.06735 4.25414 2.27931 4.16634 2.50033 4.16634H5.83366ZM7.50033 2.49967V4.16634H12.5003V2.49967H7.50033Z"
                  fill="#4E4E4E"
                />
              </g>
              <defs>
                <clipPath id="clip0_801_468">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>Full-time</span>
          </div>
        </div>

        <div className="urg-hiring flex gap-1 items-center mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM11 10V5H9V12H15V10H11Z"
              fill="#077AC2"
            />
          </svg>
          <span className="">Urgently Hiring</span>
        </div>

        <div className="card-post-date flex gap-1 items-center">
          <span>
            Posted{" "}
            {daysDifference == 0
              ? "today"
              : daysDifference == 1
              ? "1 day ago"
              : `${daysDifference} days ago`}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="4"
            viewBox="0 0 4 4"
            fill="none"
          >
            <circle cx="2" cy="2" r="2" fill="#848484" />
          </svg>
          <span>Based on jobs you explored</span>
        </div>
      </div>
    </div>
  );
};

export default MainJobCard;
