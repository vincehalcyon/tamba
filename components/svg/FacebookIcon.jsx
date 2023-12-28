import React from "react";

const FacebookIcon = ({ className = "text-white", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      className={`duration-300 transition-all ${className}`}
      {...props}
    >
      <g clipPath="url(#clip0_31_4059)">
        <path
          d="M12.5 0C5.5965 0 0 5.5965 0 12.5C0 18.362 4.036 23.281 9.4805 24.632V16.32H6.903V12.5H9.4805V10.854C9.4805 6.5995 11.406 4.6275 15.583 4.6275C16.375 4.6275 17.7415 4.783 18.3005 4.938V8.4005C18.0055 8.3695 17.493 8.354 16.8565 8.354C14.807 8.354 14.015 9.1305 14.015 11.149V12.5H18.098L17.3965 16.32H14.015V24.9085C20.2045 24.161 25.0005 18.891 25.0005 12.5C25 5.5965 19.4035 0 12.5 0Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_31_4059">
          <rect width="25" height="25" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FacebookIcon;
