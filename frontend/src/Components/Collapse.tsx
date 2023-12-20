import { FC, ReactNode, useState } from "react";

interface CollapseProps {
  title: string;
  children: ReactNode;
}

const Collapse: FC<CollapseProps> = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="p-2 mb-2">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleCollapse}
      >
        <h2 className="collapse-title">{title}</h2>
        <span className="">
          {isCollapsed ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
            >
              <ellipse cx="7" cy="6.4697" rx="7" ry="6.4697" fill="#D9D9D9" />
              <path
                d="M7.02246 0L13.5383 6.51588L7.51609 12.5381L1.00021 6.02225L7.02246 0Z"
                fill="white"
                fill-opacity="0.01"
              />
              <path
                d="M9.03916 4.62998L5.5212 8.13798"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.37305 4.47852L9.17398 8.27944"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <ellipse cx="7" cy="7.05759" rx="7" ry="6.4697" fill="#D9D9D9" />
              <path
                d="M2 2.43555L11.2148 2.43555L11.2148 10.9523L2 10.9523L2 2.43555Z"
                fill="white"
                fill-opacity="0.01"
              />
              <path
                d="M6.69992 4.2832L6.69287 9.25131"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 6.76758H9.37533"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
        </span>
      </div>
      {isCollapsed && (
        <div className="mt-2">
          {children}
        </div>
      )}
    </div>
  );
};

export default Collapse;
