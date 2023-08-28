const DepotDropDown = ({ filteredDepot, selectedDepot, onValueChange }) => {
    console.log("-selectedDepot", selectedDepot)
    const handleChange = (event) => {
      onValueChange(parseInt(event.target.value));
    };
  
    return (
      <select
        className="form-control"
        value={selectedDepot}
        onChange={handleChange}
      >
        <option >All Depot</option>
        {filteredDepot.map((item) => (
          <option value={item?.depot_id} key={item?.depot_id}>
            {item.depot_name}
          </option>
        ))}
      </select>
    )
  }
  
  export default DepotDropDown;