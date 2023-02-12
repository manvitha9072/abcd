 import React from 'react'
function StatusAdmin(props) {
    return (
        <div className="col-lg-3">
            <div className="card my-3" style={{ width: "18rem" }}>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{props.ele.name}</li>
                    <li className="list-group-item">{props.ele.desc}</li>
                    <li className="list-group-item">Status: Declined</li>
                </ul>
            </div>
        </div>
    )
}

export default StatusAdmin