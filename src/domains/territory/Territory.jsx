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
import { useParams } from "react-router";
import TerritoryMonthSale from "../components/TerritoryMonthSale";


const Territory = () => {
  const { AuthData } = useSelector((state) => state.auth);
  const { zoneId, depotId, territoryId } = useParams();

  const [selectedZone, setSelectedZone] = useState(zoneId ?? (AuthData.Zone[0]?.ZoneID ? AuthData.Zone[0]?.ZoneID : 0));
  const [selectedDepot, setSelectedDepot] = useState(depotId ?? 0);
  const [selectedTerritory, setSelectedTerritory] = useState(territoryId ?? 0);


  const [toggleState, setToggleState] = useState(1); 
  const toggleTab = (index) => {
    setToggleState(index);
  };

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

    const payload = {
    Token: localStorage.getItem("access_token"),
    entity_id: 0,
  };
  // useEffect(() => {
  //   fetchDealerMaster();
  //   fetchDealerMasterWeek();
  // }, []);

  // const fetchDealerMaster = async () => {
  //   try {
  //     const response = await axiosInstance.post("api/Master/yatin", payload);

  //     if (response?.status === 200) {
  //       console.log("=====api/Master/ZoneData==== 65", response);
  //     }
  //   } catch (error) {
  //     // Handle errors
  //     dispatch({ type: SHOW_TOAST, payload: error.message });
  //   }
  // };
  // const fetchDealerMasterWeek = async () => {
  //   try {
  //     const response = await axiosInstance.post("api/Master/yatin1", payload);

  //     if (response?.status === 200) {
  //       console.log("=====api/Master/ZoneData==== 77", response);
  //     }
  //   } catch (error) {
  //     // Handle errors
  //     dispatch({ type: SHOW_TOAST, payload: error.m  essage });
  //   }
  // };

  return (
    <div className=" main ">
      <div className="w3-row w3-padding-16">
        {(AuthData.Data[0].EmployeeTpye === 'HOD' || AuthData.Data[0].EmployeeTpye === 'ZM') ? (
          <>
            <div className="w3-col l3 m3 s6">
              <ZoneSelectionBox selectedZone={selectedZone} onValueChange={handleSelectionChange} />
            </div>
            <div className="w3-col l3 m3 s6">
              <DepoSelectionBox selectedDepot={selectedDepot} selectedZone={selectedZone} onSelectedDepoChange={onSelectedDepoChange} />
            </div>
            <div className="w3-col l3 m3 s6">
              <TerritorySelectionBox selectedZone={selectedZone} selectedDepot={selectedDepot} selectedTerritory={selectedTerritory} onSelectedTerritoryChange={onSelectedTerritoryChange} />
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
     

      <CommonTopSales actionType="Territory" selectedZone={selectedZone} selectedTerritory={selectedTerritory} />

      
      <TerritoryMonthSale selectedTerritory={selectedTerritory} />


      <div class="w3-row w3-padding-16"></div>

      <div class="w3-row w3-white w3-border w3-border-gray">
        <div className="w3-bar w3-gray">
          <div className={toggleState === 1 ? " w3-bar-item w3-button w3-white  w3-hover-white  " : " w3-bar-item w3-button w3-gray  w3-hover-white  "} onClick={() => toggleTab(1)} >
            <span className=" h6  w3-text-gray " > Dealer Monthly Plan  </span>
          </div>
          <div className={toggleState === 2 ? " w3-bar-item w3-button  w3-white  w3-hover-white " : " w3-bar-item w3-button w3-gray w3-hover-white "} onClick={() => toggleTab(2)} >
            <span className=" h6  w3-text-gray " >  Dealer Weakly Plan  </span>
          </div>
          <div className={toggleState === 3 ? " w3-bar-item w3-button  w3-white  w3-hover-white " : " w3-bar-item w3-button w3-gray w3-hover-white "} onClick={() => toggleTab(3)} >
            <span className=" h6 w3-text-gray " >  Dealer Activity Plan   </span>
          </div>
        </div>
        <div class="w3-row w3-padding ">
          <div className={toggleState === 1 ? "  " : " w3-hide  "} onClick={() => toggleTab(1)} >
            <Wgt_Delear_Ui data={Wgt_Delear_Data}  selectedTerritory={selectedTerritory}/>
          </div>
          <div className={toggleState === 2 ? "  " : " w3-hide  "} onClick={() => toggleTab(2)} >
            <Wgt_Delear_Weekly_Ui  data={Wgt_Delear_Data} selectedTerritory={selectedTerritory}/>
          </div>
          <div className={toggleState === 3 ? "  " : " w3-hide  "} onClick={() => toggleTab(3)} >

          </div>
        </div>
      </div>

      <div class="w3-row w3-padding-16"> </div>


    </div>
  );
};


export default Territory;