import { SubscriptionCard } from "../SubscriptionCard"


export const SubscriptionInfo = ({data}) => {
    return(<div className="container-center mx-auto mt-15">
        <h3 className="font-h3 text-center px-3 header-size lg:w-full">{data.header}</h3>
        <p className="font-paragraph text-grey px-5 paragraph-size">{data.text}</p>
        <div className="flex-center mx-auto md:gap-7 max-md:flex-col-center">
            {data.cards?.map((item, id) => <SubscriptionCard key={id} id={id} card={item} taxes={data.taxes} source={data.source}/>)}
        </div>
    </div>)
}