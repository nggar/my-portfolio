import { motion } from 'framer-motion';
import { moveTop } from '../utils/animations';

const SkillSection = () => {
    return (
        <div className="main-container">
            <div className="container" id='skills'>
                <motion.div initial='hidden' whileInView='show' viewport={{ once: true, amount: .4 }} className="skills-section section-padding section-margin border-bottom">
                    <motion.div variants={moveTop}>
                        <h2 className="heading-2">My work skills</h2>
                    </motion.div>
                    <motion.div initial='hidden' whileInView='show' viewport={{ once: true, amount: .7 }} variants={moveTop} className="skills">
                        <div className="box">
                            <h3 className='sub-heading'>HTML/CSS/JS</h3>
                            <h3 className='sub-heading'>React JS</h3>
                        </div>
                        <div className="box">
                            <h3 className='sub-heading'>Next JS</h3>
                            <h3 className='sub-heading'>Node/Express JS</h3>
                        </div>
                        <div className="box">
                            <h3 className='sub-heading'>Typescript</h3>
                            <h3 className='sub-heading'>Framer motion</h3>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default SkillSection;