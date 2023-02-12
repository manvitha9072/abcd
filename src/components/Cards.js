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
      // we use props.text to pass props from child to parent or vice versa
      body: JSON.stringify({ st: i, id: props.num._id }),
    });
    let d = await res.json();
    if (d.success) {
      Swal.fire("SUCCESS", "Status Updated !!", "success");
    } else {
      Swal.fire("OOPS", "Not updated !!", "error");
    }
  };
  return (
    <div>
      <div className="card my-2">
        <div className="card-body">
          <p>Name: {props.num.name}</p>
          <p>Participants: {props.num.nParticipants}</p>
          <p>Date: {props.num.date}</p>
          <p>Time: {props.num.time}</p>
          <p>Venue: {props.num.venue}</p>
          <p>Description: {props.num.desc}</p>
        </div>
        <div className="clearfix my-2">
          <button
            className="btn btn-success float-sm-end mt-3 me-2"
            onClick={(e) => {
              handleOnClick(e, true);
            }}
          >
            Approve
          </button>
          <button
            className="btn btn-danger float-sm-end mt-3 me-2"
            onClick={(e) => {
              handleOnClick(e, false);
            }}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}
export default Cards 