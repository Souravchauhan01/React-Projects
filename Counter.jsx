import { useState } from "react";

const Counter = () => {
  const [value,setvalue] = useState(0)
  const increment = () => setvalue(value+1)
  const decrement = () => setvalue(value-1)
  const clear = () => setvalue(0)
  return (
    <>
      <h1 className="value">{value}</h1>
      <div className="btn-container">
        <button className="increment" onClick={increment}>+</button>
        <button className="increment" onClick={decrement}>-</button>
        <button className="increment" onClick={clear}>Clear</button>
      </div>
    </>
  );
}

export default Counter;
