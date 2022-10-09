import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/72342-welcome.json";

const lottieAnimation = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {},
};

export default function TextForm1(props) {
    const handleUpClick = () => {
        let NewText = text.toUpperCase();
        setText(NewText);
        if (text.length === 0) {
            props.showAlert("Add text to Convert.", "danger", "Ooops!");
        } else {
            props.showAlert("Converted to Uppercase.", "warning", "Woooh!");
        }
    };
    const handleLoClick = () => {
        let NewText = text.toLowerCase();
        setText(NewText);
        if (text.length === 0) {
            props.showAlert("Add text to Convert.", "danger", "Ooops!");
        } else {
            props.showAlert("Converted to Lowercase.", "warning", "Woooh!");
        }
    };
    const handleClearClick = () => {
        let NewText = "";
        setText(NewText);
        if (text.length === 0) {
            props.showAlert("Add text to Clear.", "danger", "Ooops!");
        } else {
            props.showAlert("All Text Cleared.", "warning", "Woooh!");
        }
    };
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        if (text.length === 0) {
            props.showAlert("Add text to Copy.", "danger", "Ooops!");
        } else {
            props.showAlert("All Text Copuied To Clipboard.", "warning", "Woooh!");
        }
    };
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        if (text.length === 0) {
            props.showAlert("Add text to Reamove Extra Spaces.", "danger", "Ooops!");
        } else {
            props.showAlert("All Extra Spaces Cleared.", "warning", "Woooh!");
        }
    };
    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const previewControl = () => {
        let previewNone = document.getElementById("previewPara");
        if (previewNone.classList.contains("previewDisplay")) {
            previewNone.classList.remove("previewDisplay");
            document.getElementById("eye").classList.add("fa-eye");
            document.getElementById("eye").classList.remove("fa-eye-slash");
            props.showAlert("Preview Mode Activated", "warning", "Wooh!");
        } else {
            previewNone.classList.add("previewDisplay");
            document.getElementById("eye").classList.add("fa-eye-slash");
            document.getElementById("eye").classList.remove("fa-eye");
            props.showAlert("Preview Mode Deactivated", "danger", "Ooops!");
        }
    };

    const [text, setText] = useState("");
    let characterCount = text.length;
    let wordCount = text.split(/\s+/).filter((element) => {
        return element.length !== 0;
    }).length;
    let minuteCount =
        Math.round((wordCount * 0.008 + Number.EPSILON) * 100) / 100 + " Minutes";

    return (
        <div className="home">
            <div
                className="container box"
                style={{
                    borderColor:
                        props.mode === "dark" ? "rgba(128, 128, 128, 0.274)" : "white",
                }}
            >
                <div className="bodyArea">
                    <div className="bodyTextBox">
                        <div className="headerCountBox">
                            <div className="headerBox">
                                <p className="headerHeading">words</p>
                                <p className="headerCount">{wordCount}</p>
                            </div>
                            <div className="headerBox">
                                <p className="headerHeading">characters</p>
                                <p className="headerCount">{characterCount}</p>
                            </div>
                            <div className="headerBox">
                                <p className="headerHeading">Read Time</p>
                                <p className="headerCount">{minuteCount}</p>
                            </div>
                        </div>
                        <div>
                            <textarea
                                className="form-control bodyTextArea"
                                value={text}
                                onChange={handleOnChange}
                                style={{
                                    backgroundColor: props.mode === "dark" ? "black" : "white",
                                    color: props.mode === "dark" ? "white" : "black",
                                }}
                                id="myBox"
                                cols="70"
                                rows="10"
                            ></textarea>
                        </div>
                        <div className="bodyBtnBox">
                            <button
                                className="btn mx-2 my-2 myBtn"
                                onClick={handleUpClick}
                                title="Convert to UPPERCASE"
                            >
                                Uppercase
                            </button>
                            <button
                                className="btn myBtn mx-2 my-2"
                                onClick={handleLoClick}
                                title="Convert to lowercase"
                            >
                                Lowercase
                            </button>
                            <button
                                className="btn myBtn mx-2 my-2"
                                onClick={handleExtraSpaces}
                                title="Remove Extra Spaces"
                            >
                                Extra Spaces
                            </button>
                            <button
                                className="btn myBtn mx-2 my-2"
                                onClick={handleClearClick}
                                title="Clear Text"
                            >
                                <i className="fas fa-broom"></i>
                            </button>
                            <button
                                type="button"
                                className="btn myBtn mx-2 my-2"
                                onClick={handleCopy}
                                title="Copy to Clipboard"
                            >
                                <i className="fas fa-copy"></i>
                            </button>
                            {/* preview eye */}
                            <button
                                className="btn btn-danger mx-2 my-2"
                                onClick={previewControl}
                                title="Preview Mode"
                                id="preview"
                            >
                                <i className="fas fa-eye-slash" id="eye"></i>
                            </button>
                        </div>
                    </div>
                    <div className="welcomeBox">
                        <div className="welcomeText">
                            <h2>
                                Welcome To Convert<span style={{ color: "red" }}>Txt</span>
                            </h2>
                        </div>
                        <p className="headingTxt">
                            You can paste your text here and convert it into <b>UPPERCASE</b>,{" "}
                            <b>lowercase</b>, <b>remove extra spaces</b> and much more.
                        </p>
                        <div id="lottie" className="lottie">
                            <Lottie options={lottieAnimation} height={250} width={330} className="lottieSize"/>
                        </div>
                    </div>
                </div>
                <div id="previewPara" className="previewDisplay previewText mt-4">
                    <p>{characterCount > 0 ? text : "No preview available"}</p>
                </div>
            </div>
        </div>
    );
}
