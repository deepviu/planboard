import { useEffect, useState, useContext } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";

import Wgt_Zone_Ui from "./Wgt_Zone_Ui";
import { Wgt_Zone_Data } from "./Wgt_Zone_Data";

import Wgt_Summ_National_Ui from "./Wgt_Summ_National_Ui";
import { Wgt_Summ_National_Data } from "./Wgt_Summ_National_Data";

import Wgt_Marketsector_Ui from "./Wgt_Marketsector_Ui";
import { Wgt_Marketsector_Data } from "./Wgt_Marketsector_Data";

import Wgt_Statewise_Ui from "./Wgt_Statewise_Ui";
import { Wgt_Statewise_Data } from "./Wgt_Statewise_Data";
import { rolePermission, zoneData } from "../../auth/middleware";

import CustomPopup from "./CustomPopup";
import CustomPopup1 from "./CustomPopup";
import CustomPopup2 from "./CustomPopup";
import CustomPopup3 from "./CustomPopup";

const National = () => {
  // Set Select Zone
  const [selectedZone, setSelectedZone] = useState(0);
  const [filteredZones, setFilteredZones] = useState([]);
  const [filteredZonesData, setFilteredZonesData] = useState([]);
  console.log("🚀 ~ file: National.jsx:27 ~ National ~ filteredZonesData:", filteredZonesData)
  const [data, setData] = useState(null);
  console.log("🚀 ~ file: National.jsx:28 ~ National ~ id:", data)

  const [visibility, setVisibility] = useState(false);
  const [visibility1, setVisibility1] = useState(false);
  const [visibility2, setVisibility2] = useState(false);
  const [visibility3, setVisibility3] = useState(false);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };
  const popupCloseHandler1 = (e) => {
    setVisibility1(e);
  };
  const popupCloseHandler2 = (e) => {
    setVisibility2(e);
  };
  const popupCloseHandler3 = (e) => {
    setVisibility3(e);
  };


  useEffect(() => {
    const permissions = rolePermission()?.permissions;
    if (permissions) {
      const filteredZonessData = Wgt_Zone_Data.filter((item) =>
        permissions.includes(item.id)
      );
      const filteredZoness = zoneData.filter((item) =>
        permissions.includes(item.id)
      );
     const  zoneId=2;//permissions.length > 0 ? permissions[0] : 0;
      setSelectedZone(permissions.length > 0 ? permissions[0] : 0);
      const filteredZonesNew = filteredZoness.filter((item) =>
        item.id==zoneId
      );
       
      setData(filteredZonesNew[0]);
      setFilteredZonesData(filteredZonessData);
      setFilteredZones(filteredZoness);
     
    }
  }, []);

  const handleZoneSelect = (data) => {
    setSelectedZone(data?.id);
    
    const filteredZonesNew = filteredZones.filter((item) =>
        item.id==data?.id
      );
console.log('filteredZonesNew',filteredZonesNew);
      setData(filteredZonesNew[0]);
  };

  return (
    <div className=" main ">
      <div className="w3-clear w3-padding-16"> </div>

      <div class="w3-row ">
        <span className="w3-xxlarge">
          Shalimar Paints Limited <i className="fa fa-lock w3-text-red"> </i>
        </span>

        <span class=" w3-right">
          <i className="w3-text-teal fa fa-file-excel-o"> </i> Upload
        </span>
      </div>

      <div class="w3-row ">
        <span className=" btn btn-sm w3-small text-left w3-text-red ">
          {" "}
          <i className="fa fa-lock"></i> Lock / Un-Lock{" "}
        </span>
        <span
          className=" btn btn-sm w3-small text-left "
          onClick={(e) => setVisibility1(!visibility1)}
        >
          {" "}
          <i className="fa fa-gear"></i> Target Rules{" "}
        </span>
      </div>

      {Wgt_Summ_National_Data.map((data) => (
        <Wgt_Summ_National_Ui key={data.id} data={data} />
      ))}

      <div className="w3-clear w3-padding-16"> </div>

      <div class="w3-row ">
        <span className=" btn btn-sm w3-small text-left w3-text-red ">
          {" "}
          <i className="fa fa-lock"></i> Lock / Un-Lock{" "}
        </span>
        <span
          className=" btn btn-sm w3-small text-left "
          onClick={(e) => setVisibility2(!visibility2)}
        >
          {" "}
          <i className="fa fa-gear"></i> Target Rules{" "}
        </span>
      </div>

      <div
        id="Wgt_Zone_Id"
        class="Wgt_Zone_Class w3-row w3-row-padding w3-margin-bottom w3-white "
      >
        {filteredZonesData.map((data) => (
          <Wgt_Zone_Ui key={data.id} data={data} setId={handleZoneSelect}/>
        ))}
      </div>
     
      <div class="w3-clear w3-padding-16"> </div>

      <div
        id="Wgt_Zone_Id"
        class=" w3-leftbar w3-border-red Wgt_Zone_Class w3-row w3-row-padding w3-margin-bottom w3-white "
      >
        <div className="w3-padding-large">
          <div className="w3-clear ">
            <div class="w3-col l3 m3 s6 ">
              <span className=" w3-xlarge w3-left ">
                <i className="fa fa-bar-chart "></i>{data?.name}
              </span>
            </div>

            <div class="w3-col l3 m3 s6 w3-right">
              <form>
                <select className="form-control">
                  <option value="North"  selected={data?.name === "North"}>
                    {" "}
                    North{" "}
                  </option>
                  <option value="South"  selected={data?.name === "South"}>South </option>
                  <option value="East"  selected={data?.name === "East"}> East </option>
                  <option value="West"  selected={data?.name === "West"}> West </option>
                </select>
              </form>
            </div>
          </div>

          <div className="w3-clear w3-padding"> </div>

          <div className="w3-col l3 m3 s12 ">
            <span className="w3-xxlarge"> 10 </span> Cr.
            <br />
            <span className="w3-small h6"> LLY 21-22 </span>
            <br />
            <span className="h6"> -- </span>
          </div>

          <div className="w3-col l3 m3 s12 ">
            <span className="w3-xxlarge"> 90</span> Cr.
            <br />
            <span className="w3-small h6"> LY 22-23 </span>
            <br />
            <span className="h6">21% </span>
          </div>

          <div className="w3-col l3 m3 s12 ">
            <span className="w3-xxlarge"> 126 </span> Cr.
            <br />
            <span className="w3-small h6"> FY 23-24 - Plan (V.1) </span>
            <br />
            <span className="h6">26% </span>
          </div>

          <div className="w3-col l3 m3 s12 ">
            <span className="w3-xxlarge"> 128.5 </span> Cr.{" "}
            <i className=" w3-text-red fa fa-lock"> </i>
            <br />
            <span className="w3-small h6"> FY 23-24 - Plan (V.2) </span>
            <br />
            <span className="h6"> 26% </span>
          </div>

          <div id="mercury-north" class="w3-row w3-margin-top ">
            <span className="w3-small h4  w3-right">
              {" "}
              128.5 Cr.
              <i className="w3-text-blue fa fa-flag  w3-right"></i>{" "}
            </span>
            <br />
            <div id="mercury-bar-north" class="w3-grey">
              <div class="w3-container w3-red" style={{ width: "65%" }}>
                <span className="w3-small w3-right">
                  {" "}
                  YTD - Aug - 65 Cr. ( - 12% ){" "}
                </span>
              </div>
              <div class="w3-container w3-blue" style={{ width: "75%" }}>
                <span className="w3-small   w3-right ">
                  {" "}
                  Plan - Aug - 75 Cr.{" "}
                </span>
              </div>
            </div>
          </div>

          <div id="mom-north" class="w3-row w3-margin-top ">
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
                <tr className="w3-hide">
                  <td> 2.1% </td>
                  <td className="w3-text-teal"> ( 114.2% ) </td>
                  <td className="w3-text-red"> ( 55.0% ) </td>
                  <td className="w3-text-red"> +6.0% </td>
                  <td className="w3-text-red"> +2.0% </td>
                  <td className="w3-text-gray"> 0 </td>
                  <td className="w3-text-gray"> 0 </td>
                  <td className="w3-text-gray"> 0 </td>
                  <td className="w3-text-gray"> 0 </td>
                  <td className="w3-text-gray"> 0 </td>
                  <td className="w3-text-gray"> 0 </td>
                  <td className="w3-text-gray"> 0 </td>
                </tr>

                <tr className="w3-hide">
                  <td className="w3-text-gray"> 12 </td>
                  <td className="w3-text-gray"> 20 </td>
                  <td className="w3-text-gray"> 15 </td>
                  <td className="w3-text-gray"> 20 </td>
                  <td className="w3-text-gray"> 30 </td>
                  <td className="w3-text-gray"> 0 </td>
                  <td className="w3-text-gray"> 0 </td>
                  <td className="w3-text-gray"> 0 </td>
                  <td className="w3-text-gray"> 0 </td>
                  <td className="w3-text-gray"> 0 </td>
                  <td className="w3-text-gray"> 0 </td>
                  <td className="w3-text-gray"> 0 </td>
                </tr>

                <tr>
                  <td className="w3-text-blue"> 10.3 </td>
                  <td className="w3-text-blue"> 10.0 </td>
                  <td className="w3-text-blue"> 10.0 </td>
                  <td className="w3-text-blue"> 10.1 </td>
                  <td className="w3-text-blue"> 10.3 </td>
                  <td className="w3-text-blue"> 10.7 </td>
                  <td className="w3-text-blue"> 10.3 </td>
                  <td className="w3-text-blue"> 10.6 </td>
                  <td className="w3-text-blue"> 10.5 </td>
                  <td className="w3-text-blue"> 10.3 </td>
                  <td className="w3-text-blue"> 10.2 </td>
                  <td className="w3-text-blue"> 10.1 </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="w3-clear w3-padding-16"> </div>

      <div class="w3-row ">
        <span className=" btn btn-sm w3-small text-left w3-text-red ">
          {" "}
          <i className="fa fa-lock"></i> Lock / Un-Lock{" "}
        </span>
        <span
          className=" btn btn-sm w3-small text-left "
          onClick={(e) => setVisibility3(!visibility3)}
        >
          {" "}
          <i className="fa fa-gear"></i> Target Rules{" "}
        </span>
      </div>

      <div
        id="Wgt_Segment_Id"
        class="Wgt_Segment_Class w3-row w3-row-padding  w3-padding-large w3-margin-bottom w3-white "
      >
        <p className=" w3-xlarge ">
          {" "}
          <i className="fa fa-bar-chart "></i> Market Sector (Breakdown){" "}{data?.name}
        </p>{" "}
        <hr />
        {Wgt_Marketsector_Data.map((data) => (
          <Wgt_Marketsector_Ui key={data.id} data={data} />
        ))}
      </div>

      <div className="w3-clear w3-padding-16"> </div>



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
            <td colspan="10" className="w3-gray h5">
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
            <td colspan="10" className="w3-gray h5">
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

      <CustomPopup1
        onClose={popupCloseHandler1}
        show={visibility1}
        title="Target Rules - V.2 "
      >
        <span className="w3-text-gray">( National Level Target Rules )</span>

        <div class="w3-row ">
          <span className=" w3-right btn btn-sm w3-small text-left w3-text-red ">
            {" "}
            <i className="fa fa-lock"></i> Save & Lock{" "}
          </span>
        </div>

        <table className="tblgrid w3-table table-bordered w3-small h6">
          <tr className="w3-yellow ">
            <th className="">Scope</th>
            <th className="" style={{ width: "30%" }}>
              Rule Condition
            </th>

            <th className="">Ref. Value</th>

            <th className="">% Impact</th>

            <td className="w3-small h6 w3-text-gray">or</td>

            <th className="">Value Impact</th>

            <th className="">Net Increment</th>
          </tr>

          <tr className="">
            <td className="">All</td>
            <td className="">Rule : LY (Full)</td>
            <td className="">
              <input className="inp40" disabled value="600Cr." />
            </td>
            <td className="">
              <input className="inp40" disabled value="100%" />
            </td>

            <td className="w3-small h6 w3-text-gray">or</td>
            <td className="">
              <input className="inp40" disabled value="600Cr." />
            </td>
            <td className="">
              <input className="inp40" disabled value="600Cr." />
            </td>
          </tr>

          <tr className="">
            <td className="">All</td>
            <td className="">Rule : LY ( Topup )</td>
            <td className="">
              <input className="inp40" disabled value="600Cr." />
            </td>
            <td className="">
              <input className="inp40" disabled value="30%" />
            </td>

            <td className="w3-small h6 w3-text-gray">or</td>
            <td className="">
              <input className="inp40" disabled value="180Cr." />
            </td>
            <td className="">
              <input className="inp40" disabled value="180Cr." />
            </td>
          </tr>

          <tr className="">
            <td className="">All</td>
            <td className="">Rule : LLY ( Topup )</td>
            <td className="">
              <input className="inp40" disabled value="480Cr." />
            </td>
            <td className="">
              <input className="inp40" disabled value="20%" />
            </td>

            <td className="w3-small h6 w3-text-gray">or</td>
            <td className="">
              <input className="inp40" disabled value="96Cr." />
            </td>
            <td className="">
              <input className="inp40" disabled value="96Cr." />
            </td>
          </tr>

          <tr className="">
            <td className="">
              <form>
                <select className="">
                  <option value="All" selected>
                    {" "}
                    All{" "}
                  </option>
                  <option value="Zone">Zone </option>
                  <option value="Depot"> Depot </option>
                  <option value="Territory"> Territory </option>
                  <option value="Dealer"> Dealer </option>

                  <option value="West"> ... </option>
                </select>
              </form>
            </td>
            <td className="">
              <input className="inp40" value=" " placeholder="Rule Name" />
            </td>
            <td className="">
              <input className="inp40" value=" " />
            </td>
            <td className="">
              <input className="inp40" value=" " />
            </td>

            <td className="w3-small h6 w3-text-gray">or</td>
            <td className="">
              <input className="inp40" value=" " />
            </td>
            <td className="">
              <input className="inp40" value=" " />
            </td>
          </tr>
        </table>
      </CustomPopup1>

      <CustomPopup2
        onClose={popupCloseHandler2}
        show={visibility2}
        title="Target Rules - V.2 "
      >
        <span className="w3-text-gray">( Zone Level Target Rules )</span>

        <div class="w3-row ">
          <span className=" w3-right btn btn-sm w3-small text-left w3-text-red ">
            {" "}
            <i className="fa fa-lock"></i> Save & Lock{" "}
          </span>
        </div>

        <table className="tblgrid w3-table table-bordered w3-small h6">
          <tr className="w3-yellow ">
            <th className="">Scope</th>
            <th className="" style={{ width: "30%" }}>
              Rule Condition
            </th>

            <th className="">Ref. Value</th>

            <th className="">% Impact</th>

            <td className="w3-small h6 w3-text-gray">or</td>

            <th className="">Value Impact</th>

            <th className="">Net Increment</th>
          </tr>

          <tr className="">
            <td className="">All</td>
            <td className="">Rule : LY (Full)</td>
            <td className="">
              <input className="inp40" disabled value="" />
            </td>
            <td className="">
              <input className="inp40" disabled value="100%" />
            </td>

            <td className="w3-small h6 w3-text-gray">or</td>
            <td className="">
              <input className="inp40" disabled value="" />
            </td>
            <td className="">
              <input className="inp40" disabled value="" />
            </td>
          </tr>

          <tr className="">
            <td className="">All</td>
            <td className="">Rule : LY ( Topup )</td>
            <td className="">
              <input className="inp40" disabled value="" />
            </td>
            <td className="">
              <input className="inp40" disabled value="30%" />
            </td>

            <td className="w3-small h6 w3-text-gray">or</td>
            <td className="">
              <input className="inp40" disabled value="" />
            </td>
            <td className="">
              <input className="inp40" disabled value="" />
            </td>
          </tr>

          <tr className="">
            <td className="">All</td>
            <td className="">Rule : LLY ( Topup )</td>
            <td className="">
              <input className="inp40" disabled value="" />
            </td>
            <td className="">
              <input className="inp40" disabled value="20%" />
            </td>

            <td className="w3-small h6 w3-text-gray">or</td>
            <td className="">
              <input className="inp40" disabled value="" />
            </td>
            <td className="">
              <input className="inp40" disabled value="" />
            </td>
          </tr>

          <tr className="w3-gray">
            <td colspan="10" className="w3-small h6">
              Zone Specific Rules
            </td>
          </tr>

          <tr className="">
            <td className="">All</td>
            <td className="">Rule : If Zone ( ..condition..) ( Topup )</td>
            <td className="">
              <input className="inp40" disabled value="" />
            </td>
            <td className="">
              <input className="inp40" disabled value="20%" />
            </td>

            <td className="w3-small h6 w3-text-gray">or</td>
            <td className="">
              <input className="inp40" disabled value="" />
            </td>
            <td className="">
              <input className="inp40" disabled value="" />
            </td>
          </tr>

          <tr className="">
            <td className="">
              <form>
                <select className="">
                  <option value="All" selected>
                    {" "}
                    All Zone{" "}
                  </option>
                  <option value="Zone">North 1 </option>
                  <option value="Depot"> North 2 </option>
                  <option value="Territory"> South </option>
                  <option value="Territory"> South 1 </option>
                  <option value="Territory"> South 2 </option>
                  <option value="Dealer"> East 1 </option>
                  <option value="Dealer"> East 2 </option>
                  <option value="Dealer"> West 1 </option>
                  <option value="Dealer"> West 2 </option>

                  <option value="West"> ... </option>
                </select>
              </form>
            </td>
            <td className="">
              <input className="inp40" value=" " placeholder="Rule Name" />
            </td>
            <td className="">
              <input className="inp40" value=" " />
            </td>
            <td className="">
              <input className="inp40" value=" " />
            </td>

            <td className="w3-small h6 w3-text-gray">or</td>
            <td className="">
              <input className="inp40" value=" " />
            </td>
            <td className="">
              <input className="inp40" value=" " />
            </td>
          </tr>
        </table>
      </CustomPopup2>

      <CustomPopup3
        onClose={popupCloseHandler3}
        show={visibility3}
        title="Target Rules - V.2 "
      >
        <span className="w3-text-gray">( Sector Level Target Rules )</span>

        <div class="w3-row ">
          <span className=" w3-right btn btn-sm w3-small text-left w3-text-red ">
            {" "}
            <i className="fa fa-lock"></i> Save & Lock{" "}
          </span>
        </div>

        <table className="tblgrid w3-table table-bordered w3-small h6">
          <tr className="w3-yellow ">
            <th className="">Scope</th>
            <th className="" style={{ width: "30%" }}>
              Rule Condition
            </th>

            <th className="">Ref. Value</th>

            <th className="">% Impact</th>

            <td className="w3-small h6 w3-text-gray">or</td>

            <th className="">Value Impact</th>

            <th className="">Net Increment</th>
          </tr>

          <tr className="">
            <td className="">All</td>
            <td className="">Rule : LY (Full)</td>
            <td className="">
              <input className="inp40" disabled value="" />
            </td>
            <td className="">
              <input className="inp40" disabled value="100%" />
            </td>

            <td className="w3-small h6 w3-text-gray">or</td>
            <td className="">
              <input className="inp40" disabled value="" />
            </td>
            <td className="">
              <input className="inp40" disabled value="" />
            </td>
          </tr>

          <tr className="">
            <td className="">All</td>
            <td className="">Rule : LY ( Topup )</td>
            <td className="">
              <input className="inp40" disabled value="" />
            </td>
            <td className="">
              <input className="inp40" disabled value="30%" />
            </td>

            <td className="w3-small h6 w3-text-gray">or</td>
            <td className="">
              <input className="inp40" disabled value="" />
            </td>
            <td className="">
              <input className="inp40" disabled value="" />
            </td>
          </tr>

          <tr className="">
            <td className="">All</td>
            <td className="">Rule : LLY ( Topup )</td>
            <td className="">
              <input className="inp40" disabled value="" />
            </td>
            <td className="">
              <input className="inp40" disabled value="20%" />
            </td>

            <td className="w3-small h6 w3-text-gray">or</td>
            <td className="">
              <input className="inp40" disabled value="" />
            </td>
            <td className="">
              <input className="inp40" disabled value="" />
            </td>
          </tr>

          <tr className="w3-gray">
            <td colspan="10" className="w3-small h6">
              Sector Specific Rules
            </td>
          </tr>

          <tr className="">
            <td className="">All</td>
            <td className="">Rule : If Sector ( ..condition..) ( Topup )</td>
            <td className="">
              <input className="inp40" disabled value="" />
            </td>
            <td className="">
              <input className="inp40" disabled value="20%" />
            </td>

            <td className="w3-small h6 w3-text-gray">or</td>
            <td className="">
              <input className="inp40" disabled value="" />
            </td>
            <td className="">
              <input className="inp40" disabled value="" />
            </td>
          </tr>

          <tr className="">
            <td className="">
              <form>
                <select className="">
                  <option value="All" selected>
                    {" "}
                    All Sectors{" "}
                  </option>
                  <option value="ENAMELS">ENAMELS </option>
                  <option value="Depot"> Interior Emulsion </option>
                  <option value="Territory"> Primers </option>
                  <option value="Dealer"> Exterior Emulsion </option>
                  <option value="Dealer"> Water Proofing </option>
                  <option value="Dealer"> Dry Colours </option>
                  <option value="Dealer"> Acrlylic Distemper </option>
                  <option value="Dealer"> Other Decorative </option>
                  <option value="Dealer"> Aluminium Paints </option>
                  <option value="Dealer"> Putty </option>
                  <option value="Dealer"> Stainer </option>
                  <option value="Dealer"> Wood Finish </option>
                  <option value="Dealer"> Warnishes </option>
                  <option value="Dealer"> Cement Paint</option>
                  <option value="Dealer"> Textures </option>
                  <option value="Dealer"> Industrial </option>
                  <option value="Dealer"> Colourspace Colorant </option>
                  <option value="Dealer"> Healthcare </option>

                  <option value="West"> ... </option>
                </select>
              </form>
            </td>
            <td className="">
              <input className="inp40" value=" " placeholder="Rule Name" />
            </td>
            <td className="">
              <input className="inp40" value=" " />
            </td>
            <td className="">
              <input className="inp40" value=" " />
            </td>

            <td className="w3-small h6 w3-text-gray">or</td>
            <td className="">
              <input className="inp40" value=" " />
            </td>
            <td className="">
              <input className="inp40" value=" " />
            </td>
          </tr>
        </table>
      </CustomPopup3>

      {/* <div
        id="Wgt_Segment_Id"
        class="Wgt_Segment_Class w3-row w3-row-padding  w3-padding-large w3-margin-bottom w3-white "
      >
        <p className="h5 "> Market Segment Plan </p>

        <div class="w3-row w3-margin-top ">
          <span className="w3-small h5 w3-text-gray"> Non Focus </span>
          <br />
          <div class="w3-grey">
            <div
              class="w3-container w3-center w3-padding w3-blue"
              style={{ width: "25%" }}
            >
              50%
            </div>
          </div>
        </div>

        <div class="w3-row w3-margin-top ">
          <span className="w3-small h5 w3-text-gray"> Focus </span> <br />
          <div class="w3-grey">
            <div
              class="w3-container w3-center w3-padding w3-indigo"
              style={{ width: "75%" }}
            >
              {" "}
              75%
            </div>
          </div>
        </div>
      </div> */}

      {/* <div
        id="Wgt_State_Id"
        class="Wgt_State_Class w3-row w3-row-padding w3-margin-bottom w3-white "
      >
        <div class="w3-col l12 m12 w3-margin-top w3-margin-bottom ">
          <div class="w3-col l2 m4 s8 ">
            <form>
              <select
                className="form-control "
                value={selectedZone}
                onChange={handleZoneSelect}
              >
                <option value="">-Select Zone -- </option>
                {filteredZones.map((item) => (
                  <option value={item?.id} key={item?.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </form>
          </div>
        </div>

        <div class="w3-col l12 m12 ">
          <table class="w3-table w3-striped w3-white table-bordered ">
            <tr>
              <th>
                {" "}
                States <i className="w3-text-gray">(8) </i>{" "}
              </th>
              <th> LY-22-23 </th>
              <th> Target (%) </th>
              <th> Achieved (%)</th>
            </tr>
            {Wgt_Statewise_Data.map((data) => (
              <Wgt_Statewise_Ui key={data.id} data={data} />
            ))}
          </table>
        </div>
      </div> */}
    </div>
  );
};
export default National;
