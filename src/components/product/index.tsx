import { Card } from '../card';
import './styles.css';
import datas from '../../api/product.json';

export const Product = () => {

    return (
        <main>
            <div className='m-10 flex justify-center items-center'>
                <h1 className='m-10 text-2xl sm:text-4xl text-gray-900 dark:text-white underline	decoration-orange-400 decoration-42 underline-offset-8'>Featured Products</h1>
            </div>
            <div className="w-[100%] mt-5 container px-4  sm:mx-auto gap-2 sm:gap-5 sm:overflow-x-scroll">
                {datas.map((data, i) => (
                    <Card key={i} data={data} />
                ))}
            </div>
        </main>
    )
}