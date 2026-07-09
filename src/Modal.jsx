import Database from "./Database.js";
import {useStore} from "./store.js";

import {db} from "./action.js";
export default function Modal({
                                  startGame,
                                  score = 0,
                                  combo
                              }) {
    const currentLevel = useStore((state) => state.currentLevel);
    return (
        <div className={"modal"}>
           <div className={"modal-bg"}/>
            <div className={"modal-content"}>
                <div className={"modal-title text-family"}>
                    Победа
                </div>
                <div className={"modal-body"}>
                    <div className={"text-family modal-body-text"}>
                        Общий счет: {db.getAll().score + score}
                    </div>
                    <div className={"text-family modal-body-text"}>
                        Счет за уровень: {score}
                    </div>
                    <div className={"text-family modal-body-text"}>
                        Комбо: x{combo}
                    </div>
                    <div className={"modal-footer"}>
                        <div onPointerDown={()=>{
                            useStore.getState().setCurrentLevel(currentLevel)
                            startGame()
                        }} className={"modal-btn"}>
                            <img src={"./img/btn-bg.png"} />
                            <div className={"modal-btn-text"}>Заново</div>
                        </div>
                        <div onPointerDown={()=>{
                          useStore.getState().setCurrentLevel(currentLevel + 1)
                            startGame()
                            db.setScore(score)
                        }} className={"modal-btn"}>
                            <img src={"./img/btn-bg.png"} />
                            <div className={"modal-btn-text"}>Продолжить</div>
                        </div>
                    </div>
                </div>
                <img src={"./img/modal.png"}/>
            </div>
        </div>
    )
}