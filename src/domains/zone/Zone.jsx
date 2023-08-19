import { useEffect, useState, useContext } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";

import Wgt_Depotwise_Ui from "./Wgt_Depotwise_Ui";
import { Wgt_Depotwise_Data } from "./Wgt_Depotwise_Data";

import Wgt_Territory_Ui from "./Wgt_Territory_Ui";
import { Wgt_Territory_Data } from "./Wgt_Territory_Data";
import { Territoty, rolePermission, zoneData } from "../../auth/middleware";
import Territory_Componentss from "../territory/Territory_componentss";
import Depot_componentss from "../depot/Depot_componentss";

import Wgt_Summ_Zone_Ui from "./Wgt_Summ_Zone_Ui";
import { Wgt_Summ_Zone_Data } from "./Wgt_Summ_Zone_Data";

import CustomPopup from "../CustomPopup";

const Zone = () => {
  const [selectedZone, setSelectedZone] = useState(0);
  const [filteredZones, setFilteredZones] = useState([]);
  const [filteredDepots, setFilteredDepots] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const popupCloseHandler = (e) => { setVisibility(e); };

  useEffect(() => {
    const permissions = rolePermission()?.permissions;
    if (permissions) {
      const filteredZoness = zoneData.filter((item) =>
        permissions.includes(item.id)
      );
      setFilteredZones(filteredZoness);
      setSelectedZone(permissions.length > 0 ? permissions[0] : 0);
    }
  }, []);

  const handleZoneChange = (e) => {
    const Id = parseInt(e.target.value, 10);
    setSelectedZone(Id);
  };
  return (
    <div className=" main ">
      <div class="w3-row w3-padding-16">
        <div class="w3-col l3 m3 s6 w3-right">
          <form>
            <select
              className="form-control"
              value={selectedZone}
              onChange={handleZoneChange}
            >
              <option value="" selected>
                {" "}
                Select Zone{" "}
              </option>
              {filteredZones.map((item) => (
                <option value={item?.id} key={item?.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </form>
        </div>
      </div>


      <div class="w3-row ">
        <span className="w3-xlarge">
          {zoneData.find((item) => item.id == selectedZone)?.name} <i className="fa fa-lock w3-text-red"> </i>
        </span>
        <span class=" w3-right">
          <i className="w3-text-teal fa fa-file-excel-o" > </i> Upload
        </span>

      </div>

      <span className=" btn btn-sm w3-small text-left w3-text-red " onClick={(e) => setVisibility(!visibility)} > <i className="fa fa-lock" ></i>   Lock / Un-Lock  </span>

      <span className=" btn btn-sm w3-small text-left " onClick={(e) => setVisibility(!visibility)} > <i className="fa fa-gear" ></i>   Set Rules </span>

      <span className="  btn btn-sm w3-text-gray  w3-small " onClick={(e) => setVisibility(!visibility)} > <i className="fa fa-pencil" ></i>  Edit Manually </span>


      {Wgt_Summ_Zone_Data.map((data) => (
        <Wgt_Summ_Zone_Ui key={data.id} data={data} />
      ))}


      {/* <div class="w3-row w3-row-padding w3-padding-16 w3-margin-top w3-white ">
        <div class="w3-col l3 m3 s3 ">
          <span className="w3-xlarge">
            {zoneData.find((item) => item.id == selectedZone)?.name}
          </span>
          <br />
          <span className="w3-text-red w3-small h6">
            <i className="fa fa-lock w3-text-red"></i> Locked
          </span>
        </div>

        <div class="w3-col l3 m3 s3 w3-center">
          <span className="w3-text-gray"> LY 22-23 </span>
          <hr className="hr1" />
          <span className=" ">90</span> Cr.
        </div>

        <div class="w3-col l3 m3 s3 w3-center">
          <span className="w3-text-gray"> Target 23-24 </span>
          <hr className="hr1" />
          <i className="fa fa-lock w3-text-red"></i>
          <span className="h5">126 </span> Cr.
          <i className="w3-text-gray"> (26%) </i>
        </div>

        <div class="w3-col l3 m3 s3 w3-center">
          <span className="w3-text-gray"> YTD </span>
          <hr className="hr1" />
          <span className=" ">36 </span> Cr.
          <i className="w3-text-gray"> (12%) </i>
        </div>
      </div> */}


      <Depot_componentss selectedZone={selectedZone} setFilteredDepots={setFilteredDepots} />

      <div class="w3-row w3-padding-16"></div>
      <Territory_Componentss
        depotsData={filteredDepots}
        selectedDepot={"all"}
      />

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
export default Zone;
