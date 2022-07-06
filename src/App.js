import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import styles
import './styles/app.scss';
// import components
import Nav from './components/Nav';
import HomePage from './components/home/HomePage';
import AboutMe from './components/about/AboutMe';
import ProjectOne from './components/project-detail/ProjectOne';
import ProjectTwo from './components/project-detail/ProjectTwo';
import ProjectThree from './components/project-detail/ProjectThree';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                {/* Navigation */}
                <Nav />

                {/* Pages */}
                <Routes>
                    {/* Homepage */}
                    <Route path='/' element={<HomePage />} />
                    <Route path='/aboutme' element={<AboutMe />} />
                    <Route path='/project-1' element={<ProjectOne />} />
                    <Route path='' element={<ProjectTwo />} />
                    <Route path='' element={<ProjectThree />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
