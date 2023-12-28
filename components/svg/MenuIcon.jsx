const MenuIcon = ({ className, ...props }) => {
  return (
    <div className="brand-background rounded-[20px]">
      <div
        className={`p-[20px] border rounded-[20px] h-[100px] w-[100px] bg-[url('/images/bulb-white.svg')] group-hover:bg-[url('/images/bulb-color.svg')] bg-no-repeat bg-center bg-contain bg-origin-content transition-all duration-primary group-hover:border-cyan ${className}`}
        {...props}
      />
    </div>
  );
};

export default MenuIcon;
