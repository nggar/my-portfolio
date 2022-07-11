import { Route, Routes, useLocation } from 'react-router-dom';
// import styles
import './styles/app.scss';
// import components
import Nav from './components/Nav';
import HomePage from './components/home/HomePage';
import AboutMe from './components/about/AboutMe';
import ProjectOne from './components/project-detail/ProjectOne';
import ProjectTwo from './components/project-detail/ProjectTwo';
import ProjectThree from './components/project-detail/ProjectThree';
import Contact from './components/contact/Contact';
// import animations
import ScrollTop from './components/utils/ScrollTop';
import { AnimatePresence } from 'framer-motion';

function App() {
    const location = useLocation();

    return (
        <div className="App">
            {/* scroll to top when pathname change */}
            <ScrollTop />
            {/* Navigation */}
            <Nav />
            <AnimatePresence exitBeforeEnter>
                {/* Pages */}
                <Routes location={location} key={location.pathname} >
                    <Route path='/' element={<HomePage />} />
                    <Route path='aboutme' element={<AboutMe />} />
                    <Route path='project-1' element={<ProjectOne />} />
                    <Route path='project-2' element={<ProjectTwo />} />
                    <Route path='project-3' element={<ProjectThree />} />
                    <Route path='contact' element={<Contact />} />
                </Routes>
            </AnimatePresence>
        </div>
    );
}

export default App;
