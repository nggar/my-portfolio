
const HeaderSection = () => {

    return (
        <div className="container">
            <header className='section-margin header section-padding border-bottom'>
                <div className="header__left">
                    <h1 className='heading-1'>I'm Enggar, <br />  React js developer</h1>
                    <p >Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam quis nostrud</p>
                    <a className='link-arrow' href='#'>
                        <div className="link-arrow__text">Browse portfolio</div>
                        <div className="link-arrow__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke='currentColor' strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </a>
                </div>
                <div className="header__right">
                    <a className="circle-arrow" href='#' >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </a>
                </div>
            </header>
        </div>
    )
}

export default HeaderSection;