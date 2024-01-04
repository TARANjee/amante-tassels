
import { MdFavoriteBorder } from "react-icons/md";

export const Card = ({data}) => {

    return (
        <div className=" max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={data.image} alt="Sunset in the mountains" />

            <div className="px-6 py-4">
                <div className='flex justify-between items-center'>
                    <div className="font-bold text-xl mb-2">{data.title}</div>
                    <div>
                        <MdFavoriteBorder size={25} />
                    </div>
                </div>
                <p className="text-gray-700 text-base">
                    product description
                </p>
                <p className="mt-1 text-gray-700 font-bold">
                    ${data.new_price} <span className='line-through'>${data.old_price}</span>
                </p>
            </div>
        </div>
    )
}