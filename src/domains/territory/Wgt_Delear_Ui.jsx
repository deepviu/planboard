import { useEffect, useState } from "react";
import axiosInstance from "../../auth/api";
import { SHOW_TOAST } from "../../store/constant/types";
import { useDispatch } from "react-redux";
import CustomPopup from "../CustomPopup";

const Wgt_Delear_Ui = ({ data }) => {
  const dispatch = useDispatch();
  const [getinputs, setGetinputs] = useState({});
  const [dealerlist, setDealerlist] = useState([]);
  const currentDate = new Date("2023-08-30");
  // const currentDate = new Date();

  // const currentMonthCou = currentDate.getMonth();
  const currentMonthCount =
    currentDate.getMonth() < 3
      ? currentDate.getMonth() + 13
      : currentDate.getMonth() + 1;
  const [currentMonth, setCurrentMonth] = useState(currentMonthCount);
  const [visibility, setVisibility] = useState(false);

  function getInput() {
    console.log("🚀 ~ file: Wgt_Delear_Ui.jsx:20 ~ getinputs:", getinputs);
  }

  function onchangeInputs(e, id) {
    setGetinputs({
      ...getinputs,
      [id]: { ...getinputs[id], [e.target.name]: e.target.value },
    });
  }

  const getMonthTarget = (item) => {
    console.log("--open item", item);
    setVisibility(true);
  }

  useEffect(() => {
    const payload = {
      Token: localStorage.getItem("access_token"),
      TerritoryId: data,
      DealerId: 0,
    };
    const fetchDealerMaster = async () => {
      try {
        const response = await axiosInstance.post("CustomerMonthPlan", payload);

        if (response?.status === 200) {
          setDealerlist(response?.data?.Data);
          console.log("=====api/Master/ZoneData==== 65", response);
        }
      } catch (error) {
        // Handle errors
        dispatch({ type: SHOW_TOAST, payload: error.message });
      }
    };
    fetchDealerMaster();
  }, [data]);

  const popupCloseHandler = (e) => {
    console.log("---clonse", e)
    setVisibility(e);
 };

  console.log("filteredMonths", currentMonth);
  return (
    <>
      <table className="tbl_grid w3-table table-bordered  h6 w3-small">
        <tr className="w3-blue  h6 ">
          <td colSpan="30" className=" text-left ">
            Month wise Sales Target
            <span className="">Dealer(s) {dealerlist.length}</span>
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
          <td className="" rowSpan={2}>
            S.No
          </td>
          <td className="" colSpan={1} rowSpan={2} style={{ width: "15%" }}>
            Delear{" "}
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
              <td className="  w3-blue " colSpan={4}>
                {" "}
                Aug <i className=" fa fa-unlock"> </i>{" "}
              </td>
            ) : (
              <td className=" w3-blue " rowSpan={2}>
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
              <td className="  w3-blue  " colSpan={4}>
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
              <td className="  w3-blue  " colSpan={4}>
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

        <tr className="  w3-blue h6 w3-small">
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

        {dealerlist?.map((item, index) => {

          return (
            <tr key={index}>
              <td>{++index}</td>
              <td className="" colSpan={1}>
                {" "}
                {item?.dealer_name}{" "}
              </td>
              <td className=""> {item?.dealer_category} </td>
              <td className="">{item?.LY_Value}</td>
              <td className="">
                {" "}
                {item?.CY_Value} <hr className="hr0" /> {item?.YTD_Value}{" "}
              </td>
              {currentMonth >= 4 ? (
                currentMonth == 4 ? (
                  <>
                    <td>{item?.current_outstand}</td>
                    <td>{item?.current_overdue}</td>
                    <td>
                      {" "}
                      <input
                        className="inp40"
                        defaultValue={item?.Apr_Month_Value}
                        name={item?.id + `_sales`}
                        onChange={(e) => onchangeInputs(e, item?.id)}
                      />{" "}
                    </td>
                    <td>
                      {" "}
                      <input
                        className="inp40"
                        defaultValue={item?.Apr_Month_Value_v1}
                        name={item?.id + `_coll`}
                        onChange={(e) => onchangeInputs(e, item?.id)}
                      />{" "}
                    </td>
                  </>
                ) : (
                  <td>
                    {item?.Apr_Month_Value_v1}
                    {/* <hr className="hr0" />
                    {item?.Apr_Month_Value} */}
                  </td>
                )
              ) : (
                <td>0</td>
              )}
              {currentMonth >= 5 ? (
                currentMonth == 5 ? (
                  <>
                    <td>{item?.May_Month_Value}</td>
                    <td>{item?.current_overdue}</td>
                    <td>
                      {" "}
                      <input
                        className="inp40"
                        defaultValue={item?.May_Month_Value}
                        name={item?.id + `_sales`}
                        onChange={(e) => onchangeInputs(e, item?.id)}
                      />{" "}
                    </td>
                    <td>
                      {" "}
                      <input
                        className="inp40"
                        defaultValue={item?.May_Month_Value_v1}
                        name={item?.id + `_coll`}
                        onChange={(e) => onchangeInputs(e, item?.id)}
                      />{" "}
                    </td>
                  </>
                ) : (
                  <td>
                    {item?.May_Month_Value == 0 &&
                      item?.May_Month_Value == 0 ? (
                      0
                    ) : (
                      <>
                        {item?.May_Month_Value_v1}
                        {/* <hr className="hr0" /> {item?.May_Month_Value} */}
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
                      <input
                        className="inp40"
                        defaultValue={item?.Jun_Month_Value}
                        name={item?.id + `_sales`}
                        onChange={(e) => onchangeInputs(e, item?.id)}
                      />{" "}
                    </td>
                    <td>
                      {" "}
                      <input
                        className="inp40"
                        defaultValue={item?.Jun_Month_Value_v1}
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
                        {item?.Jun_Month_Value_v1}
                        {/* <hr className="hr0" />
                        {item?.Jun_Month_Value} */}
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
                      <input
                        className="inp40"
                        defaultValue={item?.Jul_Month_Value}
                        name={item?.id + `_sales`}
                        onChange={(e) => onchangeInputs(e, item?.id)}
                      />{" "}
                    </td>
                    <td>
                      {" "}
                      <input
                        className="inp40"
                        defaultValue={item?.Jul_Month_Value_v1}
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
                        {item?.Jul_Month_Value_v1}
                        {/* <hr className="hr0" /> {item?.Jul_Month_Value} */}
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
                    <td className="  w3-blue  ">{item?.OD}</td>
                    <td className="  w3-blue ">{item?.OS}</td>
                    <td className="  w3-blue ">
                      {item?.Aug_Month_Value}
                      <input
                        className="inp40"
                        defaultValue={item?.Aug_Month_Value_v1}
                        readOnly={true}
                        name={item?.id + `_sales`}
                        onChange={(e) => onchangeInputs(e, item?.id)}
                      /><i className=" fa fa-pencil" title="Click to update" onClick={() => getMonthTarget(item)}></i>
                    </td>
                    <td className=" w3-blue ">
                      {" "}
                      <input
                        className="inp40"
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
                        {item?.Aug_Month_Value_v1}
                        {/* <hr className="hr0" /> {item?.Aug_Month_Value} */}
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
                      <input
                        className="inp40"
                        defaultValue={item?.Sep_Month_Value}
                        name={item?.id + `_sales`}
                        onChange={(e) => onchangeInputs(e, item?.id)}
                      />{" "}
                    </td>
                    <td>
                      {" "}
                      <input
                        className="inp40"
                        defaultValue={item?.Sep_Month_Value_1}
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
                        {item?.Sep_Month_Value_v1}
                        {/* <hr className="hr0" />
                        {item?.Sep_Month_Value} */}
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
                      <input
                        className="inp40"
                        defaultValue={item?.Oct_Month_Value}
                        name={item?.id + `_sales`}
                        onChange={(e) => onchangeInputs(e, item?.id)}
                      />{" "}
                    </td>
                    <td>
                      {" "}
                      <input
                        className="inp40"
                        defaultValue={item?.Oct_Month_Value_v1}
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
                        {item?.Oct_Month_Value_v1}
                        {/* <hr className="hr0" /> {item?.Oct_Month_Value} */}
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
                      <input
                        className="inp40"
                        defaultValue={item?.Nov_Month_Value}
                        name={item?.id + `_sales`}
                        onChange={(e) => onchangeInputs(e, item?.id)}
                      />{" "}
                    </td>
                    <td>
                      {" "}
                      <input
                        className="inp40"
                        defaultValue={item?.Nov_Month_Value_v1}
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
                        {item?.Nov_Month_Value_v1}
                        {/* <hr className="hr0" /> {item?.Nov_Month_Value} */}
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
                      <input
                        className="inp40"
                        defaultValue={item?.Dec_Month_Value}
                        name={item?.id + `_sales`}
                        onChange={(e) => onchangeInputs(e, item?.id)}
                      />{" "}
                    </td>
                    <td>
                      {" "}
                      <input
                        className="inp40"
                        defaultValue={item?.Dec_Month_Value_v1}
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
                        {item?.Dec_Month_Value_v1}
                        {/* <hr className="hr0" /> {item?.Dec_Month_Value} */}
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
                      <input
                        className="inp40"
                        defaultValue={item?.Jan_Month_Value}
                        name={item?.id + `_sales`}
                        onChange={(e) => onchangeInputs(e, item?.id)}
                      />{" "}
                    </td>
                    <td>
                      {" "}
                      <input
                        className="inp40"
                        defaultValue={item?.Jan_Month_Value_v1}
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
                        {item?.Jan_Month_Value_v1}
                        {/* <hr className="hr0" />
                        {item?.Jan_Month_Value} */}
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
                      <input
                        className="inp40"
                        defaultValue={item?.Feb_Month_Value}
                        name={item?.id + `_sales`}
                        onChange={(e) => onchangeInputs(e, item?.id)}
                      />{" "}
                    </td>
                    <td>
                      {" "}
                      <input
                        className="inp40"
                        defaultValue={item?.Feb_Month_Value_v1}
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
                        {item?.Feb_Month_Value_v1}
                        {/* <hr className="hr0" /> {item?.Feb_Month_Value} */}
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
                        defaultValue={item?.Mar_Month_Value}
                        name={item?.id + `_sales`}
                        onChange={(e) => onchangeInputs(e, item?.id)}
                      />{" "}
                    </td>
                    <td>
                      {" "}
                      <input
                        class="inp40"
                        defaultValue={item?.Mar_Month_Value_v1}
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
                        {item?.Mar_Month_Value_v1}
                        {/* <hr className="hr0" /> {item?.Mar_Month_Value} */}
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

      <CustomPopup
        onClose={popupCloseHandler}
        show={visibility}
        title="Add month sale target"
      >
        <form className="w3-container">
                    <div className="w3-row">
                        <div className="w3-col l4 m4 s4 ">
                            <label htmlFor="selectionBox">Select an Option:</label>
                            <select className="w3-select"
                            >
                                <option value="january">2023</option>
                                <option value="february">2024</option>
                                <option value="march">2025</option>
                            </select>
                        </div>
                        <div className="w3-col l4 m4 s4 ">
                            <label htmlFor="selectionBox">Select an Option:</label>
                            <select className="w3-select"
                            ><option value="january">January</option>
                                <option value="february">February</option>
                                <option value="march">March</option>
                                <option value="april">April</option>
                                <option value="may">May</option>
                                <option value="june">June</option>
                                <option value="july">July</option>
                                <option value="august">August</option>
                                <option value="september">September</option>
                                <option value="october">October</option>
                                <option value="november">November</option>
                                <option value="december">December</option>
                            </select>
                        </div>
                        <div className="w3-col l4 m4 s4 ">
                            <label htmlFor="selectionBox">Select an Option:</label>
                            <select className="w3-select"
                            ><option value="january">First </option>
                                <option value="february">First</option>
                                <option value="march">First</option>
                            </select>
                        </div>
                    </div>
                    <div className="w3-clear w3-padding-16"> </div>
                    <div className="w3-row">
                        <div className="w3-col l4 m4 s4 ">
                    <button type="submit" className="w3-button w3-blue">Submit</button>
                    </div></div>
                </form>
      </CustomPopup>
    </>
  );
};

export default Wgt_Delear_Ui;
