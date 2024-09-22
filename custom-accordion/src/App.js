import "./App.css";
import Accordion from "./components/Accordion";
import { useState } from "react";
const data = [
  {
    title: "Accordion1",
    description: "Accordion description 1",
  },
  {
    title: "Accordion2",
    description: "Accordion description 2",
  },
  {
    title: "Accordion3",
    description: "Accordion description 3",
  },
];
function App() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <>
      <h1>Custom accordion</h1>
      {data.map((item, index) => {
        return (
          <Accordion
            key={item.title}
            title={item.title}
            description={item.description}
            isOpen={index === openIndex}
            handleClick={() => {
              if (index === openIndex) {
                setOpenIndex(null);
              } else {
                setOpenIndex(index);
              }
            }}
          />
        );
      })}
    </>
  );
}

export default App;
