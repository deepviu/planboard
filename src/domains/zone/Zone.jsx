import { useEffect, useState } from "react"; 
import { useDispatch, useSelector } from "react-redux";

import { rolePermission, zoneData } from "../../auth/middleware";
import CustomPopup from "../CustomPopup";
import CommonTopSales from "../components/CommonTopSales";
import ZoneDropDown from "../components/ZoneDropDown";
import DepoSales from "../components/DepoSales";
import DepoMonthWiseSalesReport from "../components/DepoMonthWiseSalesReport";
import axiosInstance from "./../../auth/api";
import { SHOW_TOAST } from "../../store/constant/types";

const Zone = () => { 
  const dispatch = useDispatch();
  const { AuthData } = useSelector((state) => state.auth);

  const [selectedZone, setSelectedZone] = useState(0);
  const [selectedDepot, setSelectedDepot] = useState(0);

  const [filteredDepots, setFilteredDepots] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const [filteredZones, setFilteredZones] = useState([]);
   

  const handleSelectionChange = (newValue) => {
    setSelectedZone(newValue);
  };

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  // useEffect(() => {
  //   const permissions = rolePermission()?.permissions;

  //   if (permissions) {
  //     const filtered = zoneData.filter((item) =>
  //       permissions.includes(item.id)
  //     );
  //     setFilteredZones(filtered);
  //     setSelectedZone(permissions.length > 0 ? permissions[0] : 0);
  //   }
  // }, []);

  useEffect(() => {
    const payload = {
      Token: localStorage.getItem("access_token"),
      entity_id: 0
    };

    // const fetchZoneMasters = async () => {
    //   try {
    //     const permissions = rolePermission()?.permissions;

    //     const response = await axiosInstance.post("api/Master/ZoneData", payload);
    //     console.log("=====api/Master/ZoneData====", response);
    //     if (response?.status === 200) {
    //       // setZoneDropdown(response.data.Data != null ? response.data.Data : [])
    //       setFilteredZones(response.data.Data != null ? response.data.Data : [])
    //       setSelectedZone(permissions.length > 0 ? permissions[0] : 0);
    //     }
    //   } catch (error) {
    //     // Handle errors
    //     dispatch({ type: SHOW_TOAST, payload: error.message });
    //   }
    // };
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
      <div className="w3-row w3-padding-16">
        <div className="w3-col l3 m3 s6 w3-right">
          <ZoneDropDown filteredZones={filteredZones} selectedZone={selectedZone} onValueChange={handleSelectionChange} />
        </div>
      </div>
  
      <CommonTopSales  selectedZone={selectedZone} /> 

      <DepoMonthWiseSalesReport  selectedZone={selectedZone} selectedDepot={selectedDepot} /> 

    </div>
  );
};
export default Zone;
