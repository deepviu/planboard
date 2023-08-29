import { useEffect, useState } from "react";
import Depot_componentss from "./Depot_componentss";
import { rolePermission, zoneData } from "../../auth/middleware";

import Territory_Componentss from "../territory/Territory_componentss";
import { Wgt_Depotwise_Data } from "../depot/Wgt_Depotwise_Data";
import CommonTopSales from "../components/CommonTopSales";
import TerritoryMonthWiseSalesReport from "../components/TerritoryMonthWiseSalesReport";
import TerritorySales from "../components/TerritorySales";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import ZoneSelectionBox from "../components/ZoneSelectionBox";
import DepoSelectionBox from "../components/DepoSelectionBox";

const Depot = () => {
  const { zoneId, depotId } = useParams();


  const { AuthData } = useSelector((state) => state.auth);

  const [selectedZone, setSelectedZone] = useState(AuthData.Zone[0]?.ZoneID ? AuthData.Zone[0]?.ZoneID : 0);
  const [selectedDepot, setSelectedDepot] = useState(0);

  const handleSelectionChange = (newValue) => {
    setSelectedZone(newValue);
  };

  const onSelectedDepoChange = (newValue) => {
    setSelectedDepot(newValue);
  };

  useEffect(() => {
    console.log("--zoneId", zoneId)
    
    if (zoneId != undefined) {
      setSelectedZone(parseInt(zoneId));
    }
    if (depotId != undefined) {
      console.log("--depotId", depotId)
      setSelectedDepot(parseInt(depotId));
    }
  }, [])

  return (
    <div className=" main ">

      <div className="w3-row w3-padding-16">
        {(AuthData.Data[0].EmployeeTpye === 'HOD' || AuthData.Data[0].EmployeeTpye === 'ZM') ? (
          <>
            <div className="w3-col l3 m3 s6">
              <ZoneSelectionBox selectedZone={selectedZone} onValueChange={handleSelectionChange} />
            </div>
            <div className="w3-col l3 m3 s6">
              <DepoSelectionBox selectedZone={selectedZone} selectedDepot={selectedDepot} onSelectedDepoChange={onSelectedDepoChange} />
            </div>
          </>
        ) : AuthData.Data[0].EmployeeTpye === 'DM' ? (
          <div className="w3-col l3 m3 s6">
            <DepoSelectionBox selectedZone={selectedZone} onSelectedDepoChange={onSelectedDepoChange} />
          </div>
        ) : null}
      </div>


      <CommonTopSales actionType="Depot" selectedZone={selectedZone} selectedDepot={selectedDepot} />

      {/*  <TerritorySales selectedZone={selectedZone} selectedDepot={selectedDepot} setFilteredDepots={setFilteredDepots}/>  */}

      <TerritoryMonthWiseSalesReport selectedDepot={selectedDepot} />


      {/* <DepoMonthWiseSalesReport  selectedZone={selectedZone} selectedDepot={selectedDepot}   /> */}

    </div>
  );
};

export default Depot;
