import { useState } from "react";

function TextForm(props) {
    const [text, setText] = useState("")

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleUpperCase = () => {
        let UpperCaseText = text.toUpperCase();
        setText(UpperCaseText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLowerCase = () => {
        let lowerCaseText = text.toLowerCase();
        setText(lowerCaseText);
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleClearText = () => {
        setText("");
        props.showAlert("Text is Cleared", "success");

    }

    const handleSpace = () => {
        let newText = text.replace(/ +/g, " ").trim();
        setText(newText);
        props.showAlert("Removed the extra spaces", "success");

    }

    const handleCopyText = () => {
        var copyText = document.getElementById("myText");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Copied text", "success");

    }

    return (
        <>
            <div>
                <h2 style={{color: props.mode==="dark"?"white":"black"}}>{props.heading}</h2>
                <div className="mb-3" >
                    <textarea className="form-control" value={text} style={{color: props.mode==="dark"?"white":"black", backgroundColor: props.mode==="dark"?"#555b60":"white"}} onChange={handleOnChange} id="myText" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpperCase}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowerCase}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={handleSpace}>Remove Extra Space</button>
                <button className="btn btn-danger mx-1" onClick={handleClearText}>Clear Text</button>
                <button className="btn btn-success mx-1" onClick={handleCopyText}>Copy Text</button>


            </div>
            <div className="my-5" style={{color: props.mode==="dark"?"white":"black"}}>
                <h3>Text Summary</h3>
                <p><b>{text.length === 0 ? 0 : text.trim().split(" ").length} words</b> and <b>{text.length} characters</b></p>
                <p>Reading time <b>{text.length === 0 ? 0 : 0.005 * text.trim().split(" ").length} mins</b></p>
                <h3>Preview</h3>
                <div style={{border: props.mode === "dark"? "1px solid white": "1px solid grey", padding: "6px", borderRadius: "4px", background: props.mode === "light"? "lightgrey": "#333333"}}>
                    <p >{text.length === 0 ? "Enter some text to preview" : text}</p>
                </div>
            </div>
        </>
    );
}

export default TextForm;
