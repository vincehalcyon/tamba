const LinkedinIcon = ({ className = "text-white", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    className={`duration-300 transition-all ${className}`}
    {...props}
  >
    <g clipPath="url(#clip0_31_4057)">
      <path
        d="M23.1494 0H1.8457C0.825195 0 0 0.805664 0 1.80176V23.1934C0 24.1895 0.825195 25 1.8457 25H23.1494C24.1699 25 25 24.1895 25 23.1982V1.80176C25 0.805664 24.1699 0 23.1494 0ZM7.41699 21.3037H3.70605V9.37012H7.41699V21.3037ZM5.56152 7.74414C4.37012 7.74414 3.4082 6.78223 3.4082 5.5957C3.4082 4.40918 4.37012 3.44727 5.56152 3.44727C6.74805 3.44727 7.70996 4.40918 7.70996 5.5957C7.70996 6.77734 6.74805 7.74414 5.56152 7.74414ZM21.3037 21.3037H17.5977V15.5029C17.5977 14.1211 17.5732 12.3389 15.6689 12.3389C13.7402 12.3389 13.4473 13.8477 13.4473 15.4053V21.3037H9.74609V9.37012H13.3008V11.001H13.3496C13.8428 10.0635 15.0537 9.07227 16.8555 9.07227C20.6104 9.07227 21.3037 11.543 21.3037 14.7559V21.3037Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_31_4057">
        <rect width="25" height="25" fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
);

export default LinkedinIcon;
