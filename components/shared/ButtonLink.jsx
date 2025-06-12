import Link from "next/link"

export const ButtonLink = ({text, link, type, addClass}) => {
    return(<div className={`flex-center h-10 w-fit rounded-lg
    ${type === 'grey' && 'p-[1px] gradient-gray-border'} ${addClass}`}>
        <Link href={link}
            className={`h-full w-full flex-center px-4 py-2 font-paragraph-sm rounded-lg ${type === 'white' ? 
                'button-white ' : type === 'black' ? 'button-dark' : 'button-grey'}`}>
                {text}
        </Link>
    </div>)

}