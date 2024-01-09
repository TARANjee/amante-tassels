"use client"

import { MdFavoriteBorder } from "react-icons/md";
import img from '/next.svg';
export const SubBanner = ({price,name,img}) => {

    return (
        <div className={`w-full h-full bg-center bg-cover shadow-xl bg-[url('https://nirmiteefurniture.com/wp-content/uploads/2023/01/Untitled-Session1252-copy.jpg')]`}>
            
            <div className="px-6 h-full py-4 flex flex-col place-content-between">
                <div className='flex justify-between items-center'>
                    <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">New</span>
                    <p className="mt-1 text-yellow-600 text-xl font-bold">
                        ${price}
                    </p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-yellow-700 text-xl text-bold">
                        {name}
                    </p>
                    <div className="flex justify-between items-center">
                        <button className="bg-transparent text-yellow-600 border-yellow-500 font-semibold hover:border-yellow-700 hover:text-yellow-800 py-2 px-4 border rounded">
                            Buy Now
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
