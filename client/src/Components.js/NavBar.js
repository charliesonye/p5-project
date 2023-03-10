import React from 'react'
import {NavLink} from 'react-router-dom'

 function NavBar({setUser}) {
 

const linkStyles = {
  display: "inline-block",
  fontFamily: 'Kongtext',
  borderRadius: "25px",
  width: "90px",
  padding: "12px",
  margin: "0 12px 6px",
  background: "black",
  textDecoration: "none",
  color: "white",
}; 

  
  function handleLogout(){
    fetch('/logout', {
      method: 'DELETE'
     }).then((res)=> {
      if(res.ok){
        setUser(null)
      }
     })
  }
  
  return (
    <div>
      <NavLink end to='/' style={linkStyles}>
        Home
      </NavLink>
      <NavLink to='/sleep_records' style={linkStyles}> 
        Sleep Records
      </NavLink>
      <NavLink to='/appointments' style={linkStyles}> 
        Appointments
      </NavLink>
      <NavLink to='/sleep_chart' style={linkStyles}>
        Sleep Chart
      </NavLink>
      <NavLink to='/add_sleep_time' style={linkStyles}>
        Add Sleep Time
      </NavLink>
      
      <button onClick={handleLogout} > Log Out</button>
      
     
     
     
    </div>
  )
}


   

export default NavBar