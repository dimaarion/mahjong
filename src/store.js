import { create } from 'zustand'
import {db} from "./action.js";
export const useStore = create((set) => ({
    boardTiles: [],
    load:false,
    settingsOpen: false,
    pause:false,
    currentLevel:db.getAll().level,
    music:db.getAll().music,
    effect:db.getAll().effect,
    setPause:(el)=>set(()=>({pause:el})),
    setMusic:(el)=>set(()=>({music:el})),
    setEffect:(el)=>set(()=>({effect:el})),
    setCurrentLevel: (el)=>set(()=>({currentLevel:el})),
    setSettingsOpen: (el)=>set(()=>({settingsOpen:el})),
    setLoad: (el)=>set(()=>({load:el})),
    setBoardTiles: (arr)=>set(()=>({boardTiles:arr})),
}))