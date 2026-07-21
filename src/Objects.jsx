import {useCallback, useEffect, useId, useRef, useState} from "react";

export const MahjongBonusIcon = ({x = "0", y = "0", width = "50", count = 2, active = false}) => (

<svg width={width} x={x} y={y} viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
    <filter colorInterpolationFilters="sRGB" x="-40.454" y="-46.856" width="42.454" height="48.856" id="filter_move_1">
    <feFlood floodOpacity="0" result="BackgroundImageFix_move_1" />
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix_move_1" result="Shape_move_2" />
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" in="SourceAlpha" result="HardAlpha_move_3" />
    <feOffset dx="0" dy="0" />
    <feGaussianBlur stdDeviation="2" />
    <feComposite operator="arithmetic" k2="-1" k3="1" in2="HardAlpha_move_3" />
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.251 0" />
    <feBlend mode="normal" in2="Shape_move_2" result="InnerShadow_4" />
    </filter>
<filter colorInterpolationFilters="sRGB" x="-40.454" y="-46.856" width="42.454" height="48.856" id="filter_mave_2">
    <feFlood floodOpacity="0" result="BackgroundImageFix_move_1" />
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix_move_1" result="Shape_move_2" />
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" in="SourceAlpha" result="HardAlpha_move_3" />
    <feOffset dx="0" dy="0" />
    <feGaussianBlur stdDeviation="2" />
    <feComposite operator="arithmetic" k2="-1" k3="1" in2="HardAlpha_move_3" />
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.251 0" />
    <feBlend mode="normal" in2="Shape_move_2" result="InnerShadow_4" />
</filter>
<filter colorInterpolationFilters="sRGB" x="-40.454" y="-46.856" width="42.454" height="48.856" id="filter_mave_3">
    <feFlood floodOpacity="0" result="BackgroundImageFix_move_1" />
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix_move_1" result="Shape_move_2" />
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" in="SourceAlpha" result="HardAlpha_move_3" />
    <feOffset dx="0" dy="0" />
    <feGaussianBlur stdDeviation="2" />
    <feComposite operator="arithmetic" k2="-1" k3="1" in2="HardAlpha_move_3" />
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.251 0" />
    <feBlend mode="normal" in2="Shape_move_2" result="InnerShadow_4" />
</filter>
<filter colorInterpolationFilters="sRGB" x="-40.454" y="-46.856" width="42.454" height="48.856" id="filter_mave_4">
    <feFlood floodOpacity="0" result="BackgroundImageFix_move_1" />
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix_move_1" result="Shape_move_2" />
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" in="SourceAlpha" result="HardAlpha_move_3" />
    <feOffset dx="0" dy="0" />
    <feGaussianBlur stdDeviation="2" />
    <feComposite operator="arithmetic" k2="-1" k3="1" in2="HardAlpha_move_3" />
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.251 0" />
    <feBlend mode="normal" in2="Shape_move_2" result="InnerShadow_4" />
</filter>
        <filter colorInterpolationFilters="sRGB"  id="filter_active_1">
            <feGaussianBlur stdDeviation="15" />
        </filter>
</defs>
    {active?<ellipse rx={100} fill={"#FDFFA3"} transform={`translate(148 98)`} filter={"url(#filter_active_1)"}/>:""}

    <g transform={`translate(250 15)`}>
        <ellipse rx={50} fill={"#1C1B1B"} />
        <text x={count < 10?-15:-25} y={17} fontSize={50} fill={"white"}>{count}</text>
    </g>

<g transform="translate(50 1.5)">
    <path d="M0 91.623C0 41.021 41.021 0 91.623 0C142.225 0 183.246 41.021 183.246 91.623C183.246 142.225 142.225 183.246 91.623 183.246C41.021 183.246 0 142.225 0 91.623Z" fill="#C47F51" fillRule="evenodd" strokeWidth="10" stroke="#F6E0A1" transform="translate(5 5)" />
    <path d="M11.0322 0C11.0322 0 16.083 2.29199 20.9385 2.29199C25.7939 2.29199 30.4541 0 30.4541 0L31.3213 21.9758L42.4541 18.0722C42.4541 18.0722 38.7842 26.1952 33.3154 33.8911C27.8467 41.5869 20.5791 48.8555 20.5791 48.8555C20.5791 48.8555 13.7981 42.2999 8.65332 34.7816C3.50854 27.2634 0 18.7827 0 18.7827L11.0322 21.982L11.0322 0Z" fill="#18533A" fillRule="evenodd" strokeWidth="3" stroke="#A5854F" strokeLinejoin="round" filter="url(#filter_mave_1)" transform="rotate(0 100 100) translate(55 125) scale(2)" />
    <path d="M11.0322 0C11.0322 0 16.083 2.29199 20.9385 2.29199C25.7939 2.29199 30.4541 0 30.4541 0L31.3213 21.9758L42.4541 18.0722C42.4541 18.0722 38.7842 26.1952 33.3154 33.8911C27.8467 41.5869 20.5791 48.8555 20.5791 48.8555C20.5791 48.8555 13.7981 42.2999 8.65332 34.7816C3.50854 27.2634 0 18.7827 0 18.7827L11.0322 21.982L11.0322 0Z" fill="#18533A" fillRule="evenodd" strokeWidth="3" stroke="#A5854F" strokeLinejoin="round" filter="url(#filter_mave_2)" transform="rotate(-90 100 100) translate(63 115) scale(2)" />
    <path d="M11.0322 0C11.0322 0 16.083 2.29199 20.9385 2.29199C25.7939 2.29199 30.4541 0 30.4541 0L31.3213 21.9758L42.4541 18.0722C42.4541 18.0722 38.7842 26.1952 33.3154 33.8911C27.8467 41.5869 20.5791 48.8555 20.5791 48.8555C20.5791 48.8555 13.7981 42.2999 8.65332 34.7816C3.50854 27.2634 0 18.7827 0 18.7827L11.0322 21.982L11.0322 0Z" fill="#18533A" fillRule="evenodd" strokeWidth="3" stroke="#A5854F" strokeLinejoin="round" filter="url(#filter_mave_3)" transform="rotate(-180 100 100) translate(65 120) scale(2)" />
    <path d="M11.0322 0C11.0322 0 16.083 2.29199 20.9385 2.29199C25.7939 2.29199 30.4541 0 30.4541 0L31.3213 21.9758L42.4541 18.0722C42.4541 18.0722 38.7842 26.1952 33.3154 33.8911C27.8467 41.5869 20.5791 48.8555 20.5791 48.8555C20.5791 48.8555 13.7981 42.2999 8.65332 34.7816C3.50854 27.2634 0 18.7827 0 18.7827L11.0322 21.982L11.0322 0Z" fill="#18533A" fillRule="evenodd" strokeWidth="3" stroke="#A5854F" strokeLinejoin="round" filter="url(#filter_mave_4)" transform="rotate(90 100 100) translate(55 125) scale(2)" />

</g>

</svg>
);

export const Arrow = ()=>(
<g>
    <defs>
    <filter color-interpolation-filters="sRGB" x="-40.454" y="-46.856" width="42.454" height="48.856" id="filter_arrow_1">
    <feFlood floodOpacity="0" result="BackgroundImageFix_arrow_1" />
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix_arrow_1" result="Shape_arrow_2" />
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" in="SourceAlpha" result="HardAlpha_arrow_3" />
    <feOffset dx="0" dy="0" />
    <feGaussianBlur stdDeviation="2" />
    <feComposite operator="arithmetic" k2="-1" k3="1" in2="HardAlpha_arrow_3" />
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.251 0" />
    <feBlend mode="normal" in2="Shape_arrow_2" result="InnerShadow_arrow_4" />
    </filter>
</defs>

<path d="M11.0322 0C11.0322 0 16.083 2.29199 20.9385 2.29199C25.7939 2.29199 30.4541 0 30.4541 0L31.3213 21.9758L42.4541 18.0722C42.4541 18.0722 38.7842 26.1952 33.3154 33.8911C27.8467 41.5869 20.5791 48.8555 20.5791 48.8555C20.5791 48.8555 13.7981 42.2999 8.65332 34.7816C3.50854 27.2634 0 18.7827 0 18.7827L11.0322 21.982L11.0322 0Z" fill="#18533A" fillRule="evenodd" strokeWidth="3" stroke="#A5854F" strokeLinejoin="round" filter="url(#filter_arrow_1)" transform="scale(0.5)" />
</g>
)

