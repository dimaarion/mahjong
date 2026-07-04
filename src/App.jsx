import './App.css'
import MahjongDomino from "./components/MahjongDomino.jsx";
import {useEffect} from "react";
function App() {
  useEffect(()=>{
    document.addEventListener("contextmenu", function (event) {
      event.preventDefault();
    });
  },[])
  return <MahjongDomino/>
}

export default App
