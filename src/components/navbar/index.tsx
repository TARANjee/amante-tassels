import Link from "next/link";
import { CgProfile} from "react-icons/cg";
import {MdOutlineShoppingCart} from "react-icons/md";

export const Navbar = () => {
   
    return (
        <>
            <div className="navbar flex justify-between  items-center w-full  px-10 py-4 " >
                <div className="logo text-2xl font-semibold select-none">
                    Amante-Tassels
                </div>
                <div className="flex text-lg w-[30%] justify-between">
                    <Link href="" className="border-b-2 border-transparent hover:border-b-black hover:dark:border-b-white hover:font-medium ">Home</Link>
                    <Link href="/products" className="border-b-2 border-transparent hover:border-b-black hover:dark:border-b-white  hover:font-medium">Products</Link>
                    <Link href="/" className="border-b-2 border-transparent hover:border-b-black hover:dark:border-b-white  hover:font-medium">About</Link>
                    <Link href="/" className="border-b-2 border-transparent hover:border-b-black  hover:dark:border-b-white  hover:font-medium">Contact</Link>
                    <Link href="/" className="border-b-2 border-transparent hover:border-b-black  hover:dark:border-b-white   hover:font-medium">FAQ</Link>
                </div>
                <div className="flex items-center gap-2">
                    <Link href="/login" className="flex items-center gap-2 p-2 rounded-3xl bg-white dark:text-black dark:border-gray-700 shadow hover:opacity-80 ">
                        <span><CgProfile size={25}/></span>
                        <span>Login</span>
                    </Link>
                    <Link href="/login" className="flex items-center gap-2 p-2 rounded-3xl bg-white dark:text-black  dark:border-gray-700 shadow hover:opacity-80">
                        <span><MdOutlineShoppingCart size={25}/></span>
                        <span>Cart</span>
                    </Link>
                </div>
            </div>
        </>
    );
}