export const HammerBtn = ({x = "0", y = "0", width = "50", count = 2, active = false})=>(
    <svg width={width} x={x} y={y} viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter colorInterpolationFilters="sRGB"  id="filter_active_2">
            <feGaussianBlur stdDeviation="15" />
        </filter>
    </defs>
        {active?<ellipse rx={100} fill={"#FDFFA3"} transform={`translate(148 98)`} filter={"url(#filter_active_2)"}/>:""}
        <g transform={`translate(250 15)`}>
            <ellipse rx={50} fill={"#1C1B1B"} />
            <text x={count < 10?-15:-25} y={17} fontSize={50} fill={"white"}>{count}</text>
        </g>
        <g transform="translate(50 1.5)">
            <path d="M0 91.623C0 41.021 41.021 0 91.623 0C142.225 0 183.246 41.021 183.246 91.623C183.246 142.225 142.225 183.246 91.623 183.246C41.021 183.246 0 142.225 0 91.623Z" fill="#C47F51" fillRule="evenodd" strokeWidth="10" stroke="#F6E0A1" transform="translate(5 5)" />
            <rect  width={80} height={40} fill={"#18533A"} transform="translate(30 50) rotate(-45 40 20)"/>
            <rect  width={20} height={100} fill={"#18533A"} transform="translate(60 40) rotate(-45 40 20)"/>
        </g>
    </svg>
)

export const Hammer = ()=>(
    <g transform="translate(0 0) scale(0.3)">
        <rect  width={80} height={40} fill={"#18533A"}   transform="translate(30 50) rotate(-45 40 20)"/>
        <rect  width={20} height={100} fill={"#18533A"} transform="translate(60 40) rotate(-45 40 20)"/>
    </g>
)

export const RestartBtn = ({x = "0", y = "0", width = "50", active = false})=>(
    <svg width={width} x={x} y={y} viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <filter colorInterpolationFilters="sRGB"  id="filter_active_2">
                <feGaussianBlur stdDeviation="15" />
            </filter>
        </defs>
        {active?<ellipse rx={100} fill={"#FDFFA3"} transform={`translate(148 98)`} filter={"url(#filter_active_2)"}/>:""}
        <g transform="translate(50 1.5)">
            <path
                d="M0 91.623C0 41.021 41.021 0 91.623 0C142.225 0 183.246 41.021 183.246 91.623C183.246 142.225 142.225 183.246 91.623 183.246C41.021 183.246 0 142.225 0 91.623Z"
                fill="#C47F51" fillRule="evenodd" strokeWidth="10" stroke="#F6E0A1" transform="translate(5 5)"/>
            <g transform="translate(15 15) scale(10)" fill={"#18533A"} >
                <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"/>
                <path d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"/>

            </g>
        </g>
    </svg>
)

export const SettingsBtn = ()=>(
        <g>
            <path
                d="M0 91.623C0 41.021 41.021 0 91.623 0C142.225 0 183.246 41.021 183.246 91.623C183.246 142.225 142.225 183.246 91.623 183.246C41.021 183.246 0 142.225 0 91.623Z"
                fill="#C47F51" fillRule="evenodd" strokeWidth="10" stroke="#F6E0A1" transform="translate(5 5)"/>
            <g transform="translate(15 15) scale(10)" fill={"#18533A"} >
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
            </g>
        </g>

)

