const HeaderSection = () => {
    return (
        <div className="container">
            <header className='section-margin header'>
                <h1 className='heading-1'>I'm Sam, and I design impactful brands</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam quis nostrud</p>
                <a className='link-arrow' href="#my-work">
                    <div className="link-arrow__text">Browse Portfolio</div>
                    <div className="link-arrow__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke='currentColor' width='auto' height='100%' strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                </a>
            </header>
        </div>
    )
}

export default HeaderSection;