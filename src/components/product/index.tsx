import { Card } from '../card';
import './styles.css';
import { MdFavoriteBorder } from "react-icons/md";

export const Product = () => {
    const datas = [
        {
            title: "title 1",
            id: 1,
            image: 'https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg',
            old_price: "66.20",
            new_price: "56.20",
            rating: 3.5,
        },
        {
            title: "title 2",
            id: 1,
            image: 'https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg',
            old_price: "46.20",
            new_price: "36.20",

            rating: 3.5,
        },
        {
            title: "title 3",
            id: 1,
            image: 'https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg',

            old_price: "76.20",
            new_price: "66.20",
            rating: 3.5,
        },
        {
            title: "title 4",
            id: 1,
            image: 'https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg',
            old_price: "66.20",
            new_price: "57.20",

            rating: 3.5,
        },

    ]
    return (
        <main>
            <div className='mt-10 flex justify-center items-center'>
                <h1 className='text-4xl text-gray-900 dark:text-white'>Featured Products</h1>
            </div>
            <div className="mt-5 container  mx-auto gap-5 ">
                {datas.map((data, i) => (
                    <Card key={i} data={data} />
                ))}
            </div>
        </main>
    )
}