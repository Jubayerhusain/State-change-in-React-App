import { useState } from "react";
export default function Counter() {
  // distructuring with useState Change [variableName, SetCountFunction] = useState[InitialValue]
  const [count, setCount] = useState(0);
  function AddCount() {
    const newCount = count + 1;
    return setCount(newCount);
  }
  function ReduceCount() {
    const newCount = count - 1;
    return setCount(newCount);
  }
  return (
    <div className="counter-box">
      <h2>Counter: {count}</h2>
      <button onClick={AddCount}>Add</button>
      <button onClick={ReduceCount}>Reduce</button>
    </div>
  );
}
