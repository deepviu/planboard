import React from "react";
import { useEffect, useState } from "react";

import Wgt_Marketsector_Ui from "./Wgt_Marketsector_Ui";
import { Wgt_Marketsector_Data } from "./Wgt_Marketsector_Data";

import CustomPopup from "../CustomPopup";
import CustomPopup1 from "../CustomPopup";
import CustomPopup2 from "../CustomPopup";
import CustomPopup3 from "../CustomPopup";
import CommonTopSales from "../components/CommonTopSales";
import { useSelector } from "react-redux";
import ZoneDropDown from "../components/ZoneDropDown";
import DepoSelectionBox from "../components/DepoSelectionBox";

import NationalZoneMonthSale from "../components/NationalZoneMonthSale";
import DepoMonthWiseSalesReport from "../components/DepoMonthWiseSalesReport";
import TerritoryMonthWiseSalesReport from "../components/TerritoryMonthWiseSalesReport";
import TerritoryMonthSale from "../components/TerritoryMonthSale";
import TerritorySelectionBox from "../components/TerritorySelectionBox";

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

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };


  const handleSelectionChange = (newValue) => {
    setSelectedZone(newValue);
  };
  const [selectedTerritory, setSelectedTerritory] = useState(0)
  const [selectedDepot, setSelectedDepot] = useState(0)

  const onSelectedTerritoryChange = (newValue) => {
    setSelectedTerritory(newValue);
    console.log("45-setselectedTerritory", newValue);
  };

  const onSelectedDepoChange = (newValue) => {
    setSelectedDepot(newValue);
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



      <CommonTopSales actionType="hod" selectedZone={0} />


      <div
        id="Wgt_Zone_Id"
        className=" w3-leftbar w3-border-red Wgt_Zone_Class w3-row w3-row-padding w3-margin-bottom w3-white "
      >

        <NationalZoneMonthSale selectedZone={selectedZone} />
        {/* <Wgt_ZoneWise_Ui data={data} /> */}
      </div>
      <div className="w3-clear w3-padding-16"> </div>


      <div class="w3-row w3-white w3-border w3-border-gray">
        <div className="w3-bar w3-gray">
          <div
            className={
              toggleState === 1
                ? " w3-bar-item w3-button w3-white  w3-hover-white  "
                : " w3-bar-item w3-button w3-gray  w3-hover-white  "
            }
            onClick={() => toggleTab(1)}
          >
            <span className=" h6  w3-text-gray "> Depot Monthly Plan </span>
          </div>
          <div
            className={
              toggleState === 2
                ? " w3-bar-item w3-button  w3-white  w3-hover-white "
                : " w3-bar-item w3-button w3-gray w3-hover-white "
            }
            onClick={() => toggleTab(2)}
          >
            <span className=" h6  w3-text-gray "> Territory Monthly Plan </span>
          </div>
          <div
            className={
              toggleState === 3
                ? " w3-bar-item w3-button  w3-white  w3-hover-white "
                : " w3-bar-item w3-button w3-gray w3-hover-white "
            }
            onClick={() => toggleTab(3)}
          >
            <span className=" h6 w3-text-gray "> Dealer Monthly Plan </span>
          </div>
        </div>
        <div class="w3-row w3-padding ">
          <div>
            <div className="w3-row">
              {toggleState === 1 || toggleState === 2 || toggleState === 3 ? (
                <div className="w3-col l3 m4 s6">
                  <ZoneDropDown selectedZone={selectedZone} onValueChange={handleSelectionChange} />
                </div>
              ) : null}

              {toggleState === 2 || toggleState === 3 ? (
                <div className="w3-col l3 m4 s6">
                  <DepoSelectionBox selectedZone={selectedZone} selectedDepot={onSelectedDepoChange} />
                </div>
              ) : null}

              {toggleState === 3 ? (
                <div className="w3-col l3 m4 s6">
                  <TerritorySelectionBox selectedZone={selectedZone} selectedDepot={selectedDepot} selectedTerritory={0} onSelectedTerritoryChange={onSelectedTerritoryChange} />
                </div>
              ) : null}
            </div>

          </div>
          <div className="w3-clear w3-padding-16"> </div>
          <div
            className={toggleState === 1 ? "  " : " w3-hide  "}
            onClick={() => toggleTab(1)}
          >
            <DepoMonthWiseSalesReport selectedZone={selectedZone} selectedDepot={0} filterDropDown={1} />
          </div>
          <div
            className={toggleState === 2 ? "  " : " w3-hide  "}
            onClick={() => toggleTab(2)}
          >
            <TerritoryMonthWiseSalesReport selectedDepot={0} filterDropDown={1} />
          </div>
          <div
            className={toggleState === 3 ? "  " : " w3-hide  "}
            onClick={() => toggleTab(3)}
          >
            <TerritoryMonthSale selectedTerritory={0} filterDropDown={1} />
          </div>
        </div>
      </div>

      <div className="w3-clear w3-padding-16"> </div>


    </div>
  );
};
export default National;
