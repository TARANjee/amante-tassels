import { Footer, Navbar } from "@/components";

export default function About() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col justify-center items-center mt-10 h-screen">
                <h1 className="text-3xl font-bold">About Us</h1>
                <div className="flex  text-lg flex-col justify-center align-middle gap-6 mx-40 mt-10">
                    <span>Welcome to Amante Tassels, where style meets functionality in the world of home decor. At Amante Tassels, we take pride in transforming your living spaces into vibrant and inviting sanctuaries. As purveyors of exquisite sofa covers and table covers, we bring you a curated collection that combines elegance with practicality, ensuring that your home reflects your unique personality.</span>

                    <span>Our journey began with a passion for enhancing the aesthetics of homes and a commitment to providing high-quality, durable products. Amante Tassels emerged from the desire to offer a diverse range of stylish and affordable solutions for protecting and adorning your furniture.</span>

                    <span>What sets us apart is our dedication to craftsmanship and attention to detail. Each sofa cover and table cover in our collection is thoughtfully designed to elevate the visual appeal of your interiors while safeguarding your furniture from everyday wear and tear. Our products seamlessly blend fashion and function, offering a perfect balance of sophistication and resilience.</span>

                    <span>At Amante Tassels, we understand that your home is an extension of yourself, and we believe that every piece of furniture should reflect your unique taste and lifestyle. Our team of designers works tirelessly to stay ahead of the latest trends, ensuring that our collection is always on the cutting edge of style.</span>

                    <span>Customer satisfaction is at the heart of our business. We take pride in providing a seamless shopping experience, from browsing our website to the delivery of your carefully packaged items. With Amante Tassels, you can trust that you are investing in quality and style that will endure.</span>

                    <span>Explore our collection and discover a world of possibilities for enhancing your home. Whether you're looking to revitalize your living room with a new sofa cover or add a touch of elegance to your dining area with a chic table cover, Amante Tassels is your go-to destination for premium home decor.</span>

                    <span>Welcome to Amante Tassels – where every cover tells a story of style, comfort, and enduring beauty.</span>
                </div>
            </div>
            <Footer />
        </>
    );
}