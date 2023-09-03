import { useEffect, useState } from "react";
import axiosInstance from "./../../auth/api";
import { useDispatch } from "react-redux";
import { SHOW_TOAST } from "../../store/constant/types";
import LoadingPlaceholder from "../../components/LoadingPlaceholder";

const MarketSector = () => {
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(true);
    const [marketSectors, setMarketSector] = useState([]);

    useEffect(() => {
        const payload = {
            Token: localStorage.getItem("access_token"),
        };
        const fetchDepotSalesPlan = async () => {
            setLoading(true)
            try {
                const response = await axiosInstance.post("DepotMonthPlan", payload);
                console.log("=====marketSectors====", response);
                if (response?.status === 200) {
                    setMarketSector(response.data.Data != null ? response.data.Data : [])
                }
                setLoading(false)
            } catch (error) {
                // Handle errors
                dispatch({ type: SHOW_TOAST, payload: error.message });
            }
        };

        fetchDepotSalesPlan();
    }, [])
    return (
        <>{isLoading ? (
            <div class="w3-row ">
                <LoadingPlaceholder numberOfRows={3}  ></LoadingPlaceholder>
            </div>
        ) : (
            <>
                {marketSectors.length == 0 ? (
                    <tr>
                        <td colSpan="12">No data found</td>
                    </tr>
                ) : (
                    marketSectors.map((item, index) => (
                        <div class="w3-row " key={index}>
                            <span className="w3-small h5  "> 123% </span><br />
                            <div class="w3-light-gray">
                                <div class="w3-container w3-center w3-blue w3-small h6 " style={{ width: "30%" }} >
                                    <span className="w3-right" style={{ fontSize: "9px" }} > Test </span>
                                </div>

                                <div class="w3-container w3-center w3-red w3-small h6 " style={{ width: "45%" }} >
                                    <span className="w3-right" style={{ fontSize: "9px" }} > we </span>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </>
        )}
        </>
    )
}

export default MarketSector;