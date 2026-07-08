import './App.css'
import MahjongDomino from "./components/MahjongDomino.jsx";
import {Suspense, useEffect} from "react";
import Load from "./Load.jsx";
import {useStore} from "./store.js";
function App() {
  const load = useStore((state)=>state.load)
  useEffect(()=>{
    document.addEventListener("contextmenu", function (event) {
      event.preventDefault();
    });
  },[])
  return<div>
    <MahjongDomino/>
    {!load?<Load/>:""}
  </div>
}

export default App
