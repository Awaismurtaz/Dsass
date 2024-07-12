import React from "react";
import JobFrame from "../../assets/images/Frame.png";
import Right from "../../assets/images/Right 16px.png";
import Location from "../../assets/images/Frame (3).png";
import DotEllips from "../../assets/images/Ellipse 487.png";
import Search from "../../assets/images/Frame 1000007401.png";
import Adjustment from "../../assets/images/adjustments-horizontal.png";
import { Link } from "react-router-dom";

function ContentHead() {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-md-3"></div>
          <div className="col-md-9">
            <div className="head-area mt-2">
              <p>
                <img src={JobFrame} className="me-3" />
                <span className="head-text">Job</span>
                <img src={Right} className="mx-2" />
                <span className="head-text">UI/UX Researcher</span>
              </p>
            </div>
            <div className="heading">
              <h5 className="heading-UI-text">UI/UX Researcher</h5>
              <Link to="/" className="text-decoration-none UI-view mx-3 mt-1">
                View detail
              </Link>
            </div>
            <div className="location">
              <span className="location-text">
                <img src={Location} className="me-1" />
                Noida, India
              </span>
              <span className="badge rounded-pill  mx-3">
                <img src={DotEllips} className="me-1" />
                Open
              </span>
            </div>
            <div className="text-list my-4">
              <span className="text-item">
                Matching Candidates
                <small className="text-numbers mx-2">23</small>
              </span>
              <span>
                Shortlisted<small className="text-number mx-2">02</small>
              </span>
              <span>
                Applied<small className="text-number mx-2">03</small>
              </span>
              <span>
                Offered<small className="text-number mx-2">02</small>
              </span>
              <span>
                Onboarded<small className="text-number mx-2">02</small>
              </span>
              <span>
                Onboarded<small className="text-number mx-2">02</small>
              </span>
            </div>

            <div className="maincontent">
              <h5 className="mt-2">Matching Candidates</h5>
              <form className="d-flex">
                <div className="searching  ">
                  <input
                    type="text"
                    className=" searching-input"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <img src={Search} alt="search" className=" btn-searching" />
                </div>
                <span className=" ms-2 adjustment">
                  <img src={Adjustment} className="me-2" />
                  Filter
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentHead;
