import { useState } from "react";
import LoadingPlaceholder from "../../../components/LoadingPlaceholder";

const FocusSectorMaster = () => {
    const [isLoading, setLoading] = useState(false);
    const [sectorMaster, setSectorMaster] = useState([{ year: 2023, month: "Jun", name: "First" }, { year: 2023, month: "July", name: "Second" }, { year: 2023, month: "Aug", name: "Third" }])

    return (
        <>
            <div className="main">
                <form className="w3-container">
                    <div className="w3-row">
                        <div className="w3-col l4 m4 s4 ">
                            <label htmlFor="selectionBox">Select an Option:</label>
                            <select className="w3-select"
                            >
                                <option value="january">2023</option>
                                <option value="february">2024</option>
                                <option value="march">2025</option>
                            </select>
                        </div>
                        <div className="w3-col l4 m4 s4 ">
                            <label htmlFor="selectionBox">Select an Option:</label>
                            <select className="w3-select"
                            ><option value="january">January</option>
                                <option value="february">February</option>
                                <option value="march">March</option>
                                <option value="april">April</option>
                                <option value="may">May</option>
                                <option value="june">June</option>
                                <option value="july">July</option>
                                <option value="august">August</option>
                                <option value="september">September</option>
                                <option value="october">October</option>
                                <option value="november">November</option>
                                <option value="december">December</option>
                            </select>
                        </div>
                        <div className="w3-col l4 m4 s4 ">
                            <label htmlFor="selectionBox">Select an Option:</label>
                            <select className="w3-select"
                            ><option value="january">First </option>
                                <option value="february">First</option>
                                <option value="march">First</option>
                            </select>
                        </div>
                    </div>
                    <div className="w3-clear w3-padding-16"> </div>
                    <div className="w3-row">
                        <div className="w3-col l4 m4 s4 ">
                    <button type="submit" className="w3-button w3-blue">Submit</button>
                    </div></div>
                </form>

                <div className="w3-clear w3-padding-16"> </div>
                <div className="w3-clear w3-padding-16"> </div>


                <table className="tbl_grid w3-table table-bordered  h6 w3-small w3-white ">
                    <tr className=" w3-yellow h6">
                        <td className=" "> FY </td>
                        <td className=" "> Month </td>
                        <td className=" "> Sector Master </td>
                        <td className=" "> Action </td>
                    </tr>
                    {isLoading ? (
                        <tr>
                            <td colSpan="13">
                                <LoadingPlaceholder numberOfRows={2}  ></LoadingPlaceholder>
                            </td>
                        </tr>) : (
                        <>
                            {sectorMaster.length == 0 ? (
                                <tr>
                                    <td colSpan="13" className="w3-large w3-text-gray w3-padding h4"> No Data Found, Select Territory</td>
                                </tr>
                            ) : (
                                sectorMaster.map((item, index) => (
                                    <tr key={index} >
                                        <td >{item?.year}</td>
                                        <td className="">{item?.month}</td>
                                        <td className="">{item?.name}</td>
                                        <td className=""><i className="fa fa-pencil"></i> {" "}<i className="fa fa-remove"></i></td>
                                    </tr>

                                ))
                            )}
                        </>
                    )}
                </table>

            </div>
        </>
    )
}

export default FocusSectorMaster;