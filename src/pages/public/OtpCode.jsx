import React from "react";
import { NavLink } from "react-router-dom";
import StarsImges from "../../Component/StarsImges";
import AvatarImges from "../../Component/AvatarImges";
import FootComp from "../../Component/FootComp";

function OtpCode() {
  return (
    <>
      <div className="container-fluid ">
        <div className="row ">
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
          <div className="col-md-6 col-sm-6  my-3 content ">
            <h3 className="mt-5">OTP Verification</h3>
            <p style={{ color: "#667085", lineHeight: "20.8px" }}>
              You have received an OTP on your email ID
            </p>
            <br />

            <form>
              <span className="parent my-2">
                <input type="text" className="input-box" />
                <input type="text" className="input-box  ms-2" />
                <input type="text" className="input-box  ms-2" />
                <input type="text" className="input-box  ms-2" />
                <input type="text" className="input-box  ms-2" />
                <input type="text" className="input-box  ms-2" />
              </span>
              <div className="display-text mt-2">
                <p>Code not received?</p>
                <NavLink to="" className="text-decoration-none ms-2">
                  Resend
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/"
                  className="d-grid my-3
                 text-decoration-none"
                >
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-primary"
                  />
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default OtpCode;
