import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown, Image } from "react-bootstrap";
import { logout } from "../../actions/userActions";
import logo from "../../assets/img/logo7.png";

export default function Header() {
  const { isAuthenticated, user } = useSelector((state) => state.authState);
  const { items: cartItems } = useSelector((state) => state.cartState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logout);
  };

  return (
    <nav className="navbar row  bg-black">
      <div className="col-12 col-md-3 ">
        <div className="navbar-brand">
          <Link to="/">
            <img
              className="ml-4 "
              width="200px"
              alt="OrdinaryFitness Logo"
              src={logo}
            />
          </Link>
        </div>
      </div>

      <div className="col-12 col-md-3 mt-2 mt-md-0 text-justify items-center space-x-2 ">
        <Link to="/">
          <span id="cart" className="ml-0 mr-5 font-sans ">
            HOME
          </span>
        </Link>
        <Link to="/home">
          <span id="cart" className="ml-0 mr-5 font-sans">
            SHOP
          </span>
        </Link>
        <Link to="/recipehome">
          <span id="cart" className="ml-0 mr-5 font-sans ">
            RECIPE
          </span>
        </Link>

        <Link to="/blog">
          <span id="cart" className="ml-0 mr-5 font-sans ">
            BLOG
          </span>
        </Link>
      </div>

      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <Link to="/cart">
          <span id="cart" className="ml-0 mr-2 font-sans">
            CART
          </span>
        </Link>

        <span className="ml-2 mr-4" id="cart_count">
          {cartItems.length}
        </span>
        {isAuthenticated ? (
          <Dropdown className="d-inline">
            <Dropdown.Toggle
              variant="default text-white pr-5"
              id="dropdown-basic"
            >
              <figure className="avatar avatar-nav mr-2">
                <Image
                  width="50px"
                  src={user.avatar ?? "./images/default_avatar.png"}
                />
              </figure>
              <span className="font-sans">{user.name}</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {user.role === "admin" && (
                <Dropdown.Item
                  onClick={() => {
                    navigate("admin/dashboard");
                  }}
                  className="text-dark"
                >
                  Dashboard
                </Dropdown.Item>
              )}
              {user.role === "admin" && (
                <Dropdown.Item
                  onClick={() => {
                    navigate("/write");
                  }}
                  className="text-dark"
                >
                  Write Blog
                </Dropdown.Item>
              )}
              {user.role === "admin" && (
                <Dropdown.Item
                  onClick={() => {
                    navigate("/recipe");
                  }}
                  className="text-dark"
                >
                  Write Recipe
                </Dropdown.Item>
              )}
              <Dropdown.Item
                onClick={() => {
                  navigate("/myprofile");
                }}
                className="text-dark"
              >
                Profile
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  navigate("/orders");
                }}
                className="text-dark"
              >
                Orders
              </Dropdown.Item>
              <Dropdown.Item onClick={logoutHandler} className="text-danger">
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Link to="/login" className="btn" id="login_btn">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
