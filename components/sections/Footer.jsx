import Link from "next/link"
import { Logo } from "../shared/Logo"

export const Footer = ({data}) => {
    return(<div className="container-center px-3 mx-auto mt-10">
        <div className="w-full flex-col-start border-b-1 border-grey/35 pb-10 lg:flex-row lg:flex-start lg:items-start lg:gap-x-10">
            <Logo />
            <div className="w-full grid grid-cols-2 mt-8 lg:mt-0 lg:flex lg:flex-start lg:gap-x-20 lg:items-start">
                {data.footerNav?.map((item, id) => (
                    <div key={id}>
                        <p className="font-paragraph-sm-semi mb-3">{item.name}</p>
                        <div className="flex-col-start gap-2">
                            {item.links?.map((link) => (
                                <Link 
                                    key={link.linkName} 
                                    href={link.url}
                                    className="font-paragraph-sm-semi font-light text-grey">
                                    {link.linkName}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="w-full flex-between items-start py-6">
            {data.footerCopyRights?.map((item, id) => (
                <Link 
                    key={item.name} 
                    href={item.link}
                    className={`w-[30%] font-paragraph-sm-semi font-light text-grey ${id === 1 ? "text-center" : id === 2 ? 'text-end' : ''}`}>
                    {item.name}
                </Link>
            ))}
        </div>
    </div>)
}