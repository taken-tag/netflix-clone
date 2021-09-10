import {React, useEffect, useState} from 'react';
import "./nav.css";
import {useHistory} from "react-router-dom";


function Nav() {

    const [show, handleShow] = useState();
    const history = useHistory();

    const transitionNavBar = ()=>{
        if(window.scrollY > 100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    }

   useEffect( ()=>{
   window.addEventListener("scroll", transitionNavBar);
   return()=>{
       window.addEventListener("scroll", transitionNavBar);
   }
   },[])

    return (
        <div className={`nav ${show && "nav_black"}`}>
        <div className="nav_contents">

        <img onClick={() =>history.push('./')} className="nav_logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo" />

        <img onClick={()=> history.push('./profile')} className="nav_avatar" src="https://i.pinimg.com/originals/e3/94/30/e39430434d2b8207188f880ac66c6411.png" alt="" />


        </div>
 
        </div>
    )
}

export default Nav
