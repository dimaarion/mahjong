import { useState, useEffect, useRef } from 'react';
import Dzy from "./Dzy.jsx";
import Dzan from "./Dzan.jsx";
import Di from "./Di.jsx";
import Cini from "./Cini.jsx";
import Fan from "./Fan.jsx";
import Huo from "./Huo.jsx";
import Duo from "./Duo.jsx";
import Cze from "./Cze.jsx";
import Diani from "./Diani.jsx";
import Pearl from "./Pearl.jsx";
import Pine from "./Pine.jsx";
import Phoenix from "./Phoenix.jsx";
import Jade from "./Jade.jsx";
import Dragon from "./Dragon.jsx";
import Peach from "./Peach.jsx";
import Insect from "./Insect.jsx";
import Tiger from "./Tiger.jsx";
import Unicorn from "./Unicorn.jsx";
import Peacock from "./Peacock.jsx";
import Duck from "./Duck.jsx";
import Frog from "./Frog.jsx";
import Carp from "./Carp.jsx";
import Lotus from "./Lotus.jsx";
import Water from "./Water.jsx";
import Turtle from "./Turtle.jsx";
import Mushroom from "./Mushroom.jsx";
import Willow from "./Willow.jsx";
import Centre from "./Centre.jsx";
import Beginning from "./Beginning.jsx";
import White from "./White.jsx";
import Chrysanthemum from "./Chrysanthemum.jsx";
import Orchid from "./Orchid.jsx";
import Plum from "./Plum.jsx";
import Modal from "../Modal.jsx";
import {
    generateOrganicPyramid, getLevelDifficultyConfig, getSize, getSizeBox, getTileNeighbors, getViewBox,
    isTileOpen, splitArray, useGameEffectAudio
} from "../action.js";
import {useSpring, animated} from "@react-spring/web";
import {useStore} from "../store.js";
import Settings from "../Settings.jsx";
import {
    Arrow, BannerFrame,
    BgGameScene,
    Hammer,
    HammerBtn,
    MahjongBonusIcon,

    RestartBtn,
    SettingsBtn, SvgIcon
} from "../Objects.jsx";
import { isIOS } from 'mobile-device-detect';

const TILE_TYPES = [
    { id: 'dzy', color: '#2ecc71', label: 'dzy'},
    { id: 'dzan', color: '#2ecc71', label: 'dzan'},
    { id: 'di', color: '#e74c3c', label: 'di'},
    { id: 'cini', color: '#3498db', label: 'cini'},
    { id: 'fan', color: '#c0392b', label: 'fan'},
    { id: 'huo', color: '#27ae60', label: 'huo'},
    { id: 'duo', color: '#2c3e50', label: 'duo'},
    { id: 'cze', color: '#2c3e50', label: 'cze'},
    { id: 'diani', color: '#2c3e50', label: 'diani'},
    { id: 'Pearl', color: '#2c3e50', label: 'Pearl'},
    { id: 'Pine', color: '#2c3e50', label: 'Pine'},
    { id: 'Phoenix', color: '#2c3e50', label: 'Phoenix'},
    { id: 'Jade', color: '#2c3e50', label: 'Jade'},
    { id: 'Dragon', color: '#2c3e50', label: 'Dragon'},
    { id: 'Peach', color: '#2c3e50', label: 'Peach'},
    { id: 'Insect', color: '#2c3e50', label: 'Insect'},
    { id: 'Tiger', color: '#2c3e50', label: 'Tiger'},
    { id: 'Unicorn', color: '#2c3e50', label: 'Unicorn'},
    { id: 'Peacock', color: '#2c3e50', label: 'Peacock'},
    { id: 'Duck', color: '#2c3e50', label: 'Duck'},
    { id: 'Frog', color: '#2c3e50', label: 'Frog'},
    { id: 'Carp', color: '#2c3e50', label: 'Carp'},
    { id: 'Lotus', color: '#2c3e50', label: 'Lotus'},
    { id: 'Water', color: '#2c3e50', label: 'Water'},
    { id: 'Turtle', color: '#2c3e50', label: 'Turtle'},
    { id: 'Mushroom', color: '#2c3e50', label: 'Mushroom'},
    { id: 'Willow', color: '#2c3e50', label: 'Willow'},
    { id: 'Centre', color: '#2c3e50', label: 'Centre'},
    { id: 'Beginning', color: '#2c3e50', label: 'Beginning'},
    { id: 'White', color: '#2c3e50', label: 'White'},
    { id: 'Chrysanthemum', color: '#2c3e50', label: 'Chrysanthemum'},
    { id: 'Orchid', color: '#2c3e50', label: 'Orchid'},
    { id: 'Plum', color: '#2c3e50', label: 'Plum'}
];

