import './App.css'
import MahjongDomino from "./components/MahjongDomino.jsx";
import {useEffect, useState} from "react";
import Load from "./Load.jsx";
import {useStore} from "./store.js";
import {useGameAudio} from "./action.js";
import {Ysdk} from "./Ysdk.js";
import Database from "./Database.js";
const db = new Database();

function App() {
  const load = useStore((state)=>state.load)
  const ysdkInit = useStore((state) => state.ysdkInstance);
  const music = useStore((state) => state.music);
  const pause = useStore((state) => state.pause);
  const currentLevel = useStore((state) => state.currentLevel);
  const start = useStore((state) => state.start);

  const { bgMusic } = useGameAudio();


  const [lang, setLang] = useState('ru');
  const [error, setError] = useState(null);




  useEffect(() => {
    (async () => {
      try {
        const isYsdk = window.location.href.includes("yandex.ru");
        let ysdkInstance = null;
        let lang = 'ru'; // Дефолтный язык
        let progress = {}; // Дефолтный прогресс

        if (isYsdk) {
          // --- РЕАЛЬНЫЙ SDK (только для Яндекс Игр) ---
          const sdkWrapper = new Ysdk();

          // Инициализация
          ysdkInstance = await sdkWrapper.getInstance();

          // Язык
          lang = await sdkWrapper.getLang();

          // Прогресс игрока
          const player = await ysdkInstance.getPlayer();
          if (player) {
            progress = await player.getData();
            if(progress.level){
              db.setLevel(progress.level)
              db.setScore(progress.score)
            }
          }

          // Сообщаем платформе, что игра готова
          await sdkWrapper.ready();
        } else {
          // --- ЛОКАЛЬНАЯ РАЗРАБОТКА ---
          console.log('[DEV] Запуск в режиме локальной разработки. SDK отключен.');
          // Здесь можно явно подгрузить тестовые данные, если нужно
          // progress = { level: 5, score: 100 };
        }

        // --- ОБЩАЯ ЛОГИКА (одинакова для обоих режимов) ---


        const localSettings = db.getAll() || {};

        setLang(lang);
        useStore.getState().setSettings(localSettings)
        useStore.getState().setYsdkInstance(ysdkInstance)
        useStore.getState().setLoad(true)
        useStore.getState().setProgress(progress)

      } catch (err) {
        console.error('Критическая ошибка инициализации:', err);
        setError(err.message);
      }
    })();
  }, []);


  useEffect(() => {
    
    if(ysdkInit){
        ysdkInit.getPlayer().then((res)=>{
          res.setData({
            score:db.getAll().score,
            level:currentLevel
          },true)
        });
    }

  }, [currentLevel, pause, ysdkInit]);

  useEffect(() => {
    if(start){
      if(pause){
        bgMusic.pause()
      }else {
        if (!bgMusic.playing()) bgMusic.play();

      }

    }

  }, [start,bgMusic,pause]);


  useEffect(()=>{
    const handleVisibilityChange = ()=>{
      if(!pause || start){
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
        if (!pause || start) {
          if (!bgMusic.playing()) bgMusic.play();
        }else {
          bgMusic.pause()
        }

    });




    return () => {
      document.addEventListener("visibilitychange",handleVisibilityChange)
      document.addEventListener("blur", () => bgMusic.pause());
      document.addEventListener("focus", () => {
        if (!pause || !start) {
          if (!bgMusic.playing()) bgMusic.play();
        }else {
          bgMusic.pause()
        }

      });
    }

  },[bgMusic,pause,start])

  useEffect(() => {
    bgMusic.volume(music)
  }, [music,bgMusic]);


  useEffect(()=>{
    document.addEventListener("contextmenu", function (event) {
      event.preventDefault();
    });
    document.querySelectorAll('img').forEach(img => {
      img.addEventListener('contextmenu', function(e) {
        e.preventDefault(); // Блокирует меню
      }, false);
    });
  },[])



  return<div>
    {!load?<Load/>:<MahjongDomino/>}
  </div>
}

export default App
