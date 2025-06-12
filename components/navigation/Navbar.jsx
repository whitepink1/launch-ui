import LanguageSwitcher from "../LanguageSwitcher"
import { ButtonLink } from "../shared/ButtonLink"
import { Logo } from "../shared/Logo"
import ThemeToggle from "../ThemeToggler"
import { Navigation } from "./Navigation"

export const Navbar = ({data}) => {
    return(<header className="flex justify-between px-3 mx-auto items-center h-17 w-full lg:w-[90%]">
        <div className="flex-start gap-10">
            <Logo />
            <Navigation links={data.navigation}/>
        </div>
        <div className="flex items-center gap-x-2.5 lg:gap-x-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <ButtonLink text={data.buttons.getStarted} link="/" type="white" addClass=""/>
        </div>
    </header>)
}