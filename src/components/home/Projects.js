import { Link } from 'react-router-dom';

import project1 from '../../assets/images/frame-1.png';
import project2 from '../../assets/images/frame-2.png';
import project3 from '../../assets/images/frame-3.png';

const Projects = () => {
    return (
        <div className="main-container">
            <div className="container" id='projects'>
                <div className="projects-section section-padding section-margin border-bottom">
                    <h1 className="projects-heading heading-2">Recent projects</h1>
                    <div className="projects-wrapper">

                        {/* project 1 */}
                        <Link className="project" to='/project-1'>
                            <div className="project__description">
                                <div className="project-info">
                                    <h4 className="project-name">Sezane</h4>
                                    <div className="project-info__line"></div>
                                    <h4 className="project-topic">Branding</h4>
                                </div>
                                <h3 className="sub-heading project-title">Brand design & identity for Sezane</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos similique facere cumque ipsa!</p>
                                <div className='project__link'>
                                    <div className="project__link__text">View project</div>
                                    <div className="project__link__icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke='currentColor' strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="project__img">
                                <img src={project2} alt="project-1" />
                            </div>
                        </Link>

                        {/* project-2 */}
                        <Link className="project" to='/project-2'>
                            <div className="project__description">
                                <div className="project-info">
                                    <h4 className="project-name">Sezane</h4>
                                    <div className="project-info__line"></div>
                                    <h4 className="project-topic">Branding</h4>
                                </div>
                                <h3 className="sub-heading project-title">Brand design & identity for Sezane</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos similique facere cumque ipsa!</p>
                                <div className='project__link'>
                                    <div className="project__link__text">View project</div>
                                    <div className="project__link__icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke='currentColor' strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="project__img">
                                <img src={project1} alt="project-2" />
                            </div>
                        </Link>

                        {/* project-3 */}
                        <Link className="project" to='/project-3'>
                            <div className="project__description">
                                <div className="project-info">
                                    <h4 className="project-name">Sezane</h4>
                                    <div className="project-info__line"></div>
                                    <h4 className="project-topic">Branding</h4>
                                </div>
                                <h3 className="sub-heading project-title">Brand design & identity for Sezane</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos similique facere cumque ipsa!</p>
                                <div className='project__link'>
                                    <div className="project__link__text">View project</div>
                                    <div className="project__link__icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke='currentColor' strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="project__img">
                                <img src={project3} alt="project-3" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects;