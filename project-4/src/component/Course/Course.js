import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

//console.log(Sdata[0].sname);

function Course(){
    return(
        <>
        <Card
        sname={Sdata[0].sname}
        imgsrc ={Sdata[0].imgsrc}
        title={Sdata[0].title}
        
        />

        <Card
        sname={Sdata[1].sname}
        imgsrc ={Sdata[1].imgsrc}
        title={Sdata[1].title}
       
        />

        <Card
        sname={Sdata[2].sname}
        imgsrc ={Sdata[2].imgsrc}
        title={Sdata[2].title}
        
        />

        <Card
        sname={Sdata[3].sname}
        imgsrc ={Sdata[3].imgsrc}
        title={Sdata[3].title}
        
        />

        <Card
        sname={Sdata[4].sname}
        imgsrc ={Sdata[4].imgsrc}
        title={Sdata[4].title}
        
        />

        <Card
        sname={Sdata[5].sname}
        imgsrc ={Sdata[5].imgsrc}
        title={Sdata[5].title}
        
        />
        </>
    );
}
export default Course;