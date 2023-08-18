import { useEffect, useState, useContext } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";

import Wgt_Depotwise_Ui from "./Wgt_Depotwise_Ui";
import { Wgt_Depotwise_Data } from "./Wgt_Depotwise_Data";

import Wgt_Territory_Ui from "./Wgt_Territory_Ui";
import { Wgt_Territory_Data } from "./Wgt_Territory_Data";
import { Territoty, rolePermission, zoneData } from "../../auth/middleware";
import Territory_Componentss from "../territory/Territory_componentss";
import Depot_componentss from "../depot/Depot_componentss";

const Zone = () => {
  const [selectedZone, setSelectedZone] = useState(0);
  const [filteredZones, setFilteredZones] = useState([]);
  const [filteredDepots, setFilteredDepots] = useState([]);

  useEffect(() => {
    const permissions = rolePermission()?.permissions;
    if (permissions) {
      const filteredZoness = zoneData.filter((item) =>
        permissions.includes(item.id)
      );      
      setFilteredZones(filteredZoness);
      setSelectedZone(permissions.length > 0 ? permissions[0] : 0);
    }
  }, []);
   
  const handleZoneChange = (e) => {
    const Id = parseInt(e.target.value, 10);
    setSelectedZone(Id);     
  };
  return (
    <div className=" main ">
      <div class="w3-row w3-padding-16">
        <div class="w3-col l3 m3 s6 w3-right">
          <form>
            <select
              className="form-control"
              value={selectedZone}
              onChange={handleZoneChange}
            >
              <option value="" selected>
                {" "}
                Select Zone{" "}
              </option>
              {filteredZones.map((item) => (
                <option value={item?.id} key={item?.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </form>
        </div>
      </div>
      <div class="w3-row w3-row-padding w3-padding-16 w3-margin-top w3-white ">
        <div class="w3-col l3 m3 s3 ">
          <span className="w3-xlarge">
            {zoneData.find((item) => item.id == selectedZone)?.name}
          </span>
          <br />
          <span className="w3-text-red w3-small h6">
            <i className="fa fa-lock w3-text-red"></i> Locked
          </span>
        </div>

        <div class="w3-col l3 m3 s3 w3-center">
          <span className="w3-text-gray"> LY 22-23 </span>
          <hr className="hr1" />
          <span className=" ">90</span> Cr.
        </div>

        <div class="w3-col l3 m3 s3 w3-center">
          <span className="w3-text-gray"> Target 23-24 </span>
          <hr className="hr1" />
          <i className="fa fa-lock w3-text-red"></i>
          <span className="h5">126 </span> Cr.
          <i className="w3-text-gray"> (26%) </i>
        </div>

        <div class="w3-col l3 m3 s3 w3-center">
          <span className="w3-text-gray"> YTD </span>
          <hr className="hr1" />
          <span className=" ">36 </span> Cr.
          <i className="w3-text-gray"> (12%) </i>
        </div>
      </div>

      
      <Depot_componentss selectedZone={selectedZone}  setFilteredDepots={setFilteredDepots}/>

      <div class="w3-row w3-padding-16"></div>
      <Territory_Componentss
        depotsData={filteredDepots}
        selectedDepot={"all"}
      />

      <div class="w3-row w3-padding-16"></div>
    </div>
  );
};
export default Zone;
