import React from 'react'
import { Outlet } from 'react-router-dom';
import SettingHead from "./SettingHead";
import SettingSideBarContent from './SettingSideBarContent';


function Setting() {
  return (
    <>
    <SettingHead/>
        <Outlet/>
    <SettingSideBarContent/>
       
    
    </>
  )
}

export default Setting