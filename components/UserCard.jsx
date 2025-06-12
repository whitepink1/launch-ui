import Image from "next/image"

export const UserCard = ({user, addClass}) => {
    return(<div className={`flex-col-start-start gap-3 w-full p-4 
        bg-gradient-to-b from-black/8 to-black/2 
        dark:from-white/8 dark:to-white/3 
        border-[1px] border-grey/10 rounded-xl ${addClass}`}>
        <div className="flex-start gap-3">
            <Image 
                className="rounded-full"
                src={user.img} 
                placeholder="blur" 
                blurDataURL={user.imgBlur}
                width={48}
                height={48}
                alt={`${user.name} photo`} />
            <div className="flex-col-start">
                <p className="font-paragraph-lg">{user.name}</p>
                <p className="font-paragraph-sm text-grey">{user.username}</p>
            </div>
        </div>
        <p className="font-paragraph-sm text-grey">{user.text}</p>
        
    </div>)
}