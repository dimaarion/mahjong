import Music from "./sound/Music.jsx";
import {useStore} from "./store.js";
import { useGameEffectAudio} from "./action.js";
import Database from "./Database.js";
import {BannerFrame, SettingsBackgroundGroup, SettingsMusicSlider} from "./Objects.jsx";

export default function Settings({width = 0, height = 0, ratio = 0, r = true}) {
    const m = useStore((state) => state.music);
    const ef = useStore((state) => state.effect);
    const sharpEffect = useGameEffectAudio("./audio/a-sharp-swish-of-cloth.mp3",ef);
    const db = new Database()
    const ysdkInit = useStore((state) => state.ysdkInstance);
    function musicChange(e){
        useStore.getState().setMusic(e);
        db.setMusic(e);
    }

    function effectChange(e){
        useStore.getState().setEffect(e);
        db.setEffect(e);
    }


if(r){
    return<g>
        <rect opacity={0.9} fill={"black"} width={"100%"} height={"100%"} />
        <g width={350} height={250} transform={`translate(${width / ratio / 2} ${height / ratio / 2})`}>
            <g transform={`translate(-175 -125)`}>
                <g transform={"scale(0.4) translate(120 0)"}>
                    <SettingsBackgroundGroup />
                </g>

                <text x={125}   y={40} width={"350"} height={"auto"} fontSize={20} fill={"url(#gradient_title)"} filter={"url(#filter_title_2)"}>Настройки</text>
                <g transform={`translate(36 40)`}  >
                    <g transform={`translate(0 0)`}>
                        <text x={45} y={20} fill={"url(#gradient_title)"} fontSize={15}>Общее количество очков</text>
                        <text x={138 - (db.getAll().score.toString().length * 2)} y={38} fill={"url(#gradient_title)"} fontSize={15}>{db.getAll().score}</text>
                    </g>

                    <g transform={`translate(0 50)`}>
                        <g transform={`translate(25 0)`}>
                            <SettingsMusicSlider type={"music"} thumbColor={"#00965F"} fillColor={"#00965F"} trackColor={"#000"} value={m} width={220} onChange={musicChange} defaultValue={0.5} min={0} max={1} label={"Музыка"} step={0.01} disabled={false} />
                        </g>

                        <g transform={`translate(25 50)`}>
                            <SettingsMusicSlider type={"effect"} thumbColor={"#00965F"} fillColor={"#00965F"} trackColor={"#000"} value={ef} width={220} onChange={effectChange} defaultValue={0.5} min={0} max={1} label={"Музыка"} step={0.01} disabled={false} />
                        </g>

                    </g>

                </g>


                <g onPointerDown={()=>{
                    useStore.getState().setSettingsOpen(false)
                    useStore.getState().setPause(false)
                    if(ysdkInit){
                        ysdkInit.features.GameplayAPI?.start()
                    }
                    sharpEffect.play()
                }}>
                <g transform={"scale(0.3) translate(390 620)"}>
                    <BannerFrame fillColor={"#AD020F"} tx={50} text={"Закрыть"}/>
                </g>

                </g>


            </g>

        </g>
    </g>

}else {

    return <div className={"settings"}>
                <div className={"modal-bg"}/>
                <div className={"settings-body"}>
                    <div className={"settings-body-item"}>
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
                              if(ysdkInit){
                                  ysdkInit.features.GameplayAPI?.start()
                              }
                                sharpEffect.play()
                                }} className={"settings-close"}>
                                <div className={"modal-btn-text"}>Закрыть</div>
                                <img width={"100%"} height={"100%"} src={"./img/btn-bg.png"} />
                            </div>
                    </div>
                </div>
            </div>
}
}