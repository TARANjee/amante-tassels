import { Navbar, Footer } from "@/components"
import { CartItems } from "@/components/cartItem"
import Link from "next/link"
import Items from '../../api/cartItems.json';
import { Checkout } from "@/components/checkout";


const Products = () => {
    return (
        <>

            <div className="px-4 sm:px-10 py-8 sm:py-4 ">
                <nav className="flex" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <li className="inline-flex items-center">
                            <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-orange-400 dark:text-gray-400 dark:hover:text-white">
                                <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                </svg>
                                Home
                            </Link>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <Link href="/cart" className="ms-1 text-sm font-medium text-gray-700 hover:text-orange-400 md:ms-2 dark:text-gray-400 dark:hover:text-white">Your Cart</Link>
                            </div>
                        </li>
                    </ol>
                </nav>

                <h1 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl dark:text-white">
                    Cart
                </h1>

                {(Items.length < 0) ? (
                    <div className=" flex  lg:flex-row flex-col sm:item-start sm:justify-start  gap-10 m-auto pt-5 dark:text-white">

                        <div className=' sm:w-2/3 sm:w-full rounded-xl flex flex-col items-center justify-center ' >
                            {Items.map((item, index) => (
                                <CartItems key={index} data={item} />
                            ))}
                        </div>

                        <div className='sm:w-1/3 rounded-xl flex flex-col    '>

                            <Checkout />
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col justify-center items-center ">
                        <div>
                            <img src={'/static/img/empty.jpg'} alt="" width={500} height={500} />
                        </div>
                        <div>
                            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-3xl dark:text-white">
                                Your Cart is <span className="text-orange-400">Empty!</span>
                            </h1>
                        </div>
                        <div>
                            <p className="text-gray-500 p-4 text-center ">Must add items on the cart before you proceed to check out.</p>
                        </div>
                        <Link href="/">
                            <button className="mt-4 text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-400 dark:hover:bg-orange-500 dark:focus:ring-orange-500">
                                RETURN TO SHOP
                            </button>
                        </Link>
                        <button className=" sm:m-2 p-2 cursor-pointer text-orange-400 flex justify-center items-center" >

                        </button>
                    </div>
                )}

            </div >
            <Footer />
        </>
    )
}
export default Products