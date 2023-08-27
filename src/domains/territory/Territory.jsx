import { useEffect, useState, useContext } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";

import { rolePermission, zoneData } from "../../auth/middleware";

import Wgt_Summ_Zone_Ui from "../zone/Wgt_Summ_Zone_Ui";
import Wgt_Delear_Ui from "./Wgt_Delear_Ui";
import { Wgt_Summ_Zone_Data } from "../zone/Wgt_Summ_Zone_Data";
import { Wgt_Delear_Data } from "./Wgt_Delear_Data";

import CustomPopup from "../CustomPopup";

const Territory = () => {
  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  return (
    <div className=" main ">
      <div className="w3-row w3-padding-16"></div>

      <div className="w3-row ">
        <span className="w3-xlarge">
          Territory : H05 <i className="fa fa-lock w3-text-red"> </i>
        </span>
        <span className="w3-hide w3-right">
          <i className="w3-text-teal  fa fa-file-excel-o"> </i> Upload
        </span>
      </div>

      {Wgt_Summ_Zone_Data.map((data) => (
        <Wgt_Summ_Zone_Ui key={data.id} data={data} />
      ))}

      <table className="tbl_grid w3-table table-bordered  h6 w3-small w3-white ">
        <tr className="w3-gray h5">
          <td colSpan="20" className=" w3-padding  text-left ">
            Month wise Sales Target
            <span className=" w3-right w3-opacity">
              <i className="w3-text-teal fa fa-save"> </i> Save
            </span>
          </td>
        </tr>

        <tr className=" w3-yellow h6">
          <td colSpan="1" className="" style={{ width: "18%" }}>
            {" "}
            Territory{" "}
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

        <tr className="">
          <td className=""> H05 </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" disabled />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" disabled />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" disabled />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" disabled />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" disabled />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" disabled />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" disabled />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" disabled />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" disabled />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" disabled />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" disabled />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" disabled />{" "}
          </td>
        </tr>
      </table>

      <div className="w3-row w3-padding-16"></div>

      <Wgt_Delear_Ui data={Wgt_Delear_Data} />

      <div className="w3-row w3-padding-16"></div>

      <table className="tbl_grid w3-table table-bordered  h6 w3-small w3-hide ">
        <tr className="w3-gray h5">
          <td colSpan="20" className=" w3-padding  text-left ">
            Territory Level Dealers Target - FY 23-24 ( Lacs )
            <span className=" w3-right">
              <i className="w3-text-teal fa fa-save"> </i> Save
            </span>
          </td>
        </tr>

        <tr className=" w3-yellow h6">
          <td colSpan="1" className="" style={{ width: "18%" }}>
            {" "}
            Dealer{" "}
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

        <tr className="">
          <td className=""> [ Shanti Paints - Rohtak ] </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
        </tr>

        <tr className="">
          <td className=" "> [ Kamal Enterprise - Rohtak ] </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
        </tr>

        <tr className="">
          <td className=" "> [ Shanti Paints - Jhajjar ] </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
        </tr>
      </table>
      <div class="w3-row w3-padding-16"></div>

      <table class="tbl_grid w3-table table-bordered  h6 w3-small  ">
        <tr className="w3-gray h5">
          <td colspan="30" className=" w3-padding  text-left ">
            Territory Wise Dealers Month on Month Plan / Achieve
          </td>
        </tr>
        <tr className=" w3-yellow h6 w3-small">
          <td rowspan="2" colspan="1" className="" style={{ width: "15%" }}>
            {" "}
            Dealer{" "}
          </td>
          <td rowspan="2" className=" ">
            {" "}
            Club{" "}
          </td>
          <td rowspan="2" className=" ">
            {" "}
            Category{" "}
          </td>
          <td rowspan="2" className=" ">
            {" "}
            LY <br /> 22-23{" "}
          </td>
          <td rowspan="2" className=" ">
            {" "}
            Plan CY <br /> 23-24{" "}
          </td>
          <td rowspan="2" className=" ">
            {" "}
            Apr{" "}
          </td>
          <td rowspan="2" className=" ">
            {" "}
            May{" "}
          </td>
          <td rowspan="2" className=" ">
            {" "}
            Jun{" "}
          </td>
          <td rowspan="2" className=" ">
            {" "}
            Jul{" "}
          </td>
          <td rowspan="2" className=" ">
            {" "}
            Aug{" "}
          </td>
          <td colspan="4" className=" ">
            {" "}
            September{" "}
          </td>
          <td rowspan="2" className=" ">
            {" "}
            Oct{" "}
          </td>
          <td rowspan="2" className=" ">
            {" "}
            Nov{" "}
          </td>
          <td rowspan="2" className=" ">
            {" "}
            Dec{" "}
          </td>
          <td rowspan="2" className=" ">
            {" "}
            Jan{" "}
          </td>
          <td rowspan="2" className=" ">
            {" "}
            Feb{" "}
          </td>
          <td rowspan="2" className=" ">
            {" "}
            Mar{" "}
          </td>
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
        <tr className="">
          <td className=""> [ Dealer 1 ] </td>
          <td className=""> A 30% </td>
          <td className=""> Dormant </td>
          <td className=""> 23 </td>
          <td className="">
            {" "}
            23 <hr className="hr0" /> 20
          </td>
          <td className="">
            {" "}
            23 <hr className="hr0" /> 20
          </td>
          <td className="">
            {" "}
            23 <hr className="hr0" /> 20{" "}
          </td>
          <td className="">
            {" "}
            23 <hr className="hr0" /> 12{" "}
          </td>
          <td className="">
            {" "}
            23 <hr className="hr0" /> 21{" "}
          </td>
          <td className="">
            {" "}
            23 <hr className="hr0" /> 26{" "}
          </td>
          <td className=""> 23 </td>
          <td className=""> 23 </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
          <td className=""> 0 </td>
          <td className=""> 0 </td>
          <td className=""> 0 </td>
          <td className=""> 0 </td>
          <td className=""> 0 </td>
          <td className=""> 0 </td>
        </tr>
        <tr className="">
          <td className=""> [ Dealer 2 ] </td>
          <td className=""> C 50K </td>
          <td className=""> New </td>
          <td className=""> 23 </td>
          <td className="">
            {" "}
            23 <hr className="hr0" /> 20
          </td>
          <td className="">
            {" "}
            23 <hr className="hr0" /> 20
          </td>
          <td className="">
            {" "}
            23 <hr className="hr0" /> 20{" "}
          </td>
          <td className="">
            {" "}
            23 <hr className="hr0" /> 12{" "}
          </td>
          <td className="">
            {" "}
            23 <hr className="hr0" /> 21{" "}
          </td>
          <td className="">
            {" "}
            23 <hr className="hr0" /> 26{" "}
          </td>
          <td className=""> 23 </td>
          <td className=""> 23 </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
          <td className="">
            {" "}
            <input className="inp40" value="2" />{" "}
          </td>
          <td className=""> 0 </td>
          <td className=""> 0 </td>
          <td className=""> 0 </td>
          <td className=""> 0 </td>
          <td className=""> 0 </td>
          <td className=""> 0 </td>
        </tr>
      </table>
      <div className="w3-row w3-padding-16"></div>
      <CustomPopup
        onClose={popupCloseHandler}
        show={visibility}
        title="Configure Rules "
      >
        <hr />
        Rules ( to Set Targets or breakdown Targets on every enity )
        <table className="w3-table table-bordered ">
          <tr className="">
            <th className=""></th>
            <th className="">Rule / Condition</th>

            <th className="">Ref. / Base Value</th>

            <th className="">% Impact</th>

            <th className="">Value Impact</th>

            <th className="">Net Increment</th>
          </tr>

          <tr className="">
            <td colSpan="10" className="w3-gray h5">
              Incremental Rules (Vertically Top Down | Global > Zone > Depot >
              Territory > Dealer )
            </td>
          </tr>

          <tr className="">
            <td className="">1</td>
            <td className="">Rule : LLY Topup ( Increment)</td>
            <td className="">
              <input className="inp40" value="60 Cr." />
            </td>
            <td className="">
              <input className="inp40" value="10%" />
            </td>
            <td className="">
              <input className="inp40" value="10 CR." />
            </td>
            <td className="">
              <input className="inp40" value="" />
            </td>
          </tr>

          <tr className="">
            <td className="">2</td>
            <td className="">Rule : LY Topup ( Increment )</td>
            <td className="">
              <input className="inp40" value="90 Cr." />
            </td>
            <td className="">
              <input className="inp40" value="30%" />
            </td>
            <td className="">
              <input className="inp40" value="50 CR." />
            </td>
            <td className="">
              <input className="inp40" value="" />
            </td>
          </tr>

          <tr className="">
            <td className="">3</td>
            <td className="">Rule : Potential based (Increment)</td>
            <td className="">
              <input className="inp40" value="600 Cr." />
            </td>
            <td className="">
              <input className="inp40" value="10%" />
            </td>
            <td className="">
              <input className="inp40" value="10 CR." />
            </td>
            <td className="">
              <input className="inp40" value="" />
            </td>
          </tr>

          <tr className="">
            <td className="">3</td>
            <td className="">
              Rule : Product Category / Group Ex. Water base (last Y Revenue)
            </td>
            <td className="">
              <input className="inp40" value="40 Cr." />
            </td>
            <td className="">
              <input className="inp40" value="100%" />
            </td>
            <td className="">
              <input className="inp40" value="100CR." />
            </td>
            <td className="">
              <input className="inp40" value="" />
            </td>
          </tr>

          <tr className="">
            <td className="">4</td>
            <td className="">Rule : Focus Segment ( )</td>
            <td className="">
              <input className="inp40" value="40 Cr." />
            </td>
            <td className="">
              <input className="inp40" value="100%" />
            </td>
            <td className="">
              <input className="inp40" value="100CR." />
            </td>
            <td className="">
              <input className="inp40" value="" />
            </td>
          </tr>

          <tr className="">
            <td className="">4</td>
            <td className="">Rule : Seasonal Time Months ( Festival.. )</td>
            <td className="">
              <input className="inp40" value="40 Cr." />
            </td>
            <td className="">
              <input className="inp40" value="100%" />
            </td>
            <td className="">
              <input className="inp40" value="100CR." />
            </td>
            <td className="">
              <input className="inp40" value="" />
            </td>
          </tr>

          <tr className="">
            <td colSpan="10" className="w3-gray h5">
              Target Breakdown Rules (Horizontaly - Months / Weeks )
            </td>
          </tr>

          <tr className="">
            <td className="">4</td>
            <td className="">
              Rule : Seasonal Time Months ( Festival.. ) ( Monthly Breakdown of
              Territory -> 12 Months
            </td>
            <td className="">
              <input className="inp40" value="40 Cr." />
            </td>
            <td className="">
              <input className="inp40" value="100%" />
            </td>
            <td className="">
              <input className="inp40" value="100CR." />
            </td>
            <td className="">
              <input className="inp40" value="" />
            </td>
          </tr>

          <tr className="">
            <td className="">4</td>
            <td className="">
              Rule : Months Weekly Breakdown ( Dealer Level Rule ) ( Weekwise
              Breakdown of Monthly Target -> 4 Weeks
            </td>
            <td className="">
              <input className="inp40" value="40 Cr." />
            </td>
            <td className="">
              <input className="inp40" value="100%" />
            </td>
            <td className="">
              <input className="inp40" value="100CR." />
            </td>
            <td className="">
              <input className="inp40" value="" />
            </td>
          </tr>

          <tr className="">
            <td className="">4</td>
            <td className="">
              Anyother conditon which can be converted to avergae weightage
            </td>
            <td className="">
              <input className="inp40" value="Ref. Value " />
            </td>
            <td className="">
              <input className="inp40" value="Target. %" />
            </td>
            <td className="">
              <input className="inp40" value="Target Value" />
            </td>
            <td className="">
              <input className="inp40" value="" />
            </td>
          </tr>
        </table>
      </CustomPopup>
    </div>
  );
};
export default Territory;
