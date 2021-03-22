import React, { useState, useEffect } from "react";
import logo from "../../Images/logo-1.png";
import "../../pages/CSS/Nav.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import API from "../../api";
import { setUserInfo, userLogout } from "../../actions/user_action";

function Nav(props) {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.userReducer.accessToken);
  const userInfo = useSelector((state) => state.userReducer.userInfo);

  useEffect(() => {
    async function fetchUserData() {
      const userData = await axios.get(API.USER_INFO, {
        withCredentials: true,
        headers: {
          authorization: "Bearer " + accessToken,
        },
      });
      dispatch(setUserInfo(userData));
    }
    fetchUserData();
  }, [accessToken]);

  return (
    <div className="nav">
      {userInfo ? (
        <div>안녕하세요 !! {userInfo.data.userName}님</div>
      ) : (
        <div>안녕하세요 !! 고객님</div>
      )}

      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      {accessToken ? (
        <div className="nav-btn-group">
          <button className="btn-logout">
            <Link
              to="/login"
              onClick={() => {
                dispatch(userLogout());
              }}
            >
              로그아웃
            </Link>
          </button>
          <button className="btn-Mykitchen">
            <Link to="/mykitchen">my 부엌</Link>
          </button>
        </div>
      ) : (
        <div className="nav-btn-group">
          <button className="btn-login">
            <Link to="/login">Log in</Link>
          </button>
          <button className="btn-signup">Sign up</button>
        </div>
      )}
    </div>
  );
}

export default Nav;