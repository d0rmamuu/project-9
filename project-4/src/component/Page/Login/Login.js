import React from 'react';
import "./Login.css"

class Home extends React.Component {  
  render() 
  {  
    return (
        
        <div className="main">
        <div className="container">
	    <div className="form">
		<div className="box Login">
			<h2>Already have Account??</h2>
			<button className="sign_inBtn" onClick={() => this.handleClicksign()}>Sign In</button>
		</div>

		<div className="box signup">
			<h2>Registration</h2>
			<button className="sign_upBtn" onClick={() => this.handleClick()}>Sign Up</button>
		</div>
	</div>
	
	<div className="formBox">
		<div className="form_login signinForm">
			<form>
				<h3>Sign In</h3>
				<input type="text" placeholder="Username"/>
				<input type="password" name="" placeholder="Password"/>
				<input type="submit" name="" value="login"/>
				<a href="#" className="forgot">Forgot Password</a>
			</form>
		</div>


		<div className="form_login signupForm">
			<form>
				<h3>Sign Up</h3>
				<input type="text" placeholder="Username"/>
				<input type="text" placeholder="Email"/>
				<input type="text" placeholder="Phone"/>
				<input type="password" name="" placeholder="Password"/>
				<input type="password" name="" placeholder="Confirm Password"/>
				<input type="submit" name="" value="Reister"/>
			</form>
		</div>
	</div>
</div>
</div>
 ) 
}  
}  
export default Home;