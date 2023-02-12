import React, { useEffect, useState } from 'react'
import Cards from './Cards';
function Eo() {
    //use state returns array with 2 value, 1st one being count and the 2nd being a function to update the state
    const [jsonData, setJsonData] = useState([]);
    async function getData() {
        let res = await fetch("http://localhost:5000/api/admin/form");
        let data = await res.json();
        console.table(data);
        setJsonData(data);
    }
    useEffect(() => {
        getData();
        console.log("Page load empty dependancy array");
    }, []);

    return (
        <div>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
                    <div className="container-fluid">
                        <a href="#" className="navbar-brand">University Event Management</a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navmenu">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Event Organizer</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="container-fluid my-3">
                {jsonData.map((ele) => {
                    return <Cards key={ele._id} num={ele}/>
                })}
            </div>
        </div>
    )
}

export default Eo;