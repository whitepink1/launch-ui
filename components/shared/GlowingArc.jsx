export const GlowingArc = ({ color = 'rgb(253,186,116)', color1 = 'rgba(253,186,116, 0.4)'  }) => {
    return(<div className="relative w-full h-[25vh] flex justify-center items-start">
        <svg
            viewBox="0 0 300 150"
            className="absolute -top-1/3 w-full h-full"
            preserveAspectRatio="none"
        >
            <defs>
            <radialGradient id="glow" cx="50%" cy="0%" r="100%">
                <stop offset="0%" stopColor={color} stopOpacity="0.8" />
                <stop offset="100%" stopColor={color1} stopOpacity="0.2" />
            </radialGradient>
            <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="10" />
            </filter>
            </defs>
            <path
            d="M 0 150 Q 150 0 300 150"
            fill="none"
            stroke="url(#glow)"
            strokeWidth="45"
            strokeLinecap="round"
            filter="url(#blur)"
            />
        </svg>
    </div>)
}