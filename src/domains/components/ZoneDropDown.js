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
        <option value={item?.id} key={item?.id}>
          {item.name}
        </option>
      ))}
    </select>
  )
}

export default ZoneDropDown;