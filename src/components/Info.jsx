import React, { useState, useEffect } from "react";
import "./info.css";
const Info = () => {
  const local = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <>
      <div className="titlew">Info</div>
      <hr />
      <div className="infoContainer">
        <div className="items">
          <strong>Id </strong> : {local.id}
        </div>
        <div className="items">
          <strong>Email </strong> : {local.email}
        </div>
        <div className="items">
          <strong>Name </strong> : {local.name}
        </div>
        <div className="items">
          <strong>Username </strong> : {local.username}
        </div>
        <div className="items">
          <strong>Phone </strong> : {local.phone}
        </div>
        <div className="items">
          <strong>Company </strong> :{" "}
          <div>
            {" "}
            <strong>bs</strong> : {local.company.bs}
          </div>
          <div>
            <strong>Catch Phrase</strong> : {local.company.catchPhrase}
          </div>
          <div>
            <strong>Name</strong> : {local.company.name}
          </div>
        </div>
        <div className="items">
          <strong>Address</strong> :{" "}
          <div>
            <strong>City</strong> : {local.address.city}
          </div>
          <div>
            <hr />
            <strong>geo </strong>:
            <div>
              <strong>lat</strong> : {local.address.geo.lat}{" "}
            </div>{" "}
            <div>
              <strong>lng</strong> : {local.address.geo.lng}
            </div>
            <hr />
          </div>
          <div>
            <strong>street</strong> : {local.address.street}
          </div>
          <div>
            <strong>suite</strong> : {local.address.suite}
          </div>
          <div>
            <strong>zipcode</strong> : {local.address.zipcode}
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
