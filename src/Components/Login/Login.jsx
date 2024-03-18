import React from 'react'
// import { NavLink } from 'react-router-dom'
import "./login.css"

const Login = () => {
  return (
    <body>
    <div className="formlgn">
    <form action="">
    <h1>#Form Name</h1>
         <label htmlFor="username">Username:</label>
         <input
           type="text"
           id="username"
           name="username"
         />
         <label htmlFor="password">Password:</label>
         <input
           type="password"
           id="password"
           name="password"
         />
         <button type="button" className="btn btn-success">
             Submit
           </button>
       </form>
    </div>

      
      {/* <NavLink to={""}>
        <button type="button" className="btn btn-success">
              Register
            </button>
        </NavLink> */}

        </body>
    
  )
}

export default Login
