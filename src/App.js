import { BrowserRouter } from 'react-router-dom';
// import styles
import './styles/app.scss';
// import components
import Nav from './components/Nav';
import HomePage from './components/home/HomePage';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav />
                <HomePage />
            </BrowserRouter>
        </div>
    );
}

export default App;
