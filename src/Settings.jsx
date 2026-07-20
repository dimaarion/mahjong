import Music from "./sound/Music.jsx";
import {useStore} from "./store.js";
import { useGameEffectAudio} from "./action.js";
import Database from "./Database.js";
import {SettingsMusicSlider} from "./Objects.jsx";

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
        useStore.getState().setEffect(e.target.value);
        db.setEffect(e.target.value);
    }


if(r){
    return<g>
        <rect opacity={0.9} fill={"black"} width={"100%"} height={"100%"} />
        <g width={350} height={250} transform={`translate(${width / ratio / 2} ${height / ratio / 2})`}>
            <g transform={`translate(-175 -125)`}>
                <image href={"./img/modal.png"} width={"350"} height={250}  />
                <text x={125}   y={40} width={"350"} height={"auto"} fontSize={20} fill={"url(#gradient_title)"} filter={"url(#filter_title_2)"}>Настройки</text>
                <g transform={`translate(36 50)`}  >
                    <rect filter="url(#filter_settings_1)" width={280} height={50} rx={10} />
                    <text x={79} y={20} fill={"url(#gradient_title)"} fontSize={10}>Общее количество очков</text>
                    <text x={138 - (db.getAll().score.toString().length * 2)} y={38} fill={"url(#gradient_title)"} fontSize={10}>{db.getAll().score}</text>
                    <rect y={60} filter="url(#filter_settings_1)" width={280} height={90} rx={10} />
                    <g transform={`translate(0 70)`}>
                        <g transform={`translate(25 0)`}>
                            <SettingsMusicSlider value={m} width={250} onChange={musicChange} defaultValue={0.5} min={0} max={1} label={"Музыка"} step={0.01} disabled={false} />
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
                    <image x={125} y={195} href={"./img/btn-bg.png"} width={"100"} height={50} />
                    <text x={153}   y={223} width={"350"} height={"auto"} fontSize={12} fill={"white"} filter={"url(#filter_title_2)"}>Закрыть</text>
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