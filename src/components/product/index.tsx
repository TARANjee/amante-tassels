import { Card } from '../card';
import './styles.css';
import datas from '../../api/product.json';

export const Product = () => {
    
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