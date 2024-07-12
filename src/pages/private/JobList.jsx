import React from "react";
import Select from "react-select";
import Location from "../../assets/images/Frame (3).png";
import DotEllips from "../../assets/images/Ellipse 487.png";
import Calender from "../../assets/images/calendar-days.png";
import MagnifyingGlass from "../../assets/images/magnifying-glass.png";
import Adjustment from "../../assets/images/adjustments.png";
import ArrowBars from "../../assets/images/bars-arrow-down.png";
import ActionImages from "../../Component/ActionImages";
import JobListHead from "./JobListHead";

function JobList() {
  const options = [
    { value: "Upload File", label: "Upload File" },
    { value: "View Job Logs", label: "View Job Logs" },
  ];

  return (
    <>
      <JobListHead />
      <div className="container-fluid ">
        <div className="row mt-4">
          <div className="col-md-3"></div>
          <div className="col-md-9">
            <div className="d-flex my-3 ">
              <span className=" flex-grow-1 content-text">
                Jobs<small className="number-text">(24)</small>
              </span>
              <span>
                <img src={MagnifyingGlass} className="magnifying" />
              </span>
              <span className=" ms-2 adjustment-arrow">
                <img src={Adjustment} className="me-2" />
                Filter
              </span>
              <span className=" ms-2 adjustment-arrow">
                <img src={ArrowBars} className="me-2" />
                Sort by: Latest
              </span>
              <Select
                options={options}
                className="text-muted ms-2"
                placeholder="Upload"
              />
              <input
                type="submit"
                className="btn btn-primary ms-2"
                value="Create Job"
              />
            </div>
            <div className="table-responsive">
              <table className="table">
                <thead className="table-head">
                  <tr>
                    <th scope="col">Job Title</th>
                    <th scope="col">Status</th>
                    <th scope="col"># Openings</th>
                    <th scope="col">#Applicants</th>
                    <th scope="col">Job Manager</th>
                    <th scope="col">Type</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  {/* first table row */}
                  <br />
                  <tr>
                    <td>
                      <p className="text-primary fw-bold">Java Developer</p>
                      <p className="mb-2 text-muted">
                        <img src={Location} className="me-1" />
                        Noida, India
                      </p>
                      <p className="mb-2 text-muted">
                        <img src={Calender} className="me-1" />
                        Apr 04, 2023, 18:39
                      </p>
                    </td>
                    <td>
                      <span className="badged rounded-pill ">
                        <img src={DotEllips} className="me-1" />
                        Open
                      </span>
                      <p className="badged rounded-pill expiri-date ">
                        Expiring in 3 days
                      </p>
                    </td>
                    <td>1</td>
                    <td>0</td>
                    <td>
                      <span className="round-text me-2">J</span>John Jacob
                    </td>
                    <td>Full Time, Part Time</td>
                    <td>
                      <ActionImages />
                    </td>
                  </tr>
                  {/* Second table row */}
                  <br />
                  <tr>
                    <td>
                      <p className="text-primary fw-bold">Java Developer</p>
                      <p className="mb-2 text-muted">
                        <img src={Location} className="me-1" />
                        Noida, India
                      </p>
                      <p className="mb-2 text-muted">
                        <img src={Calender} className="me-1" />
                        Apr 04, 2023, 18:39
                      </p>
                    </td>
                    <td>
                      <span className="badged rounded-pill ">
                        <img src={DotEllips} className="me-1" />
                        Open
                      </span>
                    </td>
                    <td>1</td>
                    <td>0</td>
                    <td>
                      <span className="round-text me-2">J</span>John Jacob
                    </td>
                    <td>Full Time, Part Time</td>
                    <td>
                      <ActionImages />
                    </td>
                  </tr>
                  {/* third table row */}
                  <br />
                  <tr>
                    <td>
                      <p className="text-primary fw-bold">Java Developer</p>
                      <p className="mb-2 text-muted">
                        <img src={Location} className="me-1" />
                        Noida, India
                      </p>
                      <p className="mb-2 text-muted">
                        <img src={Calender} className="me-1" />
                        Apr 04, 2023, 18:39
                      </p>
                    </td>
                    <td>
                      <span className="badged rounded-pill ">
                        <img src={DotEllips} className="me-1" />
                        Open
                      </span>
                    </td>
                    <td>1</td>
                    <td>0</td>
                    <td>
                      <span className="round-text me-2">J</span>John Jacob
                    </td>
                    <td>Full Time, Part Time</td>
                    <td>
                      <ActionImages />
                    </td>
                  </tr>
                  {/* forth table row */}
                  <br />
                  <tr>
                    <td>
                      <p className="text-primary fw-bold">Java Developer</p>
                      <p className="mb-2 text-muted">
                        <img src={Location} className="me-1" />
                        Noida, India
                      </p>
                      <p className="mb-2 text-muted">
                        <img src={Calender} className="me-1" />
                        Apr 04, 2023, 18:39
                      </p>
                    </td>
                    <td>
                      <span className="badged rounded-pill ">
                        <img src={DotEllips} className="me-1" />
                        Open
                      </span>
                    </td>
                    <td>1</td>
                    <td>0</td>
                    <td>
                      <span className="round-text me-2">J</span>John Jacob
                    </td>
                    <td>Full Time, Part Time</td>
                    <td>
                      <ActionImages />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobList;
