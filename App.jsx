import { useState } from "react"
import "./style.css"

function App() {
  
  const [username,setusername] = useState("")
    const [bgcoloruser,setbgcoloruser] = useState("")
    const [erroruser,seterroruser] = useState("")

    const [password, setpassword] = useState("")
    const [bgcolorpass,setbgcolorpass] = useState("")
    const [errorpass, seterrorpass] = useState("")

    const handlesubmit = (e) => {
      e.preventDefault();

      if(username.length > 8 ){
        setbgcoloruser("green")
      }
      else {
        setbgcoloruser("red")
        seterroruser("Username must be 8 character long.")
      }

      if(password.length > 8 ){
        setbgcolorpass("green")
      }
      else {
        setbgcolorpass("red")
        seterrorpass("Password must be 8 character long.")
      }

    }
  return (
    
    <>
    <div className="container">
      <form action="">
        <input type="text" placeholder="Your username" className="input" value={username} 
        onChange={(e) => setusername(e.target.value)}
        style={{borderColor: bgcoloruser}}/>
        <p className="p">{erroruser}</p>

        <br />


        <input type="text" placeholder="your password" value={password} className="input"
         onChange={(e) => setpassword(e.target.value)}
         style={{borderColor: bgcolorpass}}/>
         <p className="p">{errorpass}</p>

         <br />


        <button onClick={handlesubmit}>Submit</button>
      </form>
    </div>
     
    </>
  )
}

export default App
