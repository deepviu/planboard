import { useEffect, useState } from "react";
import axiosInstance from "./../../auth/api";
import { SHOW_TOAST } from "../../store/constant/types";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const DepoSales = ({ selectedZone, selectedDepot }) => {
  const dispatch = useDispatch();
  const [depotSalesPlanData, setDepotSalesPlanData] = useState([]);

  useEffect(() => {
    const payload = {
      Token: localStorage.getItem("access_token"),
      ZoneId: 0,//selectedZone,
      DepotId: 0//selectedDepot
    };
    const fetchDepotSalesPlan = async () => {
      try {
        const response = await axiosInstance.post("DepotMonthPlan", payload);
        console.log("=====DepotMonthPlan====", response);
        if (response?.status === 200) {
          setDepotSalesPlanData(response.data.Data != null ? response.data.Data : [])
        }
      } catch (error) {
        // Handle errors
        dispatch({ type: SHOW_TOAST, payload: error.message });
      }
    };

    fetchDepotSalesPlan();
  }, [selectedZone]);

  return (
    <div className="w3-row w3-row-padding w3-padding-16 w3-margin-top  w3-margin-bottom w3-white ">
      <div className="w3-col l6 m6 s6 ">
        <span className="w3-xlarge">
          Depot
          <span className=" w3-text-gray w3-opacity">[Sales Plan ]</span>
        </span>
      </div>

      {/* <div className="w3-col l3 m3 s6 w3-right">
        <select
          className="form-control"
        // value={selectedPlans}
        // onChange={onchangePlansHandler}
        >
          <option value=""> Sales Plan </option>
          <option value="osodcp"> OS / OD / Collection Plan </option>
          <option value="other"> Other </option>
        </select>
      </div> */}
      <table className="w3-table table-stripped w3-white table-bordered ">
        <tr>
          <th>
            Depot <br />
            <i className="w3-text-gray"> T.(6) , Dlrs.(234) </i>
          </th>
          <th>
            {" "}
            LLY
            <br /> 21-22{" "}
          </th>
          <th>
            LY
            <br /> 22-23
          </th>
          <th>
            Target V.1 <br />
            23-24
          </th>
          <th>
            Target V.2 <br />
            23-24
          </th>
          <th> YTD (%) </th>
        </tr>
        {depotSalesPlanData.map((ele) => (
          <tr>
            <th>
              <Link className="link  w3-text-indigo" to={`/Statewise/${ele.id}`}>  {ele.depot_name} </Link>
              <br />
              <span className="w3-small h6 w3-text-gray" >
                T.(0)
                Dlrs.(0)
              </span>
            </th>
            <td>{ele.LLY_Value} L  <i className="w3-text-gray"> </i></td>
            <td> {ele.LY_Value} L <i className="w3-text-gray">({ele.LY_Volume}%)</i></td>
            <td> {ele.YTD_Value} L <i className="w3-text-gray">({ele.YTD_Volume}%)</i></td>
            <td> {ele.YTD_Value} L <i className="w3-text-gray">({ele.YTD_Volume}%)</i></td>
            <td> {ele.YTD_Value} L <i className="w3-text-gray">({ele.YTD_Volume}%)</i></td>
          </tr>
        ))}
        {/*  */}
      </table>
      {/*selectedPlans == "osodcp" ? (
      <table className="w3-table table-stripped w3-white table-bordered ">
        <tr>
          <th>
            Depot <br />
            <i className="w3-text-gray"> T.(6) , Dlrs.(234) </i>
          </th>
          <th> SALE </th>
          <th> OS </th>
          <th> OD </th>
          <th> DUE </th>
          <th> COLL </th>
          <th> YTD (%) </th>
        </tr>
        {filtereDepot?.map((data) => (
          <Wgt_Depotwise_OSODCP_Ui key={data.id} data={data} />
        ))}
      </table>
    ) : null} */}
    </div>
  )
}

export default DepoSales;