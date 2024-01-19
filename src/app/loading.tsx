import { Navbar } from "@/components";
import { Suspense } from "react";
export default function loading(){
    return(
        <>
        
        <Navbar />
        <div className='flex flex-col items-center justify-center mt-[50%] sm:mt-0 sm:h-[90vh]'>
        <h1 className='text-2xl sm:text-3xl font-bold'>Loading...</h1>
        <Suspense fallback={<p>Loading feed...</p>}></Suspense>
    </div>
    </>
    );
}