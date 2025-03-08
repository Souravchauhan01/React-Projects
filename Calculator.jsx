import { useState } from "react";

function Calculator(){
  const [ inputvalue,setinputvalue] = useState("")
  const display = (val) => {
    setinputvalue(inputvalue + val)
  }
  const Result = () => {
    const res = eval(inputvalue)
    setinputvalue(res)
  }
  const clear = () => {
    setinputvalue("");
  }

  //toggle button
  
  
  return<>
   <form action="calc" className="calculator">
    <input type="text" value={inputvalue} className="value" />
    <span className="clear" onClick={clear}>C</span>
    <span onClick={() => display("/")}>/</span>
    <span onClick={() => display("*")}>*</span>
    <span onClick={() => display("-")}>-</span>
    <span onClick={() => display("7")}>7</span>
    <span onClick={() => display("8")}>8</span>
    <span onClick={() => display("9")}>9</span>
    <span onClick={() => display("+")} className="plus">+</span>
    <span onClick={() => display("4")}>4</span>
    <span onClick={() => display("5")}>5</span>
    <span onClick={() => display("6")}>6</span>
    <span onClick={() => display(".")}>.</span>
    <span onClick={() => display("1")}>1</span>
    <span onClick={() => display("2")}>2</span>
    <span onClick={() => display("3")}>3</span>
    <span onClick={() => display("00")}>00</span>
    <span onClick={() => display("0")}>0</span>
    <span onClick={() => Result()} className="equal">=</span>
  </form>

  
  </>
}
export default Calculator;