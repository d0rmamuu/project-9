import React from 'react'  ;
import "./Profile.css";

class Profile extends React.Component {  
  render() {  
    return (
        <>
        <div class="container">
		<div class="card">
			<div class="box">
				<img src="./Images/men.jpg"/>
			</div>
			<div class="details">
				<h2>Neel Prayag Beck</h2><br/>
				<h3>202120052</h3><br/>
				<p>Course : M.C.A</p>
			</div>
		</div>

		
		<div class="card">
			<div class="box">
				<img src="./Images/men.png"/>
			</div>
			<div class="details">
				<h2>Jagdish Kr surin</h2><br/>
				<h3>202120054</h3><br/>
				<p>Course : M.C.A</p>
			</div>
		</div>


        
		<div class="card">
			<div class="box">
				<img src="./Images/men1.jpg"/>
			</div>
			<div class="details">
				<h2>Ashutosh Tigga</h2><br/>
				<h3>202120148</h3><br/>
				<p>Course : M.C.A</p>
			</div>
		</div>
	</div>
        </>
    )
  }  
}  
export default Profile;