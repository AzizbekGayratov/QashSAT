import { Link } from "react-router-dom";

function Button({ children, to, variant = "primary", type = "button", ...props }) {
  const className = `ui-button ui-button-${variant}`;

  if (to) {
    return <Link to={to} className={className} {...props}>{children}</Link>;
  }

  return <button type={type} className={className} {...props}>{children}</button>;
}

export default Button;
