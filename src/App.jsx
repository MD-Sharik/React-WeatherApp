import { useState } from "react";
import { SignUpThree } from "./assets/components/Card";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SignUpThree />
    </>
  );
}

export default App;
