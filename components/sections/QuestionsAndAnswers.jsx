import Image from "next/image"

export const QuestionsAndAnswers = ({data}) => {
    return(<div className="container-center mt-15">
        <h3 className="font-h3 mx-5 text-center md:mx-auto header-size">{data.header}</h3>
        <div className="w-[90vw] md:w-full max-w-[820px] px-3 mx-auto mt-8 lg:mt-12">
            {data.data?.map((item, id) => (
                <details key={id} className="py-1.5 border-b-1 border-grey/35 lg:py-3.5">
                    <summary className="flex-between font-paragraph-md list-none [&::-webkit-details-marker]:hidden cursor-pointer">
                        {item.question}
                        <Image 
                            className="ml-2 dark:block hidden"
                            src="/icons/dark_chevron_down.svg"
                            width={16}
                            height={16}
                            alt="Chevron down icon"/>
                        <Image 
                            className="ml-2 block dark:hidden"
                            src="/icons/chevron_down.svg"
                            width={16}
                            height={16}
                            alt="Chevron down icon"/>
                    </summary>
                    <p className="font-paragraph-md font-light pt-2 text-grey">{item.answer}</p>
                </details>
            ))}
        </div>
    </div>)
}