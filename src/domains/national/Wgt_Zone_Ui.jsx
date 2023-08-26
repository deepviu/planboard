import { useState } from "react";
import { Link } from "react-router-dom";

const Wgt_Zone_Ui = ({ data }) => {

  const target ="";
  return (
    <>  
        <div className="w3-quarter w3-margin-top w3-margin-bottom ">

          <Link className="link" to={`/zone_detail/${data.id}`}>

    <div className={`w3-container w3-padding-16 `+ data.bg } > 

      <div className="w3-clear "> 
        <span className=" w3-xlarge w3-left h3"> 
         {data.title} 
        </span> 
         <span className="  w3-right h3"> 
         {data.zone_total} <span className="w3-small h6" >Cr. </span>
        </span> 
      </div> 
      <hr />

        {   data
        .subzone
        .map((child, jdx) => (

        <div className="w3-col l4 m4 s4 " key={jdx}> 
        <span className="w3-large">  {child.target} </span> 
        <br /> 
        <span className="w3-small h6"> {child.zone} 
         </span>
        </div> 
        ))
        }   
    
    </div> 
    </Link> 
    </div> 

    </>
  );
};


export default Wgt_Zone_Ui;