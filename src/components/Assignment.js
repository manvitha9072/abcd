import React from 'react'
import "./style.css"
const assignment = [
    {
        "id": 1,
        "name": "Sydney Island",
        "lati": -16.68972,
        "lon": 139.45917
    },
    {
        "id": 2,
        "name": "Sydney Creek",
        "lati": -16.3,
        "lon": 128.95
    },
    {
        "id": 3,
        "name": "Mount Sydney",
        "lati": -21.39864,
        "lon": 121.193
    }
]
function sample(x) {
    console.log(x.id);
    return (
        <tr>
            <td>{x.id+`${"."}`}</td>
            <td>{x.name}</td>
            <td>{x.lati}</td>
            <td>{x.lon}</td>
        </tr> 
    )
}
function Assignment() {
    return (
        <div className="mx-5 my-5">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Latitude</td>
                    <td>Longitude</td>
                </tr>
            </thead>
            <tbody>
                {assignment.map(sample)}
            </tbody>
        </div>
  )
}
export default Assignment;