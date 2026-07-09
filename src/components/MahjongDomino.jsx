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
import TopMenu from "../TopMenu.jsx";
import Modal from "../Modal.jsx";
import {
    generateOrganicPyramid, getLevelDifficultyConfig, getTileNeighbors,
    isTileOpen, useGameAudio
} from "../action.js";
import {useSpring,animated} from "@react-spring/web";
import {useStore} from "../store.js";
import Settings from "../Settings.jsx";

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

    // Рефы для контроля асинхронных операций
    const globalTileIdCounter = useRef(0);
    const activeTimeouts = useRef([]);
    const { handEffect } = useGameAudio();


    // Очистка таймаутов при размонтировании компонента
    useEffect(() => {
        return () => {
            activeTimeouts.current.forEach(clearTimeout);
        };
    }, []);

    useEffect(() => {
        startGame();
    }, [currentLevel]);

    const crashAnimate = useSpring({
        from: { transform: 'rotate(0deg) translate(-10px, -10px)' },
        to: [{ transform: 'rotate(45deg) translate(-10px, -10px)' }, { transform: 'rotate(0deg) translate(-10px, -10px)' }],
        config: { duration: 1000 },
        loop: true
    });

    const startGame = () => {
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
    };

    const handleHandTileClick = (id) => {
        setSelectedHandId(id === selectedHandId ? null : id);
        setCrash(false);
        setDirect(false);
        handEffect.play()
    };

    const handleBoardTileClick = (boardTile) => {
        // === ЛОГИКА МОЛОТКА (CRASH) ===
        if (crash && countCrash > 0) {
            setHandId(boardTile.id);
            setCountCrash(prev => prev - 1);

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

        // === ЛОГИКА ОБЫЧНОГО КЛИКА (МАТЧ С РУКОЙ) ===
        if (!isTileOpen(boardTile, boardTiles) || selectedHandId === null) return;

        const handTile = hand.find(t => t.id === selectedHandId);
        if (!handTile) return;

        if (handTile.typeId === boardTile.typeId) {
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
        }
    };

    const crashClick = () => {
        setSelectedHandId(null);
        setCombo(1);
        setCrash(true);
        setDirect(false);
    };

    const directClick = () => {
        setDirect(true);
        setCrash(false);
        setSelectedHandId(null);
        setCombo(1);
    };

    return (
        <>
            <div>
                <img className={"main-bg"} src={"./img/bg-game.png"} alt="background" />
            </div>
            <div className={"main"}>
                <TopMenu score={score} deck={currentLevel} combo={combo} />
                <div className={"playing-field"}>
                    {boardTiles.map(tile => {
                        const isOpen = isTileOpen(tile, boardTiles);
                        const canBeTarget = isOpen && selectedHandId !== null;
                        return (
                            <div
                                className={"stone-field"}
                                key={tile.id + "board"}
                                onPointerDown={() => handleBoardTileClick(tile)}
                                style={{
                                    ...styles.tile,
                                    position: 'absolute',
                                    left: `${tile.x * 60}px`,
                                    top: `${tile.y * 80 - (tile.z * 10)}px`,
                                    zIndex: tile.z * 10 + Math.floor(tile.y),
                                    boxShadow: `${-tile.z * 2 - 2}px ${tile.z * 2 + 3}px 6px rgba(0,0,0,0.6), inset -3px -3px 5px #b0ab8b`,
                                    ...(isOpen ? styles.tileOpen : styles.tileLocked),
                                    ...(canBeTarget ? styles.tileHighlight : {}),
                                    ...(handId === tile.id ? { transform: 'scale(0)', transition: '.5s' } : {})
                                }}
                            >
                                <div style={styles.svgContainer}>
                                    <TileSvg typeId={tile.typeId} />
                                    {crash && isTileOpen(tile, boardTiles) && selectedHandId === null && countCrash > 0 ? (
                                        <animated.div style={crashAnimate} className={"crash_2"}>
                                            <img src={"./img/crash_2.png"} alt="crash effect" />
                                        </animated.div>
                                    ) : ""}

                                    {/* Смещения плиток (Инструмент Направления) */}
                                    {direct && !getTileNeighbors(tile, boardTiles).top && isOpen && selectedHandId === null && countDirect > 0 && <div onPointerDown={(e) => {
                                        e.stopPropagation();
                                        if (direct && !getTileNeighbors(tile, boardTiles).top && isOpen && selectedHandId === null && countDirect > 0) {
                                            setCountDirect(prev => prev - 1);
                                            const d = boardTiles.map(el => el.id === tile.id ? { ...el, y: el.y - stepLength } : el);
                                            useStore.getState().setBoardTiles(d);
                                        }
                                    }} className={"field-top"}>
                                         <img className={"arrow"} style={{ transform: 'rotate(-90deg)' }} src={"./img/arrow.png"} alt="up" />
                                    </div>}

                                    {direct && !getTileNeighbors(tile, boardTiles).left && isOpen && selectedHandId === null && countDirect > 0 &&<div onPointerDown={(e) => {
                                        e.stopPropagation();
                                        if (direct && !getTileNeighbors(tile, boardTiles).left && isOpen && selectedHandId === null && countDirect > 0) {
                                            setCountDirect(prev => prev - 1);
                                            const d = boardTiles.map(el => el.id === tile.id ? { ...el, x: el.x - stepLength } : el);
                                            useStore.getState().setBoardTiles(d);
                                        }
                                    }} className={"field-left"}>
                                         <img className={"arrow"} style={{ transform: 'rotate(-180deg)' }} src={"./img/arrow.png"} alt="left" />
                                    </div>}

                                    {direct && !getTileNeighbors(tile, boardTiles).right && isOpen && selectedHandId === null && countDirect > 0 &&<div onPointerDown={(e) => {
                                        e.stopPropagation();
                                        if (direct && !getTileNeighbors(tile, boardTiles).right && isOpen && selectedHandId === null && countDirect > 0) {
                                            setCountDirect(prev => prev - 1);
                                            const d = boardTiles.map(el => el.id === tile.id ? { ...el, x: el.x + stepLength } : el);
                                            useStore.getState().setBoardTiles(d);
                                        }
                                    }} className={"field-right"}>
                                         <img className={"arrow"} style={{ transform: 'rotate(0deg)' }} src={"./img/arrow.png"} alt="right" />
                                    </div>}

                                    {direct && !getTileNeighbors(tile, boardTiles).bottom && isOpen && selectedHandId === null && countDirect > 0 && <div onPointerDown={(e) => {
                                        e.stopPropagation();
                                        if (direct && !getTileNeighbors(tile, boardTiles).bottom && isOpen && selectedHandId === null && countDirect > 0) {
                                            setCountDirect(prev => prev - 1);
                                            const d = boardTiles.map(el => el.id === tile.id ? { ...el, y: el.y + stepLength } : el);
                                            useStore.getState().setBoardTiles(d);
                                        }
                                    }} className={"field-bottom"}>
                                        <img className={"arrow"} style={{ transform: 'rotate(90deg)' }} src={"./img/arrow.png"} alt="down" />
                                    </div>}
                                </div>
                            </div>
                        );
                    })}

                    <div className={"hand"}>
                        {boardTiles.length !== 0 && (
                            <div className={"hand-box"}>
                                {hand.map(tile => {
                                    const isSelected = tile.id === selectedHandId;
                                    return (
                                        <div className={"handTile"} key={tile.id}>
                                            <div className={"hand-item"} onPointerDown={() => handleHandTileClick(tile.id)}>
                                                <TileSvg typeId={tile.typeId} />
                                                <div style={isSelected ? { boxShadow: '0 0 4px 4px #d12613' } : {}} className={"hand-item-effect"} />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {boardTiles.length !== 0 && (
                            <div>
                                <div className={"direct"} onClick={directClick}>
                                    <img src={"./img/direct.png"} title={"Переместить камень"} alt="direct" />
                                    <div style={direct ? { opacity: 1 } : {}} className={"btn-hover"} />
                                    <div className={"btn-counter"}>{countDirect}</div>
                                </div>
                                <div className={"crash"} onClick={crashClick} title={"Разбить камень"}>
                                    <img src={"./img/crash.png"} alt="crash" />
                                    <div style={crash ? { opacity: 1 } : {}} className={"btn-hover"} />
                                    <div className={"btn-counter"}>{countCrash}</div>
                                </div>
                                <div className={"restart"} onClick={(e) => {
                                    e.stopPropagation();
                                    startGame();
                                }} title={"Перезапустить уровень"}>
                                    <div className={"btn-hover"} />
                                    <img src={"./img/restart.png"} alt="restart" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {boardTiles.length === 0 && load && (
                    <Modal score={score} combo={combo} startGame={startGame} currentLevel={currentLevel} setCurrentLevel={setCurrentLevel} />
               )
                }
                {settingsOpen && ( <Settings /> )}
            </div>
        </>
    );
}


const styles = {
    screenWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        minHeight: '100vh',
        background: 'radial-gradient(circle, #27170c 0%, #0d0603 100%)',
        color: '#f5f0eb',
        fontFamily: 'system-ui, sans-serif',
        padding: '15px 10px',
        boxSizing: 'border-box',
        overflow: 'hidden'
    },
    header: {
        width: '100%',
        maxWidth: '600px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '30px',
        border: '1px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(10px)',
        boxSizing: 'border-box'
    },
    title: {
        fontSize: '14px',
        fontWeight: 'bold',
        letterSpacing: '1px',
        color: '#dfb76c',
    },
    scoreContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: '90px'
    },
    scoreText: {
        fontSize: '15px',
        fontWeight: 'bold',
    },
    comboBadge: {
        fontSize: '11px',
        color: '#ff4d4d',
        fontWeight: 'bold',
        marginTop: '2px'
    },
    statsDeck: {
        fontSize: '13px',
        color: '#ccc',
        '& span': { color: '#dfb76c', fontWeight: 'bold' }
    },
    restartBtn: {
        padding: '6px 14px',
        background: 'linear-gradient(to bottom, #bd7a22, #86510f)',
        border: 'none',
        borderRadius: '15px',
        color: '#fff',
        fontWeight: 'bold',
        cursor: 'pointer',
        fontSize: '12px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
    },
    gameZone: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '1024px',
        height: '400px',
        margin: 'auto',
        transition: 'transform 0.15s ease',
        transformOrigin: 'center center'
    },
    board: {
        position: 'relative',
        width: '100%',
        height: '100%',

    },
    tile: {
        position: 'absolute',
        width: '54px',
        height: '74px',
        background: 'linear-gradient(135deg, #fffff0 0%, #eaddbd 100%)',
        borderRadius: '6px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease',
        borderBottom: '5px solid #a89f79',
        borderLeft: '2px solid #ded9b6',
        boxSizing: 'border-box',
        padding: '4px'
    },
    tileOpen: {
        opacity: 1,
        cursor: 'pointer',
        filter: 'brightness(1)'

    },
    tileLocked: {
        opacity: 1,
        filter: 'brightness(0.95)',
        cursor: 'pointer'
    },
    tileHighlight: {
        /*boxShadow: '0 0 20px #39ff14, inset 0 0 10px rgba(57,255,20,0.6)',*/
    },
    svgContainer: {
        position:"relative",
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        width: '100%',
        maxWidth: '600px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxSizing: 'border-box'
    },
    rackLabel: {
        fontSize: '11px',
        color: '#a19385',
        marginBottom: '6px',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        textAlign: 'center'
    },
    bambooRack: {
        display: 'flex',
        padding: '12px 15px',
        background: 'linear-gradient(to right, #382012, #52331c, #382012)',
        borderRadius: '8px',
        boxShadow: 'inset 0 4px 4px rgba(0,0,0,0.7), 0 12px 24px rgba(0,0,0,0.6)',
        borderBottom: '5px solid #1f1109',
        minHeight: '85px',
        alignItems: 'flex-end',
        width: '100%',
        boxSizing: 'border-box',
        gap: '15px'
    },
    deckDrawButton: {
        width: '54px',
        height: '74px',
        background: 'linear-gradient(135deg, #2c3e50 0%, #1a252f 100%)',
        borderRadius: '6px',
        border: '2px dashed #dfb76c',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'transform 0.1s ease',
        '&:active': { transform: 'scale(0.95)' }
    },
    deckDrawInside: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#dfb76c',
        fontSize: '20px',
        fontWeight: 'bold',
        position: 'relative',
        width: '100%'
    },
    penaltyTip: {
        position: 'absolute',
        top: '-18px',
        backgroundColor: '#c0392b',
        color: '#fff',
        fontSize: '10px',
        padding: '1px 4px',
        borderRadius: '3px',
        fontWeight: 'normal'
    },
    handTilesRow: {
        display: 'flex',
        gap: '6px',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        flex: 1,
        alignItems: 'flex-end',
        paddingBottom: '2px'
    },
    handTile: {
        width: '62px',
        height: '85px',
        cursor:"pointer",
        float:"right"


    },
    winOverlay: {
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(0,0,0,0.88)',
        borderRadius: '4px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#dfb76c',
        fontSize: '26px',
        fontWeight: 'bold',
        zIndex: 999
    }
};