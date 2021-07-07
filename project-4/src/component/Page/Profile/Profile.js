import React from 'react'  ;
import "./Profile.css";

class Profile extends React.Component {  
  render() {  
    return (
        <>
        <div class="container">
		<div class="card">
			<div class="box">
				<img src="JDK.jpg"/>
			</div>
			<div class="details">
				<h2>My Profile</h2>
				<p>hello jagdish</p>
				<div class="typing"><p>This is jagdish surin from ranchi</p></div>
			</div>
		</div>

		
		<div class="card">
			<div class="box">
				<img src="book.png"/>
			</div>
			<div class="details">
				<h2>My Fabourite book</h2>
				<p>1.Fantastic beast</p>
				<p>2.Rich dad Poor dad</p>
				<p>3.Chetan Bhagat</p>
				<p>4.Troubled Blood</p>
				<p>5.Gulliver travel</p>
			</div>
		</div>


        
		<div class="card">
			<div class="box">
				<img src="f.jpg"/>
			</div>
			<div class="details">
				<h2>Feedback</h2>
				<p>hello jagdish</p>
			</div>
		</div>
	</div>
        </>
    )
  }  
}  
export default Profile;