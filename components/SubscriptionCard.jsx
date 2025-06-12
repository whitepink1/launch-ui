'use client'
import Image from "next/image"
import { ButtonLink } from "./shared/ButtonLink"
import { useColorTheme } from "./ColorThemeContext";

export const SubscriptionCard = ({card, id, taxes, source}) => {
    const { theme } = useColorTheme();
    const flashlight = theme.colors[0];

    return(
    <div className={`mt-5 gradient-border h-[500px] w-[335px] md:w-[350px] 2xl:w-[450px] 2xl:h-[550px] max-md:mx-auto ${id === 0 && 'max-xl:hidden'} ${id === 1 ? 'stroke-blur-card' : 'stroke-blur-card-silver'}`}
         style={{ '--flashlight-color': flashlight }}>
        <div className={`flex-col-start-start gap-y-6 w-full h-full overflow-hidden ${id === 1 && 'layer-blur-card'} ${id === 0 && 'layer-blur-card-empty'} ${id === 2 && 'layer-blur-card-silver'}`}
             style={{ '--flashlight-color': flashlight }}>
            <div>
                <h4 className='flex-start h-fit font-h4 mb-2'>
                    <Image 
                        className="dark:inline-block mr-2 hidden"
                        src="/icons/dark_avatar.svg" 
                        width={16} 
                        height={16}
                        alt="Avatar icon"/>
                    <Image 
                        className="inline-block mr-2 dark:hidden"
                        src="/icons/avatar.svg" 
                        width={16} 
                        height={16}
                        alt="Avatar icon"/>
                    {card.type}
                </h4>
                <p className="font-paragraph-md font-light text-grey 2xl:w-[85%]">{card.brief}</p>
            </div>
            <div className="flex-start gap-1">
                <Image 
                    className="self-end dark:block hidden"
                    src="/icons/dark_dollar.svg"
                    width={12}
                    height={24}
                    alt="Dollar symbol"/>
                <Image 
                    className="self-end block dark:hidden"
                    src="/icons/dollar.svg"
                    width={12}
                    height={24}
                    alt="Dollar symbol"/>
                <p className="font-price">{card.price}</p>
                <div className="flex-col-start ml-2">
                    <p className="font-paragraph-md">{card.payment}</p>
                    <p className="font-paragraph-md text-grey">{taxes}</p>
                </div>
            </div>
            <ButtonLink 
                text={card.button} 
                link={card.link} 
                type={`${id === 1 ? 'white' : "grey"}`} 
                addClass="w-full"/>
            <p className="font-paragraph-md text-grey">{source}</p>
            <div className="h-[1px] w-full bg-grey/30"/>
            <div className="flex-col-start">
                {card.attach?.map((item) => (
                    <p key={item} className="flex">
                        <Image 
                            src="/icons/check_mark_dark.svg"
                            height={16}
                            width={16}
                            alt="Check mark icon"
                            className="hidden dark:block mr-3"/>
                        <Image 
                            src="/icons/check_mark.svg"
                            height={16}
                            width={16}
                            alt="Check mark icon"
                            className="dark:hidden block mr-3"/>
                        {item}
                    </p>
                ))}
            </div>
        </div>
    </div>
    )
}
