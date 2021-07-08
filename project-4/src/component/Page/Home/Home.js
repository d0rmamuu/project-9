import React from 'react';
//import { Carousel } from 'react-responsive-carousel';
import "./Home.css";
//import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.gif";
import pic3 from "./pic3.jpg";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
class About extends React.Component {
  render() {
    return (
      <>
        <div className="top">

        </div>


        <AwesomeSlider className="carousel" autoFocus autoPlay>
          <div className="pic">
            <img src={pic1} style={{ width: "2000px", height: "600px" }} />
            <p className="legend">Legend 1</p>
          </div>
          <div className="pic" >
            <img src={pic2} style={{ width: "2000px", height: "600px" }} />
            <p className="legend">Legend 2</p>
          </div>
          <div className="pic">
            <img src={pic3} style={{ width: "2000px", height: "600px" }} />
            <p className="legend">Legend 3</p>
          </div>
        </AwesomeSlider >

        <div className="content">
          <h1>Pros of Education Hub:</h1><br/><hr/><br/>
          <div>
            <li>Interactive videos, e-books, gamification, and downloadable attachments.</li>
            <li>You can offer free courses.</li>
            <li>Can extract transcripts from your courses.</li>
            <li>A custom domain name and white-labeled content.</li>
            <li>Students can take notes and highlight important points.</li>
            <li>Certificates of completion.</li>
            <li>Custom mobile app on iOS for course.</li>
            <li>The ability to create coupons and discounts.</li>
            <li>Social media integrations.</li>
            <li>A new analytics platform to optimize your sales.</li>
            <li>The ability to create membership sites.</li>
            <li>A strong knowledge base.</li>
            <li>24/7 support.</li>
          </div>

        </div>
      </>
    )
  }
}
export default About;