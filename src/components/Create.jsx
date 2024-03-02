import React from 'react';
import NavBar from './NavBar';

export default function Create() {

    function clickHiddenButton() {
        const imageInputButton = document.getElementById('imgInput');
        const myChooseFileText = document.getElementById('myChooseFileText');
        imageInputButton.addEventListener("change", function () {
            if (imageInputButton.value) {
                myChooseFileText.innerHTML = imageInputButton.value.split("\\").pop();
            } else {
                myChooseFileText.innerHTML = "No file chosen";
            }
        })
        imageInputButton.click();
    }

    function submit() {

        const schoolName = document.getElementById('nameInput');
        const schoolDesc = document.getElementById('descInput');
        const schoolImg = document.getElementById('imgInput');

        if (schoolImg.files && schoolImg.files.length > 0 && schoolName.value && schoolDesc.value) {
            const fr = new FileReader();
            fr.readAsDataURL(schoolImg.files[0]);
            fr.addEventListener('load', () => {
                localStorage.setItem(schoolName.value, schoolName.value + "[{||}]" + schoolDesc.value + "[{||}]" + fr.result);
            })
            setTimeout(function () {
                window.location.href = "/";
            }, 2000);
        } else {
            if (!schoolName.value) {
                alert("Please enter your school's name");
            } else if (!schoolDesc.value) {
                alert("Please enter a description")
            } else {
                alert("Please choose an image");
            }
        }
    }

    return (
        <>
            <NavBar />
            <div className="home-body">
                <a href="/">{"< back to listings"}</a>
                <div id="createTitle">Create a listing</div>
                <div id="nameContainer">
                    <div id="nameSubtitle">Name</div>
                    <input id="nameInput"></input>
                </div>
                <div id="aboutContainer">
                    <div id="aboutSubtitle">About</div>
                    <textarea id="descInput"></textarea>
                </div>
                <div id="imageContainer">
                    <div id="imageSubtitle">Image</div>
                    <input id="imgInput" type="file" accept="image/jpg, image/jpeg, image/png" hidden="hidden"/>
                    <div id="chooseFileContainer">
                        <button onClick={clickHiddenButton} id="myChooseFileButton">Choose File</button>
                        <div id="myChooseFileText">No file chosen</div>
                    </div>
                </div>
                <button id="submitListing" onClick={submit}>Submit</button>
            </div>
        </>
    )
}