import { buildToolsData } from "@/lib/data"
import Image from "next/image"

export const Tools = ({data}) => {
    return(<div className="flex-col-center mt-15">
        <h3 className="font-paragraph-sm-semi text-center">{data.herosection.tools}</h3>
        <div className="flex-col-center gap-2.5 mt-4 lg:flex-row lg:flex-center lg:gap-5 lg:w-[45%] lg:flex-wrap xl:mt-10 xl:gap-10 2xl:w-full">
          {buildToolsData?.map((item, id) => (
            <div key={id} className="flex-center">
              <Image src={item.url} height={24} width={24} alt={`${item.text} icon`} className="block dark:hidden"/>
              <Image src={item.urlDark} height={24} width={24} alt={`${item.text} icon`} className="dark:block hidden"/>
              <p className="font-paragraph-sm px-2.5">{item.text}</p>
              <p className="font-paragraph-sm text-grey">{item.version}</p>
            </div>  
          ))}
        </div>
    </div>)
}