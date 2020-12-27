import React, { useState } from "react";
// import Accordian from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
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
  // const [selected, setSelected] = useState(options[0]);

  return (
    <div className="ui container segment">
      {/* <Accordian items={items} /> */}
      {/* <Search /> */}
      {/*      
     
        <Dropdown
           label="Select a color"
          onSelectedChange={setSelected}
          selected={selected}
          options={options}
        />
       */}
      <Translate />
    </div>
  );
};

export default App;
