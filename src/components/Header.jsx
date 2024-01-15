import React, { useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import ButtonOnHover from "./ButtonOnHover";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchGetAuthorizedUser } from "../redux/user/userActions";
import DropDownUserMenu from "./LoginRegisterComponents/DropDownUserMenu";

function Header() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    console.log("start useEffect in Header");
    if (localStorage.getItem("accessToken")) {
      dispatch(fetchGetAuthorizedUser());
    }
  }, [dispatch]);

  return (
    <Navbar data-bs-theme="light" className="py-0 container-fluid">
      <div className="bg-light mx-0 container-fluid">
        <Navbar.Brand
          as={Link}
          to={"/"}
          className="link-underline link-underline-opacity-0 text-black fs-2 fw-bolt my-auto"
        >
          LOGO
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link
            as={Link}
            to="#above-us"
            className="link-underline link-underline-opacity-0 text-black my-auto me-2"
          >
            Above us
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="#contacts"
            className="link-underline link-underline-opacity-0 text-black my-auto me-2"
          >
            Contacts
          </Nav.Link>
          {user ? (
            <DropDownUserMenu />
          ) : (
            <Nav.Link
              as={Link}
              to="/login"
              className="link-underline link-underline-opacity-0 text-black my-auto me-2"
            >
              <ButtonOnHover
                defaultBg={"bg-orange"}
                hoverBg={"bg-orange-dark"}
                className="rounded-pill my-auto py-1"
              >
                Login
              </ButtonOnHover>
            </Nav.Link>
          )}
        </Nav>
      </div>
    </Navbar>
  );
}

export default Header;
