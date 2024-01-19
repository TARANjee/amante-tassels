import { Navbar, Footer } from "@/components";
import Link from "next/link";
import Image from "next/image";
export default function Custom404() {
    return (
        <>
            <Navbar />
            <div className='flex flex-col sm:flex-row items-center justify-center  pt-12 sm:h-[100vh]'>
                <div><Image src="/static/img/panda.png" className="w-[200px] h-[300px] sm:w-[300px] sm:h-[400px]" alt="404" width={300} height={400}/></div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className='text-5xl font-bold'>404</h1>
                    <h2 className='text-2xl font-semibold'>Page Not Found</h2>
                    <p className='text-xl font-medium'>This site is under construction</p>
                    <Link href="/" className='bg-black text-white px-4 py-2 rounded-lg mt-4'>Go Back to Home</Link>
                </div>
            </div>

        </>
    );
}