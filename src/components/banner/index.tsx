"use client"
import Image from 'next/image'
import Carousel from '../carousel';
import './style.css';

export const Banner = () => {
    let slides = [
        "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
        "https://wallpapercave.com/wp/wp3386769.jpg",
        "https://wallpaperaccess.com/full/809523.jpg",
        "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
    ];
    return (
        <main>

            {/* <Image src='/static/img/1.jpg' className="" width={500} height={500} alt="myimg" /> */}

            <div className="w-[90%] m-auto pt-5">
                <Carousel slides={slides} />
            </div>

        </main>
    );
}
