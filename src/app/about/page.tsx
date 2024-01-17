import { Footer, Navbar } from "@/components";
import Image from "next/image";
export default function About() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col justify-center items-center p-6 bg-slate-50 mx-8 sm:mx-20 mt-4 sm:mt-10 rounded-xl shadow-md">
                <h1 className="text-xl sm:text-3xl font-bold border-b-[3px] pb-2 border-orange-400">Our Story</h1>
                <div className="flex flex-col text-lg sm:flex-row-reverse justify-between align-middle gap-6 sm:gap-16 sm:mx-40 mt-10">
                    <Image className="object-cover self-center sm:self-end rounded-md w-[200px] h-[200px] sm:w-[370px] sm:h-[370px]" width={370} height={370} alt="sofaImage" src="/static/img/sofaCover2.jpeg" />
                    <div className="flex flex-col gap-4 text-[14px] sm:text-lg"><span>Welcome to Amante Tassels, where style meets functionality in the world of home decor. At Amante Tassels, we take pride in transforming your living spaces into vibrant and inviting sanctuaries. As purveyors of exquisite sofa covers and table covers, we bring you a curated collection that combines elegance with practicality, ensuring that your home reflects your unique personality.</span>
                    <span>Our journey began with a passion for enhancing the aesthetics of homes and a commitment to providing high-quality, durable products. Amante Tassels emerged from the desire to offer a diverse range of stylish and affordable solutions for protecting and adorning your furniture.</span>
                    </div>
                </div>
                <div className="flex flex-col text-lg sm:flex-row justify-between align-middle gap-6 sm:gap-16 sm:mx-40 mt-10">
                    <Image className="object-cover self-center sm:self-end rounded-md w-[200px] h-[200px] sm:w-[370px] sm:h-[370px]" width={370} height={370} alt="sofaImage" src="/static/img/sofaCover3.jpeg" />
                    <div className="flex flex-col gap-4 text-[14px] sm:text-lg">
                    <span>What sets us apart is our dedication to craftsmanship and attention to detail. Each sofa cover and table cover in our collection is thoughtfully designed to elevate the visual appeal of your interiors while safeguarding your furniture from everyday wear and tear. Our products seamlessly blend fashion and function, offering a perfect balance of sophistication and resilience.</span>
                    <span>At Amante Tassels, we understand that your home is an extension of yourself, and we believe that every piece of furniture should reflect your unique taste and lifestyle. Our team of designers works tirelessly to stay ahead of the latest trends, ensuring that our collection is always on the cutting edge of style.</span>
                    </div>
                </div>
                <div className="mt-10 text-sm sm:text-xl font-bold text-center">
                    <span>Welcome to Amante Tassels – where every cover tells a story of style, comfort, and enduring beauty.</span>
                </div>
            </div>
            <Footer />
        </>
    );
}