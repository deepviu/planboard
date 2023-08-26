import { useEffect, useState } from "react";
import axiosInstance from "./../../auth/api";
import { SHOW_TOAST } from "../../store/constant/types";
import { useDispatch } from "react-redux";

const TerritoryMonthWiseSalesReport = ({ selectedZone, selectedDepot }) => {
  const dispatch = useDispatch();
  const [territoryMonthPlan, setTerritoryMonthPlan] = useState([])

  useEffect(() => {
    const payload = {
      Token: localStorage.getItem("access_token"),
      TerritoryId: 0,//selectedZone,
      DepotId: 0//selectedDepot
    };
    const fetchTerritoryMonthPlan = async () => {
      try {
        const response = await axiosInstance.post("TerritoryMonthPlan", payload);
        console.log("=====TerritoryMonthPlan====", response);
        if (response?.status === 200) {
          setTerritoryMonthPlan(response.data.Data != null ? response.data.Data : [])
        }
      } catch (error) {
        // Handle errors
        dispatch({ type: SHOW_TOAST, payload: error.message });
      }
    };

    fetchTerritoryMonthPlan();
  }, [selectedZone]);

  return (
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
        <td colSpan="1" className="" style={{ width: "14%" }}>
        Territory 
        </td>
        <td className=" "> LLY </td>
        <td className=" "> LY </td>
        <td className=" "> Total </td>
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
      {territoryMonthPlan.map((item) => (
        <tr className="">
          <td className=""> {item.territory_name} </td>
          <td className="">  {item.LLY_Value} </td>
          <td className="">  {item.YTD_Value} </td>
          <td className=""> - </td>
          <td className="">-
          </td>
          <td className="">
            -
          </td>
          <td className="">-
          </td>
          <td className="">-
          </td>
          <td className="">-
          </td>
          <td className="">-
          </td>
          <td className="">-
          </td>
          <td className="">-
          </td>
          <td className="">-
          </td>
          <td className="">-
          </td>
          <td className="">-
          </td>
          <td className="">-
          </td>
        </tr>
      ))}


    </table>
  )
}

export default TerritoryMonthWiseSalesReport;