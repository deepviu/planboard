import { useState } from "react";
import { useSelector } from "react-redux";
// { filteredZones, selectedZone, onValueChange }
const ZoneSelectionBox = ({onValueChange}) => {
  const { AuthData } = useSelector((state) => state.auth);
  const [selectedZone, setSelctedZone] = useState(0);

  // console.log("-selectedZone", selectedZone)
  const handleChange = (event) => {
    onValueChange(parseInt(event.target.value));
    setSelctedZone(parseInt(event.target.value));
  };

  return (
    <select
      className="form-control"
      value={selectedZone}
      onChange={handleChange}
    >
      {/* <option >All Zone</option> */}
      {AuthData?.Zone.map((item, index) => (
        <option key={index} value={item?.ZoneID} >
          {item.ZoneName}
        </option>
      ))}
    </select>
  )
}

export default ZoneSelectionBox;