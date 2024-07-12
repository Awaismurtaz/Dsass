import React from "react";
import Threedot from "../../assets/images/ellipsis-vertical.png";
import Circal from "../../assets/images/Badge base.png";
import FaceImage from "../../assets/images/Ellipse 488.png";
import FaceImage2 from "../../assets/images/Ellipse 488 (1).png";
import FaceImage3 from "../../assets/images/Ellipse 488 (2).png";
import FaceImage4 from "../../assets/images/Ellipse 488 (3).png";
import Star from "../../assets/images/star (2).png";
import Lock from "../../assets/images/lock-closed.png";
import ContentHead from "./ContentHead";
import Header from "./Header";

function MainContent() {
  return (
    <>
      <Header />
      <ContentHead />
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-md-3"></div>
          <div className="col-md-9">
            <table className="table border border-1 rounded">
              <thead className="table-head">
                <tr>
                  <th scope="col">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                  </th>
                  <th scope="col" className="table-discription">
                    Name
                  </th>
                  <th scope="col">Availability</th>
                  <th scope="col">Source</th>
                  <th scope="col">Experience</th>
                  <th scope="col">Score</th>
                  <th scope="col">Pay Rate</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody className="table-body">
                <tr>
                  <td scope="row">
                    {" "}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                  </td>
                  <td>
                    <img src={FaceImage} className="table-discription" />
                    <br />
                    <span className="star-image">
                      <img src={Star} />
                      Priority
                    </span>
                  </td>
                  <td>From 25 Jan, 2023</td>
                  <td>Platform</td>
                  <td>5 yrs</td>
                  <td>
                    <img src={Circal} className="me-1" />
                  </td>
                  <td>$75 /hour</td>
                  <td>
                    <img src={Threedot} alt="" />
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    {" "}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                  </td>
                  <td>
                    <img src={FaceImage2} className="table-discription" />
                    <br />
                    <span className="lock-image">
                      <img src={Lock} />
                      Priority
                    </span>
                  </td>
                  <td>Immediately</td>
                  <td>Invite</td>
                  <td>5 yrs</td>
                  <td>
                    <img src={Circal} className="me-1" />
                  </td>
                  <td>$75 /hour</td>
                  <td>
                    <img src={Threedot} alt="" />
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    {" "}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                  </td>
                  <td>
                    <img src={FaceImage3} className="table-discription" />
                    <br />
                    <span className="star-image">
                      <img src={Star} />
                      Priority
                    </span>
                  </td>
                  <td>From 25 Jan, 2023</td>
                  <td>Platform</td>
                  <td>5 yrs</td>
                  <td>
                    <img src={Circal} className="me-1" />
                  </td>
                  <td>$75 /hour</td>
                  <td>
                    <img src={Threedot} alt="" />
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    {" "}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                  </td>
                  <td>
                    <img src={FaceImage4} className="table-discription" />
                    <br />
                    <span className="lock-image">
                      <img src={Lock} />
                      Priority
                    </span>
                  </td>
                  <td>Immediately</td>
                  <td>Invite</td>
                  <td>5 yrs</td>
                  <td>
                    <img src={Circal} className="me-1" />
                  </td>
                  <td>$75 /hour</td>
                  <td>
                    <img src={Threedot} alt="" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContent;
