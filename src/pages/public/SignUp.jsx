import React from "react";
import { NavLink } from "react-router-dom";
import Eye from "../../assets/images/eye-slash.png";
import StarsImges from "../../Component/StarsImges";
import AvatarImges from "../../Component/AvatarImges";
import FootComp from "../../Component/FootComp";
function SignUp() {
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
          <div className="col-md-6 col-sm-6 content ">
            <h3 className=" heading">Create your enterprise account</h3>
            <p style={{ color: "#667085" }}>To explore create a new account</p>

            <form>
              <div className="from-control">
                <label className="">Enterprice name</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder=" Enter Enterprice name"
                />
              </div>
              <div className="from-control">
                <label className="mt-1">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email Address"
                />
              </div>
              <div className="from-control password ">
                <label className="mt-1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                />
                <img src={Eye} className="icon" />
              </div>

              <div className="from-control">
                <label className="mt-1">Your Name</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="from-control">
                <label className="mt-1">Designation</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter designation"
                />
              </div>
              <div className="d-grid mt-3">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn btn-primary"
                />
              </div>
              <div className="text-center">
                <small className="last-para text-muted">
                  By clicking on sign up, you agree to the Dsaas.ai enterprise
                </small>
              </div>
              <div className="text-center  text-muted">
                <p style={{ color: "#667085" }}>
                  Already Registered?
                  <NavLink to="/" className="text-decoration-none ms-3">
                    Sign In
                  </NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
