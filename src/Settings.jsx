import {useStore} from "./store.js";
import {getSize, useGameEffectAudio} from "./action.js";
import Database from "./Database.js";
import {BannerFrame, SettingsBackgroundGroup, SettingsMusicSlider} from "./Objects.jsx";

export default function Settings({size, width = 0, height = 0, ratio = 0, r = true}) {
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

    return<g>
        <rect opacity={0.9} fill={"black"} width={"100%"} height={"100%"} />
        <g width={500} height={500} transform={`translate(${getSize(size,500,120)} ${getSize(size,200,200)})`}>
            <g transform={`translate(0 0)`}>
                <g transform={"scale(1) translate(120 0)"}>
                    <SettingsBackgroundGroup />
                </g>

                <text x={330}   y={60} width={"350"} height={"auto"} fontSize={40} fill={"url(#gradient_title)"} filter={"url(#filter_title_2)"}>Настройки</text>
                <g transform={`translate(36 70)`}  >
                    <g transform={`translate(160 70)`}>
                        <text x={45} y={0} fill={"url(#gradient_title)"} fontSize={30}>Общее количество очков</text>
                        <text x={200 - (db.getAll().score.toString().length * 2)} y={38} fill={"url(#gradient_title)"} fontSize={30}>{db.getAll().score}</text>
                    </g>

                    <g transform={`translate(0 0)`}>
                        <g transform={`translate(200 200) scale(1.3)`}>
                            <SettingsMusicSlider type={"music"} thumbColor={"#00965F"} fillColor={"#00965F"} trackColor={"#000"} value={m} width={300}  onChange={musicChange} defaultValue={0.5} min={0} max={1} label={"Музыка"} step={0.01} disabled={false} />
                        </g>

                        <g transform={`translate(200 300) scale(1.3)`}>
                            <SettingsMusicSlider type={"effect"} thumbColor={"#00965F"} fillColor={"#00965F"} trackColor={"#000"} value={ef} width={300} onChange={effectChange} defaultValue={0.5} min={0} max={1} label={"Музыка"} step={0.01} disabled={false} />
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
                <g transform={"scale(0.7) translate(430 700)"}>
                    <BannerFrame fillColor={"#AD020F"} tx={50} text={"Закрыть"}/>
                </g>

                </g>


            </g>

        </g>
    </g>
}