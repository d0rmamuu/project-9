import React, { useState } from "react";
export default function GetInput({ setlist }) {
  
  let [first, setfirst] = useState("");
  let [middle, setmiddle] = useState("");
  let [last, setlast] = useState("");
  let [feed, setfeed] = useState("");
  let [gen, setgen] = useState("male");
  return (
        <div>
        <table id="table"> 
        <tr><td>First Name: </td><td><input
              type="text"
              value={first}
              onChange={(e) => setfirst(e.target.value)}
              /></td></tr>
        <tr><td>Second Name: </td><td><input 
              type="text" 
              value={middle}
              onChange={(e) => setmiddle(e.target.value)}
              /> </td></tr>
        <tr><td>Last Name: </td><td><input 
              type="text" 
              value={last}
              onChange={(e) => setlast(e.target.value)}
              /> </td></tr>
        <tr><td>Gender: </td><td><input type="radio" 
              checked={gen=== "male"}
              value="male" 
              onChange={(e) => setgen(e.target.value)}/>
              <label  
              >Male</label></td></tr>
        <tr><td></td><td><input type="radio" 
              checked={gen ==="female"}
              value="female"
              onChange={(e) => setgen(e.target.value)}
              />
              <label  
              >Female</label> </td></tr>
        <tr><td>Suggestion: </td><td><textarea 
              value={feed} 
              onChange={(e) => setfeed(e.target.value)} 
              /></td></tr>
        
        <tr><td></td><td><button onClick={CreateFeed}>Submit</button>
        </td></tr>
        </table>
        
        <section id="sugstn">
        <b id="1"></b>
        </section>
	      </div>
  );   
  //creating new object and adding it to list
  function CreateFeed() {
    if (first === "" || last === "" || feed === "") {
      alert("Please input all fields.");
    } else {
      if(gen==="male")gen="Mr";
      else
      gen="Mrs";
      setlist((previtem) => {
        return [
          ...previtem,
          {
            username:gen+ " " +first + " " + middle + " " + last + " says ",userfeedback: feed+"."
          }
        ];
      });
      /*setfirst("");
      setmiddle("");
      setlast("");
      setfeed("");*/
    }
  }

}
