import { useEffect, useState } from "react";
import { rolePermission, zoneData } from "../../auth/middleware";

 

import Wgt_Delear_Ui from "./Wgt_Delear_Ui";
import { Wgt_Delear_Data } from "./Wgt_Delear_Data";

import Wgt_Delear_Weekly_Ui from "./Wgt_Delear_Weekly_Ui";
import { Wgt_Delear_Weekly_Data } from "./Wgt_Delear_Weekly_Data";


import CommonTopSales from "../components/CommonTopSales";
import { useSelector } from "react-redux";
import ZoneSelectionBox from "../components/ZoneSelectionBox";
import DepoSelectionBox from "../components/DepoSelectionBox";
import TerritorySelectionBox from "../components/TerritorySelectionBox";


const Territory = () => {


const [toggleState, setToggleState] = useState(1); 
const toggleTab = (index) => { 
   setToggleState(index);
};


  const [visibility, setVisibility] = useState(false);
  const popupCloseHandler = (e) => {
    setVisibility(e);
  };


  const { AuthData } = useSelector((state) => state.auth);

  const [selectedZone, setSelectedZone] = useState(AuthData.Zone[0]?.ZoneID ? AuthData.Zone[0]?.ZoneID : 0);
  const [filteredZones, setFilteredZones] = useState([]);

  const [selectedDepot, setSelectedDepot] = useState(0);
  const [selectedTerritory, setSelectedTerritory] = useState(0);

  const handleSelectionChange = (newValue) => {
    setSelectedZone(newValue);
    console.log("45-selectedZone", selectedZone)
  };

  const onSelectedDepoChange = (newValue) => {
    setSelectedDepot(newValue);
    console.log("45-setSelectedDepo", selectedDepot)
  };

  const onSelectedTerritoryChange = (newValue) => {
    setSelectedTerritory(newValue);
    console.log("45-setselectedTerritory", newValue)
  };

  return (
    <div className=" main ">
      <div className="w3-row w3-padding-16">
        {(AuthData.Data[0].EmployeeTpye === 'HOD' || AuthData.Data[0].EmployeeTpye === 'ZM') ? (
          <>
            <div className="w3-col l3 m3 s6">
              <ZoneSelectionBox onValueChange={handleSelectionChange} />
            </div>
            <div className="w3-col l3 m3 s6">
              <DepoSelectionBox selectedZone={selectedZone} onSelectedDepoChange={onSelectedDepoChange} />
            </div>
            <div className="w3-col l3 m3 s6">
              <TerritorySelectionBox selectedZone={selectedZone} selectedDepot={selectedDepot} onSelectedTerritoryChange={onSelectedTerritoryChange} />
            </div>
          </>
        ) : AuthData.Data[0].EmployeeTpye === 'DM' ? (
          <>
            <div className="w3-col l3 m3 s6">
              <DepoSelectionBox selectedZone={selectedZone} onSelectedDepoChange={onSelectedDepoChange} />
            </div>
            <div className="w3-col l3 m3 s6">
              <TerritorySelectionBox selectedZone={selectedZone} selectedDepot={selectedDepot} onSelectedDepoChange={onSelectedDepoChange} />
            </div>
          </>
        ) : AuthData.Data[0].EmployeeTpye === 'AM' ? (
          <div className="w3-col l3 m3 s6">
            <TerritorySelectionBox selectedZone={selectedZone} selectedDepot={selectedDepot} onSelectedDepoChange={onSelectedDepoChange} />
          </div>
        ) : (<></>)}

      </div>
      {/* <div className="w3-row w3-padding-16">
        <div className="w3-col l3 m3 s6">
          <span className="w3-xlarge">{depoName}</span>
        </div>
      </div> */}

      <CommonTopSales actionType="Territory" selectedZone={selectedZone} selectedTerritory={selectedTerritory}/>


      <table className="tbl_grid w3-table table-bordered  h6 w3-small w3-white ">
        <tr className="w3-gray h5">
          <td colSpan="20" className=" w3-padding  text-left ">
            Month wise Sales Target
            <span className=" w3-right w3-opacity">
              <i className="w3-text-teal fa fa-save"> </i> Save
            </span>
          </td>
        </tr>

        <tr className=" w3-yellow h6">
          <td colSpan="1" className="" style={{ width: "18%" }}>
            {" "}
            Territory{" "}
          </td>
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
          <td className=""> H05 </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" disabled />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" disabled />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" disabled />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" disabled />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" disabled />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" disabled />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" disabled />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" disabled />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" disabled />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" disabled />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" disabled />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" disabled />{" "}
          </td>
        </tr>
      </table>


      <div class="w3-row w3-padding-16"></div>

        <div class="w3-row w3-white w3-border w3-border-black">
          <div className="w3-bar w3-black"> 
            <div className={toggleState === 1 ? " w3-bar-item w3-button w3-white  w3-hover-white  " : " w3-bar-item w3-button w3-black  w3-hover-white  " } onClick={()=> toggleTab(1) } >
           <span className=" h6 " > Dealer Monthly Targets  </span>
            </div>  
            <div className={toggleState === 2 ? " w3-bar-item w3-button  w3-white  w3-hover-white " : " w3-bar-item w3-button w3-black w3-hover-white " } onClick={()=> toggleTab(2) } >
            <span className=" h6 " >  Dealer Weakly Targets  </span>
            </div>   
              <div className={toggleState === 3 ? " w3-bar-item w3-button  w3-white  w3-hover-white " : " w3-bar-item w3-button w3-black w3-hover-white " } onClick={()=> toggleTab(3) } >
            <span className=" h6 " >  Dealer Activity Plan   </span>
            </div> 
          </div>  
          <div class="w3-row w3-padding " style={{height:"300px"}}> 
            <div className={toggleState === 1 ? "  " : " w3-hide  " } onClick={()=> toggleTab(1) } >  
              <Wgt_Delear_Ui data={Wgt_Delear_Data} />   
            </div>    
            <div className={toggleState === 2 ? "  " : " w3-hide  " } onClick={()=> toggleTab(2) } > 
              <Wgt_Delear_Weekly_Ui data={Wgt_Delear_Data} /> 
            </div> 
            <div className={toggleState === 3 ? "  " : " w3-hide  " } onClick={()=> toggleTab(3) } > 
              
            </div>   
          </div> 
        </div>

      <div class="w3-row w3-padding-16"> </div>


    </div>
  );
};


export default Territory;