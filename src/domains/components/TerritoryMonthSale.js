import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import axiosInstance from "./../../auth/api";
import { SHOW_TOAST } from "../../store/constant/types";
import LoadingPlaceholder from "../../components/LoadingPlaceholder";

const TerritoryMonthSale = ({ selectedTerritory }) => {
    const dispatch = useDispatch();

    const [isLoading, setLoading] = useState(true);
    const [territoryMonthPlan, setselectedDepotMonthPlan] = useState([])
    
    const tableScroll = {
        height: '400px',
        overflow: 'scroll'
      }

    useEffect(() => {
        const payload = {
            Token: localStorage.getItem("access_token"),
            ZoneId: 0,
            DepotId: 0,
            TerritoryId: selectedTerritory,
        };
        const getZoneMonthPlan = async () => {
            try {
                setLoading(true)
                const response = await axiosInstance.post("TerritoryMonthPlan", payload);

                if (response?.status === 200) {
                    console.log("=====TerritoryMonthPlan====", response.data.Data);
                    setselectedDepotMonthPlan(response.data.Data != null ? response.data.Data : [])
                }
                setLoading(false)
            } catch (error) {
                // Handle errors
                dispatch({ type: SHOW_TOAST, payload: error.message });
            }
        };

        getZoneMonthPlan();
    }, [selectedTerritory])

    return (
        <div  style={tableScroll}>
        <table className="tbl_grid w3-table table-bordered  h6 w3-small w3-white ">
            <tr className="w3-gray h5">
                <td colSpan="20" className=" w3-padding  text-left ">
                    Month wise Sales Target
                </td>
            </tr>
            <tr className=" w3-yellow h6">
                <td colSpan="1" className="" style={{ width: "18%" }}>
                    Territory
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
            {isLoading ? (
                <tr>
                    <td colSpan="13">
                        <LoadingPlaceholder numberOfRows={4}  ></LoadingPlaceholder>
                    </td>
                </tr>) : (
                <>
                    {territoryMonthPlan.length == 0 ? (
                        <tr>
                            <td colSpan="13">No data found</td>
                        </tr>
                    ) : (
                        territoryMonthPlan.map((item, index) => (
                            <tr key={index} >
                                <td className="">{item?.territory_name}</td>
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
    )
}

export default TerritoryMonthSale;