import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="navbar bg-second shadow sticky-top">
        <div className="container-fluid container-lg">
          <div className="logo-container">
            <img src="logo-gt.png" alt="logo" className="h-100" />
          </div>
          <div className="d-flex text-first gap-4 py-3">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/projects">
              Progetti
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contattami
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}
