import React from 'react'
import Comment from "../assets/images/Frame (2).png";
import Bell from "../assets/images/bell.png";
import Google from "../assets/images/google.png"
import Down from "../assets/images/chevron-down.png"

function HeadActionImage() {
  return (
    <>
    <img src={Comment} alt='' className='ms-3'/>
        <img src={Bell} alt='' className='ms-3'/>
        <img src={Google} alt='' className='ms-3'/>
        <img src={Down} alt='' className='ms-2'/>
    </>
  )
}

export default HeadActionImage