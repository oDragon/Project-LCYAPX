import React from "react";

export default function Listing(props) {

    function updateListing() {
        if (props.name == "Super Math Academy" || props.name == "School of Soccer") {
            alert("Cannot update the sample school!");
        } else {
            window.location.href = "/#/update/?key=" + props.name;
        }
    }

    function deleteListing() {
        if (props.name == "Super Math Academy" || props.name == "School of Soccer") {
            alert("Cannot delete the sample school!");
        } else {
            localStorage.removeItem(props.name);
            window.location.reload();
        }
    }

    return (
        <div id="listingContainer">
            <img id="listingImg" src={props.img}></img>
            <div id="textContainer">
                <div id="listingName">{props.name}</div>
                <div id="listingDesc">{props.desc}</div>
                <button id="updateListing" onClick={updateListing}>Update</button>
                <button id="deleteListing" onClick={deleteListing}>Delete</button>
            </div>
        </div>
    )
}