export  function SettingsMusicSlider({
                                                min = 0,
                                                max = 100,
                                                step = 1,
                                                value,
                                                defaultValue = min,
                                                onChange,
                                                width = 320,
                                                disabled = false,
                                                label = "Value",
                                                showIcon = true,
                                                trackColor = "#d9d9d9",
                                                fillColor = "#2f8fe0",
                                                thumbColor = "#2f8fe0",
                                                iconColor = "#ffffff",
                                                type = "music",
                                            }) {
    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = useState(defaultValue);
    const currentValue = isControlled ? value : internalValue;

    const trackRef = useRef(null);
    const draggingRef = useRef(false);
    const uid = useId().replace(/[:]/g, "");

    const iconSpace = showIcon ? 45 : 0;
    const trackHeight = 20;
    const thumbOuterR = 10;
    const thumbInnerR = 8;

    const trackStart = iconSpace + thumbOuterR;
    const trackEnd = width - thumbOuterR;
    const trackY = thumbOuterR;
    const height = thumbOuterR * 2;

    const catcherX = trackStart - thumbOuterR;
    const catcherWidth = trackEnd - trackStart + thumbOuterR * 2;

    const clamp = useCallback((v) => Math.min(max, Math.max(min, v)), [min, max]);

    const snap = useCallback(
        (v) => {
            const steps = Math.round((v - min) / step);
            return clamp(min + steps * step);
        },
        [min, step, clamp]
    );

    const valueToX = useCallback(
        (v) => trackStart + ((v - min) / (max - min)) * (trackEnd - trackStart),
        [min, max, trackStart, trackEnd]
    );

    const xToValue = useCallback(
        (x) => {
            const ratio = (x - trackStart) / (trackEnd - trackStart);
            return snap(min + ratio * (max - min));
        },
        [min, max, trackStart, trackEnd, snap]
    );

    const commit = useCallback(
        (next) => {
            if (!isControlled) setInternalValue(next);
            onChange?.(next);
        },
        [isControlled, onChange]
    );

    const clientXToValue = useCallback(
        (clientX) => {
            const rect = trackRef.current.getBoundingClientRect();
            const scale = catcherWidth / rect.width;
            const xLocal = catcherX + (clientX - rect.left) * scale;
            return xToValue(xLocal);
        },
        [catcherX, catcherWidth, xToValue]
    );

    const handlePointerDown = (e) => {
        if (disabled) return;
        e.preventDefault();
        e.currentTarget.setPointerCapture(e.pointerId);
        draggingRef.current = true;
        commit(clientXToValue(e.clientX));
    };

    const handlePointerMove = (e) => {
        if (!draggingRef.current) return;
        e.preventDefault();
        commit(clientXToValue(e.clientX));
    };

    const handlePointerUp = (e) => {
        draggingRef.current = false;
        if (e.currentTarget.hasPointerCapture?.(e.pointerId)) {
            e.currentTarget.releasePointerCapture(e.pointerId);
        }
    };

    // native non-passive touchmove listener: React's own touch handling is
    // passive by default, so relying only on preventDefault() inside JSX
    // pointer handlers can let the browser hijack the gesture as page-scroll
    // partway through a drag on some mobile browsers.
    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;
        const blockScroll = (e) => {
            if (draggingRef.current) e.preventDefault();
        };
        el.addEventListener("touchmove", blockScroll, { passive: false });
        return () => el.removeEventListener("touchmove", blockScroll);
    }, []);

    const handleKeyDown = (e) => {
        if (disabled) return;
        const bigStep = (max - min) / 10;
        switch (e.key) {
            case "ArrowRight":
            case "ArrowUp":
                commit(clamp(currentValue + step));
                e.preventDefault();
                break;
            case "ArrowLeft":
            case "ArrowDown":
                commit(clamp(currentValue - step));
                e.preventDefault();
                break;
            case "PageUp":
                commit(snap(currentValue + bigStep));
                e.preventDefault();
                break;
            case "PageDown":
                commit(snap(currentValue - bigStep));
                e.preventDefault();
                break;
            case "Home":
                commit(min);
                e.preventDefault();
                break;
            case "End":
                commit(max);
                e.preventDefault();
                break;
            default:
                break;
        }
    };

    const thumbX = valueToX(currentValue);
    const gradId = `settings-slider-thumb-${uid}`;

    return (
        <g
            role="slider"
            aria-label={label}
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={currentValue}
            aria-disabled={disabled || undefined}
            tabIndex={disabled ? -1 : 0}
            onKeyDown={handleKeyDown}
            style={{ outline: "none", opacity: disabled ? 0.5 : 1 }}
        >
            <defs>
                <radialGradient id={gradId} cx="35%" cy="30%" r="75%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
                    <stop offset="35%" stopColor={thumbColor} stopOpacity="1" />
                    <stop offset="100%" stopColor={thumbColor} stopOpacity="1" />
                </radialGradient>
            </defs>

            {showIcon && (

                <g transform={`translate(0 ${trackY - 16})`} pointerEvents="none">
                    {type === "music"?<path
                        d="M6 24 L6 6 L24 2 L24 20 M6 24a4 4 0 1 0 8 0a4 4 0 1 0 -8 0 M24 20a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"
                        fill="none"
                        stroke={iconColor}
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />: <g transform=" scale(1.8)">
                        <g transform="matrix(1 0 0 1 4.3 0) ">
                            <path d="M11.3396 1.17313C11.3396 1.17313 11.3396 15.054 11.3396 15.054C11.3396 15.3796 11.2254 15.6568 10.9976 15.8848C10.7695 16.1126 10.4924 16.2271 10.1665 16.2271C10.1665 16.2271 1.17313 16.2271 1.17313 16.2271C0.847201 16.2271 0.570035 16.1126 0.341957 15.8848C0.113874 15.6568 0 15.3796 0 15.054C0 15.054 0 1.17313 0 1.17313C0 0.847531 0.113879 0.570365 0.341957 0.341957C0.57004 0.114204 0.846876 0 1.17313 0C1.17313 0 10.1665 0 10.1665 0C10.492 0 10.7692 0.114204 10.9976 0.341957C11.2254 0.570365 11.3396 0.847531 11.3396 1.17313C11.3396 1.17313 11.3396 1.17313 11.3396 1.17313ZM10.941 0.399941Q10.6278 0.086727 10.1668 0.086727L1.17346 0.086727Q0.712086 0.086727 0.399407 0.399406Q0.0867282 0.712085 0.0867282 1.17345L0.0867282 15.0543Q0.0867282 15.5157 0.399405 15.8284Q0.712074 16.1411 1.17346 16.1411L10.1668 16.1411Q10.6278 16.1411 10.9405 15.8284Q11.2532 15.5148 11.2532 15.0543L11.2532 1.17345Q11.2532 0.713031 10.941 0.399941ZM1.17346 1.08673L10.1668 1.08673Q10.2136 1.08673 10.2329 1.10598Q10.2532 1.12636 10.2532 1.17345L10.2532 15.0543Q10.2532 15.1014 10.2334 15.1213Q10.2136 15.1411 10.1668 15.1411L1.17346 15.1411Q1.1263 15.1411 1.10652 15.1213Q1.08673 15.1015 1.08673 15.0543L1.08673 1.17345Q1.08673 1.1263 1.10651 1.10651Q1.1263 1.08673 1.17346 1.08673Z" fill="#F1EEE9" transform="scale(1 1)" />
                            <path d="M2.89339 0C3.15387 0.104387 3.40813 0.319708 3.65584 0.645302C3.90323 0.971226 4.02725 1.22548 4.02725 1.40775C4.02725 1.48596 4.00434 1.55435 3.95885 1.61293C3.91304 1.6715 3.86134 1.72713 3.80244 1.77916C3.74387 1.83152 3.68169 1.94867 3.61657 2.13093C3.55112 2.31353 3.50565 2.54815 3.47979 2.83481C3.6493 2.78311 3.87084 2.7013 4.14473 2.59037C4.4183 2.47977 4.64637 2.39207 4.82897 2.32629C5.01124 2.26117 5.14836 2.22845 5.23932 2.22845C5.34338 2.22845 5.48703 2.34593 5.66963 2.58022C5.7089 2.63258 5.79333 2.72388 5.92357 2.85412C6.05381 2.98436 6.14183 3.07893 6.18765 3.1375C6.23313 3.19608 6.28189 3.27429 6.33425 3.37213C6.38627 3.46997 6.41246 3.55767 6.41246 3.63621C6.41246 3.75336 6.3601 3.81193 6.25571 3.81193C6.008 3.81193 5.82573 3.85774 5.70858 3.94871C5.61729 4.09237 5.49653 4.26154 5.34699 4.45723C5.19711 4.65292 5.07637 4.80934 4.98539 4.92649C4.89377 5.04396 4.84828 5.12904 4.84828 5.18074C4.84828 5.41537 4.75698 5.53285 4.57471 5.53285C4.50926 5.53285 4.37575 5.51321 4.17385 5.47427C3.97162 5.435 3.71442 5.40915 3.40159 5.39606C3.40159 5.51321 3.39472 5.79038 3.38195 6.22691C3.36886 6.66376 3.36232 6.9082 3.36232 6.95991C3.36232 7.05121 3.37508 7.29892 3.40159 7.70306C3.42776 8.10718 3.44085 8.38076 3.44085 8.52408C3.44085 8.8631 3.39504 9.20179 3.30407 9.54079C3.21245 9.87981 3.11493 10.1013 3.01087 10.2054C2.85446 10.0752 2.77624 9.57319 2.77624 8.70013C2.77624 8.60916 2.78278 8.41347 2.79588 8.11373C2.80897 7.81399 2.81551 7.5401 2.81551 7.29238C2.81551 7.14905 2.80897 6.85258 2.79588 6.40296C2.78278 5.95334 2.77624 5.62448 2.77624 5.4157C2.67186 5.4157 2.49614 5.45824 2.24841 5.54267C2.0007 5.62775 1.79847 5.66996 1.64238 5.66996C1.538 5.66996 1.48564 5.57212 1.48564 5.37676C1.48564 5.25961 1.23793 4.98572 0.742819 4.55574C0.247387 4.12576 0 3.79983 0 3.57829C0 3.2527 0.0517042 3.03083 0.156416 2.91336C0.260474 2.97881 0.387769 3.07665 0.53764 3.20656C0.68751 3.33712 0.817751 3.44118 0.92868 3.51939C1.03961 3.5976 1.13386 3.63686 1.21239 3.63686C1.29092 3.63686 1.55762 3.55211 2.01411 3.38261C2.47028 3.2131 2.72421 3.1025 2.77656 3.05014C2.77656 3.05014 2.77656 2.75694 2.77656 2.75694C2.77656 2.60085 2.77329 2.48664 2.76707 2.41465C2.7602 2.34331 2.75039 2.2386 2.73763 2.10182C2.72453 1.96504 2.7049 1.86065 2.67906 1.78899C2.65255 1.71733 2.62342 1.63912 2.59103 1.55436C2.5583 1.46961 2.50955 1.40449 2.44443 1.35868C2.37898 1.31319 2.30764 1.29028 2.22943 1.29028C2.22943 1.26444 2.21602 1.21535 2.19016 1.14369C2.16431 1.07202 2.15123 1.01639 2.15123 0.977453C2.15057 0.677708 2.39796 0.351784 2.89339 1.00136e-05C2.89339 1.00136e-05 2.89339 0 2.89339 0ZM1.4467 3.92941C1.73303 4.33354 1.96798 4.72458 2.15058 5.10254C2.35902 5.07636 2.56747 5.03741 2.77624 4.98539C2.77624 4.98539 2.77624 3.51906 2.77624 3.51906C2.65909 3.558 2.51249 3.62017 2.33644 3.7046C2.16039 3.78968 2.01052 3.85447 1.88683 3.90029C1.76281 3.9461 1.66857 3.96868 1.60345 3.96868C1.55076 3.96901 1.49873 3.95591 1.4467 3.92941C1.4467 3.92941 1.4467 3.92941 1.4467 3.92941ZM3.4798 3.28443C3.42777 3.9101 3.40159 4.45723 3.40159 4.92649C3.45362 4.92649 3.54491 4.93009 3.67515 4.9363C3.8054 4.94317 3.92254 4.94612 4.02725 4.94612C4.06619 4.89409 4.1444 4.78676 4.26188 4.62347C4.37903 4.46051 4.47033 4.33027 4.53545 4.23243C4.60057 4.13491 4.6755 4.01744 4.76026 3.88065C4.84468 3.74387 4.90686 3.61985 4.94612 3.50925C4.98539 3.39864 5.00469 3.30407 5.00469 3.22553C5.00469 3.06912 4.90031 2.99123 4.69186 2.99123C4.4052 2.99123 4.00108 3.08908 3.47979 3.28443C3.47979 3.28443 3.4798 3.28443 3.4798 3.28443Z" fill="#870000" transform="matrix(1 0 0 1 2.464 3.422)" />
                        </g>
                        <g transform="matrix(1 0 0 1 15.659 2.11)">
                            <path d="M0.468018 0L0.667882 0C0.926361 0 1.24369 0.179819 1.36427 0.408446C1.78432 1.20483 2.63691 3.05101 2.63691 4.91606C2.63691 6.78713 1.77881 8.67719 1.36022 9.48786C1.24163 9.71753 0.926361 9.89855 0.667882 9.89855L0.468018 9.89855C0.209539 9.89855 0.111961 9.72131 0.238122 9.49571C0.68901 8.68944 1.62271 6.79319 1.62271 4.91606C1.62271 3.04467 0.694713 1.19227 0.242273 0.400355C0.11405 0.175922 0.209539 0 0.468018 0Z" fill="#F1EEE9" fillRule="evenodd" transform="matrix(1 0 0 1 0 1.055)" />
                            <path d="M0.555176 0L0.755478 0C1.06209 0 1.4332 0.216394 1.57012 0.490737C2.05334 1.4589 3.04259 3.71989 3.04259 6.00404C3.04259 8.29566 2.04686 10.6106 1.5654 11.596C1.43079 11.8715 1.06209 12.0892 0.755478 12.0892L0.555176 12.0892C0.248561 12.0892 0.127433 11.8757 0.270826 11.6047C0.789563 10.6242 1.87236 8.3024 1.87236 6.00404C1.87236 3.71284 0.796291 1.44495 0.275684 0.481809C0.129886 0.212076 0.248561 0 0.555176 0Z" fill="#F1EEE9" fillRule="evenodd" transform="matrix(1 0 0 1 1.298 0)" />
                        </g>
                        <g transform="matrix(-1 0 0 1 4.341 2.028)">
                            <path d="M0.468018 0L0.667882 0C0.926361 0 1.24369 0.179819 1.36427 0.408446C1.78432 1.20483 2.63691 3.05101 2.63691 4.91606C2.63691 6.78713 1.77881 8.67719 1.36022 9.48786C1.24163 9.71753 0.926361 9.89855 0.667882 9.89855L0.468018 9.89855C0.209539 9.89855 0.111961 9.72131 0.238122 9.49571C0.68901 8.68944 1.62271 6.79319 1.62271 4.91606C1.62271 3.04467 0.694713 1.19227 0.242273 0.400355C0.11405 0.175922 0.209539 0 0.468018 0Z" fill="#F1EEE9" fillRule="evenodd" transform="matrix(1 0 0 1 0 1.055)" />
                            <path d="M0.555176 0L0.755478 0C1.06209 0 1.4332 0.216394 1.57012 0.490737C2.05334 1.4589 3.04259 3.71989 3.04259 6.00404C3.04259 8.29566 2.04686 10.6106 1.5654 11.596C1.43079 11.8715 1.06209 12.0892 0.755478 12.0892L0.555176 12.0892C0.248561 12.0892 0.127433 11.8757 0.270826 11.6047C0.789563 10.6242 1.87236 8.3024 1.87236 6.00404C1.87236 3.71284 0.796291 1.44495 0.275684 0.481809C0.129886 0.212076 0.248561 0 0.555176 0Z" fill="#F1EEE9" fillRule="evenodd" transform="matrix(1 0 0 1 1.298 0)" />
                        </g>
                    </g>}
                </g>
            )}

            {/* single hit target: tap anywhere on the track to jump, drag from
          anywhere to slide */}
            <g>

            </g>
            <rect
                ref={trackRef}
                x={catcherX}
                y={0}
                width={catcherWidth}
                height={height}
                fill="transparent"
                pointerEvents="all"
                style={{ touchAction: "none", cursor: disabled ? "default" : "pointer" }}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
            />

            <line
                x1={trackStart}
                y1={trackY}
                x2={trackEnd}
                y2={trackY}
                stroke={trackColor}
                strokeWidth={trackHeight}
                strokeLinecap="round"
                pointerEvents="none"
            />
            <line
                x1={trackStart}
                y1={trackY}
                x2={thumbX}
                y2={trackY}
                stroke={fillColor}
                strokeWidth={trackHeight}
                strokeLinecap="round"
                pointerEvents="none"
            />

            <circle
                cx={thumbX}
                cy={trackY}
                r={thumbOuterR}
                fill="#ffffff"
                pointerEvents="none"
            />
            <circle
                cx={thumbX}
                cy={trackY}
                r={thumbInnerR}
                fill={`url(#${gradId})`}
                pointerEvents="none"
            />
        </g>
    );
}



