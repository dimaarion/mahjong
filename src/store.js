import { create } from 'zustand'
import Database from "./Database.js";
const db = new Database()

export const useStore = create((set) => ({
    boardTiles: [{}],
    load:false,
    settingsOpen: false,
    pause:true,
    ysdkInstance:null,
    localSettings:{music: 0.5, effect: 0.8},
    progress:{score:0, level:1},
    currentLevel:db.getAll().level,
    music:db.getAll().music,
    effect:db.getAll().effect,
    start:false,
    hiddenDocument:true,
    size:{width: window.innerWidth, height: window.innerHeight},
    ratio:(window.innerWidth + window.innerHeight) / 1000,
    setHiddenDocument:(el)=>set(()=>({hiddenDocument:el})),
    setRatio:(el)=>set(()=>({ratio:el})),
    setSize:(el)=>set(()=>({size:el})),
    setStart:(el)=>set(()=>({start:el})),
    setPause:(el)=>set(()=>({pause:el})),
    setSettings:(el)=>set(()=>({localSettings:el})),
    setYsdkInstance:(el)=>set(()=>({ysdkInstance:el})),
    setProgress:(el)=>set(()=>({progress:el})),
    setMusic:(el)=>set(()=>({music:el})),
    setEffect:(el)=>set(()=>({effect:el})),
    setCurrentLevel: (el)=>set(()=>({currentLevel:el})),
    setSettingsOpen: (el)=>set(()=>({settingsOpen:el})),
    setLoad: (el)=>set(()=>({load:el})),
    setBoardTiles: (arr)=>set(()=>({boardTiles:arr})),
}))