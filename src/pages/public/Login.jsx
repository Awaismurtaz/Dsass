import React from "react";
import { NavLink } from "react-router-dom";
import EyeImges from "../../Component/EyeImges";
import StarsImges from "../../Component/StarsImges";
import AvatarImges from "../../Component/AvatarImges";
import FootComp from "../../Component/FootComp";

function Login() {
  return (
    <>
      <div className="container-fluid">
        <div className="row  justify-content-center">
          <div className="col-md-6 back">
            <div className="logo-area mx-4 my-3">
              <p className="logo">DS</p>
              <p className="logo-text">aaS.ai</p>
            </div>
            <br />
            <div className="mb-3 mt-5 mx-4">
              <StarsImges />
            </div>
            <div className="mx-4 text-light supporting-text">
              <p className="">
                Our end-to-end talent cloud platform works harder to find
                quality candidates you need on-demand
              </p>
            </div>
            <div className="avatar-area mx-4 my-4">
              <AvatarImges />
              <p className="avatar-text">
                Discover, align, evaluate, and oversee top talent with
                unparalleled efficiency.
              </p>
            </div>
            <FootComp />
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6 content">
            <h3 className="mt-5">Welcome to DSaaS.ai</h3>
            <p style={{ color: "#667085", lineHeight: "20.8px" }}>
              Please fill your login details in the below fields
            </p>

            <br />
            <form>
              <div className="from-control">
                <label className="my-2">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email Address"
                />
              </div>
              <div className="from-control password ">
                <label className="my-2">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                />
                <EyeImges />
              </div>
              <div className="text-end my-3 fw-normal">
                <NavLink to="/forgotpassword" className="text-decoration-none">
                  ForgetPassword?
                </NavLink>
              </div>
              <NavLink to="/joblisting">
                <div className="d-grid">
                  <input
                    type="submit"
                    value="Sign In"
                    className="btn btn-primary"
                  />
                </div>
              </NavLink>
              <div className="text-center my-3 fw-normal">
                <NavLink to="/signup" className="text-decoration-none ">
                  Create a new account
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
