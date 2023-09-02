import React, { useEffect, useState } from "react";
import axiosInstance from "./../../auth/api";
import { SHOW_TOAST } from "../../store/constant/types";
import { useDispatch } from "react-redux";
import LoadingPlaceholder from "../../components/LoadingPlaceholder";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";

const DepoMonthWiseSalesReport = ({ selectedZone, selectedDepot }) => {
  const dispatch = useDispatch();
  const [monthWiseSalesData, setMonthWiseSalesData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const [filterText, setFilterText] = React.useState("");

  useEffect(() => {
    const payload = {
      Token: localStorage.getItem("access_token"),
      ZoneId: selectedZone,
      DepotId: 0, //selectedDepot
    };
    const fetchDepotSalesPlan = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.post("DepotMonthPlan", payload);
        if (response?.status === 200) {
          setMonthWiseSalesData(
            response.data.Data != null ? response.data.Data : []
          );
        }
        setLoading(false);
      } catch (error) {
        // Handle errors
        dispatch({ type: SHOW_TOAST, payload: error.message });
      }
    };

    fetchDepotSalesPlan();
  }, [selectedZone]);

  // builkd table colunms

  const columns = [
    {
      name: "Zone",
      selector: (row) => row.zone_name,
      sortable: true,
    },
    {
      name: "Depot",
      selector: (row) => (
        <Link className="link  w3-text-indigo" to={`/depot/${row.depotid}`}>
          {row.depot_name}
        </Link>
      ),
      sortable: true,
    },
    {
      name: "LLY",
      selector: (row) => row.LLY_Value,
      sortable: true,
    },
    {
      name: "LY",
      selector: (row) => (
        <>
          {row.LY_Value}
          <br />
          <span className="w3-text-gray ">
            ({((row.LY_Value / row.LLY_Value) * 100).toFixed(2)}%){" "}
          </span>{" "}
        </>
      ),
      sortable: true,
    },
    {
      name: "CY Plan",
      selector: (row) => (
        <>
          {row.CY_Value}
          <br />
          <span className="w3-text-gray ">
            ({((row.CY_Value / row.LY_Value) * 100).toFixed(2)}%)
          </span>{" "}
        </>
      ),
      sortable: true,
    },
    {
      name: "YTD",
      selector: (row) => row.YTD_Value,
      sortable: true,
    },
    {
      name: "Apr",
      selector: (row) => row.Apr_Month_Value,
      sortable: true,
    },
    {
      name: "May",
      selector: (row) => row.May_Month_Value,
      sortable: true,
    },
    {
      name: "Jun",
      selector: (row) => row.Jun_Month_Value,
      sortable: true,
    },
    {
      name: "Jul",
      selector: (row) => row.Jul_Month_Value,
      sortable: true,
    },
    {
      name: "Aug",
      selector: (row) => row.Aug_Month_Value,
      sortable: true,
    },
    {
      name: "Sep",
      selector: (row) => row.Sep_Month_Value,
      sortable: true,
    },
    {
      name: "Oct",
      selector: (row) => row.Oct_Month_Value,
      sortable: true,
    },
    {
      name: "Nov",
      selector: (row) => row.Nov_Month_Value,
      sortable: true,
    },
    {
      name: "Dec",
      selector: (row) => row.Dec_Month_Value,
      sortable: true,
    },
    {
      name: "Jan",
      selector: (row) => row.Jan_Month_Value,
      sortable: true,
    },
    {
      name: "Feb",
      selector: (row) => row.Feb_Month_Value,
      sortable: true,
    },

    {
      name: "Mar",
      selector: (row) => row.Mar_Month_Value,
      sortable: true,
    },
  ];

  const filteredItems = monthWiseSalesData.filter(
    (item) =>
      item.depot_name &&
      item.depot_name.toLowerCase().includes(filterText.toLowerCase())
  );

  const CustomSubHeaderComponent = ({ children, align }) => {
    const containerStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: align === "left" ? "flex-start" : "center",
      marginBottom: "10px",
    };

    return (
      <div className=" w3-left " style={containerStyle}>
        {children}
      </div>
    );
  };

  const filterComponent = (
    <input
      type="text"
      placeholder="Search..."
      style={{ marginRight: "10px" }}
    />
  );

  const rowCount = monthWiseSalesData.length;

  const additionalComponent = (
    <span className="w3-left w3-margin-right "> Depots ({rowCount}) </span>
  );

  const subHeaderComponent = (
    <input
      type="text"
      placeholder="Filter By Depot Name"
      aria-label="Search Input"
      value={filterText}
      onChange={(e) => setFilterText(e.target.value)}
    />
  );

  const ExportButton = ({ onExport }) => (
    <button onClick={onExport}>
      {" "}
      <i className="fa fa-excel"> </i> Export{" "}
    </button>
  );
  const handleExport = () => {
    console.log("Exporting table data");
  };

  return (
    <>
      <DataTable
        columns={columns}
        data={filteredItems}
        pagination
        className="datatable"
        fixedHeader={true}
        fixedHeaderScrollHeight="400px"
        subHeader
        subHeaderComponent={
          <CustomSubHeaderComponent align="left">
            {additionalComponent}
            {subHeaderComponent}
          </CustomSubHeaderComponent>
        }
      />
    </>
  );
};

export default DepoMonthWiseSalesReport;
