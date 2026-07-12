import {useStore} from "./store.js";

import {db, useGameEffectAudio, ysdk} from "./action.js";
import {useEffect} from "react";
export default function Modal({
                                  startGame,
                                  score = 0,
                                  combo
                              }) {
    const currentLevel = useStore((state) => state.currentLevel);
    const effect = useStore((state) => state.effect);
    const victoryEffect = useGameEffectAudio("./audio/game-won.mp3",effect);
    useEffect(() => {
        useStore.getState().setPause(true)
    }, []);

    useEffect(() => {
        victoryEffect.play()
    }, [victoryEffect]);

    return (
        <div className={"modal"}>
           <div className={"modal-bg"}/>
                <div className={"modal-content"}>
                    <div className={"modal-content-item"}>
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
                                    useStore.getState().setPause(false)
                                    startGame()
                                }} className={"modal-btn"}>
                                    <img src={"./img/btn-bg.png"} />
                                    <div className={"modal-btn-text"}>Заново</div>
                                </div>
                                <div onPointerDown={()=>{
                                    useStore.getState().setCurrentLevel(currentLevel + 1)
                                    startGame()
                                    db.setScore(score)
                                    useStore.getState().setPause(false)
                                    }} className={"modal-btn"}>
                                    <img src={"./img/btn-bg.png"} />
                                    <div className={"modal-btn-text"}>Продолжить</div>
                                </div>
                            </div>
                        </div>
                        <img src={"./img/modal.png"}/>
                    </div>
                </div>
        </div>
    )
}