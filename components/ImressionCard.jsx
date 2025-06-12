import Image from "next/image"

export const ImressionCard = ({data, first}) => {
    return(<div className={`w-full flex-col-start p-4 ${first && 'border-1 border-grey/25 rounded-xl bg-gradient-to-tr from-white/3 to-white/8'}`}>
        <div className="flex-start">
            <Image 
                src={data.icon}
                width={16}
                height={16}
                className="dark:hidden block"
                alt={`${data.label} icon`}/>
            <Image 
                src={data.iconDark}
                width={16}
                height={16}
                className="hidden dark:block"
                alt={`${data.label} icon`}/>
            <p className="font-paragraph-sm-semi ml-1">{data.label}</p>
        </div>
        <p className="font-paragraph-xs text-grey ml-5">{data.text}</p>
    </div>)
}