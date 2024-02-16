import React, { useState } from 'react';

export default function Textform(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        setText(text.toUpperCase());
    }

    const handleloClick = () => {
        setText(text.toLowerCase());
    }

    const handleClearClick = () => {
        setText("");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const copyText = () => {
        const textToCopy = document.getElementById("MyBox");
        textToCopy.select();
        document.execCommand("copy");
    }

    const pasteText = () => {
        navigator.clipboard.readText()
        .then(text => {
            setText(text);
        })
        .catch(err =>{
            console.error('Unable to paste text: ', err);
        });
    }

    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="container mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox" rows="5"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1 " onClick={handleloClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={pasteText}>Paste Text</button>
        </div>
        <div className= "container my-3">
            <h3>Your Text Summary</h3>
            <table className="table table-bordered">
            <thead>
                <tr>
                <th scope="col">Words</th>
                <th scope="col">Characters</th>
                <th scope="col">Sentences</th>
                <th scope="col">Minutes Read</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{text.split(" ").filter(word => word !== "").length}</td>
                <td>{text.length}</td>
                <td>{text.split(".").length - 1}</td>
                <td>{0.008 * text.split(" ").length }</td>
                </tr>
            </tbody>
            </table>
        </div>

        </>
    )
}
