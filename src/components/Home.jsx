import React from 'react';
import NavBar from './NavBar';
import Listing from './Listing';

localStorage.setItem("School of Soccer", "School of Soccer[{||}]Introduce your child to the world of soccer, where they can cultivate essential skills and develop a passion for the game. Our program, designed for ages 6-12, warmly welcomes beginners and seasoned players alike. With a supportive environment and expert coaching, we foster teamwork, sportsmanship, and individual growth. [{||}]/schoolofsoccerimg.jpg")
localStorage.setItem("Super Math Academy", "Super Math Academy[{||}]Welcome to Super Math Academy, where numbers come to life and equations ignite young minds! At SMA, we believe that mathematics is not just a subject but an adventure waiting to be explored. Our school is designed for budding mathematicians between the ages of 12 and 17, eager to unravel the mysteries of numbers, patterns, and proofs.[{||}]/supermathacademyimg.jpg");

export default function Home() {

    function goToCreate() {
        window.location.href = "/#/create";
    }

    let schoolData = [];

    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            let schoolValue = localStorage.getItem(key).split("[{||}]");
            schoolData.push(
                <Listing
                    key={key}
                    name={schoolValue[0]}
                    desc={schoolValue[1]}
                    img={schoolValue[2]}
                />
            );
        }
    }

    return (
        <>
            <NavBar />
            <div className="home-body">
                <button id="createListing" onClick={goToCreate}>Create Listing</button>
                <div>{schoolData}</div>
            </div>
        </>
    )
}