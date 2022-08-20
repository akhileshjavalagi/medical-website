
import './App.css'
import AllRoutes from './components/AllRoutes'
import { GameStateContext } from "./Context/Context";
import React, {useState} from "react";
function App() {

  const [details, setDetails] = useState([]);
  const [image, setImage] = useState([]);
  
  return (
    <div className="App">
      <GameStateContext.Provider
        value={{details, setDetails, image, setImage}}>
      <AllRoutes/>
      </GameStateContext.Provider>
    </div>
  )
}

export default App
