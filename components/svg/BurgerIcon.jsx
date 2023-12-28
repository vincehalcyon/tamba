const MenuBurgerIcon = ({
  className = "text-white h-[20px] w-[32px]",
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 24"
      fill="none"
      width="100%"
      height="100%"
      className={`duration-primary transition-all ${className}`}
      {...props}
    >
      <path
        d="M34 2H2M34 12H2M34 22H2"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default MenuBurgerIcon;