export const BgGameScene = () => {
    // Используем React.useId() для гарантированной уникальности ID даже при создании нескольких экземпляров
    const baseId = useId().replace(/:/g, '');

    const clipPathId = `bg_game_scene_clip_path_1_${baseId}`;
    const gradientId = `bg_game_scene_gradient_2_${baseId}`;

    return (
        <g>
            <defs>
                <clipPath id={clipPathId}>
                    <rect width="1920" height="1080" />
                </clipPath>
                <linearGradient
                    id={gradientId}
                    gradientUnits="userSpaceOnUse"
                    x1="960"
                    y1="0"
                    x2="960"
                    y2="26.192"
                >
                    <stop offset="0" stopColor="#B08161" />
                    <stop offset="0.54" stopColor="#825531" />
                    <stop offset="1" stopColor="#331B06" />
                </linearGradient>
            </defs>
            <g clipPath={`url(#${clipPathId})`}>
                <rect width="1920" height="1080" fill="#FFFFFF" fillRule="evenodd" />
                <rect
                    width="1920"
                    height="1080"
                    fill="#240B04"
                    fillRule="evenodd"
                    strokeWidth="1"
                    stroke="#808080"
                />
                <rect width="1920" height="297" fill="#5B3E2A" fillRule="evenodd" />
                <path
                    d="M0 3.55271e-14C36.6875 186.869 201.381 327.843 399 327.843C596.619 327.843 761.313 186.869 798 -1.72307e-13L0 0L0 3.55271e-14Z"
                    fill="#080808"
                    fillRule="evenodd"
                    strokeWidth="20"
                    stroke="#57240A"
                    transform="translate(561 -0)"
                />
                <path
                    d="M0 0L1920 0L1920 22L0 26.192L0 0Z"
                    fill={`url(#${gradientId})`}
                    fillRule="evenodd"
                    transform="translate(0 297)"
                />
                <path
                    d="M0 434.148L1112 434.148L930.433 0L179.147 0L0 434.148Z"
                    fill="#008047"
                    fillRule="evenodd"
                    strokeWidth="30"
                    stroke="#733B22"
                    transform="translate(404 323)"
                />
                <rect
                    width="1158"
                    height="39"
                    fill="#030100"
                    fillRule="evenodd"
                    transform="translate(381 772)"
                />
                <rect
                    width="245"
                    height="16"
                    fill="#57240A"
                    fillRule="evenodd"
                    transform="translate(838 178)"
                />
                <g transform="translate(610 7.183)">
                    <rect
                        width="16"
                        height="121"
                        fill="#57240A"
                        fillRule="evenodd"
                        transform="translate(0 2.817)"
                    />
                    <rect
                        width="16"
                        height="184.817"
                        fill="#57240A"
                        fillRule="evenodd"
                        transform="translate(36 0)"
                    />
                    <rect
                        width="16"
                        height="212"
                        fill="#57240A"
                        fillRule="evenodd"
                        transform="translate(72 0.817)"
                    />
                    <rect
                        width="16"
                        height="242"
                        fill="#57240A"
                        fillRule="evenodd"
                        transform="translate(108 0.817)"
                    />
                    <rect
                        width="16"
                        height="263"
                        fill="#57240A"
                        fillRule="evenodd"
                        transform="translate(144 0.817)"
                    />
                    <rect
                        width="16"
                        height="281"
                        fill="#57240A"
                        fillRule="evenodd"
                        transform="translate(180 0.817)"
                    />
                    <rect
                        width="16"
                        height="289"
                        fill="#57240A"
                        fillRule="evenodd"
                        transform="translate(216 0.817)"
                    />
                    <rect
                        width="16"
                        height="113"
                        fill="#57240A"
                        fillRule="evenodd"
                        transform="translate(252 176.817)"
                    />
                    <rect
                        width="16"
                        height="113"
                        fill="#57240A"
                        fillRule="evenodd"
                        transform="translate(288 176.817)"
                    />
                    <rect
                        width="16"
                        height="113"
                        fill="#57240A"
                        fillRule="evenodd"
                        transform="translate(324 176.817)"
                    />
                    <rect
                        width="16"
                        height="113"
                        fill="#57240A"
                        fillRule="evenodd"
                        transform="translate(360 176.817)"
                    />
                    <rect
                        width="16"
                        height="113"
                        fill="#57240A"
                        fillRule="evenodd"
                        transform="translate(396 176.817)"
                    />
                    <rect
                        width="16"
                        height="113"
                        fill="#57240A"
                        fillRule="evenodd"
                        transform="translate(432 176.817)"
                    />
                    <rect
                        width="16"
                        height="289"
                        fill="#57240A"
                        fillRule="evenodd"
                        transform="translate(468 0.817)"
                    />
                    <rect
                        width="16"
                        height="280"
                        fill="#57240A"
                        fillRule="evenodd"
                        transform="translate(504 0.817)"
                    />
                    <rect
                        width="16"
                        height="262"
                        fill="#57240A"
                        fillRule="evenodd"
                        transform="translate(540 0.817)"
                    />
                    <rect
                        width="16"
                        height="244"
                        fill="#57240A"
                        fillRule="evenodd"
                        transform="translate(576 0.817)"
                    />
                    <rect
                        width="16"
                        height="123"
                        fill="#57240A"
                        fillRule="evenodd"
                        transform="translate(684 0.817)"
                    />
                    <rect
                        width="16"
                        height="210"
                        fill="#57240A"
                        fillRule="evenodd"
                        transform="translate(612 0.817)"
                    />
                    <rect
                        width="16"
                        height="174"
                        fill="#57240A"
                        fillRule="evenodd"
                        transform="translate(648 0.817)"
                    />
                </g>
                <g transform="translate(1617 72)">
                    <path
                        d="M0 6L0 3C0 2.17157 0.292893 1.46446 0.87868 0.878677C1.46447 0.292892 2.17157 0 3 0L117 0C117.828 0 118.536 0.292892 119.121 0.878677C119.707 1.46446 120 2.17157 120 3L120 32C120 32.8284 119.707 33.5355 119.121 34.1213C118.536 34.7071 117.828 35 117 35L3 35C2.17157 35 1.46447 34.7071 0.87868 34.1213C0.292893 33.5355 0 32.8284 0 32L0 6Z"
                        fill="#000000"
                        fillRule="evenodd"
                        fillOpacity="0.3"
                        transform="translate(0 190)"
                    />
                    <path
                        d="M0 8L0 4C0 2.89543 0.390524 1.95262 1.17157 1.17157C1.95262 0.390518 2.89543 0 4 0L96 0C97.1046 0 98.0474 0.390518 98.8284 1.17157C99.6095 1.95262 100 2.89543 100 4L100 26C100 27.1046 99.6095 28.0474 98.8284 28.8284C98.0474 29.6095 97.1046 30 96 30L4 30C2.89543 30 1.95262 29.6095 1.17157 28.8284C0.390524 28.0474 0 27.1046 0 26L0 8Z"
                        fill="#1A130E"
                        fillRule="evenodd"
                        strokeWidth="1"
                        stroke="#000000"
                        transform="translate(10 185)"
                    />
                    <path
                        d="M11.547 155C-28.453 120 51.547 100 11.547 60C-8.453 40 31.547 20 11.547 0"
                        fill="none"
                        strokeWidth="12"
                        stroke="#3D2B1F"
                        transform="translate(48.453 30)"
                    />
                    <path
                        d="M0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30Z"
                        fill="#004000"
                        fillRule="evenodd"
                        transform="translate(30 0)"
                    />
                    <path
                        d="M0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25Z"
                        fill="#005000"
                        fillRule="evenodd"
                        transform="translate(65 35)"
                    />
                    <path
                        d="M0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28Z"
                        fill="#003000"
                        fillRule="evenodd"
                        transform="translate(2 52)"
                    />
                    <path
                        d="M0 20C0 8.95431 8.9543 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20Z"
                        fill="#004500"
                        fillRule="evenodd"
                        transform="translate(50 100)"
                    />
                </g>
                <g transform="translate(404 163)">
                    <path
                        d="M0 6.18462L0 3.09231C0 2.23839 0.301905 1.50953 0.905716 0.905716C1.50953 0.301903 2.23839 0 3.09231 0L99.9846 0C100.839 0 101.567 0.301903 102.171 0.905716C102.775 1.50953 103.077 2.23839 103.077 3.09231L103.077 17.5231C103.077 18.377 102.775 19.1059 102.171 19.7097C101.567 20.3135 100.839 20.6154 99.9846 20.6154L3.09231 20.6154C2.23839 20.6154 1.50953 20.3135 0.905716 19.7097C0.301905 19.1059 0 18.377 0 17.5231L0 6.18462Z"
                        fill="#1A130E"
                        fillRule="evenodd"
                        transform="translate(0 113.385)"
                    />
                    <path
                        d="M5.95115 92.7692C-14.6642 61.8461 26.5665 30.9231 5.95115 0"
                        fill="none"
                        strokeWidth="5"
                        stroke="#3D2B1F"
                        transform="matrix(1 0 0 1 45.588 20.615)"
                    />
                    <path
                        d="M0 25.7692C0 11.5373 11.5373 0 25.7692 0C40.0012 0 51.5385 11.5373 51.5385 25.7692C51.5385 40.0012 40.0012 51.5385 25.7692 51.5385C11.5373 51.5385 0 40.0012 0 25.7692Z"
                        fill="#004000"
                        fillRule="evenodd"
                        transform="matrix(1 0 0 1 25.769 0)"
                    />
                </g>
                <g transform="translate(128 30)">
                    <g>
                        <rect width="200" height="200" fill="#102010" fillRule="evenodd" />
                        <path
                            d="M0 30C0 13.4315 26.8629 0 60 0C93.1371 0 120 13.4315 120 30C120 46.5685 93.1371 60 60 60C26.8629 60 0 46.5685 0 30Z"
                            fill="#203020"
                            fillRule="evenodd"
                            transform="translate(40 100)"
                        />
                        <path
                            d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15Z"
                            fill="#104010"
                            fillRule="evenodd"
                            transform="translate(65 155)"
                        />
                    </g>
                </g>
            </g>
        </g>
    );
};

