"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import classes from "./ImagePicker.module.css";

export default function ImagePicker({ label, name }) {
    const input = useRef();
    const [choseImage, setChoseImage] = useState();

    function handleBtnClick() {
        input.current.click();
    }

    function handleImageChange(event) {
        const file = event.target.files[0];

        if(!file) {
            setChoseImage(null);
            return;
        }

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setChoseImage(fileReader.result);
        }
        fileReader.readAsDataURL(file);
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!choseImage && <p>No image picked yet</p>}
                    {choseImage && <Image src={choseImage} alt="The image selected by the user" fill />}
                </div>
                <input
                    type="file"
                    accept="image/png, image/jpeg"
                    id={name}
                    className={classes.input}
                    name={name}
                    ref={input}
                    onChange={handleImageChange}
                    required
                />
                <button
                    type="button"
                    className={classes.button}
                    onClick={handleBtnClick}
                >
                    Choose an image
                </button>
            </div>
        </div>
    );
}
