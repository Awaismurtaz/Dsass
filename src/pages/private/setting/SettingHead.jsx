import React from 'react'
import MagnifyingGlass from "../../../assets/images/magnifying-glass.png";
import BarCenter from "../../../assets/images/bars-3-center-left.png"
import UpDown from "../../../assets/images/chevron-up-down.png"
import { NavLink} from "react-router-dom";
import HeadActionImage from "../../../Component/HeadActionImage"

function SettingHead() {
  return (
    <>
    <div className='conatiner-fluid'>
        <div className='row me-0 border-bottom border-3  border-light'>
            <div className='col-md-3 border-end'>
            <NavLink to="/" className="text-decoration-none">
                <div className="Logo-Area mt-2">
                    <img src={BarCenter} alt='' className='mt-2 ms-3' style={{height:'31px'}}/>
                  <p className="Logo ms-3">DS</p>
                  <p className="Logo-Text me-4">aaS.ai</p>
                    <img src={UpDown} alt='' className='mt-2 ms-3' style={{height:'31px'}}/>
                </div>
              </NavLink>
            </div>
            <div className='col-8 setting-search'>
        <img src={MagnifyingGlass}  alt='' className=" setting-magnify" />
        <input
          type="text"
          className="mt-1 search-input-joblist"
          placeholder="Search candidate by skill, profile title, education..."
          aria-label="Search"
        />
        </div>
        <div className='col-1 HeadImage mt-4'>
        <HeadActionImage/>
        </div>
            </div>
        </div>
        
    </>
  )
}

export default SettingHead