const TileSvg = ({ typeId }) => {
    switch (typeId) {
        case 'dzy': return <Dzy />;
        case 'dzan': return <Dzan />;
        case 'di': return <Di />;
        case 'cini': return <Cini />;
        case 'fan': return <Fan />;
        case 'huo': return <Huo />;
        case 'duo': return <Duo />;
        case 'cze': return <Cze />;
        case 'diani': return <Diani />;
        case 'Pearl': return <Pearl />;
        case 'Pine': return <Pine />;
        case 'Phoenix': return <Phoenix />;
        case 'Jade': return <Jade />;
        case 'Dragon': return <Dragon />;
        case 'Peach': return <Peach />;
        case 'Insect': return <Insect />;
        case 'Tiger': return <Tiger />;
        case 'Unicorn': return <Unicorn />;
        case 'Peacock': return <Peacock />;
        case 'Duck': return <Duck />;
        case 'Frog': return <Frog />;
        case 'Carp': return <Carp />;
        case 'Lotus': return <Lotus />;
        case 'Water': return <Water />;
        case 'Turtle': return <Turtle />;
        case 'Mushroom': return <Mushroom />;
        case 'Willow': return <Willow />;
        case 'Centre': return <Centre />;
        case 'Beginning': return <Beginning />;
        case 'White': return <White />;
        case 'Chrysanthemum': return <Chrysanthemum />;
        case 'Orchid': return <Orchid />;
        case 'Plum': return <Plum />;
        default: return null;
    }
};

const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

