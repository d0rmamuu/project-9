import React from 'react';
import "./Login.css"
import axios from 'axios'
import { useState } from "react"

const Home =() =>{ 
	 
	const [user,setUser] = useState("");
	const [email,setEmail] = useState("");
	const [phone,setPhone] = useState("");
	const [pass,setPass] = useState("");
	const [confirmPassword,setConfirmPassword] = useState("");

	const onSubmit=async (f) =>{
		f.preventDefault()
		console.log("signed in")
		await axios.post('/signups',{
			user:user,
			pass:pass,
			email:email,
			phone:phone
			})
			console.log("done")
		}
	
	
	  return (
		  
		  <div className="main">
		  <div className="container">
		  
	  
	  <div className="formBox">
		  <div className="form_login signinForm">
			  <form>
				  <h3>Sign In</h3>
				  <input type="text" placeholder="Username"
				//  		onChange={(event) => setUserName(event.target.value)}
			  //	value={userName}
					  
				  />
				  <input type="password" name="" placeholder="Password"/>
				  <input type="submit" name="" value="login"/>
				  <a href="#" className="forgot">Forgot Password</a>
			  </form>
		  </div>
  
  
		  <div className="form_login signupForm">
			  <form  onSubmit={onSubmit}>
				  <h3>Sign Up</h3>
				  <input type="text" placeholder="Username"
			  		onChange={(event) => setUser(event.target.value)}
			  			value={user}
					  
				  />
				  <input type="text" placeholder="Email"
			  		onChange={(event) => setEmail(event.target.value)}
			  			value={email}
					  
				  />
				  <input type="text" placeholder="Phone"
			  		onChange={(event) => setPhone(event.target.value)}
			  			value={phone}
					  
				  />
				  <input type="password" name="" placeholder="Password"
			  		onChange={(event) => setPass(event.target.value)}
			  			value={pass}
					  
				  />
				  <input type="password" name="" placeholder="Confirm Password"
			  		onChange={(event) => setConfirmPassword(event.target.value)}
			  			value={confirmPassword}
					  
				  />
				  <input type="submit" name="" value="Register"/>
			  </form>
		  </div>
	  </div>
  </div>
  </div>
   ) 
  }  
  
  export default Home