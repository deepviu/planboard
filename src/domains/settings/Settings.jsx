import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const Settings = () => {
    const [toggleState, setToggleState] = useState(1);
    
    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <div className="main  w3-border">
            Settings
        </div>
    )
}

export default Settings