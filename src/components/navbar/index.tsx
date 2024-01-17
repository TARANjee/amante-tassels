import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";

export const Navbar = () => {

    return (
        <>
            <div className="navbar flex justify-between items-center w-full px-4 sm:px-10 py-8 sm:py-4 " >
                <div className="logo text-xl sm:text-2xl font-semibold select-none">
                    Amante-Tassels
                </div>
                <div className="hidden sm:flex text-lg w-[30%] justify-between">
                    <Link href="/" className="border-b-2 border-transparent hover:border-b-black hover:dark:border-b-white hover:font-medium ">Home</Link>
                    <Link href="/products" className="border-b-2 border-transparent hover:border-b-black hover:dark:border-b-white  hover:font-medium">Products</Link>
                    <Link href="/" className="border-b-2 border-transparent hover:border-b-black hover:dark:border-b-white  hover:font-medium">About</Link>
                    <Link href="/" className="border-b-2 border-transparent hover:border-b-black  hover:dark:border-b-white  hover:font-medium">Contact</Link>
                    <Link href="/" className="border-b-2 border-transparent hover:border-b-black  hover:dark:border-b-white   hover:font-medium">FAQ</Link>
                </div>
                <div className="flex items-center gap-2">
                    <Link href="/login" className="flex items-center sm:text-xl  gap-2 p-2 rounded-3xl bg-white dark:text-black dark:border-gray-700 shadow hover:opacity-80 ">
                        <span><CgProfile /></span>
                        <span>Login</span>
                    </Link>
                    <Link href="/cart" className="flex  items-center sm:text-xl gap-2 p-2 rounded-3xl bg-white dark:text-black  dark:border-gray-700 shadow hover:opacity-80">
                        <span className="relative"><MdOutlineShoppingCart />
                            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-4 -end-3 dark:border-gray-900">2</div>

                        </span>
                        <span>Cart</span>

                    </Link>
                </div>
            </div>
        </>
    );
}