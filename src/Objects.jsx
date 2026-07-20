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
                                            }) {
    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = useState(defaultValue);
    const currentValue = isControlled ? value : internalValue;

    const trackRef = useRef(null);
    const draggingRef = useRef(false);
    const uid = useId().replace(/[:]/g, "");

    const iconSpace = showIcon ? 56 : 0;
    const trackHeight = 10;
    const thumbOuterR = 20;
    const thumbInnerR = 13;

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
                    <path
                        d="M6 24 L6 6 L24 2 L24 20 M6 24a4 4 0 1 0 8 0a4 4 0 1 0 -8 0 M24 20a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"
                        fill="none"
                        stroke={iconColor}
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
            )}

            {/* single hit target: tap anywhere on the track to jump, drag from
          anywhere to slide */}
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