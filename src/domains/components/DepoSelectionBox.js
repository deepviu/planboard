import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "./../../auth/api";
import { SHOW_TOAST } from "../../store/constant/types";


const DepoSelectionBox = ({ selectedZone, selectedDepot, onSelectedDepoChange }) => {
  const dispatch = useDispatch();
  console.log("=====selectedDepot====", selectedDepot);

  const [isLoading, setLoading] = useState(true)
  const [depotArray, setDepotSalesPlanData] = useState([]);
  const [selctedDepo, setSelctedDepo] = useState(selectedDepot ?? 0);

  const handleChange = (event) => {
    const depotid = parseInt(event.target.value);
     
    onSelectedDepoChange(depotid);
    setSelctedDepo(depotid);

  };

  useEffect(() => {
    const payload = {
      Token: localStorage.getItem("access_token"),
      ZoneId: selectedZone,
      DepotId: 0//selectedDepot
    };
    const fetchDepotSalesPlan = async () => {
      setLoading(true)
      try {
        const response = await axiosInstance.post("DepotMonthPlan", payload);
        
        if (response?.status === 200) {
          setDepotSalesPlanData(response.data.Data != null ? response.data.Data : [])
          console.log("=====selectedDepotselectedDepotselectedDepotselectedDepot====", selectedDepot);
          setSelctedDepo(selectedDepot ?? 0);
        }
        setLoading(false)
      } catch (error) {
        // Handle errors
        dispatch({ type: SHOW_TOAST, payload: error.message });
      }
    };

    fetchDepotSalesPlan();
  }, [selectedZone, selectedDepot]);

  return (
    <select
      className="form-control"
    value={selctedDepo}
    onChange={handleChange}
    >
      <option value="0">All Depot</option>
      {depotArray?.map((item, index) => (
        <option key={index} value={item?.depotid} >
          {item.depot_name}
        </option>
      ))}
    </select>
  )
}

export default DepoSelectionBox;