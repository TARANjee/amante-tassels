export const Checkout = () => {

    return (
        <div className="w-full rounded overflow-hidden shadow-lg p-4">

            <div className="p-4 flex justify-between items-center ">
                <h6>Subtotal:</h6>
                <p>$32.92</p>
            </div>
            <hr />
            <div className="p-4 flex justify-between items-center">
                <h6>Shipping Fees:</h6>
                <p>$5</p>
            </div>
            <hr />
            <div className="mt-4 mb-4 p-4 bg-gray-200 flex justify-between items-center border-bottom">
                <h6>Grand total:</h6>
                <p>$37.92</p>
            </div>
            <hr />
            <button className="w-full   text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-400 dark:hover:bg-orange-500 dark:focus:ring-primary-800">
                PROCEED TO CHECKOUT
            </button>

        </div>
    )
}