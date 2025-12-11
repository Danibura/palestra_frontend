import { useState } from "react";
import "./App.css";
import delta from "./assets/delta.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="flex flex-wrap items-center w-full justify-between">
        <img src={delta} alt="delta" className="w-34" />
        <div className="material-icons-round scale-150">person</div>
      </div>
    </div>
  );
}

export default App;
