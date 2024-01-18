import { Card } from '../card';
import './styles.css';
import datas from '../../api/product.json';

export const Product = () => {

    return (
        <main>
            <div className='mb-10 flex justify-center items-center'>
                <h1 className='mt-10 text-2xl sm:text-4xl text-gray-900  underline	decoration-orange-400 decoration-42 underline-offset-8'>Featured Products</h1>
            </div>
            <div className="w-[100%]  container px-4  sm:mx-auto gap-10 sm:gap-5 sm:overflow-x-scroll">
                {datas.map((data, i) => (
                    <Card key={i} data={data} />
                ))}
            </div>
        </main>
    )
}