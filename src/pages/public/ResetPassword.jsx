import React from "react";
import { NavLink } from "react-router-dom";
import EyeImges from "../../Component/EyeImges";
import StarsImges from "../../Component/StarsImges";
import AvatarImges from "../../Component/AvatarImges";
import FootComp from "../../Component/FootComp";
function ResetPassword() {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
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
          <div className="col-md-6 col-sm-6 my-3 content ">
            <h3 className="mt-4">Forgot Password</h3>
            <p style={{ color: "#667085", lineHeight: "20.8px" }}>
              Please fill the below field to reset the password
            </p>
            <br />
            <form>
              <div className="from-control">
                <label className="my-2">Verifiction code</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=" Enter Verifiction code"
                />
              </div>
              <div className="from-control password ">
                <label className="my-2">New Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter new Password"
                />
                <EyeImges />
              </div>
              <div className="from-control password">
                <label className="my-2">Confirm new Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm new Password"
                />
                <EyeImges />
              </div>
              <div className="text-center mt-3 fw-normal">
                Code not recived?
                <NavLink to="/OtpCode" className="text-decoration-none ms-3">
                  Resend
                </NavLink>
              </div>
              <div className="d-grid my-4">
                <input
                  type="submit"
                  value="Create Password"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
