
import { useEffect, useState, useContext } from "react";  
import { Navigate, Link, useNavigate } from "react-router-dom";

import Wgt_Depotwise_Ui from "./Wgt_Depotwise_Ui";
import {Wgt_Depotwise_Data} from "./Wgt_Depotwise_Data";

import Wgt_Territory_Ui from "./Wgt_Territory_Ui"
import {Wgt_Territory_Data} from "./Wgt_Territory_Data"


const Zone = () => { 

    return (
        <div className=" main "> 

          <div class="w3-row w3-row-padding w3-padding-16 w3-margin-top w3-white "> 
       
              <div class="w3-col l3 m3 s3 ">  
                 <span className="w3-xlarge" > North </span> 
                 <br />
                 <span className="w3-text-red w3-small h6" >
                  <i className="fa fa-lock w3-text-red" ></i> Locked
                 </span>  
               </div>  

                <div class="w3-col l3 m3 s3 w3-center">  
                  <span className="w3-text-gray" > LY 22-23  </span> 
                   <hr className="hr1" />
                  <span className=" " >90</span> Cr. 
               </div> 

                <div class="w3-col l3 m3 s3 w3-center">  
                  <span className="w3-text-gray" > Target 23-24 </span> 
                   <hr className="hr1" />
                   <i className="fa fa-lock w3-text-red" ></i> 
                   <span className="h5" >126 </span> Cr. 
                   <i className="w3-text-gray" > (26%) </i>
               </div> 

                <div class="w3-col l3 m3 s3 w3-center">  
                  <span className="w3-text-gray" > YTD </span> 
                   <hr className="hr1" />
                  <span className=" " >36 </span> Cr. 
                  <i className="w3-text-gray" > (12%) </i>
               </div> 

           </div> 

            <div class="w3-row w3-padding-16">
           </div>   



          <div class="w3-row w3-row-padding w3-padding-16 w3-margin-top  w3-margin-bottom w3-white "> 

            <div class="w3-col l6 m6 s6 ">  
              <span className="w3-xlarge" > Depot   <span className=" w3-text-gray w3-opacity">  [Sales Plan ]</span>  </span> 
              <br /> 
              <span className=" w3-text-red w3-small"> <i className="fa fa-lock" ></i>   Locked </span>
               <span className=" w3-text-gray  w3-small w3-opacity"> <i className="fa fa-pencil" ></i>   Update </span> 
            </div>

            <div class="w3-col l3 m3 s6 w3-right">  
               <form>
                <select className="form-control " >
                    <option value=""> Sales Plan </option>
                    <option value="All"> OS / OD / Collection Plan </option>  
                    <option value="All"> Other </option> 
                </select>
            </form>  
            </div>

            <table class="w3-table table-stripped w3-white table-bordered "> 
              <tr>   
                <th> Depot  <br /> 
                  <i className="w3-text-gray"> T.(6) , Dlrs.(234) </i>
                 </th> 
                <th> LY-22-23 </th> 
                <th> Target (%) </th> 
                <th> YTD (%) </th> 
              </tr> 

                {Wgt_Depotwise_Data.map(data=>(
            <Wgt_Depotwise_Ui key={data.id} data={data}/>
            ))}   

            </table>
          </div> 

            <div class="w3-row w3-padding-16">
           </div>   



          <div class="w3-row w3-row-padding w3-padding-16 w3-margin-top  w3-margin-bottom w3-white "> 

            <div class="w3-col l6 m6 s6 ">  
              <span className="w3-xlarge" > Territory   <span className=" w3-text-gray w3-opacity">  [Sales Plan ]</span>  </span> 
              <br /> 
              <span className=" w3-text-red w3-small"> <i className="fa fa-lock" ></i>   Locked </span>
               <span className=" w3-text-gray  w3-small w3-opacity"> <i className="fa fa-pencil" ></i>   Update </span> 
            </div>

                 <div class="w3-col l3 m3 s6 ">  
               <form>
                <select className="form-control " >
                    <option value="">-Selec Depot -- </option>
                    <option value="All">Depot : Ambala</option> 
                    <option value="All">Depot : Delhi-Naraina </option> 
                    <option value="Jalandhar">Depot : Jalandhar</option> 
                </select>
            </form>  
            </div> 

            <div class="w3-col l3 m3 s6 w3-right">  
               <form>
                <select className="form-control " >
                    <option value="">Sales Plan </option>
                    <option value="All">New Machine </option> 
                    <option value="All">Other</option> 
                </select>
            </form>  
            </div> 
            <table class="w3-table table-stripped w3-white table-bordered "> 
              <tr>   
                <th> Territory  
                 </th> 
                <th> LY-22-23 </th> 
                <th> Target (%) </th> 
                <th> YTD (%) </th> 
              </tr>  

                {Wgt_Territory_Data.map(data=>(
            <Wgt_Territory_Ui key={data.id} data={data} />
            ))}

            </table>
          </div>   

             <div class="w3-row w3-padding-16">
           </div>   
   


        </div>
    ) 
} 
export default Zone 