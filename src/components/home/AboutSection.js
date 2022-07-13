import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { moveTop, imgTransition } from '../utils/animations';

import aboutImg from '../../assets/images/about-me.svg';
import aboutPhoto from '../../assets/images/about-photo.jpg';

const AboutSection = () => {
    return (
        <div className="main-container">
            <div className="container">
                <motion.div initial='hidden' whileInView='show' viewport={{ once: true, amount: .3 }} className="about-section section-padding section-margin">
                    <motion.div variants={moveTop} className="about-heading-wrapper">
                        <h1 className="about-heading">Who's behind all this great work?</h1>
                    </motion.div>
                    <div className="about-profile">
                        <div className="about-profile__img">
                            <motion.div initial='hidden' whileInView='show' viewport={{ once: true, amount: .4 }} variants={imgTransition} className="cover-transition"></motion.div>
                            <img className='aboutme-img' src={aboutPhoto} alt="project-1" />
                        </div>
                        <div className="about-profile__link">
                            <Link to='/aboutme' className="link-arrow">
                                <div className="link-arrow__text">More about me</div>
                                <div className="link-arrow__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke='currentColor' strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                        <img className='aboutme-svg' src={aboutImg} alt='about me svg' />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default AboutSection;