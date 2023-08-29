import { useEffect, useState } from "react";
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

const Wgt_Delear_Weekly_Ui = ({ data = [] }) => {
  const [visibility, setVisibility] = useState(false);

  const [getinputs, setGetinputs] = useState({});
  // const currentDate = new Date("2023-09-22");
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
  const month = monthNames[currentDate.getMonth()];
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
              Dealers Weekly Plan
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

          {data?.map((item) => (
            <tr className="h6 w3-small" key={item?.id}>
              <td className="" colSpan={1} style={{ width: "15%" }}>
                {item?.name}
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
                <input className="inp40" defaultValue={item?.week_1} />
              </td>
              <td className="">
                <input className="inp40" defaultValue={item?.week_2} />
              </td>
              <td className="">
                <input className="inp40" defaultValue={item?.week_3} />
              </td>
              <td className="">
                <input className="inp40" defaultValue={item?.week_4} />
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
