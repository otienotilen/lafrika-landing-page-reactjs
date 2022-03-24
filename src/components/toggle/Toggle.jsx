import "./toggle.css";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import { Anchor, Drawer, Button } from 'antd';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose} from 'react-icons/md';

const { Link } = Anchor;

const Toggle = () => {
  const theme = useContext(ThemeContext);
const [toggleMenu, setToggleMenu] = React.useState(false);
  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

   const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  
  return (
    <div className="container">

      <h4 >Lafrika</h4>
      <div className="mobileHidden">
      <Anchor targetOffset="80">
        <ul className="list">
         
          <li className="listItem">
             
            <Link className="link" href="#intro" title="HOME" />
             
           </li>
        <li className="listItem">
           <Link href="#aboutus" title="ABOUT US" /> 
        
           </li>
          <li className="listItem">
            <Link href="#ourservices" title="OUR SERVICES" /> 
        
           </li>
            <li className="listItem">
              <Link href="#contactus" title="CONTACT US" /> 
        
           </li>
           
        </ul>
        </Anchor>
         </div>
           
          

         <div className="left">
         <h>+254-748-638-582</h>
       
        <div className="t">
       <div>
      <img src={Moon} alt="" className="t-icon" />
      <img src={Sun} alt="" className="t-icon" />
      </div>
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
       </div>
      

      
      </div> 

      <div>
        <div className="app__navbar-smallscreen">
          
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdClose fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links" targetOffset="80">
              <li><a href="#intro" onClick={() => setToggleMenu(false)}>HOME</a></li>
              <li><a href="#aboutus" onClick={() => setToggleMenu(false)}>ABOUT US</a></li>
              <li><a href="#ourservices" onClick={() => setToggleMenu(false)}>OUR SERVICES</a></li>
              <li><a href="#contactus" onClick={() => setToggleMenu(false)}>CONTACT US</a></li>
              
            </ul>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default Toggle;
