'use client'
import Link from "next/link"
import { ButtonLink } from "../shared/ButtonLink"
import Image from "next/image"
import { useColorTheme } from "../ColorThemeContext"

export const HeroSection = ({data}) => {
    const { theme } = useColorTheme();
    const [flashlight, soft, second] = theme.colors;

    return(<div className="w-full h-fit flex-col-center overflow-hidden px-3 mx-auto">
        <div className="flex-col-center gap-y-5 mt-15 lg:mx-10 xl:gap-y-10">
            <p className="py-1 px-2 border-1 border-grey/25 rounded-full font-paragraph-xs text-grey">{data.herosection.newVersion}
                <Link href="/" className="ml-2 text-black dark:text-white">{`${data.buttons.readMore} →`}</Link>
            </p>
            <h1 className="w-full font-h1 gradient-color text-center xl:w-[70%]">{data.herosection.heroHead}</h1>
            <p className="font-paragraph text-grey text-center px-5 xl:w-[40%]">{data.herosection.heroText}</p>
            <div className="flex-center gap-5">
                <ButtonLink text={data.buttons.getStarted} link="/" type="white"/>
                <ButtonLink text={data.buttons.gitHub} link="/" type="grey" addClass=""/>
            </div>
        </div>
        <div className="relative w-full aspect-video min-h-[245px] max-h-[800px] px-3 lg:px-5 mt-20 rounded-lg">
            <div className="absolute dark:gradient-wide-board gradient-wide-board-light pointer-events-none"/>
            <div className={`w-full min-h-[245px] lg:w-[90%] aspect-video relative mx-auto rounded-lg layer-blur-main layer-blur-main-second`}
                 style={{ '--flashlight-color': flashlight }}>
                <Image className="object-auto object-top hidden dark:block rounded-lg hero-wide-border"
                    placeholder="blur"
                    blurDataURL="/images/dark_dashboard_blur.png"
                    src="/images/dark_dashboard.png"
                    fill
                    alt="Dashboard Preview"/>
                <Image className="object-cover object-top block dark:hidden rounded-lg hero-wide-border"
                    placeholder="blur"
                    blurDataURL="/images/dashboard_blur.png"
                    src="/images/dashboard.png"
                    fill
                    alt="Dashboard Preview"/>
            </div>
        </div>
    </div>)
}