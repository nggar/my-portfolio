import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';

const HeaderSection = () => {

    return (
        <div className="main-container">
            <div className="container">
                <header className='section-margin header section-padding'>
                    <div className="header__left">
                        <h1 className='heading-1'>React JS developer</h1>
                        <p >Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam quis nostrud</p>
                        <HashLink className='link-arrow' to='#projects' smooth >
                            <div className="link-arrow__text">Browse portfolio</div>
                            <div className="link-arrow__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke='currentColor' strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </HashLink>
                    </div>
                    <div className="header__right">
                        <HashLink className="circle-arrow" to='#skills' smooth >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </HashLink>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default HeaderSection;