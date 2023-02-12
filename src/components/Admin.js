import React, { useState } from 'react';
import "./admin.css";
function Admin() {
    const nData={
        name: "",
        nParticipants: "",
        desc: "",
        date: "",
        time: "",
        venue: "",
        approved: null,
        refreshments: "",
        name2: "",
        email: ""
    }
    const [formData, setformData] = useState(nData)
    const handleOnChange=(e)=>{
        setformData({...formData,[e.target.name]:e.target.value})
    }
    const handleOnClick=async()=>{
        console.log(formData)
        let res = await fetch("http://localhost:5000/api/admin/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const json = await res.json();
    }
    const handleOnChecked = (e, i) => {
        let val = i === 1 ? e.target.checked : !e.target.checked;
        setformData({ ...formData, refreshments: val });
      };
    return (
        <div>
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
                                    <a className="nav-link active" aria-current="page" href="#">Request For Event</a>
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
                <div className="row mx-lg-5">
                    <div className="col-lg-6 container-fluid">
                        <form>
                            <div className="input-group my-5">
                                <span className="input-group-text">Name of the event: </span>
                                <input type="text" name="name" value={formData.name} placeholder="Enter name here" onChange={handleOnChange} />
                            </div>
                            <div className="input-group my-5">
                                <span className="input-group-text">
                                    <span>Select Venue: </span>
                                    <select className="venue" name='venue' value={formData.venue} onChange={handleOnChange}>
                                        <option>Select Venue</option>
                                        <option value="venue 1">venue 1</option>
                                        <option value="venue 2">venue 2</option>
                                        <option value="venue 3">venue 3</option>
                                        <option value="venue 4">venue 4</option>
                                    </select>
                                </span>
                            </div>
                            <div className="input-group my-5">
                                <span className="input-group-text">Select date: </span>
                                <input type="date" id="start" name="date" onChange={handleOnChange} value={formData.date} min="2022-10-11"
                                    max="2025-12-11" />
                            </div>
                            <div className="input-group my-5">
                                <span className="input-group-text">Select time slot: </span>
                                <select className="time-slot" name="time" onChange={handleOnChange} value={formData.time}>
                                    <option>Select time slot</option>
                                    <option value="7:00-9:00">7:00-9:00</option>
                                    <option value="10:00-12:00">10:00-12:00</option>
                                    <option value="13:00-15:00">13:00-15:00</option>
                                    <option value="16:00-18:00">16:00-18:00</option>
                                </select>
                            </div>
                            <div className="input-group my-5">
                                <span className="input-group-text">Number of participants: </span>
                                <input type="number" id="quantity" name="nParticipants" onChange={handleOnChange} value={formData.nParticipants} min="25" max="1000" />
                            </div>

                            <div className="my-5">
                                <label for="quantity">Refreshments:</label>
                                <div className="form-check mx-8">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" onChecked={(e)=>handleOnChecked(e,1)} checked={formData.refreshments}/>
                                        <label className="form-check-label" for="flexRadioDefault1">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" onChecked={(e)=>handleOnChecked(e,2)} checked={!formData.refreshments} />
                                        <label className="form-check-label" for="flexRadioDefault2">
                                            No
                                        </label>
                                    </div>
                                </div>
                                <div className="my-5">
                                    <p><label for="w3review">Note area:</label></p>
                                    <textarea id="w3review" name="desc" onChange={handleOnChange} value={formData.desc} rows="4" cols="50"
                                        placeholder="Enter any additional details here"></textarea>
                                </div>
                                <hr/>
                                <div className="input-group">
                                    <span className="input-group-text">Your name: </span>
                                    <input type="text" placeholder="Enter name here" onChange={handleOnChange} name="name2" value={formData.name2}/>
                                </div>
                                <div className="input-group my-5">
                                    <span className="input-group-text">Email address: </span>
                                    <input type="email" name="email" onChange={handleOnChange} value={formData.email} placeholder="Enter email here" />
                                </div>
                                <br/>
                                <button type="button" className="btn btn-primary" onClick={handleOnClick}>Request</button>
                                <button type="button" className="btn btn-primary">Clear all</button>
                                <button type="button" className="btn btn-primary">Preview</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-6 mt-5">
                        {/* <iframe className="container-fluid"
                            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FKolkata&src=bWFudml0aGEyNzA5QGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=NjNpbjMyN2Y0N2g4bWI5MGo3NGJ0YnF2NzRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%23D81B60&color=%230B8043"
                            style={{ border: "solid 1px #777", width:"600", height:"600", frameborder:"0", scrolling:"no" }}></iframe> */}
                    </div>
                </div>
            </div>
        </div>
  )
}
export default Admin