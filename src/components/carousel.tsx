"use client"
import { useState } from "react";
import {
    BsFillArrowRightCircleFill,
    BsFillArrowLeftCircleFill,
} from "react-icons/bs";


export default function Carousel({ slides }: { slides: string[] }) {
    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    };

    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    return (
        <div className="overflow-hidden w-full   relative ">
            {/* images */}
            <div
                className={`flex transition ease-out duration-40  `}
                style={{
                    transform: `translateX(-${current * 100}%)`,
                }}
            >
                {slides.map((s, i) => {
                    return <img key={i} src={s} alt={`Slide ${i + 1}`} />;
                })}
            </div>

            {/* buttons */}
            <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
                <button onClick={previousSlide} title="Previous Slide">
                    <BsFillArrowLeftCircleFill />
                </button>
                <button onClick={nextSlide} title="Next Slide">
                    <BsFillArrowRightCircleFill />
                </button>
            </div>

            {/* circle buttons */}
            <div className="absolute  bottom-0 py-10 flex justify-center gap-3 w-full">
                {slides.map((s, i) => {
                    return (
                        <div
                            onClick={() => {
                                setCurrent(i);
                            }}
                            key={"circle" + i}
                            className={`rounded-full w-5 h-5 cursor-pointer  ${i == current ? "bg-white" : "bg-gray-500"
                                }`}
                        ></div>
                    );
                })}
            </div>


        </div >
    );
}