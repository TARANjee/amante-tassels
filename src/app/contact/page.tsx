import { Footer, Navbar } from "@/components";
import Image from "next/image";

export default function Contact() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col justify-center items-center p-6 bg-slate-50 mx-8 sm:mx-20 mt-4 sm:mt-10 rounded-xl shadow-md">
                <div className="text-xl sm:text-3xl font-bold border-b-[3px] pb-2 border-orange-400">Get in Touch</div>
                <div className="flex sm:flex-row gap-6 flex-col sm:mt-10"><div>
                    <Image src="/static/img/getintouch.png" width={500} height={500} alt="contact" className="rounded-xl" />
                </div>
                <div className="">
                    <div>
                        <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                        <input type="text" placeholder="Enter Name" className="w-full bg-gray-300 text-gray-900 mt-1 sm:mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" />

                    </div>
                    <div className="mt-8">
                        <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
                        <input type="email" placeholder="xyz@gmail.com" className="w-full bg-gray-300 text-gray-900  mt-1 sm:mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mt-8">
                        <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
                        <textarea placeholder="Enter Your Message"
                            className="w-full h-32 bg-gray-300 text-gray-900  mt-1 sm:mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                    <div className="mt-8">
                        <button
                            className="uppercase text-sm font-bold tracking-wide bg-blue-500 hover:bg-blue-400 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                            Send Message
                        </button>
                    </div>
                </div>
                </div>
            </div>
            <Footer />
        </>
    );
} 