import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import aboutmeImg from '../../assets/images/about-photo.jpg';

import { motion } from 'framer-motion';
import { pageTransition } from '../utils/animations';

const AboutMe = () => {
    return (
        <motion.div variants={pageTransition} initial='hidden' animate='show' exit='exit' className="about-me">
            <div className="main-container">
                <div className="container">
                    {/* section 1 */}
                    <div className="section-1 section-padding section-margin border-bottom">
                        <h1 className="heading-1">I'm Enggar, a React Js developer from central java, Indonesia</h1>
                        <div className="section-1__info">
                            <div className="section-1__img">
                                <img src={aboutmeImg} alt="me" />
                            </div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi id natus doloremque eveniet facilis quam quod non nihil voluptates in velit, et nostrum fugit animi deleniti tempore optio! Dolorum, dolore.
                                <br />
                                <br />
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo fuga esse doloremque soluta, qui saepe libero ullam nostrum unde. Veniam repellendus delectus rem corporis quia, ad maiores facilis eligendi unde corrupti nisi in totam voluptate mollitia, magnam, eius harum dolorum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* section 2 */}
            <div className="main-container">
                <div className="container">
                    <div className="section-2 section-padding section-margin border-bottom">
                        <h2 className="heading-2">The core values that drive my work</h2>
                        <div className="section-2__values">
                            <div className="value">
                                <h3 className="sub-heading value__number">01</h3>
                                <h3 className="sub-heading value__heading">Hard Word</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut labore, nemo explicabo officiis vero delectus?</p>
                            </div>
                            <div className="value">
                                <h3 className="sub-heading value__number">02</h3>
                                <h3 className="sub-heading value__heading">Innovation</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut labore, nemo explicabo officiis vero delectus?</p>
                            </div>
                            <div className="value">
                                <h3 className="sub-heading value__number">03</h3>
                                <h3 className="sub-heading value__heading">Growth</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut labore, nemo explicabo officiis vero delectus?</p>
                            </div>
                            <div className="value">
                                <h3 className="sub-heading value__number">04</h3>
                                <h3 className="sub-heading value__heading">Team work</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut labore, nemo explicabo officiis vero delectus?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* section 3 */}
            <div className="main-container">
                <div className="container">
                    <div className="contact-section section-padding section-margin">
                        <div>
                            <h2 className="heading-2">Interested in working together? <div className='black-underline' >Get in touch</div> today.
                            </h2>
                            <p className='black-paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur nulla dolor illo veniam corporis. Exercitationem.</p>
                        </div>
                        <div>
                            <Link to='/contact' className="circle-arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="creator section-margin bordertop-black">
                        <p className='name'>Created  by Enggar Jihandoko, © 2022</p>
                        <HashLink smooth to='#nav'><h5 className='black border-black'>BACK TO TOP</h5></HashLink>
                    </div>
                </div>
            </div>
        </motion.div>

    )
}

export default AboutMe;