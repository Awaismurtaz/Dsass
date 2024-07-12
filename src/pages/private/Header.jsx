import React from "react";
import Search from "../../assets/images/Frame 1000007401.png";

function Header() {
  return (
    <>
      <div className="search ">
        <input
          type="text"
          className="mt-3 search-input"
          placeholder="Search candidate by skill, profile title, education..."
          aria-label="Search"
        />
        <img src={Search} alt="search" className="mt-3 btn-search" />
      </div>
    </>
  );
}

export default Header;
