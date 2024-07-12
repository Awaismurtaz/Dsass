import React from "react";
import CheckList from "../assets/images/Checklist Empty.png";
import Share from "../assets/images/share.png";
import Threedots from "../assets/images/threedots.png";

function ActionImages() {
  return (
    <>
      <img src={CheckList} alt="" />
      <img src={Share} className="mx-3" />
      <img src={Threedots} style={{ background: "#EAF4FF" }} />
    </>
  );
}

export default ActionImages;
