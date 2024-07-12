import React from "react";
import User from "../../../assets/images/user-circle.png";
import Brush from "../../../assets/images/paint-brush.png";
import LockClose from "../../../assets/images/lockclose.png";
import Bell from "../../../assets/images/Group 1000007598.png";
import { NavLink, Route, Routes } from "react-router-dom";





function SettingSideBarContent() {
  const NavLinkCss = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "#EAF4FF" : "transparent",
      color: isActive ? "#0071E3" : "#667085",
    
    };
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 ms-5 mt-5">
            <h2 className="my-4">Setting</h2>
            <div className="ms-5">
              <NavLink to="basicdetails" className="text-decoration-none" style={NavLinkCss}>
                <span><img src={User} alt="" className="me-2 userimage" />Basic Details</span>
                <p className="text-muted">
                  Manage all your account settings, change the settings of state
                  of account, deactivate, hide and delete account
                </p>
              </NavLink>
            </div>
            <div className="ms-5">
              <NavLink
                to="passwords&security"
                className="text-decoration-none"
                style={NavLinkCss}
              >
                <img src={LockClose} alt="" className="me-2 userimage" />
                <span>Password & Security</span>
                <p className="text-muted">
                  Manage all your passwords, change your password
                </p>
              </NavLink>
            </div>

            <div className="ms-5">
              <NavLink
                to="notification"
                className="text-decoration-none"
                style={NavLinkCss}
              >
                <img src={Bell} alt="" className="me-2 userimage" />
                <span>Notifications</span>
                <p className="text-muted">
                  You can view your notificstions in this tab.Manage
                  notifications.
                </p>
              </NavLink>
            </div>
            <div className="ms-5">
              <NavLink
                to="theme"
                className="text-decoration-none"
                style={NavLinkCss}
              >
                <img src={Brush} alt="" className="me-2 userimage" />
                <span>Theme</span>
                <p className="text-muted">
                  Choose the best theme which suits you. We provide with a great
                  theme options to choose from
                </p>
              </NavLink>
            </div>
          </div>
          <div className="col-7">
          
          </div>
        </div>
      </div>
        
    </>
  );
}

export default SettingSideBarContent;
