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
import level from "../assets/level.json";
import Modal from "../Modal.jsx";
import {
    generateOrganicPyramid, getLevelDifficultyConfig,
    isTileOpen
} from "../action.js";


// Список типов костей с уникальными идентификаторами для SVG-рендеринга
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
        case 'dzy':
            return <Dzy />
        case 'dzan':
            return <Dzan />
        case 'di':
            return <Di />
        case 'cini':
            return <Cini />
        case 'fan':
            return <Fan />
        case 'huo':
            return <Huo />
        case 'duo':
            return <Duo />
        case 'cze':
            return <Cze />
        case 'diani':
            return <Diani />
        case 'Pearl':
            return <Pearl />
        case 'Pine':
            return <Pine />
        case 'Phoenix':
            return <Phoenix />
        case 'Jade':
            return <Jade />
        case 'Dragon':
            return <Dragon />
        case 'Peach':
            return <Peach />
        case 'Insect':
            return <Insect />
        case 'Tiger':
            return <Tiger />
        case 'Unicorn':
            return <Unicorn />
        case 'Peacock':
            return <Peacock />
        case 'Duck':
            return <Duck />
        case 'Frog':
            return <Frog />
        case 'Carp':
            return <Carp />
        case 'Lotus':
            return <Lotus />
        case 'Water':
            return <Water />
        case 'Turtle':
            return <Turtle />
        case 'Mushroom':
            return <Mushroom />
        case 'Willow':
            return <Willow />
        case 'Centre':
            return <Centre />
        case 'Beginning':
            return <Beginning />
        case 'White':
            return <White />
        case 'Chrysanthemum':
            return <Chrysanthemum />
        case 'Orchid':
            return <Orchid />
        case 'Plum':
            return <Plum />
        default:
            return null;
    }
};

const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

