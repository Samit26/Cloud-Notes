import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context/store";

const Header = () => {
  const { setAuth } = useContext(DataContext);
  return (
    <>
      <header
        className="p-3  border-bottom"
        style={{ backgroundColor: "#424874" }}
      >
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center  mb-lg-0 justify-content-end  pe-2 text-decoration-none"
            >
              <img
                src="CloudNotes.jpg"
                style={{ width: "20%", height: "20%" }}
              ></img>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ">
              <li>
                <Link
                  to="/signup"
                  className="nav-link px-2 link-light"
                  onClick={() => {
                    setAuth("");
                  }}
                >
                  Logout
                </Link>
              </li>
              <li>
                <a href="#" className="nav-link px-2 link-light">
                  About
                </a>
              </li>
            </ul>

            <div
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
              ></input>
            </div>

            <div className="dropdown text-end">
              <a
                href="#"
                className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </a>
              <ul className="dropdown-menu text-small">
                <li>
                  <a className="dropdown-item" href="#">
                    New project...
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
