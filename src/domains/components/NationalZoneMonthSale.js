import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import axiosInstance from "./../../auth/api";
import { SHOW_TOAST } from "../../store/constant/types";
import LoadingPlaceholder from "../../components/LoadingPlaceholder";

const NationalZoneMonthSale = ({ selectedZone }) => {
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
    }, [selectedZone])

    return (
        <div id="mom-north" className="w3-row w3-margin-top ">
            <span className="w3-small h4 ">
                FY 23-24 - 128.5 Cr. <i className="w3-text-blue fa fa-flag"></i>{" "}
            </span>{" "}
            <br />
            <div id="mom-bar-north" className=" ">
                <table className="w3-table w3-stripped table-bordered">
                    <tr>
                        <td className="w3-red"> Apr </td>
                        <td className="w3-teal"> May </td>
                        <td className="w3-red"> Jun </td>
                        <td className="w3-teal"> Jul </td>
                        <td className="w3-red"> Aug </td>
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