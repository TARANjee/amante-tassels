import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io5";
export const Footer = () => {
    return (
        <div className="bg-black text-white rounded-t-xl p-10 mt-10 bottom-0 left-0 right-0">
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-0 wrap justify-around">
                <div>
                    <h4 className="text-xl sm:text-2xl border-b-2 pb-1 border-b-orange-400 w-max">Amante-Tassels</h4>
                    <div className="flex flex-col justify-center pt-2 text-sm sm:text-lg">
                        <a href="/about" className='hover:opacity-[80%]'>About Us</a>
                        <a href="#" className='hover:opacity-[80%]'>Our Services</a>
                        <a href="#" className='hover:opacity-[80%]'>Privacy Policy</a>
                    </div>
                </div>
                <div>
                    <h4 className="text-xl sm:text-2xl border-b-2 pb-1 border-b-orange-400 w-max">Get Help</h4>
                    <div className="flex flex-col justify-center pt-2 text-sm sm:text-lg">
                        <a href="#" className='hover:opacity-[80%]'>FAQ</a>
                        <a href="#" className='hover:opacity-[80%]'>Shipping</a>
                        <a href="#" className='hover:opacity-[80%]'>Returns</a>
                        <a href="#" className='hover:opacity-[80%]'>Order Status</a>
                        <a href="#" className='hover:opacity-[80%]'>Payment Options</a>
                    </div>
                </div>
                <div>
                    <h4 className="text-xl sm:text-2xl border-b-2 pb-1 border-b-orange-400 w-max ">Online Shop</h4>
                    <div className="flex flex-col pt-2 text-sm sm:text-lg">
                        <a href="#" className='hover:opacity-[80%]'>Sofa Covers</a>
                        <a href="#" className='hover:opacity-[80%]'>Table Covers</a>
                        <a href="#" className='hover:opacity-[80%]'>Cushion Covers</a>
                        <a href="#" className='hover:opacity-[80%]'>Others</a>
                    </div>
                </div>
                <div>
                    <h4 className="text-xl sm:text-2xl border-b-2 pb-1 border-b-orange-400 w-max">Follow Us</h4>
                    <div className="flex pt-4 gap-6 text-xl sm:text-2xl">
                        <a href="#" className='hover:opacity-80' title='facebook'><FaFacebook /></a>
                        <a href="#" className='hover:opacity-80' title='twitter'><FaTwitter /></a>
                        <a href="#" className='hover:opacity-80' title='instagram'><RiInstagramFill /></a>
                        <a href="#" className='hover:opacity-80' title='whatsapp'><IoLogoWhatsapp /></a>
                    </div>
                </div>
            </div>
            <div className="text-center text-sm pt-12">
                <p>© 2024 Amante-Tassels. All Rights Reserved</p>
            </div>
        </div>
    );
}
