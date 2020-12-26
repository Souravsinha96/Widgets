import React, { useState } from "react";
// import Accordian from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: "What is react",
    content: "React is a frontend javascript framework",
  },
  {
    title: "Why use react",
    content: "React is a favourite JS library among engineers",
  },
  {
    title: "How do you use react",
    content: "You use React by creating components ",
  },
];

const options = [
  {
    label: "The colour Red",
    value: "red",
  },
  {
    label: "The colour Green",
    value: "green",
  },
  {
    label: "A shade of blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className="ui container segment">
      {/* <Accordian items={items} /> */}
      {/* <Search /> */}
      <button
        className="ui button"
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        Toggle
      </button>
      {showDropdown && (
        <Dropdown
          onSelectedChange={setSelected}
          selected={selected}
          options={options}
        />
      )}
    </div>
  );
};

export default App;
