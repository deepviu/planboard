import { useEffect, useState } from "react";
import Depot_componentss from "./Depot_componentss";
import { rolePermission, zoneData } from "../../auth/middleware";

const Depot = () => {
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
          <div class="w3-row w3-padding-16"></div>
          <Depot_componentss
            selectedZone={selectedZone}
            setFilteredDepots={setFilteredDepots}
          />
          <div class="w3-row w3-padding-16"></div>
        </div>
      );
    };

export default Depot 