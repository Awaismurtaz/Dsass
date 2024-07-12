import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Bag from "../../assets/images/briefcase.png";
import Users from "../../assets/images/users.png";
import Envelope from "../../assets/images/envelope.png";
import Talent from "../../assets/images/user-group.png";
import Candidate from "../../assets/images/computer-desktop.png";
import Analytic from "../../assets/images/chart-bar-square.png";
import Setting from "../../assets/images/cog-6-tooth.png";

function SideBarMenu() {
  const NavLinkCss = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "#EAF4FF" : "transparent",
      color: isActive ? "#0071E3" : "#667085",
      padding: isActive ? "15px 26px 15px 31px" : "0",
      borderRadius: isActive ? "8px" : "0",
      marginLeft: isActive ? "0" : "31px",
    };
  };
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-auto col-md-2">
            <div className=" sidebar">
              <NavLink to="/" className="text-decoration-none">
                <div className="Logo-Area mt-4">
                  <p className="Logo ms-5">DS</p>
                  <p className="Logo-Text">aaS.ai</p>
                </div>
              </NavLink>
              <div className="menu my-4 mx-3">
                <NavLink
                  to="MachtingCandidates"
                  className="text-decoration-none "
                  style={NavLinkCss}
                >
                  <img src={Bag} alt="" className="me-3" />
                  <span className="menu-text">Jobs</span>
                </NavLink>

                <NavLink
                  to="/user"
                  className="text-decoration-none   "
                  style={NavLinkCss}
                >
                  <img src={Users} alt="" className="me-3 ms" />
                  <span className="menu-text"> My Candidates</span>
                </NavLink>
                <NavLink
                  to="/envelop"
                  className="text-decoration-none "
                  style={NavLinkCss}
                >
                  <img src={Envelope} alt="" className="me-3" />
                  <span className="menu-text">Campaigns</span>
                </NavLink>
                <NavLink
                  to="joblist"
                  className="text-decoration-none  "
                  style={NavLinkCss}
                >
                  <img src={Talent} alt="" className="me-3" />
                  <span className="menu-text">Talent Pool</span>
                </NavLink>
                <NavLink
                  to="/candidate"
                  className="text-decoration-none  "
                  style={NavLinkCss}
                >
                  <img src={Candidate} alt="" className="me-3" />
                  <span className="menu-text">Candidate</span>
                </NavLink>
                <NavLink
                  to="/analytic"
                  className="text-decoration-none  "
                  style={NavLinkCss}
                >
                  <img src={Analytic} alt="" className="me-3" />
                  <span className="menu-text">Analytics</span>
                </NavLink>
                <NavLink
                  to="/setting"
                  className="text-decoration-none  "
                  style={NavLinkCss}
                >
                  <img src={Setting} alt="" className="me-3" />
                  <span className="menu-text">Setting</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default SideBarMenu;
