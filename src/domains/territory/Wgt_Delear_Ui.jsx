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
const Wgt_Delear_Ui = ({ data = [] }) => {
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
      [id]: { ...getinputs[id],[e.target.name]: e.target.value },
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
      <div className="w3-col l9 m6 s6 ">
        <span className="w3-large ">
          <b> [ H05 ] Dealers </b> (Targets){" "}
          <i className="w3-text-red fa fa-lock"> </i>{" "}
        </span>
        <br />

        <span
          className="w3-hide btn btn-sm w3-small text-left w3-text-red "
          onClick={(e) => setVisibility(!visibility)}
        >
          {" "}
          <i className="fa fa-lock"></i> Lock / Un-Lock{" "}
        </span>

        <span
          className="w3-hide btn btn-sm w3-small text-left "
          onClick={(e) => setVisibility(!visibility)}
        >
          {" "}
          <i className="fa fa-gear"></i> Set Rules{" "}
        </span>

        <span
          className="w3-hide  btn btn-sm w3-text-gray  w3-small "
          onClick={(e) => setVisibility(!visibility)}
        >
          {" "}
          <i className="fa fa-pencil"></i> Edit Manually{" "}
        </span>
      </div>

      <div className="w3-hide w3-col l3 m3 s6 w3-right">
        <form>
          <select className="form-control " value="">
            <option value=""> Sales Plan </option>
            <option value="All"> OS / OD / Collection Plan </option>
            <option value="All"> Activity Plan </option>
            <option value="All"> Other </option>
          </select>
        </form>
      </div>

      <table className="tbl_grid w3-table table-bordered  h6 w3-small">
        <tr className="w3-gray h5">
          <td colSpan="30" className=" w3-padding  text-left ">
            Month wise Sales Target
            <span className="w3-right w3-opacity" onClick={getInput} style={{cursor:"pointer"}}>
              <i className="w3-text-teal fa fa-save"> </i> Save
            </span>
          </td>
        </tr>

        <tr className=" w3-yellow h6 w3-small">
          <td className="" colSpan={1} rowSpan={2} style={{ width: "15%" }}>
            Delear{" "}
          </td>{" "}
          <td className="" rowSpan={2}>
            Club{" "}
          </td>{" "}
          <td className="" rowSpan={2}>
            Category{" "}
          </td>{" "}
          <td className="" rowSpan={2}>
            LY <br /> 22-23{" "}
          </td>
          <td className="" rowSpan={2}>
            Plan CY <br /> 23-24{" "}
          </td>
          {currentMonth <= 4 ? (
            currentMonth == 4 ? (
              <td className=" " colSpan={4}>
                {" "}
                Apr{" "}
              </td>
            ) : (
              <td className=" " rowSpan={2}>
                {" "}
                Apr{" "}
              </td>
            )
          ) : (
            <td className=" " rowSpan={2}>
              {" "}
              Apr{" "}
            </td>
          )}
          {currentMonth <= 5 ? (
            currentMonth == 5 ? (
              <td className=" " colSpan={4}>
                {" "}
                May{" "}
              </td>
            ) : (
              <td className=" " rowSpan={2}>
                {" "}
                May{" "}
              </td>
            )
          ) : (
            <td className=" " rowSpan={2}>
              {" "}
              May{" "}
            </td>
          )}
          {currentMonth <= 6 ? (
            currentMonth == 6 ? (
              <td className=" " colSpan={4}>
                {" "}
                Jun{" "}
              </td>
            ) : (
              <td className=" " rowSpan={2}>
                {" "}
                Jun{" "}
              </td>
            )
          ) : (
            <td className=" " rowSpan={2}>
              {" "}
              Jun{" "}
            </td>
          )}
          {currentMonth <= 7 ? (
            currentMonth == 7 ? (
              <td className=" " colSpan={4}>
                {" "}
                Jul{" "}
              </td>
            ) : (
              <td className=" " rowSpan={2}>
                {" "}
                Jul{" "}
              </td>
            )
          ) : (
            <td className=" " rowSpan={2}>
              {" "}
              Jul{" "}
            </td>
          )}
          {currentMonth <= 8 ? (
            currentMonth == 8 ? (
              <td className=" " colSpan={4}>
                {" "}
                Aug{" "}
              </td>
            ) : (
              <td className=" " rowSpan={2}>
                {" "}
                Aug{" "}
              </td>
            )
          ) : (
            <td className=" " rowSpan={2}>
              {" "}
              Aug{" "}
            </td>
          )}
          {currentMonth <= 9 ? (
            currentMonth == 9 ? (
              <td className=" " colSpan={4}>
                {" "}
                Sep{" "}
              </td>
            ) : (
              <td className=" " rowSpan={2}>
                {" "}
                Sep{" "}
              </td>
            )
          ) : (
            <td className=" " rowSpan={2}>
              {" "}
              Sep{" "}
            </td>
          )}
          {currentMonth <= 10 ? (
            currentMonth == 10 ? (
              <td className=" " colSpan={4}>
                {" "}
                Oct{" "}
              </td>
            ) : (
              <td className=" " rowSpan={2}>
                {" "}
                Oct{" "}
              </td>
            )
          ) : (
            <td className=" " rowSpan={2}>
              {" "}
              Oct{" "}
            </td>
          )}
          {currentMonth <= 11 ? (
            currentMonth == 11 ? (
              <td className=" " colSpan={4}>
                {" "}
                Nov{" "}
              </td>
            ) : (
              <td className=" " rowSpan={2}>
                {" "}
                Nov{" "}
              </td>
            )
          ) : (
            <td className=" " rowSpan={2}>
              {" "}
              Nov{" "}
            </td>
          )}
          {currentMonth <= 12 ? (
            currentMonth == 12 ? (
              <td className=" " colSpan={4}>
                {" "}
                Dec{" "}
              </td>
            ) : (
              <td className=" " rowSpan={2}>
                {" "}
                Dec{" "}
              </td>
            )
          ) : (
            <td className=" " rowSpan={2}>
              {" "}
              Dec{" "}
            </td>
          )}
          {currentMonth <= 13 ? (
            currentMonth == 13 ? (
              <td className=" " colSpan={4}>
                {" "}
                Jan{" "}
              </td>
            ) : (
              <td className=" " rowSpan={2}>
                {" "}
                Jan{" "}
              </td>
            )
          ) : (
            <td className=" " rowSpan={2}>
              {" "}
              Jan{" "}
            </td>
          )}
          {currentMonth <= 14 ? (
            currentMonth == 14 ? (
              <td className=" " colSpan={4}>
                {" "}
                Feb{" "}
              </td>
            ) : (
              <td className=" " rowSpan={2}>
                {" "}
                Feb{" "}
              </td>
            )
          ) : (
            <td className=" " rowSpan={2}>
              {" "}
              Feb{" "}
            </td>
          )}
          {currentMonth <= 15 ? (
            currentMonth == 15 ? (
              <td className=" " colSpan={4}>
                {" "}
                March{" "}
              </td>
            ) : (
              <td className=" " rowSpan={2}>
                {" "}
                March{" "}
              </td>
            )
          ) : (
            <td className=" " rowSpan={2}>
              {" "}
              March{" "}
            </td>
          )}
        </tr>
        <tr className=" w3-yellow h6 w3-small">
          <td className=" "> OS </td>
          <td className=" "> OD </td>
          <td className="" style={{ width: "100px" }}>
            {" "}
            Sales{" "}
          </td>
          <td className=" " style={{ width: "100px" }}>
            {" "}
            Collection{" "}
          </td>
        </tr>
        {data?.map((item) => {
          // var fy = 0;
          // if (currentMonth <= 4) {
          //   fy = fy + item.Apr_Month_Value;
          // }
          // if (currentMonth <= 5) {
          //   fy = fy + item.May_Month_Value;
          // }
          // if (currentMonth <= 6) {
          //   fy = fy + item.Jun_Month_Value;
          // }
          // if (currentMonth <= 7) {
          //   fy = fy + item.Jul_Month_Value;
          // }
          // if (currentMonth <= 8) {
          //   fy = fy + item.Aug_Month_Value;
          // }
          // if (currentMonth <= 9) {
          //   fy = fy + item.Sep_Month_Value;
          // }
          // if (currentMonth <= 10) {
          //   fy = fy + item.Oct_Month_Value;
          // }
          // if (currentMonth <= 11) {
          //   fy = fy + item.Nov_Month_Value;
          // }
          // if (currentMonth <= 12) {
          //   fy = fy + item.Dec_Month_Value;
          // }
          // if (currentMonth <= 13) {
          //   fy = fy + item.Jan_Month_Value;
          // }
          // if (currentMonth <= 14) {
          //   fy = fy + item.Feb_Month_Value;
          // }
          // if (currentMonth <= 15) {
          //   fy = fy + item.Mar_Month_Value;
          // }
          return (
            <tr className="">
              <td className="" colSpan={1}>
                {" "}
                {item?.name}{" "}
              </td>
              <td className=""> {item?.club} </td>
              <td className=""> {item?.category} </td>
              <td className="">{item?.ly_income}</td>
              <td className=""> {item?.cy_target} </td>
              {currentMonth >= 4 ? (
                currentMonth == 4 ? (
                  <>
                    <td>{item?.current_outstand}</td>
                    <td>{item?.current_overdue}</td>
                    <td>
                      {" "}
                      <input className="inp40" defaultValue={item?.sales}  name={item?.id + `_sales`}
                        onChange={(e) => onchangeInputs(e, item?.id)}/>{" "}
                    </td>
                    <td>
                      {" "}
                      <input
                        className="inp40"
                        defaultValue={item?.Apr_Month_Value}
                        name={item?.id + `_coll`}
                        onChange={(e) => onchangeInputs(e, item?.id)}
                      />{" "}
                    </td>
                  </>
                ) : (
                  <td>
                    {item?.Apr_Month_Target}
                    <hr className="hr0" />
                    {item?.Apr_Month_Value}
                  </td>
                )
              ) : (
                <td>0</td>
              )}
              {currentMonth >= 5 ? (
                currentMonth == 5 ? (
                  <>
                    <td>{item?.current_outstand}</td>
                    <td>{item?.current_overdue}</td>
                    <td>
                      {" "}
                      <input className="inp40" defaultValue={item?.sales}  name={item?.id + `_sales`}
                        onChange={(e) => onchangeInputs(e, item?.id)}/>{" "}
                    </td>
                    <td>
                      {" "}
                      <input
                        className="inp40"
                        defaultValue={item?.May_Month_Value}
                        name={item?.id + `_coll`}
                        onChange={(e) => onchangeInputs(e, item?.id)}
                      />{" "}
                    </td>
                  </>
                ) : (
                  <td>
                    {item?.May_Month_Target == 0 &&
                    item?.May_Month_Value == 0 ? (
                      0
                    ) : (
                      <>
                        {item?.May_Month_Target}
                        <hr className="hr0" /> {item?.May_Month_Value}
                      </>
                    )}
                  </td>
                )
              ) : (
                <td>0</td>
              )}
              {currentMonth >= 6 ? (
                currentMonth == 6 ? (
                  <>
                    <td>{item?.current_outstand}</td>
                    <td>{item?.current_overdue}</td>
                    <td>
                      {" "}
                      <input className="inp40" defaultValue={item?.sales}  name={item?.id + `_sales`}
                        onChange={(e) => onchangeInputs(e, item?.id)} />{" "}
                    </td>
                    <td>
                      {" "}
                      <input
                        className="inp40"
                        defaultValue={item?.Jun_Month_Value}
                        name={item?.id + `_coll`}
                        onChange={(e) => onchangeInputs(e, item?.id)}
                      />{" "}
                    </td>
                  </>
                ) : (
                  <td>
                    {item?.Jun_Month_Target == 0 &&
                    item?.Jun_Month_Value == 0 ? (
                      0
                    ) : (
                      <>
                        {item?.Jun_Month_Target}
                        <hr className="hr0" />
                        {item?.Jun_Month_Value}
                      </>
                    )}
                  </td>
                )
              ) : (
                <td>0</td>
              )}
              {currentMonth >= 7 ? (
                currentMonth == 7 ? (
                  <>
                    <td>{item?.current_outstand}</td>
                    <td>{item?.current_overdue}</td>
                    <td>
                      {" "}
                      <input className="inp40" defaultValue={item?.sales}  name={item?.id + `_sales`}
                        onChange={(e) => onchangeInputs(e, item?.id)}/>{" "}
                    </td>
                    <td>
                      {" "}
                      <input
                        className="inp40"
                        defaultValue={item?.Jul_Month_Value}
                        name={item?.id + `_coll`}
                        onChange={(e) => onchangeInputs(e, item?.id)}
                      />{" "}
                    </td>
                  </>
                ) : (
                  <td>
                    {item?.Jul_Month_Value == 0 &&
                    item?.Jul_Month_Value == 0 ? (
                      0
                    ) : (
                      <>
                        {" "}
                        {item?.Jul_Month_Value}
                        <hr className="hr0" /> {item?.Jul_Month_Value}
                      </>
                    )}
                  </td>
                )
              ) : (
                <td>0</td>
              )}
              {currentMonth >= 8 ? (
                currentMonth == 8 ? (
                  <>
                    <td>{item?.current_outstand}</td>
                    <td>{item?.current_overdue}</td>
                    <td>
                      {" "}
                      <input className="inp40" defaultValue={item?.sales}  name={item?.id + `_sales`}
                        onChange={(e) => onchangeInputs(e, item?.id)}/>{" "}
                    </td>
                    <td>
                      {" "}
                      <input
                        className="inp40"
                        defaultValue={item?.Aug_Month_Value}
                        name={item?.id + `_coll`}
                        onChange={(e) => onchangeInputs(e, item?.id)}
                      />{" "}
                    </td>
                  </>
                ) : (
                  <td>
                    {item?.Aug_Month_Target == 0 &&
                    item?.Aug_Month_Value == 0 ? (
                      0
                    ) : (
                      <>
                        {item?.Aug_Month_Target}
                        <hr className="hr0" /> {item?.Aug_Month_Value}
                      </>
                    )}
                  </td>
                )
              ) : (
                <td>0</td>
              )}
              {currentMonth >= 9 ? (
                currentMonth == 9 ? (
                  <>
                    <td>{item?.current_outstand}</td>
                    <td>{item?.current_overdue}</td>
                    <td>
                      {" "}
                      <input className="inp40" defaultValue={item?.sales}  name={item?.id + `_sales`}
                        onChange={(e) => onchangeInputs(e, item?.id)}/>{" "}
                    </td>
                    <td>
                      {" "}
                      <input
                        className="inp40"
                        defaultValue={item?.Sep_Month_Value}
                        name={item?.id + `_coll`}
                        onChange={(e) => onchangeInputs(e, item?.id)}
                      />{" "}
                    </td>
                  </>
                ) : (
                  <td>
                    {item?.Sep_Month_Target == 0 && item?.Sep_Month_Value ? (
                      0
                    ) : (
                      <>
                        {item?.Sep_Month_Target}
                        <hr className="hr0" />
                        {item?.Sep_Month_Value}
                      </>
                    )}
                  </td>
                )
              ) : (
                <td>0</td>
              )}
              {currentMonth >= 10 ? (
                currentMonth == 10 ? (
                  <>
                    <td>{item?.current_outstand}</td>
                    <td>{item?.current_overdue}</td>
                    <td>
                      {" "}
                      <input className="inp40" defaultValue={item?.sales}  name={item?.id + `_sales`}
                        onChange={(e) => onchangeInputs(e, item?.id)}/>{" "}
                    </td>
                    <td>
                      {" "}
                      <input
                        className="inp40"
                        defaultValue={item?.Oct_Month_Value}
                        name={item?.id + `_coll`}
                        onChange={(e) => onchangeInputs(e, item?.id)}
                      />{" "}
                    </td>
                  </>
                ) : (
                  <td>
                    {item?.Oct_Month_Target == 0 &&
                    item?.Oct_Month_Value == 0 ? (
                      0
                    ) : (
                      <>
                        {item?.Oct_Month_Target}
                        <hr className="hr0" /> {item?.Oct_Month_Value}
                      </>
                    )}
                  </td>
                )
              ) : (
                <td>0</td>
              )}
              {currentMonth >= 11 ? (
                currentMonth == 11 ? (
                  <>
                    <td>{item?.current_outstand}</td>
                    <td>{item?.current_overdue}</td>
                    <td>
                      {" "}
                      <input className="inp40" defaultValue={item?.sales}  name={item?.id + `_sales`}
                        onChange={(e) => onchangeInputs(e, item?.id)}/>{" "}
                    </td>
                    <td>
                      {" "}
                      <input
                        className="inp40"
                        defaultValue={item?.Nov_Month_Value}
                        name={item?.id + `_coll`}
                        onChange={(e) => onchangeInputs(e, item?.id)}
                      />{" "}
                    </td>
                  </>
                ) : (
                  <td>
                    {item?.Nov_Month_Target == 0 &&
                    item?.Nov_Month_Value == 0 ? (
                      0
                    ) : (
                      <>
                        {" "}
                        {item?.Nov_Month_Target}
                        <hr className="hr0" /> {item?.Nov_Month_Value}
                      </>
                    )}
                  </td>
                )
              ) : (
                <td>0</td>
              )}
              {currentMonth >= 12 ? (
                currentMonth == 12 ? (
                  <>
                    <td>{item?.current_outstand}</td>
                    <td>{item?.current_overdue}</td>
                    <td>
                      {" "}
                      <input className="inp40" defaultValue={item?.sales}  name={item?.id + `_sales`}
                        onChange={(e) => onchangeInputs(e, item?.id)}/>{" "}
                    </td>
                    <td>
                      {" "}
                      <input
                        className="inp40"
                        defaultValue={item?.Dec_Month_Value}
                        name={item?.id + `_coll`}
                        onChange={(e) => onchangeInputs(e, item?.id)}
                      />{" "}
                    </td>
                  </>
                ) : (
                  <td>
                    {item?.Dec_Month_Target == 0 &&
                    item?.Dec_Month_Value == 0 ? (
                      0
                    ) : (
                      <>
                        {item?.Dec_Month_Target}
                        <hr className="hr0" /> {item?.Dec_Month_Value}
                      </>
                    )}
                  </td>
                )
              ) : (
                <td>0</td>
              )}
              {currentMonth >= 13 ? (
                currentMonth == 13 ? (
                  <>
                    <td>{item?.current_outstand}</td>
                    <td>{item?.current_overdue}</td>
                    <td>
                      {" "}
                      <input className="inp40" defaultValue={item?.sales}  name={item?.id + `_sales`}
                        onChange={(e) => onchangeInputs(e, item?.id)}/>{" "}
                    </td>
                    <td>
                      {" "}
                      <input
                        className="inp40"
                        defaultValue={item?.Jan_Month_Value}
                        name={item?.id + `_coll`}
                        onChange={(e) => onchangeInputs(e, item?.id)}
                      />{" "}
                    </td>
                  </>
                ) : (
                  <td>
                    {item?.Jan_Month_Target == 0 &&
                    item?.Jan_Month_Value == 0 ? (
                      0
                    ) : (
                      <>
                        {" "}
                        {item?.Jan_Month_Target}
                        <hr className="hr0" />
                        {item?.Jan_Month_Value}
                      </>
                    )}
                  </td>
                )
              ) : (
                <td>0</td>
              )}
              {currentMonth >= 14 ? (
                currentMonth == 14 ? (
                  <>
                    <td>{item?.current_outstand}</td>
                    <td>{item?.current_overdue}</td>
                    <td>
                      <input className="inp40" defaultValue={item?.sales}  name={item?.id + `_sales`}
                        onChange={(e) => onchangeInputs(e, item?.id)}/>{" "}
                    </td>
                    <td>
                      {" "}
                      <input
                        className="inp40"
                        defaultValue={item?.Feb_Month_Value}
                        name={item?.id + `_coll`}
                        onChange={(e) => onchangeInputs(e, item?.id)}
                      />{" "}
                    </td>
                  </>
                ) : (
                  <td>
                    {item?.Feb_Month_Target == 0 &&
                    item?.Feb_Month_Value == 0 ? (
                      0
                    ) : (
                      <>
                        {" "}
                        {item?.Feb_Month_Target}
                        <hr className="hr0" /> {item?.Feb_Month_Value}
                      </>
                    )}
                  </td>
                )
              ) : (
                <td>0</td>
              )}
              {currentMonth >= 15 ? (
                currentMonth == 15 ? (
                  <>
                    <td>{item?.current_outstand}</td>
                    <td>{item?.current_overdue}</td>
                    <td>
                      {" "}
                      <input
                        class="inp40"
                        defaultValue={item?.sales}
                        name={item?.id + `_sales`}
                        onChange={(e) => onchangeInputs(e, item?.id)}
                      />{" "}
                    </td>
                    <td>
                      {" "}
                      <input
                        class="inp40"
                        defaultValue={item?.Mar_Month_Value}
                        name={item?.id + `_coll`}
                        onChange={(e) => onchangeInputs(e, item?.id)}
                      />{" "}
                    </td>
                  </>
                ) : (
                  <td>
                    {item?.Mar_Month_Target == 0 &&
                    item?.Mar_Month_Value == 0 ? (
                      0
                    ) : (
                      <>
                        {" "}
                        {item?.Mar_Month_Target}
                        <hr className="hr0" /> {item?.Mar_Month_Value}
                      </>
                    )}
                  </td>
                )
              ) : (
                <td>0</td>
              )}
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default Wgt_Delear_Ui;