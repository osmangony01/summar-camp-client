
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";

import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
    return (
        <div className="my-20">
            <h2 className="text-3xl font-bold text-center pb-20 pt-5">Contact US</h2>
            <div className="w-full px-6 md:px-0 md:w-4/5 lg:w-3/4 mx-auto grid grid-col-1 md:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                    <div className="mb-8"> Got questions or feedback? We're here to help! Reach out to us through our contact page for prompt assistance. Your thoughts matter, and we're excited to connect with you.
                    </div>
                    <div>
                        <div className="flex mb-8">
                            <div className="w-[80px] h-[80px] bg-gray-100 hover:bg-gray-200  flex items-center justify-center rounded">
                                <IoLocationOutline size={35} color={"red"}></IoLocationOutline>
                            </div>
                            <div className="flex ml-5 flex-col pt-1">
                                <h2 className="text-xl font-bold">Our Address</h2>
                                <p>2750 Abdul Latif street, Sholokbar, Chattogram, Bangladesh</p>
                            </div>
                        </div>
                        <div className="flex mb-8">
                            <div className="w-[80px] h-[80px] bg-gray-100 hover:bg-gray-200  flex items-center justify-center rounded">
                                <AiOutlineMail color={"red"} size={35}></AiOutlineMail>
                            </div>
                            <div className="flex ml-5 flex-col">
                                <h2 className="text-xl font-bold">E-mail</h2>
                                <p className="text-red-500">info1@gmail.com</p>
                                <p className="text-red-500">info2@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex mb-8">
                            <div className="w-[80px] h-[80px] bg-gray-100 hover:bg-gray-200  flex items-center justify-center rounded">
                                <FiPhoneCall color={"red"} size={35}></FiPhoneCall>
                            </div>
                            <div className="flex ml-5 flex-col">
                                <h2 className="text-xl font-bold">Contact</h2>
                                <p className="text-red-500">+880123456789</p>
                                <p className="text-red-500">+880123456789</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="bg-purple-300 p-8 rounded">
                    <h2 className="text-2xl font-semibold py-2 md:pb-4">Ready to Get Started?</h2>
                    <form>
                        <div><input type="text" name="" className="contact-input" placeholder="Your name" /></div>
                        <div><input type="text" name="" className="contact-input" placeholder="Your email address" /></div>
                        <div><input type="text" name="" className="contact-input" placeholder="Your subject" /></div>
                        <div><textarea type="text" className="contact-input" rows="4" placeholder="Write your message..."></textarea></div>
                        <div><button type="submit" className="contact-btn">Send Message</button></div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Contact;