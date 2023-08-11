import React from "react";
import { useEffect, useState } from "react";
import { Wgt_Territory_Data } from "./Wgt_Territory_Data";
import Wgt_Territory_Table_Data from "./Wgt_Territory_Table_Data";
import Wgt_Territory_OSODCP_Table_Data from "./Wgt_Territory_OSODCP_Table_Data";

const Territory_Componentss = ({ depotsData, selectedDepot = "all" }) => {
  const [filtereTerretory, setFiltereTerretory] = useState([]);
  const [filtereDepot, setFiltereDepot] = useState([]);
  const [selectedDepots, setSelectedDepots] = useState("all");
  const [selectedPlans, setSelectedPlans] = useState(0);
  useEffect(() => {
    const idAndDepotArray = depotsData.map((item) => {
      return {
        id: item.id,
        name: item.depot,
      };
    });
    setFiltereDepot(idAndDepotArray);
    const filteredTerritories = Wgt_Territory_Data.filter((item) =>
      idAndDepotArray.some((depot) => depot.id === item.depotId)
    );
    console.log(filteredTerritories);
    setFiltereTerretory(filteredTerritories);
    setSelectedDepots(selectedDepot);
  }, [depotsData]);

  const handleTerriChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === "all") {
      const idAndDepotArray = depotsData.map((item) => {
        return {
          id: item.id,
          name: item.depot,
        };
      });
      setFiltereDepot(idAndDepotArray);
    } else {
      const Id = parseInt(e.target.value, 10);
      const filteredDepots = Wgt_Territory_Data.filter(
        (item) => item.depotId == Id
      );
      setFiltereTerretory(filteredDepots);
    }
  };

  const onchangePlansHandler = (e) => {
    setSelectedPlans(e.target.value);
  };
  return (
    <div>
      <div class="w3-row w3-row-padding w3-padding-16 w3-margin-top  w3-margin-bottom w3-white ">
        <div class="w3-col l6 m6 s6 ">
          <span className="w3-xlarge">
            {" "}
            Territory{" "}
            <span className=" w3-text-gray w3-opacity">
              {" "}
              [Sales Plan ]
            </span>{" "}
          </span>
          <br />
          <span className=" w3-text-red w3-small">
            {" "}
            <i className="fa fa-lock"></i> Locked{" "}
          </span>
          <span className=" w3-text-gray  w3-small w3-opacity">
            {" "}
            <i className="fa fa-pencil"></i> Update{" "}
          </span>
        </div>

        <div class="w3-col l3 m3 s6 ">
          <form>
            <select
              className="form-control"
              value={selectedDepots}
              onChange={handleTerriChange}
            >
              <option value="all">All Territories</option>
              {filtereDepot.map((item) => (
                <option value={item?.id} key={item?.id}>
                  {item.name}
                </option>
              ))}
              {/* <option value="All" selected>Depot : All</option>
              <option value="Ambala">Depot : Ambala</option>
              <option value="Delhi-Naraina">Depot : Delhi-Naraina </option>
              <option value="Jalandhar">Depot : Jalandhar</option> */}
            </select>
          </form>
        </div>

        <div class="w3-col l3 m3 s6 w3-right">
          <form>
            <select
              className="form-control"
              value={selectedPlans}
              onChange={onchangePlansHandler}
            >
              <option value=""> Sales Plan </option>
              <option value="osodcp"> OS / OD / Collection Plan </option>
              <option value="other"> Other </option>
            </select>
          </form>
        </div>
        {selectedPlans == 0 ? (
          <table class="w3-table table-stripped w3-white table-bordered ">
            <tr>
              <th> Territory</th>
              <th> LY-22-23 </th>
              <th> Target (%) </th>
              <th> YTD (%) </th>
            </tr>
            {filtereTerretory.map((data) => (
              <Wgt_Territory_Table_Data key={data.id} data={data} />
            ))}
          </table>
        ) : null}
        {selectedPlans == 'osodcp' ? (
          <table class="w3-table table-stripped w3-white table-bordered ">
            <tr>
            <th> Territory</th>
              <th> SALE </th>
              <th> OS </th>
              <th> OD </th>
              <th> DUE </th>
              <th> COLL </th>
              <th> YTD (%) </th>
            </tr>
            {filtereTerretory.map((data) => (
              <Wgt_Territory_OSODCP_Table_Data key={data.id} data={data} />
            ))}
          </table>
        ) : null}
      </div>
    </div>
  );
};

export default Territory_Componentss;
