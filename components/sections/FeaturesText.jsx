import Image from "next/image"

export const FeaturesText = ({data}) => {
    return(<div className="container-center mt-15 px-3 mx-auto">
        <h3 className="font-h3 text-center mx-3 md:mx-auto header-size">{data.header}</h3>
        <div className="grid grid-cols-1 items-center gap-y-5 mt-8 lg:grid-cols-3 lg:gap-y-8 lg:px-5 lg:mt-15 2xl:grid-cols-4">
            {data.data?.map((item, id) => (
                <div className="flex-col-start w-[90%] mx-auto" key={id}>
                    <div className="flex-center mb-1">
                        <Image className="block dark:hidden" src={item.img} height={24} width={24} alt={`${item.label} icon`}/>
                        <Image className="dark:block hidden" src={item.imgDark} height={24} width={24} alt={`${item.label} dark icon`}/>
                        <p className="font-paragraph-lg ml-1">{item.label}</p>
                    </div>
                    <p className="font-paragraph-md text-grey">{item.text}</p>
                </div>
            ))}
        </div>
    </div>)
}