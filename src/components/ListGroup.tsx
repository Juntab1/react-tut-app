// import {MouseEvent} from "react";

import { useState } from "react";

// {items: [], heading: string}
interface Props {
  items: string[];
  heading: string;
  // (item string) => void
  onSelectItem: (item: string) => void; //onclick
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook: lets us tap into features of react
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Event handler for clicking an item
  //   const handleClick = (event: MouseEvent) => console.log(event);
  // This is sort of like the forloop
  // items.map(item => <li>{item}</li>)
  // you can't add anything else than what you already have in here
  // beucase react only returns one element, but if you use a div you can
  // ACTUALLY easier to use a fragment though!
  // BUT EVEN BETTER JUST EMPTY ANGLE BRACKETS WORK TOO!
  // There are no for loops in tsx
  // also no if statement only can use html elemetns and {we can render anything}

  // idea behind: {items.length === 0 && <p>None found!</p>}
  // false && 1 == false
  // true && Jun = Jun
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>None found!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
