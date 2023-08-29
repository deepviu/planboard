import { useState } from "react";
import { useSelector } from "react-redux";
 
import CommonTopSales from "../components/CommonTopSales";
import ZoneDropDown from "../components/ZoneDropDown"; 
import DepoMonthWiseSalesReport from "../components/DepoMonthWiseSalesReport"; 

const Zone = () => {
  const { AuthData } = useSelector((state) => state.auth);
  console.log("--AuthData---", AuthData)

  const [selectedZone, setSelectedZone] = useState(AuthData.Zone[0]?.ZoneID ? AuthData.Zone[0]?.ZoneID : 0);
  const [selectedDepot, setSelectedDepot] = useState(0);

  const handleSelectionChange = (newValue) => {
    setSelectedZone(newValue); 
  };

  return (
    <div className=" main ">
      <div className="w3-row w3-padding-16">
        <div className="w3-col l3 m3 s6 ">
          <ZoneDropDown selectedZone={selectedZone} onValueChange={handleSelectionChange} />
        </div>
      </div> 

      <CommonTopSales actionType="Zone"  selectedZone={selectedZone} />

      <DepoMonthWiseSalesReport selectedZone={selectedZone} selectedDepot={selectedDepot} />

    </div>
  );
};
export default Zone;