export const PlayButtonGroup = ({
                                    x = 0,
                                    y = 0,
                                    text = 'ИГРАТЬ',
                                    onClick,
                                    className = '',
                                    ...props
                                }) => {
    // Уникальные ID, чтобы избежать конфликтов масок/градиентов
    const baseId = useId().replace(/:/g, '');
    const btnGradId = `btn_grad_${baseId}`;
    const textShadowId = `text_shadow_${baseId}`;
    const btnShadowId = `btn_shadow_${baseId}`;

    return (
        <g
            transform={`translate(${x}, ${y})`}
            onClick={onClick}
            className={`cursor-pointer transition-transform duration-150 hover:opacity-95 active:scale-95 ${className}`}
            style={{ userSelect: 'none' }}
            {...props}
        >
            <defs>
                {/* Градиент фона кнопки */}
                <linearGradient id={btnGradId} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#b45309" />
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#b45309" />
                </linearGradient>

                {/* Тень под текстом и иконкой */}
                <filter id={textShadowId} x="-20%" y="-20%" width="140%" height="140%">
                    <feOffset result="offOut" in="SourceAlpha" dx="0" dy="2" />
                    <feGaussianBlur result="blurOut" in="offOut" stdDeviation="1.5" />
                    <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                </filter>

                {/* Тень самой кнопки */}
                <filter id={btnShadowId} x="-10%" y="-10%" width="120%" height="140%">
                    <feDropShadow
                        dx="0"
                        dy="4"
                        stdDeviation="3"
                        floodColor="#78350f"
                        floodOpacity="0.5"
                    />
                </filter>
            </defs>

            {/* Основное тело кнопки и контент */}
            <g filter={`url(#${btnShadowId})`}>
                {/* Прямоугольник кнопки */}
                <rect
                    x="2"
                    y="2"
                    width="196"
                    height="56"
                    rx="12"
                    fill={`url(#${btnGradId})`}
                    stroke="#fde68a"
                    strokeWidth="1"
                    strokeOpacity="0.3"
                />

                {/* Иконка + Текст */}
                <g transform="translate(45, 16)" filter={`url(#${textShadowId})`}>
                    {/* Треугольник Play */}
                    <path d="M0 0 L18 14 L0 28 Z" fill="#fffbeb" />

                    {/* Текст */}
                    <text
                        x="30"
                        y="21"
                        fontFamily="Arial, Helvetica, sans-serif"
                        fontSize="22"
                        fontWeight="900"
                        fill="#fffbeb"
                        textAnchor="start"
                        letterSpacing="1"
                    >
                        {text}
                    </text>
                </g>
            </g>
        </g>
    );
};



