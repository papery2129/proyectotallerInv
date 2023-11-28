import formulario from "./formulario"
import { Home } from "./home"
import { useState } from "react"
import "./App.css"

function App() {

  const [user, setUser] = useState([])


  return (
    <>
      <div className="App">
        {
          user.length > 0
            ? <formulario setUser={setUser}></formulario>
            :<Home user={user} setUser={setUser}></Home>
        }
        
      </div>
    </>
  )
}

export default App;
