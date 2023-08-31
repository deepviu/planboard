import { useEffect, useState } from "react";
import axiosInstance from "../../auth/api";
import { SHOW_TOAST } from "../../store/constant/types";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

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

const Wgt_Delear_Weekly_Ui = ({ data }) => {
  const dispatch = useDispatch();

  const [visibility, setVisibility] = useState(false);
  const [weekdata, setWeekdata] = useState([]);
  const [getinputs, setGetinputs] = useState({});
  const [reload, setReload] = useState(false);
  // const currentDate = new Date("2023-10-22");
  const currentDate = new Date();

  // const currentMonthCou = currentDate.getMonth();
  const currentMonthCount =
    currentDate.getMonth() < 3
      ? currentDate.getMonth() + 13
      : currentDate.getMonth() + 1;
  const [currentMonth, setCurrentMonth] = useState(currentMonthCount);
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
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = monthNames[currentDate.getMonth()];
  const monthName = months[currentDate.getMonth()];
  function getInput() {
    console.log("🚀 ~ file: Wgt_Delear_Ui.jsx:20 ~ getinputs:", getinputs);
    setReload(true);
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
  const payload = {
    Token: localStorage.getItem("access_token"),
    CustomerId: 0,
    TerritoryId: data,
    Month: monthName,
  };
  const fetchDepotSalesPlan = async () => {
    try {
      const response = await axiosInstance.post(
        "CustomerMonthWeekPlan",
        payload
      );

      if (response?.status === 200) {
        setWeekdata(response?.data?.Data);
        setReload(false);
      }
    } catch (error) {
      // Handle errors
      dispatch({ type: SHOW_TOAST, payload: error.message });
      setReload(false);
    }
  };

  useEffect(() => {
    if (data !== 0) {
      fetchDepotSalesPlan(); // Call the API when component mounts
    }
  }, [data]);
  useEffect(() => {
    if (reload) {
      setReload(false);
      fetchDepotSalesPlan();
    }
  }, [reload]);
  console.log("filteredMonths", currentMonth);

  return (
    <>
      <div className="w3-col l12 m12 s12  ">
        <span className="w3-large w3-hide ">
          <b> [ H05 ] Dealers </b> Weekly (Targets){" "}
          <i className="w3-text-red fa fa-lock"> </i>{" "}
        </span>
        <br />

        <table className="tbl_grid w3-table table-bordered h6 w3-small">
          <tr className="w3-gray">
            <td colSpan="30" className=" h5 w3-padding  text-left ">
              Dealers Weekly Plan ({weekdata?.length})
              <span
                className="w3-button w3-right w3-blue "
                onClick={getInput}
                style={{ cursor: "pointer" }}
              >
                <i className=" fa fa-save"> </i> Save
              </span>
            </td>
          </tr>

          <tr className=" w3-yellow h6 w3-small">
            <td className="" colSpan={1} rowSpan={2} style={{ width: "15%" }}>
              Delear{" "}
            </td>{" "}
            <td className="" colSpan={4}>
              {month}
            </td>
            <td className="" colspan={12}>
              Week{" "}
            </td>{" "}
          </tr>

          <tr className=" w3-yellow h6 w3-small">
            <td className="" colSpan={1}>
              OS{" "}
            </td>{" "}
            <td className="" colSpan={1}>
              OD{" "}
            </td>{" "}
            <td className="" colSpan={1}>
              Coll.{" "}
            </td>{" "}
            <td className="" colSpan={1}>
              Sales{" "}
            </td>{" "}
            <td className="">Week-1 </td> <td className="">Week-2 </td>{" "}
            <td className="">Week-3 </td> <td className="">Week-4 </td>{" "}
          </tr>

          {weekdata?.map((item) => (
            <tr className="h6 w3-small" key={item?.dealerid}>
              <td className="" colSpan={1} style={{ width: "15%" }}>
                {item?.dealer_name}
              </td>
              <td className="" colSpan={1}>
                {item?.current_outstand}
              </td>
              <td className="" colSpan={1}>
                {item?.current_overdue}
              </td>
              <td className="" colSpan={1}>
                {item?.current_traget}
              </td>
              <td className="" colSpan={1}>
                {item?.current_sell}
              </td>
              <td className="">
                <input
                  className="inp40"
                  defaultValue={item?.week1}
                  name={item?.dealerid + `_week1`}
                  onChange={(e) => onchangeInputs(e, item?.dealerid)}
                />
              </td>
              <td className="">
                <input
                  className="inp40"
                  defaultValue={item?.week2}
                  name={item?.dealerid + `_week2`}
                  onChange={(e) => onchangeInputs(e, item?.dealerid)}
                />
              </td>
              <td className="">
                <input
                  className="inp40"
                  defaultValue={item?.week3}
                  name={item?.dealerid + `_week3`}
                  onChange={(e) => onchangeInputs(e, item?.dealerid)}
                />
              </td>
              <td className="">
                <input
                  className="inp40"
                  defaultValue={item?.week4}
                  name={item?.dealerid + `_week4`}
                  onChange={(e) => onchangeInputs(e, item?.dealerid)}
                />
              </td>
            </tr>
          ))}

          {/* <tr className=" h6 w3-small">
            <td className="" colSpan={1} style={{ width: "15%" }}>
              Dealer 1{" "}
            </td>{" "}
            <td className="" colSpan={1}>
              23{" "}
            </td>{" "}
            <td className="" colSpan={1}>
              34{" "}
            </td>{" "}
            <td className="" colSpan={1}>
              60{" "}
            </td>{" "}
            <td className="" colSpan={1}>
              13{" "}
            </td>{" "}
            <td className="">
              <input className="inp40" value="10% " />{" "}
            </td>{" "}
            <td className="">
              <input className="inp40" value="35% " />{" "}
            </td>{" "}
            <td className="">
              <input className="inp40" value="65% " />{" "}
            </td>{" "}
            <td className="">
              <input className="inp40" value="100% " />{" "}
            </td>{" "}
          </tr> */}
        </table>
      </div>
    </>
  );
};

export default Wgt_Delear_Weekly_Ui;
