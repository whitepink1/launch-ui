import { FeaturesCard } from "../FeaturesCard"

export const Features = ({data}) => {
    return(<div className="container-center px-3 mt-15 lg:px-5">
        <h3 className="font-h3 mb-10 mx-3 text-center lg:text-start">{data.features.header}</h3>
        <div className="flex-col-center gap-5 md:grid md:grid-cols-2">
            {data.features.cards?.map((item, id) => 
                <FeaturesCard key={id} item={item} id={id}/>
            )}
        </div>
    </div>)
}