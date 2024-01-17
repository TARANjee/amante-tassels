import { Navbar, Footer } from "@/components"
import { CartItems } from "@/components/cartItem"
import Link from "next/link"
import Items from '../../api/cartItems.json';
const Products = () => {
    return (
        <>
            <Navbar />
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

                <div className=" flex  lg:flex-row flex-col items-center justify-center gap-10  m-auto pt-5">
                    <div className=' w-2/3 sm:w-2/3 rounded-xl   ' >
                        {Items.map((item, index) => (
                            <CartItems key={index} data={item} />
                        ))}
                    </div>
                    <div className='w-1/3   flex flex-col justify-between items-center '>

                      payment options
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}
export default Products