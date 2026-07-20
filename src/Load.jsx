import {useSpring,animated} from "@react-spring/web";
import {useEffect, useState} from "react";


export default function Load(){
    const [resize, setResize] = useState(0)
    const rotate = useSpring({
        from:{transform:'rotate(0deg)'},
        to:[{transform:'rotate(-360deg)'}],
        loop:true,
        config:{duration:7000}
    })
    useEffect(() => {
        const interval = setInterval(()=>{
                setResize(resize=>resize + 1)
        },2)
        return ()=>clearInterval(interval)
    }, []);

    useEffect(()=>{

    },[resize])

    return <div className={"load"}>
        <img src={"./img/load-bg.png"} className={"load-img"} />
        <div  className={"load-rotate"}>
            <animated.img style={rotate}  src={"./img/load-rotate.png"} />
        </div>
        <div className={"load-resize"}>
            <div className={"load-resize-item"}>
                <img width={"100%"} height={"100%"} src={"./img/load-resize.png"} />
            </div>
            <div className={"load-resize-item-2"}>
                <svg width="100%" height="100%" viewBox="0 0 800 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                    <linearGradient id="gradient_1" gradientUnits="userSpaceOnUse" x1="298" y1="0" x2="298" y2="69">
                        <stop offset="0" stopColor="#FFFFFF" />
                        <stop offset="1" stopColor="#FFE100" />
                    </linearGradient>
                </defs>
                    <rect rx={25} x={0} y={0} width={resize > 1040?1040:resize } height={60} fill="url(#gradient_1)" />
                 </svg>
            </div>
        </div>

    </div>
}