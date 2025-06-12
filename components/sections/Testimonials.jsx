import { UserCard } from "../UserCard"

export const Testimonials = ({data}) => {
    return(<div className="mx-6 lg:mt-25 h-fit">
        <h3 className="font-h3 text-center header-size">{data.header}</h3>
        <p className="font-paragraph text-grey paragraph-size">{data.text}</p>
        <div className="flex-col-center gap-4 lg:hidden">
            {data.users?.map((item, id) => (id <3 && <UserCard key={id} user={item}/>))}
        </div>
        <div className="relative w-full py-1 flex-col-center hidden lg:block mx-auto left-light right-light dark:left-dark dark:right-dark overflow-x-hidden">
            <div className="flex-between gap-4 w-[80vw] mx-auto">
                {data.users?.map((item, id) => (id <2 && <UserCard key={id} user={item} addClass="h-[200px]"/>))}
            </div>
            <div className="-translate-x-[5vw] flex-center w-[110vw] gap-4 mt-4">
                {data.users?.map((item, id) => (id >1 && <UserCard key={id} user={item} addClass="h-[200px]"/>))}
            </div>
        </div>
    </div>)
}