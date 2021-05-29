import "./App.css";
import Sort from "./Sort";
import Filter from "./Filter";
import { useState } from "react";

const options = [
  { value: 0, arr: [3, 2, 1], text: "Size 3" },
  { value: 1, arr: [4, 3, 2, 1], text: "Size 4" },
  { value: 2, arr: [5, 4, 3, 2, 1], text: "Size 5" },
  { value: 3, arr: [6, 5, 4, 3, 2, 1], text: "Size 6" },
  { value: 4, arr: [7, 6, 5, 4, 3, 2, 1], text: "Size 7" },
  { value: 5, arr: [8, 7, 6, 5, 4, 3, 2, 1], text: "Size 8" },
];

function App() {
  const [arr, setArr] = useState([
    { value: 0, arr: [3, 2, 1], text: "Size 3" },
  ]);
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="App">
      <Filter
        position="right"
        label="SELECT SIZE"
        options={options}
        setFilterBy={setArr}
        disabled={disabled}
      />
      <Sort array={arr[0].arr} setDisabled={setDisabled} />
    </div>
  );
}

export default App;
