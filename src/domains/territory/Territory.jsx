 
 
import { useEffect, useState, useContext } from "react";  
import { Navigate, Link, useNavigate } from "react-router-dom";

import { rolePermission, zoneData } from "../../auth/middleware";

 import Wgt_Summ_Zone_Ui from "../zone/Wgt_Summ_Zone_Ui";
import { Wgt_Summ_Zone_Data } from "../zone/Wgt_Summ_Zone_Data";


import CustomPopup from "../CustomPopup";

const Territory = () => {


const [visibility, setVisibility] = useState(false); 
const popupCloseHandler = (e) => { setVisibility(e); }; 

  return (
    <div className=" main ">   

      <div class="w3-row w3-padding-16"></div>

             <div class="w3-row ">
          <span className="w3-xlarge">
            Territory : H05 <i className="fa fa-lock w3-text-red"> </i>
          </span>
           <span class=" w3-right">
      <i className="w3-text-teal fa fa-file-excel-o" > </i> Upload 
      </span> 

        </div> 

          {Wgt_Summ_Zone_Data.map((data) => (
            <Wgt_Summ_Zone_Ui key={data.id} data={data} />
          ))} 


              <table class="tbl_grid w3-table table-bordered  h6 w3-small w3-white "> 

          <tr className="w3-gray h5">   
          <td colspan="20" className=" w3-padding  text-left ">
         Month wise  Sales Target  
          <span class=" w3-right w3-opacity">
          <i className="w3-text-teal fa fa-save" > </i> Save 
          </span>  
          </td>  
          </tr> 
     
          <tr className=" w3-yellow h6">
            <td colspan="1" className=""  style={{width:"18%"}}> Territory  </td> 
          <td className=" "> Apr </td> 
          <td className=" "> May </td>
          <td className=" "> Jun </td>
          <td className=" "> Jul </td>
          <td className=" "> Aug </td>
          <td className=" "> Sep </td>
          <td className=" "> Oct </td>
          <td className=" "> Nov </td>
          <td className=" "> Dec </td>
          <td className=" "> Jan </td>
          <td className=" "> Feb </td>
          <td className=" "> Mar </td>
          </tr>  

          <tr className=""> 
          <td className=""> H05  </td>   
          <td className=""> <input className="inp40" value="2"  disabled />  </td> 
          <td className=""> <input className="inp40" value="2"  disabled />  </td>
          <td className=""> <input className="inp40" value="2"   disabled/> </td>
          <td className=""> <input className="inp40" value="2" disabled /> </td>
          <td className=""> <input className="inp40" value="2"  disabled/>  </td>
          <td className=""> <input className="inp40" value="2"  disabled/> </td>
          <td className=""> <input className="inp40" value="2"  disabled/> </td>
          <td className=""> <input className="inp40" value="2"  disabled/> </td>
          <td className=""> <input className="inp40" value="2"  disabled/> </td>
          <td className=""> <input className="inp40" value="2"  disabled/> </td>
          <td className=""> <input className="inp40" value="2" disabled /> </td>
          <td className=""> <input className="inp40" value="2" disabled /> </td>
          </tr>  

      </table> 

       <div class="w3-row w3-padding-16"></div>



    <div class="w3-col l9 m6 s6 ">   

                 <span className="w3-large "> 

              <b> [ H05 ] Dealers </b> (Targets)   <i className="w3-text-red fa fa-lock" > </i>  </span> 
                     <br />  

               <span className=" btn btn-sm w3-small text-left w3-text-red "  onClick={(e) => setVisibility(!visibility)} > <i className="fa fa-lock" ></i>   Lock / Un-Lock  </span> 

                <span className=" btn btn-sm w3-small text-left "  onClick={(e) => setVisibility(!visibility)} > <i className="fa fa-gear" ></i>   Set Rules </span>

               <span className="  btn btn-sm w3-text-gray  w3-small "  onClick={(e) => setVisibility(!visibility)} > <i className="fa fa-pencil" ></i>  Edit Manually </span> 
                 
               
            </div> 



   <div class="w3-col l3 m3 s6 w3-right">  
               <form>
                 <select className="form-control " >
                    <option value=""> Sales Plan </option>
                    <option value="All"> OS / OD / Collection Plan </option> 
                    <option value="All"> Activity Plan </option>  
                    <option value="All"> Other </option> 
                </select>
            </form>  
            </div>

 <table class="w3-table table-stripped w3-white table-bordered "> 

              <tr>   
                <th style={{width:"25%"}} > Dealers  </th> 
                <th> LLY<br /> FY 21-23 </th>  
                <th> LY<br /> FY 22-23 </th>  
                <th> Target V.1  (%)  <br /> FY 23-24 </th> 
                <th> Target V.2 (%)  <br /> FY 23-24 </th> 
                <th> YTD (%) <br /> August  </th>  
              </tr> 

                <tr>   
                <td> [ Shanti Paints - Rohtak ]
                 </td> 
                 <td> 9 </td> 
                <td> 11 </td>  
                <td> 34 L (36%)  </td>    
                 <td> 34 L (36%)  <br />  <input className="" value="34" /></td>   
                <td> 3 (4%) </td> 
              </tr> 

               <tr>   
                <td> [ Kamal  Enterprise - Rohtak  ] </td> 
                <td> 90 </td> 
                  <td> 112 </td>  
                 <td> 34 L (36%)  </td>  
                  <td> 34 L (36%)  <br />  <input className="" value="34" /></td>  
                <td> 23 (4%) </td> 
              </tr> 


               <tr>   
                <td> [ Shanti Paints - Jhajjar ] </td> 
                <td> 11 </td> 
                <td> 12 L </td> 
                 <td> 34 L (36%)  </td>   
                <td> 34 L (36%)  <br />  <input className="" value="34" /></td> 
                <td> 6 (8%) </td> 
              </tr>  

              </table> 

               <div class="w3-row w3-padding-16"></div>


          <table class="tbl_grid w3-table table-bordered  h6 w3-small w3-hide "> 

          <tr className="w3-gray h5">   
          <td colspan="20" className=" w3-padding  text-left ">
          Territory Level Dealers  Target  - FY 23-24  ( Lacs ) 

          <span class=" w3-right">
          <i className="w3-text-teal fa fa-save" > </i> Save 
          </span>  

          </td>  
          </tr> 
     
          <tr className=" w3-yellow h6">
            <td colspan="1" className=""  style={{width:"18%"}}> Dealer  </td> 
          <td className=" "> Apr </td> 
          <td className=" "> May </td>
          <td className=" "> Jun </td>
          <td className=" "> Jul </td>
          <td className=" "> Aug </td>
          <td className=" "> Sep </td>
          <td className=" "> Oct </td>
          <td className=" "> Nov </td>
          <td className=" "> Dec </td>
          <td className=" "> Jan </td>
          <td className=" "> Feb </td>
          <td className=" "> Mar </td>
          </tr>  

          <tr className=""> 
          <td className=""> [ Shanti Paints - Rohtak ]  </td>   
          <td className=""> <input className="inp40" value="2"  />  </td> 
          <td className=""> <input className="inp40" value="2"  />  </td>
          <td className=""> <input className="inp40" value="2"  /> </td>
          <td className=""> <input className="inp40" value="2" /> </td>
          <td className=""> <input className="inp40" value="2" />  </td>
          <td className=""> <input className="inp40" value="2" /> </td>
          <td className=""> <input className="inp40" value="2" /> </td>
          <td className=""> <input className="inp40" value="2" /> </td>
          <td className=""> <input className="inp40" value="2" /> </td>
          <td className=""> <input className="inp40" value="2" /> </td>
          <td className=""> <input className="inp40" value="2" /> </td>
          <td className=""> <input className="inp40" value="2" /> </td>
          </tr>    

      <tr className=""> 
      <td className=" " > [ Kamal  Enterprise - Rohtak  ]  </td>   
       <td className=""> <input className="inp40" value="2"  />  </td> 
      <td className=""> <input className="inp40" value="2"  />  </td>
      <td className=""> <input className="inp40" value="2"  /> </td>
      <td className=""> <input className="inp40" value="2" /> </td>
      <td className=""> <input className="inp40" value="2" />  </td>
      <td className=""> <input className="inp40" value="2" /> </td>
      <td className=""> <input className="inp40" value="2" /> </td>
      <td className=""> <input className="inp40" value="2" /> </td>
      <td className=""> <input className="inp40" value="2" /> </td>
      <td className=""> <input className="inp40" value="2" /> </td>
      <td className=""> <input className="inp40" value="2" /> </td>
      <td className=""> <input className="inp40" value="2" /> </td>
      </tr>   

      <tr className=""> 
      <td className=" " > [ Shanti Paints - Jhajjar ]  </td>   
       <td className=""> <input className="inp40" value="2"  />  </td> 
      <td className=""> <input className="inp40" value="2"  />  </td>
      <td className=""> <input className="inp40" value="2"  /> </td>
      <td className=""> <input className="inp40" value="2" /> </td>
      <td className=""> <input className="inp40" value="2" />  </td>
      <td className=""> <input className="inp40" value="2" /> </td>
      <td className=""> <input className="inp40" value="2" /> </td>
      <td className=""> <input className="inp40" value="2" /> </td>
      <td className=""> <input className="inp40" value="2" /> </td>
      <td className=""> <input className="inp40" value="2" /> </td>
      <td className=""> <input className="inp40" value="2" /> </td>
      <td className=""> <input className="inp40" value="2" /> </td>
      </tr>   


      </table> 


    

      <div class="w3-row w3-padding-16"></div>

 

       < CustomPopup
        onClose={popupCloseHandler}
        show={visibility}
        title="Configure Rules " >
        <hr />

         Rules ( to Set Targets or breakdown Targets on every enity ) 

        <table className="w3-table table-bordered ">

            <tr className=""> 
              <th className="" > 
              </th>
              <th className="" >
              Rule / Condition 
              </th>

               <th className="" > 
              Ref. / Base Value 
              </th> 

              <th className="" >
               % Impact 
              </th>

              <th className="" >
               Value Impact 
              </th>

              <th className="" >
              Net Increment 
              </th>

             
            </tr>

              <tr className=""> 
              <td colspan="10" className="w3-gray h5" > 
              Incremental  Rules (Vertically Top Down  | Global >  Zone > Depot > Territory > Dealer  ) 
              </td>
            </tr> 


             <tr className=""> 
              <td className="" > 
              1 
              </td>
              <td className="" >
              Rule :  LLY Topup ( Increment)  
              </td>
              <td className="" >
              <input className="inp40"  value="60 Cr." /> 
              </td>
              <td className="" >
              <input className="inp40"  value="10%"  /> 
              </td>
               <td className="" >
              <input className="inp40" value="10 CR."   /> 
              </td>
               <td className="" >
              <input className="inp40" value=""   /> 
              </td>
            </tr> 

             <tr className=""> 
              <td className="" >
              2 
              </td>
              <td className="" >
              Rule :  LY Topup ( Increment )  
              </td>
               <td className="" >
              <input className="inp40"  value="90 Cr." /> 
              </td>
              <td className="" >
              <input className="inp40"  value="30%"  /> 
              </td>
               <td className="" >
              <input className="inp40" value="50 CR."   /> 
              </td>
               <td className="" >
              <input className="inp40" value=""  /> 
              </td>
            </tr> 

             <tr className=""> 
              <td className="" >
              3 
              </td>
              <td className="" >
              Rule :  Potential based (Increment)  
              </td>
              <td className="" >
              <input className="inp40"  value="600 Cr." /> 
              </td>
              <td className="" >
              <input className="inp40"  value="10%"  /> 
              </td>
               <td className="" >
              <input className="inp40" value="10 CR."   /> 
              </td>
               <td className="" >
              <input className="inp40" value=""   /> 
              </td>
            </tr> 


             <tr className=""> 
              <td className="" >
              3 
              </td>
              <td className="" >
             Rule : Product Category / Group  
             Ex. Water base (last Y Revenue) 
              </td>
               <td className="" >
              <input className="inp40"  value="40 Cr." /> 
              </td>
              <td className="" >
              <input className="inp40"  value="100%"  /> 
              </td>
               <td className="" >
              <input className="inp40" value="100CR."   /> 
              </td>
               <td className="" >
              <input className="inp40" value=""   /> 
              </td>
            </tr> 


                  <tr className=""> 
              <td className="" >
              4 
              </td>
              <td className="" >
              Rule : Focus Segment  (   )  
              </td>
              <td className="" >
              <input className="inp40"  value="40 Cr." /> 
              </td>
              <td className="" >
              <input className="inp40"  value="100%"  /> 
              </td>
               <td className="" >
              <input className="inp40" value="100CR."   /> 
              </td>
               <td className="" >
              <input className="inp40" value=""   /> 
              </td>
            </tr> 


              <tr className=""> 
              <td className="" >
              4 
              </td>
              <td className="" >
              Rule : Seasonal Time Months ( Festival.. )  
              </td>
              <td className="" >
              <input className="inp40"  value="40 Cr." /> 
              </td>
              <td className="" >
              <input className="inp40"  value="100%"  /> 
              </td>
               <td className="" >
              <input className="inp40" value="100CR."   /> 
              </td>
               <td className="" >
              <input className="inp40" value=""   /> 
              </td>
            </tr> 


              <tr className=""> 
              <td colspan="10" className="w3-gray h5" > 
              Target Breakdown Rules (Horizontaly - Months / Weeks ) 
              </td>
            </tr> 

              <tr className=""> 
              <td className="" >
              4 
              </td>
              <td className="" >
              Rule : Seasonal Time Months ( Festival.. )
              ( Monthly Breakdown of Territory  -> 12 Months   
              </td>
              <td className="" >
              <input className="inp40"  value="40 Cr." /> 
              </td>
              <td className="" >
              <input className="inp40"  value="100%"  /> 
              </td>
               <td className="" >
              <input className="inp40" value="100CR."   /> 
              </td>
               <td className="" >
              <input className="inp40" value=""   /> 
              </td>
            </tr> 

              <tr className=""> 
              <td className="" >
              4 
              </td>
              <td className="" >
              Rule : Months Weekly Breakdown  ( Dealer Level Rule )
              ( Weekwise  Breakdown of Monthly Target   -> 4 Weeks 
              </td>
              <td className="" >
              <input className="inp40"  value="40 Cr." /> 
              </td>
              <td className="" >
              <input className="inp40"  value="100%"  /> 
              </td>
               <td className="" >
              <input className="inp40" value="100CR."   /> 
              </td>
               <td className="" >
              <input className="inp40" value=""   /> 
              </td>
            </tr>  


            <tr className=""> 
              <td className="" >
              4 
              </td>
              <td className="" >
              Anyother conditon which can be converted to avergae weightage  
              </td>
               <td className="" >
              <input className="inp40"  value="Ref. Value " /> 
              </td>
              <td className="" >
              <input className="inp40"  value="Target. %"  /> 
              </td>
               <td className="" >
              <input className="inp40" value="Target Value"   /> 
              </td>
               <td className="" >
              <input className="inp40" value=""   /> 
              </td>
            </tr> 

        </table> 
          
      </CustomPopup>  


    </div>

  );

};
export default Territory;
