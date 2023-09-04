import React from "react";
import { useEffect, useState } from "react";
import CommonTopSales from "../components/CommonTopSales";
import { useSelector } from "react-redux";
import ZoneDropDown from "../components/ZoneDropDown";
import NationalZoneMonthSale from "../components/NationalZoneMonthSale";
import MarketSector from "../components/MarketSector";

const National = () => { 
  // Set Select Zone
  const [selectedZone, setSelectedZone] = useState(0);
  // const [filteredZones, setFilteredZones] = useState([]);
  // const [filteredZonesData, setFilteredZonesData] = useState([]);
   
  useEffect(() => {
    console.log("National Component Rendered");
  }, []);

  useEffect(() => {
    console.log("Selected Zone Changed:", selectedZone);
  }, [selectedZone]);
  
  return (
    <div className=" main ">
      <div className="w3-clear w3-padding-16"> </div>

      <div className="w3-row ">
        <span className="w3-large">
          Shalimar Paints Limited
        </span> 
      </div>

      <CommonTopSales  />

      {/* <div className="w3-col l3 m3 s6 w3-hide">
        <ZoneDropDown selectedZone={selectedZone} onValueChange={handleSelectionChange} />
      </div> */}
      <div className="w3-clear w3-padding-16"> </div>

      <div
        id="Wgt_Zone_Id"
        className=" w3-leftbar w3-border-red Wgt_Zone_Class w3-row w3-row-padding w3-margin-bottom w3-white "
      >
        <NationalZoneMonthSale />
      </div>
      <div className="w3-clear w3-padding-16"> </div>

      <div
        id="Wgt_Segment_Id"
        className="Wgt_Segment_Class w3-row w3-row-padding  w3-padding-large w3-margin-bottom w3-white "
      >
        <p className=" w3-xlarge ">
          <i className="fa fa-bar-chart "></i> Market Sector (Breakdown){" "}
        </p>
        <hr />
        <MarketSector />
      </div>
    </div>
  );
};
export default National;
