import React from "react";
import Accordian from "./components/Accordion";

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
const App = () => {
  return (
    <div>
      <br />
      <Accordian items={items} />
    </div>
  );
};

export default App;
