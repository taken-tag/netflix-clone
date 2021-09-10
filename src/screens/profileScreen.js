import React from 'react'
import "./profileScreen.css"
import Nav from "../Nav"
import {auth} from "../firebase"
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'


function ProfileScreen() {

    const user = useSelector(selectUser);



    return (
        <div className="profileScreen">
           <Nav/>

           <div className="profileScreen_body">
               <h1>Edit Profile</h1>
               <div className="profileScreen_info">
                   <img src="https://i.pinimg.com/originals/e3/94/30/e39430434d2b8207188f880ac66c6411.png" alt="avatar" />
                   <div className="profileScreen_details">
                       <h2>{user.email}</h2>
                       <div className="profileScreen_plans">
                              <h3>Plans</h3>

                           <button onClick={()=> auth.signOut()} className="profileScreen_signout">
                              Sign Out
                           </button>
                       </div>
                   </div>
 

               </div>
           </div>
        </div>
    )
}

export default ProfileScreen
