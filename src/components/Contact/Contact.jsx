
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import contactHomeImg from "../../../public/images/banner/con1.png";

const Contact = () => {
    return (
        <div>
          
            <div className='relative'>
                <img src={contactHomeImg} className="h-[240px] sm:h-[280px] md:h-[350px] xl:h-[420px] w-full" alt="img" />
                <div className="absolute h-full left-0 top-0 right-0 bg-[#050505] bg-opacity-70">
                    <div className='absolute top-1/2 left-[calc(50%-69px)] text-lg text-[#cfcfcf]'>
                        Home | Contact US
                    </div>
                </div>
            </div>
          
            <div className="my-20">
                <h2 className="text-center text-4xl font-bold pb-20 ">Contact US</h2>
                <div>

                </div>
                <div className="w-full px-6 md:px-0 md:w-4/5  mx-auto grid grid-col-1 md:grid-cols-2 gap-16">
                    <div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                            <div className="mb-12"> Got questions or feedback? We're here to help! Reach out to us through our contact page for prompt assistance. Your thoughts matter, and we're excited to connect with you.
                            </div>
                        </div>
                        <div className="bg-[#fff] border contact-form p-8 rounded">
                            <h2 className="text-2xl font-semibold py-2 md:pb-4">Ready to Get Started?</h2>
                            <form>
                                <div><input type="text" name="" className="contact-input placeholder:text-sm" placeholder="Name" required /></div>
                                <div><input type="text" name="" className="contact-input placeholder:text-sm" placeholder="Email" required /></div>
                                <div><input type="text" name="" className="contact-input placeholder:text-sm" placeholder="Subject" /></div>
                                <div><textarea type="text" className="contact-input placeholder:text-sm" rows="4" placeholder="Message" required></textarea></div>
                                <div><button type="submit" className="contact-btn hover:bg-purple-800 mt-2">Send Message</button></div>
                            </form>
                        </div>
                    </div>
                    <div>
                        <div className="w-full border-[6px] border-slate-200">
                            <iframe className="w-full h-[300px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35107.810614114474!2d91.79318856138543!3d22.344035731002936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad277caa9220cb%3A0xf274740d35824861!2sPanchlaish%2C%20Chattogram!5e0!3m2!1sen!2sbd!4v1693677503511!5m2!1sen!2sbd" width="" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="pt-16">
                            <div className="flex mb-8">
                                <div className="w-[80px] h-[80px] bg-gray-100 hover:bg-gray-200  flex items-center justify-center rounded">
                                    <IoLocationOutline size={30} color={"purple"}></IoLocationOutline>
                                </div>
                                <div className="flex ml-5 flex-col pt-1">
                                    <h2 className="text-xl font-bold ">Our Address</h2>
                                    <p className="text-sm">2750 Abdul Latif street, Sholokbar, Chattogram, Bangladesh</p>
                                </div>
                            </div>
                            <div className="flex mb-8">
                                <div className="w-[80px] h-[80px] bg-gray-100 hover:bg-gray-200  flex items-center justify-center rounded">
                                    <AiOutlineMail color={"purple"} size={30}></AiOutlineMail>
                                </div>
                                <div className="flex ml-5 flex-col">
                                    <h2 className="text-xl font-bold">E-mail</h2>
                                    <p className="text-blue-500 text-sm">info1@gmail.com</p>
                                    <p className="text-blue-500 text-sm">info2@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex mb-8">
                                <div className="w-[80px] h-[80px] bg-gray-100 hover:bg-gray-200  flex items-center justify-center rounded">
                                    <FiPhoneCall color={"purple"} size={30}></FiPhoneCall>
                                </div>
                                <div className="flex ml-5 flex-col">
                                    <h2 className="text-xl font-bold">Contact</h2>
                                    <p className="text-blue-500 text-sm">+880123456789</p>
                                    <p className="text-blue-500 text-sm">+880123456789</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;