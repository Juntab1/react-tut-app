// import ListGroup from "./components/ListGroup";
// the "." tells us the current folder
import { useState } from "react";

import Alert from "./components/Alert";
import Buttons from "./components/Buttons";

// import Alert from "./components/Alert";

function App() {
  // let items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  const [alertShown, updateAlertStatus] = useState(false);

  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      {/* <Alert>
        Hello <span>World</span>
      </Alert>  */}
      {alertShown && <Alert onClose={() => updateAlertStatus(false)}/>}
      <Buttons onClick={() => updateAlertStatus(true)}>My Button</Buttons>
    </div>
  );
}

// export it so it can be used somewhere else
export default App;
