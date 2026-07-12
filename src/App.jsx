import './App.css'
import MahjongDomino from "./components/MahjongDomino.jsx";
import {useEffect} from "react";
import Load from "./Load.jsx";
import {useStore} from "./store.js";
import {db, useGameAudio, ysdk} from "./action.js";

function App() {
  const load = useStore((state)=>state.load)
  const currentLevel = useStore((state) => state.currentLevel);
  const music = useStore((state) => state.music);
  const pause = useStore((state) => state.pause);


  const { bgMusic } = useGameAudio();

  useEffect(() => {
      ysdk.setData()
  }, [pause]);

  useEffect(() => {
    if(load){
      if(pause){
        bgMusic.pause()
        console.log("bgMusic.pause",pause)
      }else {
        if (!bgMusic.playing()) bgMusic.play();

      }

    }

  }, [load,bgMusic,pause]);

  useEffect(() => {

  }, [pause,bgMusic]);

  useEffect(()=>{
    const handleVisibilityChange = ()=>{
      if(!pause || load){
        if (document.hidden) {
          // Если вкладка скрыта или браузер свернут
          bgMusic.pause();
          // Можно также приглушить все звуки сразу: Howler.mute(true);
        }else {
          // Если пользователь вернулся на вкладку
          if (!bgMusic.playing()) bgMusic.play();

        }
      }

    }
    document.addEventListener("visibilitychange",handleVisibilityChange)
    document.addEventListener("blur", () => bgMusic.pause());
    document.addEventListener("focus", () => {
        if (!pause || load) {
          if (!bgMusic.playing()) bgMusic.play();
        }else {
          bgMusic.pause()
        }

    });




    return () => {
      document.addEventListener("visibilitychange",handleVisibilityChange)
      document.addEventListener("blur", () => bgMusic.pause());
      document.addEventListener("focus", () => {
        if (!pause || !load) {
          if (!bgMusic.playing()) bgMusic.play();
        }else {
          bgMusic.pause()
        }

      });
    }

  },[bgMusic,pause,load])

  useEffect(() => {
    bgMusic.volume(music)
  }, [music,bgMusic]);




  useEffect(() => {
    db.setLevel(currentLevel);
  }, [currentLevel]);

  useEffect(()=>{
    document.addEventListener("contextmenu", function (event) {
      event.preventDefault();
    });

  },[])
  return<div>
    {!load?<Load/>:<MahjongDomino/>}
  </div>
}

export default App
