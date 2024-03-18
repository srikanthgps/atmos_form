import React from 'react'
import { NavLink } from 'react-router-dom'
import "./register.css";


const Register = () => {
  return (
    <div>
<body>
     <div className="form">
     <form action="">
     <h1>#Form Name</h1>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
          />
          <label htmlFor="password">Create Password:</label>
          <input
            type="password"
            id="password"
            name="password"
          />
          <label htmlFor="password">Confirm password:</label>
          <input
            type="password"
            id="password"
            name="password"
          />
          
          <NavLink to={"login"}>
        <button type="button" className="btn btn-success">
              Register
            </button>
        </NavLink>
        </form>
     </div>
     </body>
        

     
    </div>
  )
}

export default Register
