import React from 'react'
import StatusAdmin from './StatusAdmin';
import StatusDeclined from './StatusDeclined';
import { useState, useEffect } from 'react';
function Status() {
    const [jsonApprovedData, setJsonApprovedData] = useState([]);
    const [jsonDeclinedData, setJsonDeclinedData] = useState([]);
    async function getApprovedData() {
        let res = await fetch("http://localhost:5000/api/admin/approved");
        let data = await res.json();
        console.table(data);
        setJsonApprovedData(data);
    }
    async function getDeclinedData() {
        let res = await fetch("http://localhost:5000/api/admin/declined");
        let data = await res.json();
        console.table(data);
        setJsonDeclinedData(data);
    }
    useEffect(() => {
        getApprovedData();
        getDeclinedData();
        console.log("Page load empty dependancy array");
    }, []); 
    return (
        <>
            <div className="container-filud">
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">University Event Management</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Request for event</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Know status</a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Past Events</a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="container-fluid my-3">
                {jsonApprovedData.map((ele) => {
                    return <StatusAdmin key={ele._id} ele={ele}/>
                })}
            </div>
            <div className="container-fluid my-3">
                {jsonDeclinedData.map((ele) => {
                    return <StatusDeclined key={ele._id} ele={ele}/>
                })}
            </div>
        </>
    )
}

export default Status;