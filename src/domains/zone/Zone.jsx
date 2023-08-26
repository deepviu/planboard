import { useEffect, useState } from "react"; 

import { rolePermission, zoneData } from "../../auth/middleware";
import CustomPopup from "../CustomPopup";
import CommonTopSales from "../components/CommonTopSales";
import ZoneDropDown from "../components/ZoneDropDown";
import DepoSales from "../components/DepoSales";
import DepoMonthWiseSalesReport from "../components/DepoMonthWiseSalesReport";

const Zone = () => { 
  const [selectedZone, setSelectedZone] = useState(0);
  const [selectedDepot, setSelectedDepot] = useState(0);

  const [filteredDepots, setFilteredDepots] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const [filteredZones, setFilteredZones] = useState([]);

  const handleSelectionChange = (newValue) => {
    setSelectedZone(newValue);
  };

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  useEffect(() => {
    const permissions = rolePermission()?.permissions;

    if (permissions) {
      const filtered = zoneData.filter((item) =>
        permissions.includes(item.id)
      );
      setFilteredZones(filtered);
      setSelectedZone(permissions.length > 0 ? permissions[0] : 0);
    }
  }, []);
 
  return (
    <div className=" main ">
      <div className="w3-row w3-padding-16">
        <div className="w3-col l3 m3 s6 w3-right">
          <ZoneDropDown filteredZones={filteredZones} selectedZone={selectedZone} onValueChange={handleSelectionChange} />
        </div>
      </div>
  
      <CommonTopSales  selectedZone={selectedZone} />

      <DepoSales selectedZone={selectedZone} selectedDepot={selectedDepot} setFilteredDepots={setFilteredDepots} />

      <DepoMonthWiseSalesReport  selectedZone={selectedZone} selectedDepot={selectedDepot}   />
      

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
export default Zone;
