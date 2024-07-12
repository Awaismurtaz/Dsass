import React from "react";
import MagnifyingGlass from "../../assets/images/magnifying-glass.png";
import Comment from "../../assets/images/Frame 1000008215.png";

function JobListHead() {
  return (
    <>
      <div className="search ">
        <img src={MagnifyingGlass} className=" magnify" />
        <input
          type="text"
          className="mt-3 search-input-joblist"
          placeholder="Search candidate by skill, profile title, education..."
          aria-label="Search"
        />
        {/* <img src={Comment} alt='' style={{height:'30px', marginTop:'29px'}}/> */}
      </div>
    </>
  );
}

export default JobListHead;
