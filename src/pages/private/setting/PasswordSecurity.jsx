import React from 'react'

function PasswordSecurity() {
  return (
    
    <>
    <div className="row">
      <div className="col-7">
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
                  value="Update Basic Details"
                  className="btn btn-primary"
                />
              </div>
            </form>

      </div>
    </div>
       
    </>
  )
}

export default PasswordSecurity