import React from "react";
import { useEffect, useState } from "react";

import Wgt_Zone_Ui from "./Wgt_Zone_Ui";
import { Wgt_Zone_Data } from "./Wgt_Zone_Data";


import Wgt_Marketsector_Ui from "./Wgt_Marketsector_Ui";
import { Wgt_Marketsector_Data } from "./Wgt_Marketsector_Data";

import Wgt_Statewise_Ui from "./Wgt_Statewise_Ui";
import { Wgt_Statewise_Data } from "./Wgt_Statewise_Data";

import { rolePermission, zoneData } from "../../auth/middleware";

import CustomPopup from "../CustomPopup";
import CustomPopup1 from "../CustomPopup";
import CustomPopup2 from "../CustomPopup";
import CustomPopup3 from "../CustomPopup";
import Wgt_ZoneWise_Ui from "./Wgt_ZoneWise_Ui.jsx";
import CommonTopSales from "../components/CommonTopSales";
import { useSelector } from "react-redux";
import ZoneDropDown from "../components/ZoneDropDown";
import NationalZoneMonthSale from "../components/NationalZoneMonthSale";

const National = () => {
  const { AuthData } = useSelector((state) => state.auth);
  console.log("====auth====", AuthData)
  // Set Select Zone
  const [selectedZone, setSelectedZone] = useState(0);
  const [filteredZones, setFilteredZones] = useState([]);
  const [filteredZonesData, setFilteredZonesData] = useState([]);
  console.log(
    "🚀 ~ file: National.jsx:27 ~ National ~ filteredZonesData:",
    filteredZonesData
  );
  const [data, setData] = useState(null);
  console.log("🚀 ~ file: National.jsx:28 ~ National ~ id:", data);

  const [visibility, setVisibility] = useState(false);
  const [visibility1, setVisibility1] = useState(false);
  const [visibility2, setVisibility2] = useState(false);
  const [visibility3, setVisibility3] = useState(false);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };
  const popupCloseHandler1 = (e) => {
    setVisibility1(e);
  };
  const popupCloseHandler2 = (e) => {
    setVisibility2(e);
  };
  const popupCloseHandler3 = (e) => {
    setVisibility3(e);
  };

  // useEffect(() => {
  //   const permissions = rolePermission()?.permissions;
  //   if (permissions) {
  //     const filteredZonessData = Wgt_Zone_Data.filter((item) =>
  //       permissions.includes(item.id)
  //     );
  //     const filteredZoness = zoneData.filter((item) =>
  //       permissions.includes(item.id)
  //     );
  //     const zoneId = 2; //permissions.length > 0 ? permissions[0] : 0;
  //     setSelectedZone(permissions.length > 0 ? permissions[0] : 0);
  //     const filteredZonesNew = filteredZoness.filter(
  //       (item) => item.id == zoneId
  //     );

  //     setData(filteredZonesNew[0]);
  //     setFilteredZonesData(filteredZonessData);
  //     setFilteredZones(filteredZoness);
  //   }
  // }, []);

  // const handleZoneSelect = (data) => {
  //   setSelectedZone(data?.id);

  //   const filteredZonesNew = filteredZones.filter(
  //     (item) => item.id == data?.id
  //   );
  //   console.log("filteredZonesNew", filteredZonesNew);
  //   setData(filteredZonesNew[0]);
  // };
  useEffect(() => {

  },[selectedZone])

  const handleSelectionChange = (newValue) => {
    setSelectedZone(newValue); 
  };

  return (
    <div className=" main ">
      <div className="w3-clear w3-padding-16"> </div>

      <div className="w3-row ">
        <span className="w3-large">
          Shalimar Paints Limited 
        </span>

        {/* <span className=" w3-right">
          <i className="w3-text-teal fa fa-file-excel-o"> </i> Upload
        </span> */}
      </div>

   

      <CommonTopSales actionType="" selectedZone={0} /> 
     
      <div
        id="Wgt_Zone_Id"
        className="Wgt_Zone_Class w3-row w3-row-padding w3-margin-bottom w3-white w3-hide  "
      >
        {/* {filteredZonesData.map((data) => (
          <Wgt_Zone_Ui key={data.id} data={data} setId={handleZoneSelect} />
        ))} */}
      </div>

        <div className="w3-col l3 m3 s6 w3-hide">
            <ZoneDropDown selectedZone={selectedZone} onValueChange={handleSelectionChange} />
          </div>
      <div className="w3-clear w3-padding-16"> </div>

      <div
        id="Wgt_Zone_Id"
        className=" w3-leftbar w3-border-red Wgt_Zone_Class w3-row w3-row-padding w3-margin-bottom w3-white "
      >
       {/* <CommonTopSales actionType="Zone" selectedZone={selectedZone} /> */}

      <NationalZoneMonthSale selectedZone={selectedZone}/> 
        {/* <Wgt_ZoneWise_Ui data={data} /> */}
      </div>
      <div className="w3-clear w3-padding-16"> </div>
       

      <div
        id="Wgt_Segment_Id"
        className="Wgt_Segment_Class w3-row w3-row-padding  w3-padding-large w3-margin-bottom w3-white "
      >
        <p className=" w3-xlarge ">
          {" "}
          <i className="fa fa-bar-chart "></i> Market Sector (Breakdown){" "}
          {data?.name}
        </p>{" "}
        <hr />
        {Wgt_Marketsector_Data.map((data) => (
          <Wgt_Marketsector_Ui key={data.id} data={data} />
        ))}
      </div>

      <div className="w3-clear w3-padding-16"> </div> 
        
        
    </div>
  );
};
export default National;
