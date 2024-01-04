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
                        <a href="#" className='hover:pl-2 ease-linear'>About Us</a>
                        <a href="#" className='hover:pl-2 ease-linear'>Our Services</a>
                        <a href="#" className='hover:pl-2 ease-linear'>Privacy Policy</a>
                    </div>
                </div>
                <div>
                    <h4 className="text-xl sm:text-2xl border-b-2 pb-1 border-b-orange-400 w-max">Get Help</h4>
                    <div className="flex flex-col justify-center pt-2 text-sm sm:text-lg">
                        <a href="#" className='hover:pl-2 ease-linear'>FAQ</a>
                        <a href="#" className='hover:pl-2 ease-linear'>Shipping</a>
                        <a href="#" className='hover:pl-2 ease-linear'>Returns</a>
                        <a href="#" className='hover:pl-2 ease-linear'>Order Status</a>
                        <a href="#" className='hover:pl-2 ease-linear'>Payment Options</a>
                    </div>
                </div>
                <div>
                    <h4 className="text-xl sm:text-2xl border-b-2 pb-1 border-b-orange-400 w-max ">Online Shop</h4>
                    <div className="flex flex-col pt-2 text-sm sm:text-lg">
                        <a href="#" className='hover:pl-2 ease-linear'>Sofa Covers</a>
                        <a href="#" className='hover:pl-2 ease-linear'>Table Covers</a>
                        <a href="#" className='hover:pl-2 ease-linear'>Cushion Covers</a>
                        <a href="#" className='hover:pl-2 ease-linear'>Others</a>
                    </div>
                </div>
                <div>
                    <h4 className="text-xl sm:text-2xl border-b-2 pb-1 border-b-orange-400 w-max">Follow Us</h4>
                    <div className="flex pt-4 gap-6 text-xl sm:text-2xl">
                        <a href="#" className='hover:opacity-80'><FaFacebook /></a>
                        <a href="#" className='hover:opacity-80'><FaTwitter /></a>
                        <a href="#" className='hover:opacity-80'><RiInstagramFill /></a>
                        <a href="#" className='hover:opacity-80'><IoLogoWhatsapp /></a>
                    </div>
                </div>
            </div>
            <div className="text-center text-sm pt-12">
                <p>© 2024 Amante-Tassels. All Rights Reserved</p>
            </div>
        </div>
    );
}
