'use client'
import { useColorTheme } from "../ColorThemeContext";
import { ButtonLink } from "../shared/ButtonLink"

export const StartBuilding = ({data}) => {
    const { theme } = useColorTheme();
    const flashlight = theme.colors[0];

    return(<div className="flex-center layer-down-blur h-[300px] lg:h-[460px] overflow-hidden"
                style={{ '--flashlight-color': flashlight }}>
        <div className="flex-col-center gap-5 lg:gap-8">
            <h3 className="font-h3 text-center">{data.aboveFooter}</h3>
            <div className="flex-center gap-4">
                <ButtonLink 
                    text={data.buttons.getStarted} 
                    link='/' 
                    type="white"/>
                <ButtonLink 
                    text={data.buttons.gitHub} 
                    link='/' 
                    type="grey"/>
            </div>
        </div>
    </div>)
}