import { useEffect, useState } from "react";
import axiosInstance from "./../../auth/api";
import { SHOW_TOAST } from "../../store/constant/types";
import { useDispatch } from "react-redux";
import LoadingPlaceholder from "../../components/LoadingPlaceholder";

const TerritoryMonthWiseSalesReport = ({ selectedDepot }) => {
  const dispatch = useDispatch();
  const [territoryMonthPlan, setTerritoryMonthPlan] = useState([])
  const [isLoading, setLoading] = useState(true)

  const tableScroll = {
    height: '400px',
    overflow: 'scroll'
  }

  useEffect(() => {
    const payload = {
      Token: localStorage.getItem("access_token"),
      DepotId: selectedDepot,
      TerritoryId: 0//selectedZone
    };
    const fetchTerritoryMonthPlan = async () => {
      try {
        setLoading(true)
        const response = await axiosInstance.post("TerritoryMonthPlan", payload);
        console.log("=====TerritoryMonthPlan====", response);

        if (response?.status === 200) {
          setTerritoryMonthPlan(response.data.Data != null ? response.data.Data : [])
        }
        setLoading(false)
      } catch (error) {
        // Handle errors
        dispatch({ type: SHOW_TOAST, payload: error.message });
      }
    };

    fetchTerritoryMonthPlan();
  }, [selectedDepot]);

  return (
    <>
      <div className="w3-col l6 m6 s6 headingMB">
        <span className="w3-large">
          Month wise Sales Target <span className=" w3-text-gray w3-opacity">({territoryMonthPlan.length})</span>
        </span>
      </div>
      <div className="w3-col 12 " style={tableScroll}>
        <table className="tbl_grid w3-table table-bordered  h6 w3-small w3-white ">
          <tr className=" w3-yellow h6">
            <td colSpan="1" className="" style={{ width: "7%" }}>
              Depo Name
            </td>
            <td colSpan="1" className="" style={{ width: "5%" }}>
              Territory
            </td>
            <td className=" "> LLY </td>
            <td className=" "> LY </td>
            <td className=" "> CY </td>
            <td className=" "> YTD </td>
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
          {isLoading ? (
            <tr>
              <td colSpan="30">
                <LoadingPlaceholder numberOfRows={4}  ></LoadingPlaceholder>
              </td>
            </tr>) : (
            <>
              {territoryMonthPlan.length == 0 ? (
                <tr>
                  <td colSpan="30">No data found</td>
                </tr>
              ) : (
                territoryMonthPlan.map((item, index) => (
                  <tr key={index}>
                    <td className=""> {item.depot_name} </td>
                    <td className=""> {item.territory_name} </td>
                    <td className="">  {item.LLY_Value} </td>
                    <td className="">  {item.LY_Value}  <br /> <span className="w3-text-gray ">({(((item.LY_Value)/(item.LLY_Value))*100).toFixed(2)}%) </span>  </td> 
                    <td className=""> {item.CY_Value}  <br /> <span className="w3-text-gray ">({(((item.YTD_Value)/(item.LY_Value))*100).toFixed(2)}%) </span>  </td>
                    <td className="">  {item.YTD_Value}  <br /> <span className="w3-text-gray ">({(((item.YTD_Value)/(item.CY_Value))*100).toFixed(2)}%) </span> </td>
                    <td className="">{item?.Apr_Month_Value}</td>
                    <td className="">{item?.May_Month_Value}</td>
                    <td className="">{item?.Jun_Month_Value}</td>
                    <td className="">{item?.Jul_Month_Value}</td>
                    <td className="">{item?.Aug_Month_Value}</td>
                    <td className="">{item?.Sep_Month_Value}</td>
                    <td className="">{item?.Oct_Month_Value}</td>
                    <td className="">{item?.Nov_Month_Value}</td>
                    <td className="">{item?.Dec_Month_Value}</td>
                    <td className="">{item?.Jan_Month_Value}</td>
                    <td className="">{item?.Feb_Month_Value}</td>
                    <td className="">{item?.Mar_Month_Value}</td>
                  </tr>
                ))
              )}
            </>
          )}
        </table>
      </div>
    </>
  )
}

export default TerritoryMonthWiseSalesReport;