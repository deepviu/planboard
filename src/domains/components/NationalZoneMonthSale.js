import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import axiosInstance from "./../../auth/api";
import { SHOW_TOAST } from "../../store/constant/types";
import LoadingPlaceholder from "../../components/LoadingPlaceholder";

const NationalZoneMonthSale = ({ selectedZone = 0 }) => {
    const dispatch = useDispatch();

    const [isLoading, setLoading] = useState(true);
    const [zoneMonthPlan, setZoneMonthPlan] = useState([])

    useEffect(() => {
        const payload = {
            Token: localStorage.getItem("access_token"),
            ZoneId: selectedZone,
        };
        const getZoneMonthPlan = async () => {
            try {
                setLoading(true)
                const response = await axiosInstance.post("ZoneMonthPlan", payload);

                if (response?.status === 200) {
                    console.log("=====getZoneMonthPlan====", response.data.Data);
                    setZoneMonthPlan(response.data.Data != null ? response.data.Data : [])
                }
                setLoading(false)
            } catch (error) {
                // Handle errors
                dispatch({ type: SHOW_TOAST, payload: error.message });
            }
        };

        getZoneMonthPlan();
    }, [])

    return (
        <div id="mom-north" className="w3-row w3-margin-top ">
            <div id="mom-bar-north" className=" ">
                <table className="w3-table w3-stripped table-bordered">
                    <tr>
                        <td className="w3-red" rowspan="2" > Zone </td>
                        <td className="w3-red" rowspan="2"> LY 22-23 </td>
                        <td className="w3-red" rowspan="2" > Plan 2023 <hr className="hr0" /> YTD </td>
                        <td className="w3-gray" colspan="12"> Month Wise Plan </td>
                    </tr>
                    <tr>
                        <td className="w3-gray"> Apr </td>
                        <td className="w3-gray"> May </td>
                        <td className="w3-gray"> Jun </td>
                        <td className="w3-gray"> Jul </td>
                        <td className="w3-gray"> Aug </td>
                        <td className="w3-gray"> Sep </td>
                        <td className="w3-gray"> Oct </td>
                        <td className="w3-gray"> Nov </td>
                        <td className="w3-gray"> Dec </td>
                        <td className="w3-gray"> Jan </td>
                        <td className="w3-gray"> Feb </td>
                        <td className="w3-gray"> Mar </td>
                    </tr>
                    {isLoading ? (
                        <tr>
                            <td colSpan="12">
                                <LoadingPlaceholder numberOfRows={4}  ></LoadingPlaceholder>
                            </td>
                        </tr>) : (
                        <>
                            {zoneMonthPlan.length == 0 ? (
                                <tr>
                                    <td colSpan="12">No data found</td>
                                </tr>
                            ) : (
                                zoneMonthPlan.map((item, index) => (
                                    <tr key={index} >
                                        <td className="">{item?.zone_name}</td>
                                        <td className="">{item?.LY_Value}</td>
                                        <td className="">
                                            {item?.CY_Value} <hr className="hr0" />
                                            {item?.YTD_Value}
                                            <span className="w3-text-gray ">
                                                ({((item.YTD_Value / item.CY_Value) * 100).toFixed(0)}%)
                                            </span>
                                        </td>
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
        </div>
    )
}

export default NationalZoneMonthSale;