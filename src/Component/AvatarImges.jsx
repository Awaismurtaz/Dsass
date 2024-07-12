import React from "react";
import Avatarwrap from "../assets/images/Avatarwrap.png";
import Avatarwrap1 from "../assets/images/Avatarwrap1.png";
import Avatarwrap2 from "../assets/images/Avatarwrap2.png";
import Avatarwrap3 from "../assets/images/Avatarwrap3.png";
import Avatarwrap4 from "../assets/images/Avatarwrap4.png";

function AvatarImges() {
  return (
    <div className="avatarimg-area mx-3">
      <img src={Avatarwrap} className="Avatarwrap" />
      <img src={Avatarwrap1} className="Avatarwrap" />
      <img src={Avatarwrap2} className="Avatarwrap" />
      <img src={Avatarwrap3} className="Avatarwrap" />
      <img src={Avatarwrap4} className="Avatarwrap" />
    </div>
  );
}

export default AvatarImges;
