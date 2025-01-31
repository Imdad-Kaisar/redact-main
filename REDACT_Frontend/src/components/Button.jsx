import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || "px-7"
    } ${white ? "text-n-8" : "hover_target text-n-1"} ${className || ""}`;
  const spanClasses = "hover_target relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      <div className="hover_target">{ButtonSvg(white)}</div>
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      <div className="hover_target">{ButtonSvg(white)}</div>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
