import { useEffect, useState, useContext } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";

import { rolePermission, zoneData } from "../../auth/middleware";

import Wgt_Summ_Zone_Ui from "../zone/Wgt_Summ_Zone_Ui";
import { Wgt_Summ_Zone_Data } from "../zone/Wgt_Summ_Zone_Data";

import Wgt_Delear_Ui from "./Wgt_Delear_Ui";
import { Wgt_Delear_Data } from "./Wgt_Delear_Data";

import CustomPopup from "../CustomPopup";

import CommonTopSales from "../components/CommonTopSales";
import { useDispatch, useSelector } from "react-redux";

import axiosInstance from "./../../auth/api";
import { SHOW_TOAST } from "../../store/constant/types";
import ZoneDropDown from "../components/ZoneDropDown";
import DepotDropDown from "../depot/DepotDropDown";


const Territory = () => {
  const dispatch = useDispatch();
  const { AuthData } = useSelector((state) => state.auth);
  const [visibility, setVisibility] = useState(false);
  const [filteredZones, setFilteredZones] = useState([]);
  const [filteredDepot, setFilteredDepot] = useState([]);


  const [selectedZone, setSelectedZone] = useState(0);
  const [selectedDepot, setSelectedDepot] = useState(0);

  const handleSelectionChange = (newValue) => {
    setSelectedZone(newValue);
  };
 

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  const handleSelectionDepotChange = (newValue) => {
    setSelectedDepot(newValue);
  };
  
 useEffect(() => {
    const payload = {
      Token: localStorage.getItem("access_token"),
      entity_id: 0
    };
   
    const fetchZoneMasters = async () => {
      try {
        const permissions = rolePermission()?.permissions;
  
        const response = await axiosInstance.post(
          "api/Master/ZoneData",
          payload
        );
        if (response?.status === 200) {
          const zonesData = response.data.Data != null ? response.data.Data : [];
          setFilteredZones(zonesData);
          const defaultZone = zonesData.find(
            (zone) => zone.zone_name === AuthData.Zone[0].ZoneName
          );
          setSelectedZone(defaultZone ? defaultZone.zone_id : 0);
        }
      } catch (error) {
        // Handle errors
        dispatch({ type: SHOW_TOAST, payload: error.message });
      }
    };

    fetchZoneMasters();
  },[]);


  return (
    <div className=" main ">
       <div className="w3-col l3 m3 s6 w3-right">
       <ZoneDropDown filteredZones={filteredZones} selectedZone={selectedZone} onValueChange={handleSelectionChange} />
       {/* <DepotDropDown filteredDepot={filteredDepot} selectedDepot={selectedDepot} onValueChange={handleSelectionDepotChange} /> */}

        </div>
      <div className="w3-row w3-padding-16"></div>

      <CommonTopSales selectedZone={selectedZone} />


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

      <Wgt_Delear_Ui data={Wgt_Delear_Data} />

      <div class="w3-row w3-padding-16"> </div>


    </div>
  );
};


export default Territory; 