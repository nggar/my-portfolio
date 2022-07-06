import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import styles
import './styles/app.scss';
// import components
import Nav from './components/Nav';
import HomePage from './components/home/HomePage';


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
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
