'use client'
import Image from "next/image"
import { useColorTheme } from "./ColorThemeContext";

export const FeaturesCard = ({item, id}) => {
    const { theme } = useColorTheme();
    const [flashlight, soft, second] = theme.colors;
    console.log(`${theme.name}${item.url}`)

    return(<div className={`w-full h-[500px] p-[1px] gradient-border mx-auto rounded-xl max-md:max-w-[400px] overflow-hidden`}>
        <div className="flex-col-start h-full bg-white dark:bg-black/95 rounded-xl">
            <h3 className="font-h4 text-center max-lg:mx-auto mt-3 lg:ml-5">{item.name}</h3>
            <p className="font-paragraph-sm text-grey px-3 max-lg:text-center mt-2 max-lg:mx-auto lg:ml-3 lg:w-[70%]">{item.text}</p>
            <div className="relative w-full h-[75%] middle-light"
                 style={{ '--flashlight-color': flashlight }}>
                <Image className="object-fill object-bottom block dark:hidden" src={`/images/${theme.name}_${item.url}`} fill alt={`Feature #${id}`} />
                <Image className="object-fill object-bottom dark:block hidden" src={`/images/${theme.name}_${item.urlDark}`} fill alt={`Feature #${id}`} />
            </div>
        </div>
    </div>)
}