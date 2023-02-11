import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
function Cards(props) {
  // const name = props.name;
  // const supporttxt = props.supporttxt;
  // const txt = props.txt;
  const handleOnClick = async (e, i) => {
    console.log(i);
    let res = await fetch("http://localhost:5000/api/organiser/approvals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ st: i, id: props.num._id }),
    });
    let d = await res.json();
    if (d.success) {
      Swal.fire("SUCCESS", "Status Updated !!", "success");
    } else {
      Swal.fire("OOPS", "Not updated !!", "error");
    }
  };
  //name,no of participats, date, start, end, venue, description
  return (
    <div>
      <div className="card" style="width: 18rem;">
        <div className="card-body">
          <h5 className="card-title">{props.num.name}</h5>
          {/* <h6 className="card-subtitle mb-2 text-muted">{props.num.supporttxt}</h6> */}
          <p className="card-text">
            <p>Name: {props.num.name}</p>
            <p>Participants: {props.num.nParticipants}</p>
            <p>Date: {props.num.date}</p>
            <p>Time: {props.num.time}</p>
            <p>Venue: {props.num.venue}</p>
            <p>Description: {props.num.desc}</p>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Cards 