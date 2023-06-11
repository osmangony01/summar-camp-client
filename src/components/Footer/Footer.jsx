import moment from "moment";


const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">

                <div>
                    <img src="/images/logo1.png" className="w-[60px] h-[60px]" alt="" />
                    <p>WorldSpeak<br />Providing reliable services since 2015</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Language Courses</a>
                    <a className="link link-hover">Online Learning</a>
                    <a className="link link-hover">Group Classes</a>
                    <a className="link link-hover">Conversation Practice</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Courses</a>
                    <a className="link link-hover">Location</a>

                </div>
                <div>

                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
           
            <div className="footer-center p-4 bg-neutral text-neutral-content">
                <p>Copyright © {moment(new Date).format('YYYY')} - All right reserved by WorldSpeak</p>
            </div>
        </div>
    );
};

export default Footer;