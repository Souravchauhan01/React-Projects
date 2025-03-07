import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Hiddensearch = () => {
  const [bgcolor,setbgcolor] = useState("white")
  const [showinput,setshowinput] = useState(false)
  const handlesubmit = (e) => {
    setbgcolor("#1a1a1a")
    if(e.target.className === "container"){
      setshowinput(false);
      setbgcolor("#fff")
    }
  }
  return (
    <>
    <section className="container" style={{backgroundColor: bgcolor}} onClick={handlesubmit}>
      {showinput ? (
        <input type="text" placeholder="Search..." />
      ): (
         <FaSearch onClick={() => setshowinput(true)}/>
      )}
    </section>
      
    </>
  );
}

export default Hiddensearch;