export default function MahjongDomino() {
    const [boardTiles, setBoardTiles] = useState([]);
    const [hand, setHand] = useState([]);
    const [deck, setDeck] = useState([]);
    const [selectedHandId, setSelectedHandId] = useState(null);

    const [score, setScore] = useState(0);
    const [combo, setCombo] = useState(1);
    const [lastMatchTime, setLastMatchTime] = useState(0);
    const [scale, setScale] = useState(1);
    const boardRef = useRef(null);
    const [currentLevel, setCurrentLevel] = useState(1);
    const [handId, setHandId] = useState(null);
    const [direct, setDirect] = useState("");
    const [countDirect, setCountDirect] = useState(3);
    const [complexity, setComplexity] = useState(2)


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 600) {
                const calculatedScale = (window.innerWidth - 20) / 480;
                setScale(Math.max(0.45, Math.min(calculatedScale, 1)));
            } else {
                setScale(1);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        startGame();
    }, []);

    useEffect(() => {
        let scroll = document.querySelector(".hand-box")
        if(scroll){
            scroll.scrollTop = scroll.scrollHeight
        }

    }, [hand]);

    const startGame = () => {
        // Раскладка для уровня
        const levelData = level.levels[currentLevel];
        const config = getLevelDifficultyConfig(currentLevel);
        const boardLayout = generateOrganicPyramid(config.baseSize, config.maxLayers, config.fillDensity);

        // 1. Ограничиваем пул уникальных типов для этого уровня
        const UNIQUE_TYPES_COUNT = boardLayout.length / complexity;
        const selectedTypes = shuffle(TILE_TYPES).slice(0, UNIQUE_TYPES_COUNT);

        // 2. Заполняем поле костями из выбранных типов
        let tileIdCounter = 0;
        const board = boardLayout.map((pos, index) => {
            const type = selectedTypes[index % selectedTypes.length];
            return {
                id: tileIdCounter++,
                typeId: type.id,
                ...pos
            };
        });

        // 3. Собираем список ТОЛЬКО тех ID типов, которые попали на стол
        const activeTypeIdsOnBoard = Array.from(new Set(board.map(tile => tile.typeId)));

        // 4. Формируем руку и колоду строго ИЗ ТЕХ ЖЕ типов, что есть на столе.
        // Нам нужно заполнить 7 мест в руке + сделать запас в колоду (например, еще 15 костей).
        // Итого нужно сгенерировать 22 кости.
        let offBoardPool = [];
        const neededOffBoardCount = boardLayout.length;

        for (let i = 0; i < neededOffBoardCount; i++) {
            // Берем тип из тех, что гарантированно присутствуют на доске
            const randomActiveTypeId = activeTypeIdsOnBoard[i % activeTypeIdsOnBoard.length];
            offBoardPool.push({
                id: tileIdCounter++,
                typeId: randomActiveTypeId
            });
        }

        // Перемешиваем вне-игровой пул
        offBoardPool = shuffle(offBoardPool);

        // Распределяем на стартовую руку и колоду добора
        const initialHand = offBoardPool.slice(0, 8);
        const actualDeck = offBoardPool.slice(8);

        // 5. Обновляем стейты игры (без колоды добора)
        setBoardTiles(board);
        setHand(initialHand);
        setDeck(actualDeck);
        setSelectedHandId(null);
        setScore(0);
        setCombo(1);
        setLastMatchTime(Date.now());
        setCountDirect(Math.floor(boardLayout.length / 6));
    };





    const handleHandTileClick = (id) => {
        setSelectedHandId(id === selectedHandId ? null : id);
    };

    // ФУНКЦИЯ ДОБОРА КОСТИ В РУКУ
    const drawTileToHand = () => {
      //  if (deck.length === 0) return; // Колода пуст

        // Перемешиваем копию колоды
       // let newDeck = shuffle(deck);


        // Обновляем состояние: только колода
       // setDeck(newDeck);

        // Сбрасываем комбо скорости
       // setCombo(1);
    };

    const handleBoardTileClick = (boardTile) => {

        if (!isTileOpen(boardTile, boardTiles) || selectedHandId === null) return;

        const handTile = hand.find(t => t.id === selectedHandId);

        if (handTile.typeId === boardTile.typeId) {
            const currentTime = Date.now();
            const timePassed = (currentTime - lastMatchTime) / 1000;

            let newCombo;
            if (timePassed < 5) {
                newCombo = Math.min(combo + 1, 5);
            } else {
                newCombo = 1;
            }

            const basePoints = (boardTile.z + 1) * 10;
            const pointsGained = basePoints * newCombo;
            setHandId(boardTile.id)
            setTimeout(()=>{
                const newBoard = boardTiles.filter(t => t.id !== boardTile.id);
                let newHand = hand.filter(t => t.id !== handTile.id);
                let newDeck = [...deck];
                // Автоматический добор происходит только если в руке стало МЕНЬШЕ 7 костей
                if (newHand.length < 8 && newDeck.length > 0) {
                    newHand.push(newDeck.shift());
                }

                setBoardTiles(newBoard);
                setHand(newHand);
                setDeck(newDeck);
                setSelectedHandId(null);
                setScore(prev => prev + pointsGained);
                setCombo(newCombo);
                setLastMatchTime(currentTime);
            },500)



        } else {
            setSelectedHandId(null);
            setCombo(1);
        }
    };
