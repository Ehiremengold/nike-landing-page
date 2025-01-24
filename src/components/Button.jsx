const Button = ({ label, iconURL, fullWidth }) => {
  return (
    <button
      className={`text-lg leading-none text-white font-montserrat font-semibold shadow-xl bg-coral-red flex items-center justify-center gap-5 rounded-full py-4 px-8 ${
        fullWidth ? "w-full" : "w-fit"
      } `}
    >
      {label}
      {iconURL && <img src={iconURL} alt="arrow right icon" />}
    </button>
  );
};
export default Button;
