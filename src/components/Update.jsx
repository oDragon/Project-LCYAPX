import React from 'react';
import NavBar from './NavBar';

export default function Update() {

    const params = new URLSearchParams(window.location.hash.split('?')[1]);
    const schoolNameKey = params.get('key');
    let schoolValue = localStorage.getItem(schoolNameKey).split("[{||}]");

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

        if (schoolImg.files && schoolImg.files.length > 0) {
            const fr = new FileReader();
            fr.readAsDataURL(schoolImg.files[0]);
            fr.addEventListener('load', () => {
                localStorage.removeItem(schoolNameKey);
                localStorage.setItem(schoolName.value, schoolName.value + "[{||}]" + schoolDesc.value + "[{||}]" + fr.result);
            })
        } else {
            localStorage.removeItem(schoolNameKey);
            localStorage.setItem(schoolName.value, schoolName.value + "[{||}]" + schoolDesc.value + "[{||}]" + schoolValue[2]);
        }
        setTimeout(() => {}, 1000);

        window.location.href = "/";
    }

    return (
        <>
            <NavBar />
            <div className="home-body">
                <a href="/">{"< back to listings"}</a>
                <div id="createTitle">Update a listing</div>
                <div id="nameContainer">
                    <div id="nameSubtitle">Name</div>
                    <input id="nameInput" defaultValue={schoolValue[0]}></input>
                </div>
                <div id="aboutContainer">
                    <div id="aboutSubtitle">About</div>
                    <textarea id="descInput" defaultValue={schoolValue[1]}></textarea>
                </div>
                <div id="curImageContainer">
                    <div id="curImageSubtitle">Current Image</div>
                    <img id="listingImg" src={schoolValue[2]}></img>
                </div>
                <div id="imageContainer">
                    <div id="imageSubtitle"> New Image</div>
                    <input id="imgInput" type="file" accept="image/jpg, image/jpeg, image/png" hidden="hidden"/>
                    <div id="chooseFileContainer">
                        <button onClick={clickHiddenButton} id="myChooseFileButton">Choose File</button>
                        <div id="myChooseFileText">No file chosen</div>
                    </div>
                </div>
                <button id="submitListing" onClick={submit}>Update</button>
            </div>
        </>
    )
}