import Image from "next/image"

export const Logo = () => {
    return(<div className="flex-center w-fit min-w-[125px] font-logo">
    <Image src="/icons/logo_dark.svg"
           className="mr-1 hidden dark:block"
           height={24} 
           width={24} 
           alt="Logo"/>
    <Image src="/icons/logo.svg"
           className="mr-1 block dark:hidden"
           height={24} 
           width={24} 
           alt="Logo"/>
    Launch UI
    </div>)
}