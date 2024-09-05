import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [vowel, setVowel] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    if (text == "") {
      props.showAlert("There is no text to convert", "danger");
    } else {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to UpperCase", "success");
    }
  };
  const handleLoClick = (event) => {
    if (text == "") {
      props.showAlert("There is no text to convert", "danger");
    } else {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to LowerCase", "success");
    }
  };
  const handleClearClick = (event) => {
    if (text == "") {
      props.showAlert("There is no text to be cleared", "danger");
    } else {
      let newText = "";
      setText(newText);
      props.showAlert("Text Cleared", "success");
    }
  };

  let wordCount = text.split(/\s+/).filter((element)=>{return element.length!==0 }).length;

  let sentenceCount = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] == ".") {
      sentenceCount++;
    }
  }

  let totalVowelCount = 0;
  for (let i = 0; i < text.length; i++) {
    if (
      text[i] == "a" ||
      text[i] == "e" ||
      text[i] == "i" ||
      text[i] == "o" ||
      text[i] == "u"
    ) {
      totalVowelCount++;
    }
  }

  // let text = 'enter text here';

  let highWords = "";
  const highestVowelWord = (event) => {
    props.showAlert("Word with most vowel found", "success");

    let words = text.split(" ");

    // let wordCount = text.split(' ').length;

    let vowelCountPerWord = [];

    let vowelCount = 0;
    // console.log(words);
    // console.log(wordCount);

    for (let i = 0; i < wordCount; i++) {
      for (let j = 0; j < words[i].length; j++) {
        if (
          words[i][j] == "a" ||
          words[i][j] == "e" ||
          words[i][j] == "i" ||
          words[i][j] == "o" ||
          words[i][j] == "u"
        ) {
          vowelCount++;
          // console.log(vowelCount);
        }
      }
      vowelCountPerWord.push(vowelCount);
      vowelCount = 0;
    }

    // console.log(vowelCountPerWord);

    let maxVowelCount = Math.max(...vowelCountPerWord);

    for (let i = 0; i < vowelCountPerWord.length; i++) {
      if (vowelCountPerWord[i] == maxVowelCount) {
        console.log(words[i]);
        highWords += words[i];
      }
    }
    setVowel(highWords);
  };
  return (
    <>
    <br/>
      <div
        className="container"
        style={{ color: `${props.mode === "light" ? "black" : "white"}` }}
      >
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h2>Enter the text to analyze:</h2>
          </label>
          <textarea
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="exampleFormControlTextarea1"
            rows="10"
            style={{
              backgroundColor: props.mode==='blue'?'#89CFF0':props.mode==='green'?'#90EE90': props.mode==='red'?'#D22730': props.mode==='yellow'?'#cfcf4e': props.mode==='light'?'white':props.mode==='dark'?'gray':'gray',
              color: `${props.mode === "light" ? "black" : "white"}`
            }}
          ></textarea>
        </div>
        <button
          className={`btn mx-1 text-light`}
          onClick={handleUpClick}
          style={{
            backgroundColor: props.mode==='blue'?'#89CFF0':props.mode==='green'?'#90EE90': props.mode==='red'?'#D22730': props.mode==='yellow'?'#cfcf4e': props.mode==='light'?'gray':props.mode==='dark'?'gray':'gray'
          }}
          >
          Convert to UpperCase{" "}
        </button>
        <button
          className="btn mx-1 text-light"
          onClick={handleLoClick}
          style={{
            backgroundColor: props.mode==='blue'?'#89CFF0':props.mode==='green'?'#90EE90': props.mode==='red'?'#D22730': props.mode==='yellow'?'#cfcf4e': props.mode==='light'?'gray':props.mode==='dark'?'gray':'gray'
          }}
          >
          Convert to LowerCase{" "}
        </button>
        <button
          className="btn mx-1 text-light"
          onClick={highestVowelWord}
          style={{
            backgroundColor: props.mode==='blue'?'#89CFF0':props.mode==='green'?'#90EE90': props.mode==='red'?'#D22730': props.mode==='yellow'?'#cfcf4e': props.mode==='light'?'gray':props.mode==='dark'?'gray':'gray'
          }}
          >
          Word with most vowels{" "}
        </button>
        <button
          className="btn mx-1 text-light"
          onClick={handleClearClick}
          style={{
            backgroundColor: props.mode==='blue'?'#89CFF0':props.mode==='green'?'#90EE90': props.mode==='red'?'#D22730': props.mode==='yellow'?'#cfcf4e': props.mode==='light'?'gray':props.mode==='dark'?'gray':'gray'
          }}
          >
          Clear Text{" "}
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: `${props.mode === "light" ? "black" : "white"}` }}
      >
        <h2>Your Text Summary: </h2>
        <p>Word Count: {wordCount} words</p>
        <p>Character Count: {text.length} characters</p>
        <p>Sentence Count: {sentenceCount} sentence</p>
        <p>Vowel Count: {totalVowelCount} vowels</p>
        <p>Word with most vowels: {vowel.length > 0 ? vowel: "Click the button of Word with most vowel"}</p>
        <h2>Preview: </h2>
        <p>
          {text.length > 0
            ? text
            : "Enter some text in the above textbox to preview it here."}
        </p>
      </div>
    </>
  );
}