export const SvgIcon = ({color = '#AD020F', className = '', ...props }) => {
    return (
        <g
            fill={"none"}
            className={className}
            {...props}
        >
            <g>
                <ellipse rx={450} fill={"#1C120F"} transform="translate(450 450)" />
                <g>
                    <g>
                        <path d="M0 453C0 202.815 203.71 0 455 0C706.29 0 910 202.815 910 453C910 703.185 706.29 906 455 906C203.71 906 0 703.185 0 453Z" />
                        <path
                            d="M455 0C203.71 0 0 202.815 0 453C0 703.185 203.71 906 455 906C706.29 906 910 703.185 910 453C910 202.815 706.29 0 455 0ZM54.1639 621.508Q20 541.091 20 453Q20 364.91 54.1639 284.492Q87.1724 206.794 147.377 146.854Q207.591 86.9044 285.655 54.0314Q366.47 20 455 20Q543.53 20 624.345 54.0313Q702.408 86.9043 762.623 146.854Q822.828 206.794 855.836 284.492Q890 364.909 890 453Q890 541.09 855.836 621.508Q822.827 699.206 762.623 759.146Q702.408 819.096 624.345 851.969Q543.53 886 455 886Q366.47 886 285.655 851.969Q207.591 819.095 147.377 759.146Q87.1724 699.206 54.1639 621.508Z"
                            fill={color}
                            fillRule="evenodd"
                        />
                    </g>
                    <g transform="translate(37 38)">
                        <path d="M0 415C0 185.802 187.369 0 418.5 0C649.631 0 837 185.802 837 415C837 644.198 649.631 830 418.5 830C187.369 830 0 644.198 0 415Z" />
                        <path
                            d="M418.5 0C187.369 0 0 185.802 0 415C0 644.198 187.369 830 418.5 830C649.631 830 837 644.198 837 415C837 185.802 649.631 0 418.5 0ZM42.086 572.614Q9.99994 497.388 9.99997 415Q10 332.612 42.086 257.387Q73.0842 184.712 129.617 128.651Q186.159 72.5826 259.469 41.8344Q335.369 10 418.5 10Q501.632 10 577.531 41.8345Q650.841 72.5828 707.383 128.651Q763.916 184.711 794.914 257.387Q827 332.612 827 415Q827 497.388 794.914 572.613Q763.916 645.289 707.383 701.349Q650.842 757.417 577.531 788.166Q501.632 820 418.5 820Q335.368 820 259.469 788.166Q186.158 757.417 129.617 701.349Q73.084 645.288 42.086 572.614Z"
                            fill={color}
                            fillRule="evenodd"
                        />
                    </g>
                </g>
                <path
                    d="M25.6846 0L25.6846 60L28.1845 63.5C28.1845 63.5 31.9346 64.375 36.6846 74C38.3261 77.3262 38.0828 82.7033 39.6846 87L47.1845 102C47.1845 102 47.0811 108.819 42.6846 110C38.2881 111.181 34.1846 106 34.1846 106L27.1079 113.136C26.0884 113.667 25.0116 114 23.9145 114C18.5395 114 12.6845 106 12.6845 106C12.6845 106 5.35248 113.84 1.18471 108.5C-2.98306 103.16 5.18452 95.5001 5.18452 95.5001C5.18452 95.5001 8.80957 90 10.6846 84C12.5596 78 11.413 74.4731 12.6845 71.5C13.9561 68.527 16.3096 67.983 18.1846 65.108C20.0596 62.233 21.1846 60 21.1846 60L22.1845 0L25.6846 0Z"
                    fill={color}
                    fillRule="evenodd"
                    transform="translate(231.815 65)"
                />
                <g transform="matrix(-1 0 0 1 893 82)">
                    <path
                        d="M14.5176 0L22.8159 742.098L7.79785 732.444L0 11.1808L14.5176 0Z"
                        fill={color}
                        fillRule="evenodd"
                        transform="translate(184 0)"
                    />
                    <path
                        d="M163.5 0L167 298C167 298 167.25 302.125 165.5 304.5C163.75 306.875 160 307.5 160 307.5L0 306.542L0 292.526C0 292.526 149.688 292.603 150.5 292.5C151.312 292.397 153.22 292.809 153 290C152.78 287.19 150.5 15 150.5 15L163.5 0Z"
                        fill={color}
                        fillRule="evenodd"
                        transform="translate(3 21.181)"
                    />
                    <path
                        d="M14.5 0L22.5 636L8.5 623.5L8.5 513L0 16.5L14.5 0Z"
                        fill={color}
                        fillRule="evenodd"
                        transform="translate(118 51.681)"
                    />
                    <path
                        d="M170.5 337.372L170 11.0059C170 11.0059 169.875 5.25592 167 2.50592C164.125 -0.24408 158.5 0.00592041 158.5 0.00592041L0 2.50592L0 17.173L148.5 15.5059C148.5 15.5059 152 15.6567 153.5 17.2817C155 18.9067 155 21.5059 155 21.5059L156.5 326.006L170.5 337.372Z"
                        fill={color}
                        fillRule="evenodd"
                        transform="translate(0 374.175)"
                    />
                    <path
                        d="M0 2.45184L98.5 0L98.5 14.9272L59.5 16.4519L63.5068 352.402L98.5 351.712L98.5 366.303L18.5 365.952L11 352.452L49.5 352.452L44 16.4519L0 17.4282L0 2.45184Z"
                        fill={color}
                        fillRule="evenodd"
                        transform="translate(30.5 198.229)"
                    />
                </g>
                <path
                    d="M3.5 112C3.5 112 6.22266 115.5 8.59766 115.5C10.9727 115.5 13 112 13 112C13 112 12.375 94.2466 11 77.8716C9.625 61.4966 7.5 46.5 7.5 46.5L6.5 24C6.5 24 8.59766 22.2982 8.59766 20.1732C8.59766 20.0352 8.6142 19.8954 8.59766 19.7546L6.5 15.5L6.5 0L3.5 0.476563L3.5 15.4726C3.5 15.4726 0 17.7913 0 20.1732C0 22.555 3.5 25 3.5 25L3.5 48C3.5 48 2.5 62.5473 2.5 78.5473C2.5 94.5473 3.5 112 3.5 112Z"
                    fill={color}
                    fillRule="evenodd"
                    transform="translate(253 174)"
                />
                <g transform="translate(18 85.819)">
                    <path
                        d="M14.5176 0L22.8159 742.098L7.79785 732.444L0 11.1808L14.5176 0Z"
                        fill={color}
                        fillRule="evenodd"
                        transform="translate(184 0)"
                    />
                    <path
                        d="M163.5 0L167 298C167 298 167.25 302.125 165.5 304.5C163.75 306.875 160 307.5 160 307.5L0 306.542L0 292.526C0 292.526 149.688 292.603 150.5 292.5C151.312 292.397 153.22 292.809 153 290C152.78 287.19 150.5 15 150.5 15L163.5 0Z"
                        fill={color}
                        fillRule="evenodd"
                        transform="translate(3 21.181)"
                    />
                    <path
                        d="M14.5 0L22.5 636L8.5 623.5L8.5 513L0 16.5L14.5 0Z"
                        fill={color}
                        fillRule="evenodd"
                        transform="translate(118 51.681)"
                    />
                    <path
                        d="M170.5 337.372L170 11.0059C170 11.0059 169.875 5.25592 167 2.50592C164.125 -0.24408 158.5 0.00592041 158.5 0.00592041L0 2.50592L0 17.173L148.5 15.5059C148.5 15.5059 152 15.6567 153.5 17.2817C155 18.9067 155 21.5059 155 21.5059L156.5 326.006L170.5 337.372Z"
                        fill={color}
                        fillRule="evenodd"
                        transform="translate(0 374.175)"
                    />
                    <path
                        d="M0 2.45184L98.5 0L98.5 14.9272L59.5 16.4519L63.5068 352.402L98.5 351.712L98.5 366.303L18.5 365.952L11 352.452L49.5 352.452L44 16.4519L0 17.4282L0 2.45184Z"
                        fill={color}
                        fillRule="evenodd"
                        transform="translate(30.5 198.229)"
                    />
                </g>
                <path
                    d="M18.5 114.387C18.5 114.387 20.625 90.7422 16 62.7422C11.375 34.7422 0 2.38733 0 2.38733L2.68555 0C2.68555 0 15.375 30.2408 21 59.2408C26.625 88.2408 27 114.387 27 114.387L18.5 114.387Z"
                    fill={color}
                    fillRule="evenodd"
                    transform="translate(652 714.113)"
                />
                <path
                    d="M101 32.3912C101 32.3912 98.2764 26.8596 94.0264 23.7697C89.7764 20.6798 85.5 19.2227 85.5 19.2227C85.5 19.2227 89.5 33.9919 86.5 47.1942C83.5 60.3965 73.5 72.0317 73.5 72.0317C73.5 72.0317 69 67.5844 65.5 62.2094C62 56.8344 59.5 50.5317 59.5 50.5317C59.5 50.5317 57.125 59.7817 49.5 66.5317C41.875 73.2817 29 77.5316 29 77.5316C29 77.5316 27 69.7094 27 62.2094C27 54.7094 29 47.5317 29 47.5317C29 47.5317 20.6782 48.9978 13.4282 48.3728C6.17822 47.7478 0 45.0317 0 45.0317C0 45.0317 3.625 36.9814 9 31.6064C14.375 26.2314 21.5 23.5316 21.5 23.5316C21.5 23.5316 16.5532 23.5316 13.4282 22.0316C10.3032 20.5317 9 17.5317 9 17.5317C9 17.5317 18.4292 2.28149 33.6792 0.531494C38.6179 -0.0352783 53.4077 -0.616089 59.5 1.45715C65.5923 3.5304 70 10.5317 70 10.5317C70 10.5317 73.8237 10.4067 77.6987 11.5317C81.5737 12.6567 85.5 15.5317 85.5 15.5317C85.5 15.5317 90.1514 16.5662 94.0264 19.9411C97.9014 23.3161 101 28.5316 101 28.5316L101 32.3912Z"
                    fill={color}
                    fillRule="evenodd"
                    transform="translate(565.5 729.468)"
                />
                <path
                    d="M0 26.8723L16.5 9.87225C16.5 9.87225 26 -2.25293 39 0.37207C52 2.99707 68.5 20.3723 68.5 20.3723C68.5 20.3723 65.4824 24.3723 60.3574 26.8723C55.2324 29.3723 48 30.3723 48 30.3723C48 30.3723 48.75 40.7498 46.5 49.6248C44.25 58.4998 39 65.8723 39 65.8723C39 65.8723 32.8486 63.2473 27.8486 57.3723C22.8486 51.4973 19 42.3723 19 42.3723C19 42.3723 15.9663 49.3723 12.4663 49.3723C8.96631 49.3723 5 42.3723 5 42.3723C5 42.3723 2.75 39.9998 1.5 36.1248C0.25 32.2498 0 26.8723 0 26.8723Z"
                    fill={color}
                    fillRule="evenodd"
                    transform="translate(660 702.128)"
                />
                <path
                    d="M83.0001 79.6099L79.5001 74.1099C79.5001 74.1099 77.3844 72.1346 74.8843 72.1346C72.3843 72.1346 69.5 74.1099 69.5 74.1099C69.5 74.1099 68.0001 76.9849 63.5001 79.6099C59.0001 82.2349 51.5001 84.6099 51.5001 84.6099C51.5001 84.6099 43.0406 86.1452 35.2905 86.1452C27.5405 86.1452 20.5 84.6099 20.5 84.6099C20.5 84.6099 8.875 79.1036 5 72.2287C1.125 65.3536 5 57.1099 5 57.1099C5 57.1099 1.625 55.9605 0.5 52.4605C-0.625 48.9605 0.5 43.1099 0.5 43.1099C0.5 43.1099 2.25 38.933 5 36.058C7.75 33.183 8.125 32.3469 11.5 31.6099C14.875 30.8728 15.25 31.4849 18.5 33.1099C21.75 34.7349 24.5 35.9934 24.5 38.1099C24.5 40.2263 13.0591 44.817 18.5 61.1099C23.9409 77.4028 38 77.4551 38 77.4551C38 77.4551 21.9365 66.1128 24.5 49.6098C27.0635 33.1069 46.0001 35.1099 46.0001 35.1099C46.0001 35.1099 49.2501 24.7349 54.5001 22.1099C59.7501 19.4849 67.0001 24.6099 67.0001 24.6099C67.0001 24.6099 80.3688 12.166 92.5001 23.1732C104.631 34.1804 96.3423 50.5973 99 52.4605C101.658 54.3237 111 44.2418 111 31.6099C111 18.9779 93.1071 2.34106 97.0001 0.33844C100.893 -1.66418 127.668 4.53369 124 37.5687C123.387 43.088 117.639 50.3683 111 54.6097C101.952 60.3901 91.2803 62.4609 90 64.6098C87.7803 68.3354 92.5001 74.1099 92.5001 74.1099C92.5001 74.1099 92.3751 78.2349 90.0001 79.6099C87.6251 80.9849 83.0001 79.6099 83.0001 79.6099Z"
                    fill={color}
                    fillRule="evenodd"
                    transform="translate(564.5 637.39)"
                />
                <path
                    d="M32.5538 11.4913C27.9286 14.8663 28.9284 19.3663 23.5534 22.4913C18.1784 25.6163 12.8311 24.0817 9.05371 25.4913C5.27637 26.9008 2.17865 21.1163 0.55365 15.9913C-1.07135 10.8663 1.06567 5.41119 4.55389 3.49133C8.04211 1.57147 10.1689 4.50995 15.4189 3.75995C20.6689 3.00995 20.8323 1.20496 25.5538 0.491333C30.2752 -0.22229 30.1799 -0.219482 34.3049 0.905518C38.4299 2.03052 41.1788 3.50092 42.0537 4.99133C42.9287 6.48175 44.4287 7.36633 42.0537 8.99133C39.6787 10.6163 37.1788 8.11633 32.5538 11.4913Z"
                    fill={color}
                    fillRule="evenodd"
                    transform="translate(582.446 644.509)"
                />
                <path
                    d="M25.489 1.31635C27.4165 2.72906 19.864 3.44128 17.489 8.31628C15.114 13.1913 18.0707 16.8163 15.989 20.8163C13.9073 24.8163 13.0374 21.0663 9.16235 24.3163C5.28735 27.5663 1.0351 35.4282 0.489014 33.8163C-0.0570679 32.2044 -0.260986 29.9963 0.489014 26.618C1.23901 23.2397 3.40533 22.3113 3.48901 20.303C3.56964 18.3687 2.48901 17.4763 2.48901 15.1046C2.48901 12.733 2.49298 13.5043 3.48901 10.8163C4.48511 8.12842 7.86401 9.63599 10.989 7.31628C14.1141 4.99658 14.0883 2.35834 15.989 1.5376C21.489 -0.837402 23.5615 -0.0963745 25.489 1.31635Z"
                    fill={color}
                    fillRule="evenodd"
                    transform="translate(562.511 641.683)"
                />
                <path
                    d="M0.00244141 21.0673C-0.17627 19.3446 9.50244 7.31726 17.5024 2.06726C20.4575 0.127991 22.9694 3.38593 24.5025 3.06757C27.12 2.52399 28.0611 -0.484558 32.0024 0.0672607C38.2524 0.942261 40.3252 3.2616 42.5024 5.7514C44.6797 8.24121 38.8281 7.63721 36.5025 9.56726C34.4242 11.2921 33.5167 15.2531 28.5024 17.0673C24.4973 18.5164 19.8528 15.014 15.4728 16.0673C8.23309 17.8081 0.181152 22.7899 0.00244141 21.0673Z"
                    fill={color}
                    fillRule="evenodd"
                    transform="translate(592.998 620.932)"
                />
                <path
                    d="M0.0324097 5.97443C-0.59259 3.47443 7.93121 -1.55469 15.7452 0.468933C23.5591 2.49261 30.7775 11.6689 31.2883 14.069C31.636 15.7025 28.8761 12.6057 24.6138 10.8391C22.6141 10.0103 20.2836 10.7151 17.7883 10.069C14.9878 9.34369 14.0054 4.91187 11.2881 4.56897C6.42365 3.95508 0.433411 7.57843 0.0324097 5.97443Z"
                    fill={color}
                    fillRule="evenodd"
                    transform="translate(641.712 620.931)"
                />
                <path
                    d="M39.456 35.1047C41.5396 33.6136 42.6185 30.0418 40.9561 25.637C39.738 22.4098 36.3017 18.7355 34.4561 15.1047C31.7432 9.76801 30.0221 4.36279 26.9557 1.10474C23.9703 -2.0672 18.1992 2.65613 15.4557 2.1048C10.8474 1.17865 11.8286 1.45502 7.45599 1.10474C3.08337 0.754456 -2.19391 11.9456 0.955994 15.1047C4.1059 18.2639 3.24609 22.5679 6.03931 20.362C7.33838 19.3361 17.7635 17.9282 24.4561 22.1047C32.1533 26.9083 36.3245 37.3457 39.456 35.1047Z"
                    fill={color}
                    fillRule="evenodd"
                    transform="translate(627.544 629.895)"
                />
            </g>
        </g>
    );
};


