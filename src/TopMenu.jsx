import {useSpring, animated} from "@react-spring/web";
import {useStore} from "./store.js";


export default function TopMenu({score = 0, deck = 0, combo= 0}){
    const currentLevel = useStore((state) => state.currentLevel);
    const [style]= useSpring(()=>({
        from: {transform: 'scale(1)',textShadow: '0 0 0 #faceaf, 0 0 0 #b86227',color: '#ffffff',config:{duration:100}},
        to: [
            {transform: 'scale(1.3)',textShadow: '0 0 20px #ff3300, 0 0 40px #ff6600, 0 0 60px #ffcc00',color: '#ffffff',config:{duration:500}},
            {transform: 'scale(1)',textShadow: '0 0 0 #faceaf, 0 0 0 #b86227,0 0 0 #ffcc00',color: '#ffffff',config:{duration:500}}
        ],

    }),[combo])




    return (
        <div className={"top-menu"}>
            <div className={"bg-top-menu"}/>
            <div className={"top-menu-title"}>
                Маджонг - домино
            </div>
            <div className={"top-menu-score"}>
               <div>Ваш счет: {score}</div>
                <animated.div style={style}  className={"kombo"}>
                    Комбо: x{combo}
                </animated.div>
            </div>
            <div className={"top-menu-step"}>
                Уровень {currentLevel}
            </div>

        </div>
    )
}