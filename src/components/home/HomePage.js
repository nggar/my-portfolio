import HeaderSection from './HeaderSection';
import SkillSection from './SkillSection';
import Projects from './Projects';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';

// import animation
import { motion } from 'framer-motion';
import { pageTransition } from '../utils/animations';

const HomePage = () => {
    return (
        <motion.div variants={pageTransition} animate='show' initial='hidden' exit='exit' >
            <HeaderSection />
            <SkillSection />
            <Projects />
            <AboutSection />
            <ContactSection />
        </motion.div>
    )
}

export default HomePage;