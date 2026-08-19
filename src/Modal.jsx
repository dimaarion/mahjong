import {useStore} from "./store.js";
import {getSize, useGameEffectAudio} from "./action.js";
import {useEffect} from "react";
import Database from "./Database.js";
import {BannerFrame, SettingsBackgroundGroup} from "./Objects.jsx";
export default function Modal({
                                  startGame,
                                  score = 0,
                                  combo,
                                  size
                              }) {
    const currentLevel = useStore((state) => state.currentLevel);
    const effect = useStore((state) => state.effect);
    const victoryEffect = useGameEffectAudio("./audio/game-won.mp3",effect);
    const db = new Database()
    useEffect(() => {
        useStore.getState().setPause(true)
    }, []);

    useEffect(() => {
        victoryEffect.play()
    }, [victoryEffect]);

        return<g>
            <rect opacity={0.9} fill={"black"} width={"100%"} height={"100%"} />
            <g transform={`translate(${getSize(size,620,230)} ${200})`}>
                <g transform={"translate(0 0)"}>
                    <SettingsBackgroundGroup />
                    <g transform={" translate(0 45)"}>
                        <text x={80} y={200} fill={"#e8a816"}  fontSize={40}> Общий счет: {db.getAll().score + score}</text>
                        <text x={80} y={280} fill={"#e8a816"}  fontSize={40}> Счет за уровень: {score}</text>
                        <text x={80} y={360} fill={"#e8a816"}  fontSize={40}> Комбо: x{combo}</text>
                    </g>
                    <text x={220} y={100} fontSize={50} fill={"url(#gradient_title)"} > Победа</text>
                    <g onPointerDown={()=>{
                        useStore.getState().setCurrentLevel(currentLevel)
                        useStore.getState().setPause(false)
                        db.setLevel(currentLevel)
                        startGame()
                    }} transform={"scale(0.5) translate(235 950)"}>
                        <BannerFrame fillColor={"#AD020F"} tx={100} fontSize={50} text={"Заново"}/>
                    </g>
                    <g onPointerDown={()=>{
                        useStore.getState().setCurrentLevel(currentLevel + 1)
                        startGame()
                        db.setScore(db.getAll().score + score)
                        db.setLevel(currentLevel + 1)
                        useStore.getState().setPause(false)
                    }} transform={"scale(0.5) translate(650 950)"}>
                        <BannerFrame fillColor={"#A10283"} fontSize={50} tx={30} text={"Продолжить"}/>
                    </g>
                </g>
            </g>
        </g>




}