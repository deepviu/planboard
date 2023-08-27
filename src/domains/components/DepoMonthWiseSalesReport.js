import { useEffect, useState } from "react";
import axiosInstance from "./../../auth/api";
import { SHOW_TOAST } from "../../store/constant/types";
import { useDispatch } from "react-redux";
import LoadingPlaceholder from "../../components/LoadingPlaceholder";

const DepoMonthWiseSalesReport = ({ selectedZone, selectedDepot }) => {
  const dispatch = useDispatch();
  const [monthWiseSalesData, setMonthWiseSalesData] = useState([])
  const [isLoading, setLoading] = useState(true)

  const tableScroll = {
    height: '400px',
    overflow: 'scroll'
  }

  useEffect(() => {
    const payload = {
      Token: localStorage.getItem("access_token"),
      ZoneId: 0,//selectedZone,
      DepotId: 0//selectedDepot
    };
    const fetchDepotSalesPlan = async () => {
      setLoading(true)
      try {
        const response = await axiosInstance.post("DepotMonthPlan", payload);
        console.log("=====DepotMonthPlan====", response);
        if (response?.status === 200) {
          setMonthWiseSalesData(response.data.Data != null ? response.data.Data : [])
        }
        setLoading(false)
      } catch (error) {
        // Handle errors
        dispatch({ type: SHOW_TOAST, payload: error.message });
      }
    };

    fetchDepotSalesPlan();
  }, [selectedZone]);

  return (
    <>
      <div className="w3-col l6 m6 s6 headingMB">
        <span className="w3-xlarge">
          Month wise Sales Target
        </span>
      </div>
      <div className="w3-col 12 " style={tableScroll}>
        <table className="tbl_grid w3-table table-bordered  h6 w3-small w3-white ">
          {/* <tr className="w3-gray h5">
          <td colSpan="20" className=" w3-padding  text-left ">
            Month wise Sales Target
            <span className=" w3-right w3-opacity">
              <i className="w3-text-teal fa fa-save"> </i> Save
            </span>
          </td>
        </tr> */}
          <tr className=" w3-yellow h6">
            <td colSpan="1" className="" style={{ width: "14%" }}>
              Depot
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
          {isLoading ? (
            <tr>
              <td colSpan="16">
                <LoadingPlaceholder numberOfRows={4} />
              </td>
            </tr>
          ) : (
            <>
              {monthWiseSalesData.length == 0 ? (
                <tr>
                  <td colSpan="16">No data found</td>
                </tr>
              ) : (
                monthWiseSalesData.map((item, index) => (
                  <tr key={index} className="">
                    <td className="">{item.depot_name}</td>
                    <td className="">{item.LLY_Value}</td>
                    <td className="">{item.YTD_Value}</td>
                    <td className="">{item.CY_Value} </td>
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

export default DepoMonthWiseSalesReport;