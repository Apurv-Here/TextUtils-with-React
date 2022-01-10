import PropTypes from 'prop-types';
import React, { useState } from 'react';


export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    
    // Used for taking input from user in forms
    const handleOnChange = (event)=>{
        // console.log("Handling change");
        setText(event.target.value);
    }
    
    const [text, setText] = useState('Enter your text here');

  return (
    <div>
      <h2>{props.heading}</h2>

      

      <div className="form-group border border-secondary">
          {/* Using textarea to get input from user  */}
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  );
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}