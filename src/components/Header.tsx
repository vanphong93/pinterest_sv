import { Link, useNavigate } from "react-router-dom";
import { InfoUser } from "../interface/user";
import { localServ } from "../services/localService";
import { dataUser } from "../utilities/InfoUser";
export default function Header() {
  const logOut = () => {
    localServ.user.remove();
    window.location.reload();
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to={""}>
          Logo
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {dataUser ? (
              <>
                {" "}
                <li>
                  <Link className="nav-link" to={"/user"}>
                    User
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      logOut();
                    }}
                    className="nav-link"
                    to={"/"}
                  >
                    Log out
                  </Link>
                </li>
              </>
            ) : (
              <>
                {" "}
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to={"/login"}>
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
