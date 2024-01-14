import { Card } from '../card';
import './styles.css';
import { MdFavoriteBorder } from "react-icons/md";

export const Product = () => {
    const datas = [
        {
            title: "Product Title",
            id: 1,
            image: 'https://nirmiteefurniture.com/wp-content/uploads/2023/01/Untitled-Session1252-copy.jpg',
            old_price: "66.20",
            new_price: "56.20",
            rating: 3.5,
        },
        {
            title: "Product Title",
            id: 1,
            image: 'https://casadesigngroup.com/cdn/shop/products/Sancal-Producto-Sofa-Deep-14_1200x.jpg?v=1672951103',
            old_price: "46.20",
            new_price: "36.20",

            rating: 3.5,
        },
        {
            title: "Product Title",
            id: 1,
            image: 'https://d2dwxeidp9b9gl.cloudfront.net/images/products/1689403979622001.jpg',
            old_price: "76.20",
            new_price: "66.20",
            rating: 3.4,
        },
        {
            title: "Product Title",
            id: 1,
            image: 'https://www.jiomart.com/images/product/original/rv5trcl5ay/tony-stark-spandex-polyester-fabric-super-stretchable-flexible-non-slip-big-elasticity-perfect-size-sofa-cover-slipcover-90-145-cm-grey-leaves-one-seater-1-piece-cushion-cover-included-product-images-orv5trcl5ay-p603062352-0-202307130241.jpg?im=Resize=(1000,1000)',
            old_price: "66.20",
            new_price: "57.20",

            rating: 3.5,
        },

    ]
    return (
        <main>
            <div className='mt-10 flex justify-center items-center'>
                <h1 className='text-2xl sm:text-4xl text-gray-900 dark:text-white'>Featured Products</h1>
            </div>
            <div className="mt-5 container  mx-auto gap-2 sm:gap-5 ">
                {datas.map((data, i) => (
                    <Card key={i} data={data} />
                ))}
            </div>
        </main>
    )
}