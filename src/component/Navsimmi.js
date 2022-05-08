import React from 'react'
import "./Navsimmi.css";
import HamburgerDrawerSimmi from "./HamburgerDrawerSimmi";

const Navsimmi = ({setCategory}) => {
  return (
    <div className="nav">
      <div className='icon'>
          <HamburgerDrawerSimmi setCategory={setCategory} />
      </div>
      <img
      style={{cursor: "pointer"}}
      src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png' height= "80%"
      alt="logo"
      />
      
    </div>
  )
}

export default Navsimmi
