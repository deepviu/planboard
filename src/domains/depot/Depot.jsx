import { useEffect, useState } from "react";
import Depot_componentss from "./Depot_componentss";
import { rolePermission, zoneData } from "../../auth/middleware";

import Territory_Componentss from "../territory/Territory_componentss";
import { Wgt_Depotwise_Data } from "../depot/Wgt_Depotwise_Data";
import CommonTopSales from "../components/CommonTopSales";
import TerritoryMonthWiseSalesReport from "../components/TerritoryMonthWiseSalesReport";
import TerritorySales from "../components/TerritorySales";
import { useParams } from "react-router";

const Depot = () => {
  const {depotId} = useParams();
  console.log("-depotId==============depotId", depotId)
  const [selectedZone, setSelectedZone] = useState(0);
  const [filteredZones, setFilteredZones] = useState([]);
  const [filteredDepots, setFilteredDepots] = useState([]);
  const [selectedDepot, setSelectedDepot] = useState(0);
  
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
      <div className="w3-row w3-padding-16"></div>

      <CommonTopSales  selectedZone={selectedZone} />

        {/*  <TerritorySales selectedZone={selectedZone} selectedDepot={selectedDepot} setFilteredDepots={setFilteredDepots}/>  */}

      <TerritoryMonthWiseSalesReport />
 

      {/* <DepoMonthWiseSalesReport  selectedZone={selectedZone} selectedDepot={selectedDepot}   /> */}
      {/* <Territory_Componentss
        depotsData={Wgt_Depotwise_Data}
        selectedDepot={"all"}
      /> */}
    </div>
  );
};

export default Depot;
