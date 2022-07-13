import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import { moveTop, fadeInRight, moveToLeft, fade } from '../utils/animations';

const HeaderSection = () => {
    const is768 = window.innerWidth < 768; // below 768

    return (
        <div className="main-container">
            <div className="container">
                <header className='section-margin header section-padding'>
                    <div className="header__left">
                        <motion.h1 variants={moveTop} className='heading-1'>React JS developer</motion.h1>
                        <motion.p variants={fade} >Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam quis nostrud</motion.p>
                        <motion.div variants={fadeInRight}><HashLink className='link-arrow' to='#projects' smooth >
                            <div className="link-arrow__text">Browse portfolio</div>
                            <div className="link-arrow__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke='currentColor' strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </HashLink></motion.div>
                    </div>
                    <motion.div variants={is768 ? fadeInRight : moveToLeft} className="header__right">
                        <HashLink className="circle-arrow" to='#skills' smooth >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </HashLink>
                    </motion.div>
                </header>
            </div >
        </div >
    )
}

export default HeaderSection;