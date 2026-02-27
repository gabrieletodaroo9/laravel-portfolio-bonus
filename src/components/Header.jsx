import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-second shadow sticky-top">
      <div className="container-fluid container-lg">
        <NavLink className="navbar-brand" to="/">
          <img src="logo-gt.png" alt="logo" style={{ maxHeight: "40px" }} />
        </NavLink>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto p-2 mb-2 mb-lg-0 gap-lg-3">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                onClick={() =>
                  document.querySelector(".navbar-toggler").click()
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/projects"
                onClick={() =>
                  document.querySelector(".navbar-toggler").click()
                }
              >
                Progetti
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact"
                onClick={() =>
                  document.querySelector(".navbar-toggler").click()
                }
              >
                Contattami
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
