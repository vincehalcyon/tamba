const SVGDynamicIconComponent = ({
  className = "text-black dark:text-white",
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 9 16"
      fill="none"
      width="100%"
      height="100%"
      className={`duration-primary transition-all ${className}`}
      {...props}
    >
      <path
        d="M7.94757 8.93204L8.38835 6.05825L5.63107 6.05825L5.63107 4.19417C5.63107 3.40777 6.01554 2.64078 7.25049 2.64078L8.50486 2.64078L8.50486 0.194175C8.50486 0.194175 7.36699 0 6.27961 0C4.00777 0 2.52427 1.3767 2.52427 3.86796L2.52427 6.05825L0 6.05825L0 8.93204L2.52427 8.93204L2.52427 15.8796C3.03107 15.9592 3.54952 16 4.07767 16C4.60583 16 5.12427 15.9592 5.63107 15.8796L5.63107 8.93204L7.94757 8.93204Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SVGDynamicIconComponent;
