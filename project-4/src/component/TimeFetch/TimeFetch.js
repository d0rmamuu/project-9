import React,{useState} from 'react';

const TimeFetch = () =>{
let newTime = new Date().toLocaleTimeString();
const [ctime] = useState(newTime);
    return(
        <>
        <h6>{ctime}</h6>
        </>
    )
}
export default TimeFetch;