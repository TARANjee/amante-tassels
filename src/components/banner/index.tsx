"use client"
import Image from 'next/image'
import Carousel from '../carousel';


import { SubBanner } from './subBanner';

export const Banner = () => {
    let slides = [
        "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?cs=srgb&dl=pexels-pixabay-276583.jpg&fm=jpg",
        "https://d2dwxeidp9b9gl.cloudfront.net/images/products/1689403979622001.jpg",
        "https://casadesigngroup.com/cdn/shop/products/Sancal-Producto-Sofa-Deep-14_1200x.jpg?v=1672951103",
        "https://nirmiteefurniture.com/wp-content/uploads/2023/01/Untitled-Session1252-copy.jpg",
    ];
    return (
        <main>

            <div className=" flex  sm:flex-row flex-col-reverse items-center justify-center gap-10 sm:w-[80%] m-auto pt-5">
                <div className='w-[60%] sm:w-[50%] gap-4 flex flex-col justify-between items-center '>

                    <SubBanner price={45} name="Product Name" img="/static/img/1.jpg" />

                    <SubBanner price={55} name="Product Name" img="/static/img/1.jpg" />

                </div>
                <div className=' w-[80%] sm:w-2/3 rounded-xl shadow-lg  ' >
                    <Carousel slides={slides} />

                </div>
            </div>

        </main>
    );
}
