import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.svg";

const links = [
  { label: "Home", to: "/", end: true },
  { label: "Map", to: "/map" },
  { label: "About", to: "/about" },
];

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <NavLink to="/" className="logo" aria-label="QashqaSat home">
          <span className="logo-mark">
            <img src={Logo} alt="" className="logo-image" width={32} height={32} />
          </span>
          <span>Qashqa<span>Sat</span></span>
        </NavLink>

        <nav className="nav-links" aria-label="Main navigation">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <NavLink to="/map" className="nav-cta">
          Get Started
        </NavLink>
      </div>
    </header>
  );
}

export default Navbar;
