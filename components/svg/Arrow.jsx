const Arrow = ({ className = "text-white", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 24"
      fill="none"
      width="100%"
      height="100%"
      className={`duration-primary transition-all h-[16px] w-[16px] ${className}`}
      {...props}
    >
      <path
        d="M5.25 12L20.25 12M20.25 12L13.5 5.25M20.25 12L13.5 18.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Arrow;