export const BannerFrame = ({
                                strokeColor = "#E3C170",
                                fillColor = "#E3C170",
                                textColor = "#fff",
                                className = "",
                                text = "Играть",
                                tx = 75,
                                ty = 80,
                                fontSize = 70

                            }) => {


    return (
        <g
            fill="none"
            className={className}
        >
            <defs>
                <filter colorInterpolationFilters="sRGB" x="-218" y="-76" width="220" height="78" id={"filter_start_1"}>
                    <feFlood floodOpacity="0" result="BackgroundImageFix_start_1" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix_start_1" result="Shape_start_2" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" in="SourceAlpha" result="HardAlpha_start_3" />
                    <feOffset dx="0" dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite operator="arithmetic" k2="-1" k3="1" in2="HardAlpha_start_3" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.251 0" />
                    <feBlend mode="normal" in2="Shape_start_2" result="InnerShadow_start_4" />
                </filter>
            </defs>

            <g transform="translate(2 2)">
                {/* Внешний контур */}
                <path
                    d="M26.5 1.03961L349.5 0L360 10.3028L360 15.5183L364.5 15.5183C364.5 15.5183 364.375 21.1388 367 24.0134C369.625 26.8881 376 27.4986 376 27.4986L376 94C376 94 370.5 94.1489 367.5 97C364.5 99.8511 364.5 105.404 364.5 105.404L359 105.697L359 111L349.5 120L26.5 120.349L17.564 111L17.564 104.973L12 105.404C12 105.404 12 99.9685 9 97C6 94.0315 0 93.5305 0 93.5305L3.51759e-07 27.5C3.51759e-07 27.5 5.625 27.1805 9 24.5C12.375 21.8195 12 15.7216 12 15.7216L17 16.0771L17 10.2455L26.5 1.03961Z"
                    fill="none"
                    stroke={strokeColor}
                    strokeWidth="4"

                />
                {/* Внутренняя плашка */}
                <path
                    d="M19.5 0L334 0L336 2.5L336 14.5L343.5 14.5C343.5 14.5 345.25 18.125 347.5 20.5C349.75 22.875 352.5 24 352.5 24L352.5 72.5C352.5 72.5 349.25 74.125 347 76.5C344.75 78.875 343.5 82 343.5 82L335 82L335 92.5738L332.709 95.5L19.5 96.5L16.5 94L16.5 82.3216L10.3149 82.1484C10.3149 82.1484 8.07874 77.9121 5.5 75.5C2.92126 73.0879 0 72.5 0 72.5L0 24.7607C0 24.7607 3.875 22.992 6.5 20.5C9.125 18.008 10 14.5 10 14.5L16.5 14.6525L16.5 2.99994L19.5 0Z"
                    fill={fillColor}
                    fillRule="evenodd"
                    transform="translate(11.5 12.5)"
                />
                <text filter={"url(#filter_start_1)"} x={tx} y={ty} fill={textColor} fontSize={fontSize}>{text}</text>
            </g>
        </g>
    );
};


