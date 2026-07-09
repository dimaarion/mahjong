import Music from "./sound/Music.jsx";
import {useStore} from "./store.js";
import {db} from "./action.js";
export default function Settings() {
    const m = useStore((state) => state.music);
    const ef = useStore((state) => state.effect);
    function musicChange(e){
        useStore.getState().setMusic(e.target.value);
        db.setMusic(e.target.value);
    }

    function effectChange(e){
        useStore.getState().setEffect(e.target.value);
        db.setEffect(e.target.value);
    }

    return <div className={"settings"}>
                <div className={"modal-bg"}/>
                <div className={"settings-body"}>
                    <img src={"./img/modal.png"} />
                    <h2 className={"modal-title text-family"}>Настройки</h2>
                    <div className={"content total-score"}>
                       <div className={"text-family"}>
                         <div>Общее количество очков</div>
                           <div>{db.getAll().score}</div>
                       </div>
                    </div>
                    <div className={"content sound"}>
                        <h3 className={"text-family title-sound"}>Звук и музыка</h3>
                        <Music content={"Музыка"} icon={"music"} setSound={musicChange} sound={m} />
                        <Music content={"Звуковые эффекты"} icon={"sound"} setSound={effectChange} sound={ef} />
                    </div>
                    <div onPointerDown={()=>{
                        useStore.getState().setSettingsOpen(false)
                        useStore.getState().setPause(false)
                    }} className={"settings-close"}>
                        <div className={"modal-btn-text"}>Закрыть</div>
                        <img width={"100%"} height={"100%"} src={"./img/btn-bg.png"} />
                    </div>
                </div>
    </div>
}