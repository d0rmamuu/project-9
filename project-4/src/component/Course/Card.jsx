import React from 'react';
import "./Card.css";
function Card(props)
{
    console.log(props)
    return(
        <>
        <div classsName = "cards">
            <div className = "card">
                <img src={props.imgsrc} alt ="myPic" className = "card_img"/>
                <div className = "card_info">
                    <span className = "card_category">{props.title}</span>
                    <h2 className= "card_title">{props.sname}</h2>
                    <a href={props.link} target="_blank">
                        <button>Subscription</button>
                    </a>
                </div>
            </div>
        </div>
        
        </>
    );
}
export default Card;