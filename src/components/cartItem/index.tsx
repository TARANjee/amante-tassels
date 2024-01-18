import { RiDeleteBin2Fill } from "react-icons/ri";
export const CartItems = ({ data }: { data: any }) => {

    return (

        <div className=" sm:w-full m-4 flex flex-col justify-between lg:flex-row rounded  shadow-lg">

            <div className="sm:w-full p-3 m-4 flex flex-col lg:flex-row rounded overflow-hidden shadow-lg ">

                <img className=" object-cover h-32 lg:w-32 lg:h-100  " src={data.image} alt="Sunset in the mountains" />

                <div className="p-2 sm:w-full lg:px-6 flex  flex-col lg:justify-center text-wrap">

                    <div className=" font-semibold sm:font-bold mb-2 text-wrap">{data.title.length > 50 ? data.title.substring(0, 80) + "..." : data.title}</div>

                    <p className="text-gray-700 text-base text-wrap">

                        <p className="text-gray-700 dark:text-white dark:opacity-70 text-base">

                            {data.desc.length > 20 ? data.desc.substring(0, 50) + "..." : data.desc}
                        </p>
                    </p>
                </div>





                <div className=" sm:w-full  flex flex-row justify-center items-center m-2 ">
                    <button className="text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300  rounded-lg text-2xl px-2 text-center dark:bg-orange-400 dark:hover:bg-orange-500 dark:focus:ring-orange-500"> -</button>
                    <p className="text-lg m-2 font-semibold">{data.items}</p>
                    <button className=" text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-lg  text-2xl px-2 text-center dark:bg-orange-400 dark:hover:bg-orange-500 dark:focus:ring-orange-500">+</button>
                </div>

                <div className=" text-center sm:w-full flex justify-center items-center">
                    <p className="  mt-1 text-xl text-gray-700 font-semibold sm:font-bold">

                        <div className="w-48 sm:w-full flex justify-center items-center">
                            <p className="mt-1 text-xl text-gray-700 dark:text-white font-semibold sm:font-bold">

                                ${data.pricesOfItem * data.items}
                            </p>
                        </div>
                    </p>
                </div>
                <button className=" sm:m-2 p-2 cursor-pointer text-orange-400 flex justify-center items-center" title="Delete Item">
                    <RiDeleteBin2Fill size={25} />

                </button>
            </div>
        </div>
    )
}