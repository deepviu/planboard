const ZoneDropDown = ({ filteredZones, selectedZone, onValueChange }) => {
  console.log("-selectedZone", selectedZone)
  const handleChange = (event) => {
    onValueChange(parseInt(event.target.value));
  };

  return (
    <select
      className="form-control"
      value={selectedZone}
      onChange={handleChange}
    >
      <option >All Zone</option>
      {filteredZones.map((item) => (
        <option value={item?.zone_id} key={item?.zone_id}>
          {item.zone_name}
        </option>
      ))}
    </select>
  )
}

export default ZoneDropDown;