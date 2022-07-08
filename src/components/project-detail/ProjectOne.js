import { HashLink } from 'react-router-hash-link';

const ProjectOne = () => {
    return (
        <div className="project-detail">

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
                                <HashLink className="circle-arrow" to='about-project' smooth >
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
                            <a className='link-arrow' >
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
                            <a className='link-arrow' >
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

        </div>
    )
}

export default ProjectOne;