export const SettingsBackgroundGroup = ({
                                            bgColor = "#1C120F",
                                            accentColor = "#E3C16F",
                                            borderColor = "#E3C170",
                                            ...props
                                        }) => {
    return (
        <g transform="translate(0.055 0.058)" {...props}>
            {/* Основной подложка/фон */}
            <rect width="632" height="631" fill={bgColor} fillRule="evenodd" />

            {/* Декоративные угловые квадраты */}
            <rect width="30" height="30" fill={accentColor} fillRule="evenodd" transform="translate(0.078 601)" />
            <rect width="30" height="30" fill={accentColor} fillRule="evenodd" transform="translate(602.078 601)" />
            <rect width="30" height="30" fill={accentColor} fillRule="evenodd" transform="translate(602.078 0)" />
            <rect width="30" height="30" fill={accentColor} fillRule="evenodd" transform="translate(0.078 0)" />

            {/* Сложный резной контур */}
            <path
                d="M0 582.698L0.666992 507.058L25.5547 507.058L25.5547 530.058L50.5547 530.058L50.5547 459.058L25.5547 459.029L25.5547 480.058L0 480.171L0 142.298L25.5547 142.235L25.5547 163.558L50.5547 164.234L50.5547 91.5582L25.5547 91.4666L25.5547 116.058L0 116.28L0 39.7617L25.5547 39.3444L25.5547 64.0582L50.5547 63.7132L50.5547 51.5582L64.5547 51.5582L64.5547 27.0582L39.0547 27.0582L39.0547 0.187378L117.055 0L117.055 25.8062L91.0547 25.8062L91.0547 51.5288L162.555 51.5288L162.555 25.4678L142.055 25.4678L142.055 0.00878906L480.055 0.0697021L480.055 24.8038L458.055 24.8038L458.055 50.8284L531.055 51.5582L531.055 25.5925L505.555 24.8038L505.555 0.0479736L582.555 0.0582275L582.555 25.4872L558.555 26.4331L558.555 51.1481L570.055 51.5582L570.055 65.4041L598.055 65.4041L598.055 40.5579L622.079 40.5579L622.079 116.862L598.055 117.133L598.055 91.065L570.055 91.4723L570.055 163.16L598.055 163.974L598.055 143.609L622.215 143.422L622.105 481.095L598.055 480.911L598.055 458.015L570.055 458.452L570.055 531.78L598.055 531.19L598.055 506.722L622.079 506.591L622.079 582.07L598.055 581.88L598.055 556.905L570.055 557.034L570.055 571.558L558.555 571.29L558.555 597.058L582.555 597.766L582.555 621.056L505.555 621.074L505.555 597.322L531.055 597.008L531.055 571.29L458.055 571.29L458.055 596.951L480.055 597.277L480.055 621.39L142.055 620.982L142.055 595.709L162.555 595.621L162.555 570.883L91.0547 570.888L91.0547 595.12L117.055 595.729L117.055 620.919L39.0547 621.123L39.0547 594.656L64.5547 594.462L64.5547 570.077L50.5547 569.923L50.5547 557.722L25.5547 557.397L25.5547 583.066L0 582.698Z"
                fill="none"
                stroke={borderColor}
                strokeWidth="10"
                transform="translate(4.945 4.942)"
            />
        </g>
    );
};





