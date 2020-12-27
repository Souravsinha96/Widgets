import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Dutch",
    value: "nl",
  },
  {
    label: "French",
    value: "fr",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Italian",
    value: "it",
  },
  {
    label: "Spanish",
    value: "es",
  },
  {
    label: "Swedish",
    value: "sv",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label className="label">Enter text</label>
          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
      </div>

      <Dropdown
        label="Select a langauge"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />

      <h3 className="ui header">Output</h3>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
