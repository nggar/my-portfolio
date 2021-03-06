import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageTransition } from '../utils/animations';

import screenshot1 from '../../assets/images/frame-2.png';

const ProjectThree = () => {
    return (
        <motion.div variants={pageTransition} initial='hidden' animate='show' exit='exit' className="project-detail">

            {/* Header */}
            <div className="project-detail__header">
                {/* Heading */}
                <div className="main-container">
                    <div className="container">
                        <div className="heading section-margin">
                            <div className="title-wrapper">
                                <h1 className="heading-1 title">Brand design & identity for Sezane</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit mattis faucibus odio feugiat arcu scelerisque drogon sit amenot.</p>
                            </div>
                            <div className='link-circle-wrapper'>
                                <HashLink className="circle-arrow" to='#about-project' smooth >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </HashLink>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Image Background */}
                <div className="main-container">
                    <div className="img-background"></div>
                </div>
                {/* Project Link */}
                <div className="container info-container">
                    <div className="info section-margin">
                        <div className="info-link">
                            <h4 className="link-heading">Source code:</h4>
                            <a className='link-arrow' href='google.com' >
                                <div className="link-arrow__text info-link__link">Github</div>
                                <div className="link-arrow__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke='currentColor' strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                        <div className="info-link">
                            <h4 className="link-heading">Website:</h4>
                            <a className='link-arrow' href='google.com' >
                                <div className="link-arrow__text info-link__link">Live preview</div>
                                <div className="link-arrow__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke='currentColor' strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Project */}
            <div className="main-container" id='about-project'>
                <div className="container small-container">
                    <div className="project-detail__about border-bottom">
                        <h2 className="heading-2">About the project</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eligendi eos non laboriosam, optio iste placeat obcaecati hic assumenda exercitationem fugit consequatur atque, delectus voluptatem soluta in sint recusandae quod.</p>
                        <div className="technology">
                            <h3 className="sub-heading">Technologies</h3>
                            <p>Next JS, Sanity, Node JS</p>
                        </div>
                        <div className="functionality">
                            <h3 className="sub-heading">Functionality</h3>
                            <ul>
                                <li>1. Lorem ipsum dolor sit amet.</li>
                                <li>2. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, itaque?</li>
                                <li>3. Lorem ipsum dolor sit amet consectetur.</li>
                                <li>4. Lorem ipsum dolor sit amet.</li>
                            </ul>
                        </div>
                        <div className="about-img">
                            <img src={screenshot1} alt="project screenshot" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-container">
                <div className="container small-container">
                    <div className="project-detail__result section-padding">
                        <h2 className="heading-2">Project result</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem incidunt quidem neque ad ipsam voluptatem quos deleniti? Laboriosam, sed omnis.</p>
                        <ul>
                            <li>1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident!</li>
                            <li>2 Lorem ipsum dolor sit amet.</li>
                            <li>3 Lorem ipsum dolor sit amet consectetur.</li>
                            <li>4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, pariatur!</li>
                        </ul>
                        <div className="next-project">
                            <Link to='/project-1' className='link-arrow'>
                                <p className="link-arrow__text">Next project</p>
                                <div className="link-arrow__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke='currentColor' strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="creator section-margin bordertop-black">
                        <p className='name'>Created  by Enggar Jihandoko, ?? 2022</p>
                        <HashLink smooth to='#nav'><h5 className='black border-black'>BACK TO TOP</h5></HashLink>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectThree;