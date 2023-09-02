import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "./../../auth/api";
import { SHOW_TOAST } from "../../store/constant/types";
import { useDispatch } from "react-redux";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Wgt_Delear_Weekly_Ui = ({ data = [], selectedTerritory = 0 }) => {
  const dispatch = useDispatch();

  const [monthWiseSalesData, setMonthWiseSalesData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [visibility, setVisibility] = useState(false);

  const [getinputs, setGetinputs] = useState({});

  const currentDate = new Date("2023-05-22");

  // const currentMonthCou = currentDate.getMonth();
  const currentMonthCount =
    currentDate.getMonth() < 3
      ? currentDate.getMonth() + 13
      : currentDate.getMonth() + 1;
  const [currentMonth, setCurrentMonth] = useState(currentMonthCount);

  function getInput() {
    console.log("🚀 ~ file: Wgt_Delear_Ui.jsx:20 ~ getinputs:", getinputs);
  }

  function onchangeInputs(e, id) {
    setGetinputs({
      ...getinputs,
      [id]: { ...getinputs[id], [e.target.name]: e.target.value },
    });
  }

  // const financialYearStartMonth = 4;
  // const adjustedCurrentMonth =
  //   (currentMonth + 12 - financialYearStartMonth) % 12;
  // const filteredMonths = monthNames.slice(
  //   adjustedCurrentMonth,
  //   currentMonth + 1
  // );

  console.log("filteredMonths", currentMonth);

  useEffect(() => {
    const payload = {
      Token: localStorage.getItem("access_token"),
      CustomerId: 7845,
      TerritoryId: 76, //selectedDepot
      Month: "Aug", //selectedDepot
    };
    const fetchDepotSalesPlan = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.post(
          "CustomerMonthWeekPlan",
          payload
        );
        console.log("=====CustomerMonthWeekPlan====", response);
        if (response?.status === 200) {
          setMonthWiseSalesData(
            response.data.Data != null ? response.data.Data : []
          );
        }
        setLoading(false);
      } catch (error) {
        // Handle errors
        dispatch({ type: SHOW_TOAST, payload: error.message });
      }
    };

    fetchDepotSalesPlan();
  }, [selectedTerritory]);

  return (
    <>
      <div className="w3-col l12 m12 s12  ">
        <table className="tbl_grid w3-table table-bordered h6 w3-small">
          <tr className="w3-gray">
            <td colSpan="30" className=" h5 w3-padding  text-left ">
              Dealers Weekly Plan
            </td>
          </tr>

          <tr className=" w3-yellow h6 w3-small">
            <td className="" colSpan={1} rowSpan={2} style={{ width: "15%" }}>
              Delear
            </td>

            {currentMonth <= 8 ? (
              currentMonth == 8 ? (
                <td className="" colSpan={4}>
                  August
                </td>
              ) : (
                <td className="" colSpan={4}>
                  August
                </td>
              )
            ) : (
              <td className="" colSpan={4}>
                August
              </td>
            )}

            <td className="" colspan={12}>
              Week
            </td>
          </tr>

          <tr className=" w3-yellow h6 w3-small">
            <td className="" colSpan={1}>
              OS
            </td>

            <td className="" colSpan={1}>
              OD
            </td>

            <td className="" colSpan={1}>
              Coll.
            </td>

            <td className="" colSpan={1}>
              Sales
            </td>

            <td className="">Week-1</td>

            <td className="">Week-2</td>

            <td className="">Week-3</td>

            <td className="">Week-4</td>
          </tr>

          {monthWiseSalesData?.map((item, index) => (
            <tr className=" h6 w3-small">
              <td className="" colSpan={1} style={{ width: "15%" }}>
                {item.dealer_name}
              </td>

              <td className="" colSpan={1}>
                23
              </td>

              <td className="" colSpan={1}>
                34
              </td>

              <td className="" colSpan={1}>
                60
              </td>

              <td className="" colSpan={1}>
                13
              </td>

              <td className="">
                <input className="inp40" value="10% " />
              </td>

              <td className="">
                <input className="inp40" value="35% " />
              </td>

              <td className="">
                <input className="inp40" value="65% " />
              </td>

              <td className="">
                <input className="inp40" value="100% " />
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default Wgt_Delear_Weekly_Ui;
