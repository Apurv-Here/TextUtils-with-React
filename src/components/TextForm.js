import PropTypes from "prop-types";
import React, { useState } from "react";

export default function TextForm(props) {

  // Function to change in uppercase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  // Function to change in lowercase
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  // Function to clear the text box
  const clearOnClick = () => {
    let newText = '';
    setText(newText);
  };

  // Function to remove extra spaces 
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  // Used for taking input from user in forms
  const handleOnChange = (event) => {
    // console.log("Handling change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div>
        <div className="container my-3 " style={{color: props.mode==='dark'?'white':'black'}}>
          {/* Using textarea to get input from user  */}
          <h1 className="font-weight-bold">{props.heading}</h1>
          <textarea
            className="form-control form-group border border-secondary my-3"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
            // If dark mode is enable then color will be grey in text box
            style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>

        {/* Various buttons for differnent functions */}
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-3" onClick={clearOnClick}>
          Clear the text
        </button>
      </div>

      <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
        <h3 className="font-weight-bold">Your Text Summary</h3>
        <p>
          <strong>{text.length>0?text.split(" ").length:"0"}</strong> words and{" "}
          <strong>{text.length}</strong> characters
        </p>
        <p>
          This paragraph takes <strong>{text.length>0? 0.008 * text.split(" ").length : "0"}</strong>{" "}
          minutes to read
        </p>

        <h3 className="font-weight-bold my-6">Preview</h3>
        <p>{text.length>0?text:"Enter something in the above textbox to preview it."}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
