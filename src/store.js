import { create } from 'zustand'

export const useStore = create((set) => ({
    boardTiles: [],
    load:false,
    setLoad: (el)=>set(()=>({load:el})),
    setBoardTiles: (arr)=>set(()=>({boardTiles:arr})),
}))