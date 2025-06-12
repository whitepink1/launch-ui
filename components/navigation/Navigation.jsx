import Image from "next/image"
import Link from "next/link"

export const Navigation = ({links}) => {
    return(<div className="flex-between w-[400px] appearance-none xl:w-[450px] max-lg:hidden">
        {links?.map((item, id) => (
            <Link href={item.href}
                  className="flex font-paragraph-sm "
                  key={id}>{item.text}
                  <Image src="/icons/chevron-down.svg" 
                         className="ml-2"
                         width={12}
                         height={12}
                         alt="Chevrondown button" />
                  </Link>
        ))}
    </div>)
}