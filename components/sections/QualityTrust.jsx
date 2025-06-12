'use client'
import { useColorTheme } from "../ColorThemeContext";

export const QualityTrust = ({data}) => {
    const { theme } = useColorTheme();
    const [flashlight, first, second, third] = theme.colors;
    const gradientFirst = theme.gradient_1;
    const gradientSecond = theme.gradient_2;
    const gradientThird = theme.gradient_3;

    return(<div className="pt-20 overflow-hidden mx-auto lg:pt-30">
        <div className="container-center z-20 mx-auto">
            <h3 className="font-h3 gradient-color text-center mx-3 md:mx-auto header-size">{data.header}</h3>
            <p className="font-paragraph text-grey px-5 paragraph-size lg:w-[55%]">{data.text}</p>
        </div>
        <div className="relative w-[100dvw] h-[350px] lg:h-[500px] mt-20">
            <div className={`absolute z-10 top-0 left-1/2 -translate-x-1/2 w-[1050px] h-[1000px] 
            rounded-full stroke-circle stroke-circle-lightning`} 
            style={{ '--flashlight-color': first }}/>
            <div className={`absolute z-9 top-10 left-1/2 -translate-x-1/2 w-[1050px] h-[800px]
            bg-radial-[at_50%_65%] dark:from-black dark:via-black/75 dark:to-white/20 to-80%
            rounded-full blur-lg from-white via-white/75 to-white/20 opacity-30`} />
            <div className={`absolute z-9 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[1050px] h-[900px]
            bg-gradient-to-b from-transparent dark:via-black dark:to-black via-white to-white blur-md
            rounded-full opacity-70`} />
            <div className={`absolute z-9 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[1050px] h-[900px]
            bg-gradient-to-b from-transparent dark:via-black/90 dark:to-black  via-white/90 to-white blur-md
            rounded-full opacity-60`} />
            <div className={`absolute z-9 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[1050px] h-[800px]
            bg-gradient-to-b from-transparent dark:via-black/80 dark:to-black via-white/80 to-white blur-lg
            rounded-full opacity-50`} />
            <div className={`absolute z-9 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[1050px] h-[600px]
            bg-gradient-to-b from-transparent dark:via-black/80 dark:to-black via-white/80 to-white  blur-lg
            rounded-full opacity-50`} />
            <div className={`absolute z-9 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[1050px] h-[800px]
            bg-gradient-to-b from-transparent dark:via-black/90 dark:to-black via-white/90 to-white blur-lg
            rounded-full opacity-70`} />
            <div className={`absolute z-12 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[1150px] h-[500px]
            bg-gradient-to-b from-transparent dark:via-black dark:to-black via-white to-white  blur-md
            rounded-full opacity-80`} />
            <div className={`absolute z-12 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[1350px] h-[500px]
            bg-gradient-to-b dark:from-black/55 dark:via-black dark:to-black via-white to-white blur-2xl
            rounded-full opacity-90`} />

            <div className={`absolute z-3 -top-10 left-1/2 -translate-x-1/2  w-[800px] h-[500px] rounded-full opacity-80 blur-[80px]`} 
            style={{ backgroundColor: first }}/>

            <div className={`absolute z-3 top-0 left-1/2 -translate-x-1/2  w-[1000px] h-[600px] opacity-60 blur-[100px]`} 
            style={{ backgroundColor: second }}/>

            <div className="absolute z-4 top-0 left-1/2 -translate-x-1/2 w-[1050px] h-[1000px] rounded-full blur-[3px] opacity-85" 
            style={{ backgroundColor: third }}/>

            <div className="absolute dark:block hidden z-5 top-1.5 left-1/2 -translate-x-1/2 w-[1050px] h-[1000px] rounded-full blur-[2px]" 
            style={{ backgroundImage: `linear-gradient(to bottom, ${gradientFirst[0]} 0%, ${gradientFirst[1]} 15%, ${gradientFirst[2]} 35%)`, }}/>

            <div className="absolute z-6 top-10 left-1/2 -translate-x-1/2 w-[1050px] h-[1000px] rounded-full opacity-60 blur-[10px]" 
            style={{ backgroundImage: `linear-gradient(to bottom, ${gradientSecond[0]} 0%, ${gradientSecond[1]} 35%, ${gradientSecond[2]} 65%)`, }}/>

            <div className="absolute block dark:hidden z-5 top-1.5 left-1/2 -translate-x-1/2 w-[1050px] h-[1000px] rounded-full blur-[2px]" 
            style={{ backgroundImage: `linear-gradient(to bottom, ${gradientThird[0]} 0%, ${gradientThird[1]} 20%, ${gradientThird[2]} 35%)`, }}/>
        </div>
    </div>)
}