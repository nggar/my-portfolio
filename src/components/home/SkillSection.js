const SkillSection = () => {
    return (
        <div className="main-container">
            <div className="container" id='skills'>
                <div className="skills-section section-padding section-margin border-bottom">
                    <div>
                        <h2 className="heading-2">My work skills</h2>
                    </div>
                    <div className="skills">
                        <div className="box">
                            <h3 className='sub-heading'>HTML/CSS/JS</h3>
                            <h3 className='sub-heading'>React JS</h3>
                        </div>
                        <div className="box">
                            <h3 className='sub-heading'>Next JS</h3>
                            <h3 className='sub-heading'>Node JS/Express</h3>
                        </div>
                        <div className="box">
                            <h3 className='sub-heading'>Typescript</h3>
                            <h3 className='sub-heading'>Framer motion</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillSection;