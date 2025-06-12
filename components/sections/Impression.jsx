'use client'
import Image from "next/image"
import { ImressionCard } from "../ImressionCard"
import { useColorTheme } from "../ColorThemeContext";

export const Impression = ({data}) => {
    const { theme } = useColorTheme();
    const flashlight = theme.colors[0];

    return(<div className="container-center mt-15">
        <h3 className="font-h3 text-center header-size">{data.header}</h3>
        <p className="font-paragraph text-grey px-5 paragraph-size">{data.text}</p>
        <div className="container-center px-3 flex-center-start gap-x-5 max-lg:flex-col-center lg:pt-5">
            <div className="flex-col-start w-full mx-4 lg:w-[30%]">
                {data.cards?.map((item, id) => <ImressionCard key={id} data={item} first={id === 0}/>)}
            </div>
            <div className="w-full bg-white/2 border-1 border-grey/45 rounded-2xl px-10 pt-5 overflow-hidden lg:w-[60%] max-lg:mt-5">
                <div className="relative w-full min-h-[205px] aspect-video rounded-lg layer-blur-secondary"
                     style={{ '--flashlight-color': flashlight }}>
                    <Image 
                        className="dark:block hidden hero-wide-border translate-y-5 object-auto object-top rounded-tr-2xl rounded-tl-2xl "
                        src={data.dashboardDark}
                        placeholder="blur"
                        blurDataURL={data.dashboardDarkBlur}
                        alt="Dashboard example"
                        fill/>
                    <Image 
                        className="block dark:hidden hero-wide-border translate-y-5 object-auto object-top rounded-tr-2xl rounded-tl-2xl "
                        src={data.dashboard}
                        placeholder="blur"
                        blurDataURL={data.dashboardBlur}
                        alt="Dashboard example"
                        fill/>
                </div>
            </div>
        </div>

    </div>)
}