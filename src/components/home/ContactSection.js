import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { moveTop, fade, moveToLeft } from '../utils/animations';
import { motion } from 'framer-motion';

const ContactSection = () => {
    return (
        <div className="main-container main-container--black">
            <div className="container">
                <motion.div initial='hidden' whileInView='show' viewport={{ once: true, amount: .6 }} className="contact-section section-padding section-margin">
                    <div>
                        <motion.h2 variants={moveTop} className="heading-2 heading-2--white">Get in touch and <div>let's talk</div> about your project
                        </motion.h2>
                        <motion.p variants={fade}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur nulla dolor illo veniam corporis. Exercitationem.</motion.p>
                    </div>
                    <motion.div variants={moveToLeft}>
                        <Link to='/contact' className="circle-arrow circle-arrow--white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </motion.div>
                </motion.div>
                <div className="creator section-margin">
                    <p className='name name--white'>Created  by Enggar Jihandoko, © 2022</p>
                    <HashLink smooth to='#nav'><h5>BACK TO TOP</h5></HashLink>
                </div>
            </div>
        </div>
    )
}

export default ContactSection;