export default function MahjongDomino() {
    const boardTiles = useStore((state) => state.boardTiles);
    const load = useStore((state) => state.load);
    const settingsOpen = useStore((state) => state.settingsOpen);
    const currentLevel = useStore((state) => state.currentLevel);
    const setCurrentLevel = useStore((state) => state.setCurrentLevel);
    const ysdkInit = useStore((state) => state.ysdkInstance);
    const [hand, setHand] = useState([]);
    const [selectedHandId, setSelectedHandId] = useState(null);
    const [score, setScore] = useState(0);
    const [combo, setCombo] = useState(1);
    const [lastMatchTime, setLastMatchTime] = useState(0);
    const [handId, setHandId] = useState(null);
    const [direct, setDirect] = useState(false);
    const [crash, setCrash] = useState(false);
    const [countDirect, setCountDirect] = useState(3);
    const [countCrash, setCountCrash] = useState(1);
    const stepLength = 1;
    const effect = useStore((state) => state.effect);
    const setPause = useStore((state) => state.setPause);
    const start = useStore((state) => state.start);
    const pause = useStore((state) => state.pause);
    const setStart = useStore((state) => state.setStart);
    // Рефы для контроля асинхронных операций
    const globalTileIdCounter = useRef(0);
    const activeTimeouts = useRef([]);


    const size = useStore((state) => state.size);
    const ratio = useStore((state) => state.ratio);
    const rt = 1000;
    const handEffect = useGameEffectAudio("./audio/knocking-with-a-stick-on-wood.mp3",effect);
    const boardMoveEffect = useGameEffectAudio("./audio/a-sharp-swish-of-cloth.mp3",effect);
    const boardCrashEffect = useGameEffectAudio("./audio/rock-throw-with-destruction.mp3",effect);
    const noBoardEffect = useGameEffectAudio("./audio/chpok--shampanskoe.mp3",effect);
    const btnEffect = useGameEffectAudio("./audio/choice-error-sound.mp3",effect);
    const restartEffect = useGameEffectAudio("./audio/roll-of-dice.mp3",effect);
    const sharpEffect = useGameEffectAudio("./audio/a-sharp-swish-of-cloth.mp3",effect)
    const comboEffect = useGameEffectAudio("./audio/kombo.mp3",effect)




    // Очистка таймаутов при размонтировании компонента

    useEffect(() => {
        handEffect.volume(effect)
        boardMoveEffect.volume(effect)
        boardCrashEffect.volume(effect)
        noBoardEffect.volume(effect)
        btnEffect.volume(effect)
        restartEffect.volume(effect)
    }, [effect, handEffect,boardMoveEffect,boardCrashEffect,noBoardEffect,btnEffect,restartEffect]);


    useEffect(() => {
        return () => {
            activeTimeouts.current.forEach(clearTimeout);
        };
    }, []);



    useEffect(() => {
        if(boardTiles.length === 0){
            if(ysdkInit){
                ysdkInit.features.GameplayAPI?.stop()
            }
        }

    }, [boardTiles, setPause, ysdkInit]);





    const startGame = () => {
        if(ysdkInit){
            ysdkInit.features.GameplayAPI?.start()
        }
        // Очищаем все незавершенные таймауты анимаций прошлой игры
        activeTimeouts.current.forEach(clearTimeout);
        activeTimeouts.current = [];

        const config = getLevelDifficultyConfig(currentLevel);
        const boardLayout = generateOrganicPyramid(config.baseSize, config.maxLayers, config.fillDensity);

        const UNIQUE_TYPES_COUNT = config.uniqueTypesCount;
        const selectedTypes = shuffle(TILE_TYPES).slice(0, UNIQUE_TYPES_COUNT);

        const board = boardLayout.map((pos, index) => {
            const type = selectedTypes[index % selectedTypes.length];
            return {
                // Используем реф счетчика, который НИКОГДА не сбрасывается в 0 во время сессии
                id: globalTileIdCounter.current++,
                typeId: type.id,
                ...pos
            };
        });

        // Глубокое копирование объектов
        let offBoardPool = board.filter((el) => el.typeId).map((el) => ({ ...el }));
        offBoardPool = shuffle(offBoardPool);

        useStore.getState().setBoardTiles(board);
        setHand(offBoardPool);
        setSelectedHandId(null);
        setHandId(null);
        setScore(0);
        setCombo(1);
        setLastMatchTime(Date.now());
        setCountDirect(config.shiftsLimit);
        setCountCrash(config.hammersLimit);
        setCrash(false);
        setDirect(false);
        restartEffect.play()
    };

    const handleHandTileClick = (id) => {
        setSelectedHandId(id === selectedHandId ? null : id);
        setCrash(false);
        setDirect(false);
        handEffect.play()
    };

    const handleBoardTileClick = (boardTile) => {
        // === ЛОГИКА МОЛОТКА (CRASH) ===
        if (crash && isTileOpen(boardTile, boardTiles) && selectedHandId === null && countCrash > 0) {
            setHandId(boardTile.id);
            setCountCrash(prev => prev - 1);
            boardCrashEffect.play()
            setCrash(false)

            const timeOut = setTimeout(() => {
                const currentTiles = useStore.getState().boardTiles;
                // Защита: Проверяем, существует ли плитка с таким ID на текущем игровом поле
                if (!currentTiles.some(t => t.id === boardTile.id)) return;

                const newBoard = currentTiles.filter(t => t.id !== boardTile.id);
                useStore.getState().setBoardTiles(newBoard);
            }, 500);

            activeTimeouts.current.push(timeOut);
            return;
        }
        if(!isTileOpen(boardTile, boardTiles)){
            noBoardEffect.play()
        }
        // === ЛОГИКА ОБЫЧНОГО КЛИКА (МАТЧ С РУКОЙ) ===
        if (!isTileOpen(boardTile, boardTiles) || selectedHandId === null) return;

        const handTile = hand.find(t => t.id === selectedHandId);
        if (!handTile) return;

        if (handTile.typeId === boardTile.typeId) {
            handEffect.play()
            const currentTime = Date.now();
            const timePassed = (currentTime - lastMatchTime) / 1000;

            const newCombo = timePassed < 5 ? Math.min(combo + 1, 5) : 1;
            const basePoints = (boardTile.z + 1) * 10;
            const pointsGained = basePoints * newCombo;

            setHandId(boardTile.id);

            const timeOut = setTimeout(() => {
                const currentTiles = useStore.getState().boardTiles;
                // Защита: Если за время анимации игру перезапустили — выходим
                if (!currentTiles.some(t => t.id === boardTile.id)) return;

                const newBoard = currentTiles.filter(t => t.id !== boardTile.id);
                useStore.getState().setBoardTiles(newBoard);

                setHand(prevHand => prevHand.filter(t => t.id !== handTile.id));
                setSelectedHandId(null);
                setScore(prev => prev + pointsGained);
                setCombo(newCombo);
                setLastMatchTime(currentTime);
            }, 500);

            activeTimeouts.current.push(timeOut);
        } else {
            setSelectedHandId(null);
            setCombo(1);
            noBoardEffect.play()
        }
    };

    const crashClick = () => {
        setSelectedHandId(null);
        setCombo(1);
        setCrash(!crash);
        setDirect(false);
        btnEffect.play()
    };

    const directClick = () => {
        setDirect(!direct);
        setCrash(false);
        setSelectedHandId(null);
        setCombo(1);
        btnEffect.play()
    };

    const [styleCombo] = useSpring(()=>({
        from: {rx:0},
        to: [{rx:80},{rx:(combo * 10)}],
        loop: false,
        config: { friction:20, tension: 500 },
        onChange:()=>{
            if(!comboEffect.playing() && start) {
                if(!sharpEffect.playing() && !btnEffect.playing() && !restartEffect.playing()){
                    comboEffect.play()
                }

            }
    }
    }),[combo])


    useEffect(() => {

    }, []);

if(!start){
    return <svg  style={styles.main}  width={size.width} height={size.height} viewBox={`${0} ${0} ${getViewBox(size).width} ${getViewBox(size).height}`} xmlns="http://www.w3.org/2000/svg">
        <g>
               <rect width={"100%"} height={"100%"} fill={"#008047"} />

        </g>
        <g transform={`translate(${getSizeBox(size,505,87).width} ${getSizeBox(size,505,87).height})`}>
            <SvgIcon />
            <g transform={'translate(265 360)'} onPointerDown={()=> {
                startGame()
                setStart(true)
                useStore.getState().setPause(false)
            }}>
                <BannerFrame fillColor={"#A10283"}/>
            </g>
        </g>


    </svg>
}else {
           return <>
               <svg  xmlns="http://www.w3.org/2000/svg" style={styles.start}  width={size.width} height={size.height} viewBox={`${0} ${0} ${getViewBox(size).width} ${getViewBox(size).height}`}>
                   <defs>
                       <linearGradient id="gradient_title" gradientUnits="userSpaceOnUse" x1="65" y1="0" x2="65" y2="34">
                           <stop offset="0" stopColor="#FACEAF" />
                           <stop offset="1" stopColor="#B86227" />
                       </linearGradient>
                       <filter colorInterpolationFilters="sRGB" x="-128" y="-32" width="130" height="34" id="filter_title_2">
                           <feFlood floodOpacity="0" result="BackgroundImageFix_1" />
                           <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" in="SourceAlpha" />
                           <feOffset dx="0" dy="4" />
                           <feGaussianBlur stdDeviation="2" />
                           <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.251 0" />
                           <feBlend mode="normal" in2="BackgroundImageFix_1" result="Shadow_title_2" />
                           <feBlend mode="normal" in="SourceGraphic" in2="Shadow_title_2" result="Shape_title_3" />
                       </filter>
                       <linearGradient id={"card-gradient-1"} x1="0%" y1="0%" x2="100%" y2="100%">
                           <stop offset="0%" stopColor="#fffff0" />
                           <stop offset="100%" stopColor="#eaddbd" />
                       </linearGradient>
                           <filter colorInterpolationFilters="sRGB" x="-275.703" y="-59" width="277.703" height="61" id="filter_settings_1">
                               <feFlood floodOpacity="0" result="BackgroundImageFix_settings_1" />

                               <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" in="SourceAlpha" result="HardAlpha_settings_3" />
                               <feMorphology radius="1" operator="erode" in="SourceAlpha" />
                               <feOffset dx="0" dy="0" />
                               <feGaussianBlur stdDeviation="5" />
                               <feComposite operator="arithmetic" k2="-1" k3="1" in2="HardAlpha_settings_3" />
                               <feColorMatrix type="matrix" values="0 0 0 0 0.227 0 0 0 0 0.78 0 0 0 0 0.141 0 0 0 1 0" />
                               <feBlend mode="normal"  result="InnerShadow" />
                           </filter>
                       <filter colorInterpolationFilters="sRGB" x="-200" y="-50" width="400" height="100" id="filter_combo_1">
                           <feFlood floodOpacity="0" result="BackgroundImageFix_combo_1" />
                           <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix_combo_1" result="Shape_combo_2" />
                           <feGaussianBlur stdDeviation="3" />
                       </filter>
                       </defs>


                   <g transform={`translate(0 0)`}>
                      <image width={"100%"} href={getSize(size,"./img/bg-game.png","./img/bg-game-p.png") }/>
                   </g>
                   <rect x={0} y={0} width={"100%"} height={getSize(size,110,150)} opacity={0.9} fill={"black"}/>
                   <rect x={0} y={getSize(size,110,150)} width={"100%"} height={3}  fill={"#73583F"}/>

                   <g>
                       <text x={20} y={getSize(size,50,50)} width={"auto"} height={"auto"} fontSize={getSize(size,50,50)} fill={"url(#gradient_title)"} >Маджонг - домино</text>
                       <text x={getSize(size,850,20)} y={getSize(size,45,130)} transform={`translate(${getSize(size,-score.toString().length * 10,0) } 0)`} width={"auto"} height={"auto"} fontSize={getSize(size,50,50)} fill={"url(#gradient_title)"} >Ваш счет: {score}</text>
                       <text x={getSize(size,1680,840)} y={getSize(size,50,50)} transform={`translate(${-currentLevel.toString().length * 32} 0)`} width={"auto"} height={"auto"} fontSize={getSize(size,50,50)} fill={"url(#gradient_title)"} >Уровень {currentLevel}</text>
                       <g transform={`translate(${getSize(size,860,840)} ${getSize(size,90,120)})`}>
                           <g fontSize={getSize(size,45,45)} fill={"url(#gradient_title)"} >
                               <g transform={'translate(100 8)'} >
                                   <animated.ellipse filter={"url(#filter_combo_1)"} fill={"#E2ED11"}  cx={0} cy={0} ry={3} style={styleCombo}  />
                               </g>
                               <text> Комбо: x{combo}</text>
                           </g>
                            </g>
                       {size.width > size.height && (<g onPointerDown={(e) => {
                           e.stopPropagation();
                           useStore.getState().setSettingsOpen(true)
                           useStore.getState().setPause(true)
                           if(ysdkInit){
                               ysdkInit.features.GameplayAPI?.stop()
                           }
                           sharpEffect.play()
                       }} transform={`translate(${getSize(size,1800,0)} ${getSize(size,120,0)}) `}>
                           <g transform={`translate(0 0) `}>
                               <SettingsBtn />
                           </g>
                       </g>)}
                   </g>


<g transform={`translate(${getSize(size,-155,-100)} ${getSize(size,-70,-10)}) scale(1.2)`}>
    <g transform={`translate(${getSize(size,300,190)} ${getSize(size,190,190)})`}>
        {boardTiles.map((tile)=>{
            const isOpen = isTileOpen(tile, boardTiles);
            const canBeTarget = isOpen && selectedHandId !== null;
            return <svg  x={tile.x * getSize(size,100,100)}  y={tile.y * (getSize(size,135,135)) - (tile.z)} width={getSize(size,100,100)} height={getSize(size,200,200)} viewBox={"0 0 64 84"} key={tile.id + "board"}

            >
                <g  style={{
                    filter: `drop-shadow(${-tile.z * 2 - 2}px ${tile.z * 2 + 3}px 6px rgba(0,0,0,0.6)) `,
                    transition: '.5s',
                    ...(handId === tile.id ? {opacity:0} : {opacity:1})
                }} onPointerDown={() => handleBoardTileClick(tile)}>
                    <TileSvg typeId={tile.typeId} />
                    <rect
                        x={4}
                        y={2}
                        width={"82%"}
                        height={"90%"}
                        rx={6}
                        opacity={0.8}
                        fill="none"
                        stroke="url(#card-gradient-1)"       // единый цвет рамки
                        strokeWidth={6}       // единая толщина
                    />
                    {direct && !getTileNeighbors(tile, boardTiles).bottom && isOpen && selectedHandId === null && countDirect > 0 && <g  transform={`translate(20 55)`}>
                        <Arrow/>
                        <rect onPointerDown={(e) => {
                            e.stopPropagation();
                            if (direct && !getTileNeighbors(tile, boardTiles).bottom && isOpen && selectedHandId === null && countDirect > 0) {
                                setCountDirect(prev => prev - 1);
                                const d = boardTiles.map(el => el.id === tile.id ? { ...el, y: el.y + stepLength } : el);
                                useStore.getState().setBoardTiles(d);
                                boardMoveEffect.play()
                            }
                        }}  opacity={0} x={-20} y={0} width={"100%"} height={"30"}/>
                    </g>}
                    {direct && !getTileNeighbors(tile, boardTiles).right && isOpen && selectedHandId === null && countDirect > 0 && <g  transform={`rotate(-90 50 30) translate(29 15)`}>
                        <Arrow/>
                        <rect onPointerDown={(e) => {
                            e.stopPropagation();
                            if (direct && !getTileNeighbors(tile, boardTiles).right && isOpen && selectedHandId === null && countDirect > 0) {
                                setCountDirect(prev => prev - 1);
                                const d = boardTiles.map(el => el.id === tile.id ? { ...el, x: el.x + stepLength } : el);
                                useStore.getState().setBoardTiles(d);
                                boardMoveEffect.play()
                            }
                        }} opacity={0} x={-15} y={0} width={"55"} height={"30"} />
                    </g>}
                    {direct && !getTileNeighbors(tile, boardTiles).left && isOpen && selectedHandId === null && countDirect > 0 && <g  transform={`rotate(90 50 30) translate(50 55)`}>
                        <Arrow/>
                        <rect onPointerDown={(e) => {
                            e.stopPropagation();
                            if (direct && !getTileNeighbors(tile, boardTiles).left && isOpen && selectedHandId === null && countDirect > 0) {
                                setCountDirect(prev => prev - 1);
                                const d = boardTiles.map(el => el.id === tile.id ? { ...el, x: el.x - stepLength } : el);
                                useStore.getState().setBoardTiles(d);
                                boardMoveEffect.play()
                            }
                        }} opacity={0} x={-15} y={0} width={"55"} height={"30"} />
                    </g>}
                    {direct && !getTileNeighbors(tile, boardTiles).top && isOpen && selectedHandId === null && countDirect > 0 && <g  transform={`rotate(-180 50 30) translate(60 35)`}>
                        <Arrow/>
                        <rect onPointerDown={(e) => {
                            e.stopPropagation();
                            if (direct && !getTileNeighbors(tile, boardTiles).top && isOpen && selectedHandId === null && countDirect > 0) {
                                setCountDirect(prev => prev - 1);
                                const d = boardTiles.map(el => el.id === tile.id ? { ...el, y: el.y - stepLength } : el);
                                useStore.getState().setBoardTiles(d);
                                boardMoveEffect.play()
                            }
                        }} opacity={0} x={-18} y={0} width={"55"} height={"30"} />
                    </g>}
                    {crash && isTileOpen(tile, boardTiles) && selectedHandId === null && countCrash > 0  && (<g>
                        <g>
                            <Hammer/>
                        </g>

                    </g>)}
                </g>

            </svg>

        })}
    </g>
    <svg x={getSize(size,1160,140)} y={getSize(size,300,1050)} width={getSize(size,420,1000)}  height={getSize(size,630,600)}>
        <svg  width={getSize(size,405,805)} height={getSize(size,280,140)}>
            <g transform={`translate(0 ${getSize(size,-25,-28)})`}>
                <rect x={0} y={2} rx={5}  width={getSize(size,420,900)} height={getSize(size,300,300)} fill={"#1C1B1B"} />
                {splitArray(hand, size.width > size.height?hand.length / 4:hand.length / 8).map((el, j)=>el.map((tile, i)=> {
                    const isSelected = tile.id === selectedHandId;
                    return <svg onPointerDown={() => handleHandTileClick(tile.id)}
                                x={i * getSize(size,100,100) + 5}
                                y={j * getSize(size,135,135)}
                                width={getSize(size,100,100)}
                                height={getSize(size,200,200)} viewBox={"0 0 64 84"}
                                key={tile.id + "hand"}>
                        <TileSvg typeId={tile.typeId}/>
                        <rect x={2} y={0} width={"90%"} height={"95%"} fill={"none"} rx={5} strokeWidth={4}
                              style={{
                                  transition: '.5s',
                                  ...(isSelected ? {filter: "drop-shadow(0 0 4px rgba(142, 16, 16, 0.6))", stroke:"#8E1010"} : {}),
                              }}
                        />
                    </svg>
                }))}
            </g>
        </svg>
        <g transform={`translate(${size.width > size.height?0:9} 0)`}>
            <g onPointerDown={directClick}>
                <MahjongBonusIcon active={direct} width={getSize(size,130,200)} x={getSize(size,10,0)} y={getSize(size,50,0)} count={countDirect} />
            </g>
            <g onPointerDown={crashClick}>
                <HammerBtn width={getSize(size,130,200)} x={getSize(size,140,200)} y={getSize(size,50,0)} active={crash} count={countCrash} />
            </g>
            <g onPointerDown={startGame}>
                <RestartBtn width={getSize(size,130,200)} x={getSize(size,270,400)} y={getSize(size,50,0)} active={false} />
            </g>
            {size.width < size.height && (<g onPointerDown={(e) => {
                e.stopPropagation();
                useStore.getState().setSettingsOpen(true)
                useStore.getState().setPause(true)
                if(ysdkInit){
                    ysdkInit.features.GameplayAPI?.stop()
                }
                sharpEffect.play()
            }} transform={`translate(630 200)`}>
                <g>
                    <SettingsBtn w={140} h={140}/>
                </g>
            </g>)}
        </g>
    </svg>
    {boardTiles.length === 0 && start && (
        <g transform={`scale(1.2) translate(${getSize(size,-150,-100)} -100)`}>
        <Modal
            size={size}
            width={size.width}
            height={size.height}
            ratio={ratio}
            score={score}
            combo={combo}
            startGame={startGame}
            currentLevel={currentLevel}
            setCurrentLevel={setCurrentLevel} />
        </g>
    )}
    {settingsOpen && (   <g transform={`scale(1.2) translate(${getSize(size,-150,-100)} -100)`}> <Settings size={size} /></g>)}

</g>

</svg>
            </>
    }
}


const styles = {
    main:{
        position:"fixed",
        zIndex:10
    },
    start:{
        position:"fixed",
        top:0,
        bottom:0,
        right: 0,
        left: 0,
        margin: "auto"
    }

};