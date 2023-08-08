import { useEffect, useState, useContext } from "react";  
import { Navigate, Link, useNavigate } from "react-router-dom";

import Wgt_Zone_Ui from "./Wgt_Zone_Ui"
import {Wgt_Zone_Data} from "./Wgt_Zone_Data"

import Wgt_Statewise_Ui from "./Wgt_Statewise_Ui"
import {Wgt_Statewise_Data} from "./Wgt_Statewise_Data"

const National = () => {  

    // Set Select Zone 
    const [list_mst_Zone, setZone] = useState("North"); 
    const handleZoneSelect = (event) => {
    setZone(event.target.value)
    }


    return (
        <div className=" main "> 

            <div id="Wgt_Zone_Id" class="Wgt_Zone_Class w3-row w3-row-padding w3-margin-bottom w3-white "> 
            {Wgt_Zone_Data.map(data=>(
            <Wgt_Zone_Ui key={data.id} data={data}/>
            ))}  
            </div>  


             <div id="Wgt_Segment_Id" class="Wgt_Segment_Class w3-row w3-row-padding  w3-padding-large w3-margin-bottom w3-white "> 
             
   <p className="h5 " > Market Segment Plan </p>  

     <div class="w3-row w3-margin-top ">
     <span className="w3-small h5 w3-text-gray">  Non Focus  </span><br />
    <div class="w3-grey">
      <div class="w3-container w3-center w3-padding w3-blue" style={{width:"25%"}} > 
      50%
      </div>
    </div>
     </div>

     <div class="w3-row w3-margin-top ">
     <span className="w3-small h5 w3-text-gray"> Focus </span> <br />
    <div class="w3-grey">
      <div class="w3-container w3-center w3-padding w3-indigo" style={{width:"75%"}} > 75% 
      </div>
    </div>
    </div>
 
  </div>

            
              
            <div id="Wgt_State_Id" class="Wgt_State_Class w3-row w3-row-padding w3-margin-bottom w3-white "> 
            <div class="w3-col l12 m12 w3-margin-top w3-margin-bottom ">
              
             <div class="w3-col l2 m4 s8 "> 
            <form>
                <select className="form-control " value={list_mst_Zone} onChange={handleZoneSelect}>
                    <option value="">-Select Zone -- </option>
                    <option value="All">All </option>
                    <option value="North">North</option>
                    <option value="South">South</option>
                    <option value="East">East</option>
                    <option value="West">West</option>
                </select>
            </form> 
            </div>  

            </div> 

           <div class="w3-col l12 m12 ">  
        <table class="w3-table w3-striped w3-white table-bordered "> 
         <tr>   
            <th> States <i className="w3-text-gray">(8) </i> </th>
            <th> LY-22-23 </th> 
            <th> Target (%) </th> 
            <th> Achieved  (%)</th> 
          </tr>   
            {Wgt_Statewise_Data.map(data=>(
            <Wgt_Statewise_Ui key={data.id} data={data}/>
            ))}  
        </table>
         </div>  
            </div>  

 
 



        </div>
    ) 
}  
export default National  