let s = true
    if(s){
        return <>
            <div>
                <img className={"main-bg"} src={"./img/bg-game.png"} />
            </div>
            <div className={"main"}>
                <TopMenu score={score} deck={countDirect} combo={combo} />
                <div  className={"playing-field"}>
                    {boardTiles.map(tile => {
                        const isOpen = isTileOpen(tile, boardTiles);
                        const canBeTarget = isOpen && selectedHandId !== null;
                        return  <div
                            className={"stone-field"}
                            key={tile.id}
                            onPointerDown={() => {
                                handleBoardTileClick(tile)
                            }}
                            style={{
                                ...styles.tile,
                                position: 'absolute',
                                left: `${tile.x * 60}px`,
                                top: `${tile.y * 80 - (tile.z * 10)}px`, // Смещение вверх для 3D-эффекта объема
                                zIndex: tile.z * 10 + Math.floor(tile.y), // Чем выше слой и чем ниже плитка на экране, тем выше zIndex
                                boxShadow: `${-tile.z * 2 - 2}px ${tile.z * 2 + 3}px 6px rgba(0,0,0,0.6), inset -3px -3px 5px #b0ab8b`,
                                ...(isOpen ? styles.tileOpen : styles.tileLocked),
                                ...(canBeTarget ? styles.tileHighlight : {}),
                                ...(handId === tile.id? {transform: 'scale(0)',transition:'.5s'}:{})
                            }}
                        >
                            <div style={styles.svgContainer}>
                                <TileSvg typeId={tile.typeId} />
                                <div onPointerDown={() => {
                                    if (isTileOpen(tile, boardTiles) && selectedHandId === null && countDirect > 0) {
                                        if (countDirect > 0) {
                                            setCountDirect((countDirect) => countDirect - 1)
                                        }
                                        const d = boardTiles.map((el) => {
                                            if (el.id === tile.id) {
                                                el.y = el.y - 0.5
                                            }
                                            return el
                                        });
                                        setBoardTiles(d);
                                    }
                                    setDirect("top")
                                }} className={"field-top"}>
                                    {isTileOpen(tile, boardTiles) && selectedHandId === null && countDirect > 0?<img  className={"arrow"} style={{transform:'rotate(-90deg)'}} src={"./img/arrow.png"}/>:""}
                                </div>
                                <div onPointerDown={() => {
                                    if (isTileOpen(tile, boardTiles) && selectedHandId === null && countDirect > 0) {
                                        if (countDirect > 0) {
                                            setCountDirect((countDirect) => countDirect - 1)
                                        }
                                        const d = boardTiles.map((el)=>{
                                            if(el.id === tile.id){
                                                el.x = el.x - 0.5
                                            }
                                            return el
                                        });
                                        setBoardTiles(d);
                                    }
                                    setDirect("left")
                                }} className={"field-left"} >
                                    {isTileOpen(tile, boardTiles) && selectedHandId === null && countDirect > 0?<img  className={"arrow"} style={{transform:'rotate(-180deg)'}} src={"./img/arrow.png"}/>:""}
                                </div>
                                <div onPointerDown={() => {
                                    if (isTileOpen(tile, boardTiles) && selectedHandId === null && countDirect > 0) {
                                        if (countDirect > 0) {
                                            setCountDirect((countDirect) => countDirect - 1)
                                        }
                                        const d = boardTiles.map((el)=>{
                                            if(el.id === tile.id){
                                                el.x = el.x + 0.5
                                            }
                                            return el
                                        });
                                        setBoardTiles(d);
                                    }
                                    setDirect("right")
                                }} className={"field-right"} >
                                    {isTileOpen(tile, boardTiles) && selectedHandId === null && countDirect > 0?<img  className={"arrow"} style={{transform:'rotate(0deg)'}} src={"./img/arrow.png"}/>:""}
                                </div>
                                <div onPointerDown={()=>{
                                    if(isTileOpen(tile, boardTiles) && selectedHandId === null && countDirect > 0){
                                        if(countDirect > 0){
                                            setCountDirect((countDirect)=>countDirect - 1)
                                        }
                                        const d = boardTiles.map((el)=>{
                                            if(el.id === tile.id){
                                                el.y = el.y + 0.5
                                            }
                                            return el
                                        });
                                        setBoardTiles(d);
                                    }
                                    setDirect("bottom")
                                }} className={"field-bottom"} >
                                    {isTileOpen(tile, boardTiles) && selectedHandId === null && countDirect > 0?<img  className={"arrow"} style={{transform:'rotate(90deg)'}} src={"./img/arrow.png"}/>:""}

                                </div>
                            </div>
                        </div>
                    })}
                    <div className={"hand"}>
                        {boardTiles.length !== 0  && (
                        <div className={"hand-box"}>
                            {hand.map(tile => {
                                const isSelected = tile.id === selectedHandId;
                                return (
                                    <div
                                        key={tile.id}
                                        style={{
                                            ...styles.handTile,
                                        }}
                                    >
                                        <div className={"hand-item"} onPointerDown={() => handleHandTileClick(tile.id)} >
                                            <TileSvg typeId={tile.typeId} />
                                            <div style={isSelected?{
                                                boxShadow:'0 0 4px 4px #d12613',
                                            }:{}} className={"hand-item-effect"}/>
                                        </div>

                                    </div>
                                );
                            })}
                        </div>  )}

                        {boardTiles.length !== 0 && (
                        <div className={"restart"} onClick={startGame}>
                            <img onClick={drawTileToHand} src={"./img/restart.png"}/>
                        </div>
                        )}
                    </div>

                </div>
                {boardTiles.length === 0 && (
                    <Modal startGame={startGame} currentLevel={currentLevel} setCurrentLevel={setCurrentLevel}  />
                )}

            </div>
        </>
    }else {
        return (
            <div style={styles.screenWrapper}>
                <header style={styles.header}>
                    <div style={styles.title}>ВЕКТОРНЫЙ МАДЖОНГ</div>

                    <div style={styles.scoreContainer}>
                        <div style={styles.scoreText}>Счет: <span style={{ color: '#dfb76c' }}>{score}</span></div>
                        {combo > 1 && <div style={styles.comboBadge}>Комбо: x{combo} 🔥</div>}
                    </div>

                    <div style={styles.statsDeck}>Колода: <span>{deck.length} шт.</span></div>
                    <button onClick={startGame} style={styles.restartBtn}>Заново</button>
                </header>

                <main style={{ ...styles.gameZone, transform: `scale(${scale})` }} ref={boardRef}>
                    <div style={styles.board}>
                        {boardTiles.map(tile => {
                            const isOpen = isTileOpen(tile, boardTiles);
                            const canBeTarget = isOpen && selectedHandId !== null;

                            return (
                                <div
                                    key={tile.id}
                                    onClick={() => handleBoardTileClick(tile)}
                                    style={{
                                        ...styles.tile,
                                        left: `${tile.x * 64 + tile.z * 6}px`,
                                        top: `${tile.y * 82 - tile.z * 6}px`,
                                        zIndex: tile.z * 10 + Math.floor(tile.y),
                                       /* boxShadow: `${-tile.z * 2 - 2}px ${tile.z * 2 + 3}px 6px rgba(0,0,0,0.6), inset -3px -3px 5px #b0ab8b`,*/
                                        ...(isOpen ? styles.tileOpen : styles.tileLocked),
                                        ...(canBeTarget ? styles.tileHighlight : {})
                                    }}
                                >
                                    <div style={styles.svgContainer}>
                                        <TileSvg typeId={tile.typeId} />

                                    </div>
                                </div>
                            );
                        })}

                        {boardTiles.length === 0 && (
                            <div style={styles.winOverlay}>
                                <div>🎉 ПОБЕДА! 🎉</div>
                                <div style={{ fontSize: '20px', marginTop: '10px', color: '#fff' }}>Ваш счет: {score}</div>
                            </div>
                        )}
                    </div>
                </main>

                <footer style={styles.footer}>
                    <div style={styles.rackLabel}>Ваша рука (нажмите на колоду слева для добора кости):</div>
                    <div style={styles.bambooRack}>

                        {/* ИНТЕРАКТИВНАЯ КНОПКА-КОЛОДА ДЛЯ ДОБОРА */}
                        <div
                            onClick={drawTileToHand}
                            style={{
                                ...styles.deckDrawButton,
                                opacity: deck.length > 0 ? 1 : 0.4,
                                cursor: deck.length > 0 ? 'pointer' : 'not-allowed'
                            }}
                            title={hand.length >= 8 ? "Добор при полной руке стоит 15 очков!" : "Взять кость"}
                        >
                            <div style={styles.deckDrawInside}>
                                <span>🎴</span>
                                <span style={{fontSize: '11px', marginTop: '2px'}}>ВЗЯТЬ</span>
                                {hand.length >= 7 && deck.length > 0 && <span style={styles.penaltyTip}>-15</span>}
                            </div>
                        </div>

                        {/* КОСТИ В РУКЕ */}
                        <div style={styles.handTilesRow}>
                            {hand.map(tile => {
                                const isSelected = tile.id === selectedHandId;
                                return (
                                    <div
                                        key={tile.id}
                                        onClick={() => handleHandTileClick(tile.id)}
                                        style={{
                                            ...styles.handTile,
                                            transform: isSelected ? 'translateY(-15px) scale(1.05)' : 'translateY(0)',
                                            boxShadow: isSelected ? '0 0 18px #ff4d4d, 0 10px 15px rgba(0,0,0,0.5)' : '0 6px 8px rgba(0,0,0,0.4)',
                                            border: isSelected ? '2px solid #ff4d4d' : '1px solid #dcd9b9'
                                        }}
                                    >
                                        <div style={styles.svgContainer}>
                                            <TileSvg typeId={tile.typeId} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {hand.length === 0 && boardTiles.length > 0 && deck.length === 0 && (
                            <div style={{ color: '#ff4d4d', fontWeight: 'bold', fontSize: '14px' }}>Ходов больше нет!</div>
                        )}
                    </div>
                </footer>
            </div>
        );
    }


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
        filter: 'brightness(0.9)',
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
        cursor:"pointer"



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