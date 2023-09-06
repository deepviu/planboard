import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import icon from "../images/icon.png";
import logo from "../images/logo.png";
import { hasPermission } from "../auth/middleware";

const Sidebar = ({ isAuth, rolId }) => {

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };



  return (
    <div className="w3-sidebar w3-bar-block w3-hide-small  ">
      <button className="w3-bar-item w3-button w3-padding-xlarge  w3-center">
        <img src={logo} className="" style={{ width: "50px" }} />
        <p className="w3-small h6">Planboard</p>
      </button>

      {hasPermission(rolId, "national") && (
        <Link className="" to="national">
          <button className="w3-bar-item w3-button w3-padding-xlarge  w3-center">
            <i className="fa fa-bar-chart "></i>
            <p className="w3-small h6">National</p>
          </button>
        </Link>
      )}
      {hasPermission(rolId, "zone") && (
        <Link className="" to="zone" >
          <button className="w3-bar-item w3-button w3-padding-xlarge  w3-center">
            <i className="fa fa-bar-chart "></i>
            <p className="w3-small h6">Zone</p>
          </button>
        </Link>
      )}
      {hasPermission(rolId, "depot") && (
        <Link className="" to="depot">
          <button className="w3-bar-item w3-button w3-padding-xlarge  w3-center">
            <i className="fa fa-bar-chart "></i>
            <p className="w3-small h6">Depot</p>
          </button>
        </Link>
      )}
      {hasPermission(rolId, "territory") && (
        <Link className="" to="territory">
          <button className="w3-bar-item w3-button w3-padding-xlarge  w3-center">
            <i className="fa  fa-bar-chart "></i>
            <p className="w3-small h6">Territory</p>
          </button>
        </Link>
      )}

      {hasPermission(rolId, "dashscheduleboard") && (
        <Link className="" to="schedule">
          <button className="w3-bar-item w3-button w3-padding-xlarge  w3-center">
            <i className="fa fa-bar-chart "></i>
            <p className="w3-small h6">Schedule</p>
          </button>
        </Link>
      )}
      {hasPermission(rolId, "national") && (
        <Link className="" to="settings">
          <button className="w3-bar-item w3-button w3-padding-xlarge  w3-center">
            <i className="fa fa-gear"></i>
            <p className="w3-small h6">Settings</p>
          </button>
        </Link>
      )}
    </div>
  );
};

export default Sidebar;