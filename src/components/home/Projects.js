import project1 from '../../assets/images/frame-1.png';
import project2 from '../../assets/images/frame-2.png';
import project3 from '../../assets/images/frame-3.png';

const Projects = () => {
    return (
        <div className="main-container">
            <div className="container container__project-section">
                <div className="projects-section section-padding">
                    <h1 className="projects-heading heading-2">Browse my portfolio</h1>
                    <div className="projects-wrapper">
                        <div className="project">
                            <div className="project__img">
                                <img src={project1} alt="project-1" />
                            </div>
                            <div className="project__description border-bottom">
                                <div className="project-info">
                                    <h4 className="project-name">Sezane</h4>
                                    <div className="project-info__line"></div>
                                    <h4 className="project-topic">Branding</h4>
                                </div>
                                <h3 className="sub-heading project-title">Brand design & identity for Sezane</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere neque vel est unde odio maiores, aspernatur possimus.</p>
                            </div>
                        </div>
                        <div className="project">
                            <div className="project__img">
                                <img src={project2} alt="project-1" />
                            </div>
                            <div className="project__description border-bottom">
                                <div className="project-info">
                                    <h4 className="project-name">Doen</h4>
                                    <div className="project-info__line"></div>
                                    <h4 className="project-topic">Logo Design</h4>
                                </div>
                                <h3 className="sub-heading project-title">Branding & logo design for Doen</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere neque vel est unde odio maiores, aspernatur possimus.</p>
                            </div>
                        </div>
                        <div className="project">
                            <div className="project__img">
                                <img src={project3} alt="project-1" />
                            </div>
                            <div className="project__description">
                                <div className="project-info">
                                    <h4 className="project-name">La Ligne</h4>
                                    <div className="project-info__line"></div>
                                    <h4 className="project-topic">Web Design</h4>
                                </div>
                                <h3 className="sub-heading project-title">Brand design & identity for La Ligne</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere neque vel est unde odio maiores, aspernatur possimus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;