import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import profile from "../../assets/images/profile.svg";
import { fetchLogout } from "../../redux/authActions";

const DropDownUserMenu = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(fetchLogout());
  };

  return (
    <div className="flex-row d-flex">
      <img
        src={user.photo_profile || profile}
        alt={user.img_alt}
        width="32"
        height="32"
        className="rounded-circle me-2 my-auto"
      />
      <NavDropdown
        title={user.first_name || user.email}
        id="collasible-nav-dropdown"
        align="end"
      >
        <NavDropdown.Item as="li">
          <Nav.Link as={Link} to="#update-account" className="text-black">
            Change Account
          </Nav.Link>
        </NavDropdown.Item>
        <NavDropdown.Item as="li">
          <Nav.Link as={Link} to="#personal-area" className="text-black">
            Personal Area
          </Nav.Link>
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as="li">
          <div className="text-black btn" onClick={() => logout()}>
            Logout
          </div>
        </NavDropdown.Item>
      </NavDropdown>
    </div>
  );
};

export default DropDownUserMenu;
