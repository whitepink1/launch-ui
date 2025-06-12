'use client'
import { useColorTheme } from "../ColorThemeContext";

export const ColorToggler = () => {
    const { changeTheme } = useColorTheme();

    return(<div className="flex-center gap-2 mx-auto lg:gap-6 my-4">
        <button className="p-2 font-paragraph-md-bold border-1 border-grey/35 rounded-xl lg:px-4 theme-button before:bg-flashlight-orange" 
                onClick={() => changeTheme("ember")}>Ember</button>
        <button className="p-2 font-paragraph-md-bold border-1 border-grey/35 rounded-xl lg:px-4 theme-button before:bg-flashlight-fire" 
                onClick={() => changeTheme("fire")} >Fire</button>
        <button className="p-2 font-paragraph-md-bold border-1 border-grey/35 rounded-xl lg:px-4 theme-button before:bg-flashlight-ultraviolet" 
                onClick={() => changeTheme("ultraviolet")}>Ultraviolet</button>
        <button className="p-2 font-paragraph-md-bold border-1 border-grey/35 rounded-xl lg:px-4 theme-button before:bg-flashlight-titanium" 
                onClick={() => changeTheme("titanium")}>Titanium</button>
        <button className="p-2 font-paragraph-md-bold border-1 border-grey/35 rounded-xl lg:px-4 theme-button before:bg-flashlight-emerald" 
                onClick={() => changeTheme("emerald")}>Emerald</button>
    </div>)
}