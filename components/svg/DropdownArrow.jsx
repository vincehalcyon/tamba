const DropdownArrow = ({ className = "stroke-white", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 13 13"
      fill="none"
      width="13"
      height="13"
      className={`duration-primary transition-all h-[16px] w-[16px] ${className}`}
      style={{ stroke: "white" }}
      {...props}
    >
      <path
        d="M9.85571 4.625L6.10571 8.375L2.35571 4.625"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DropdownArrow;
