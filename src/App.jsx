import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Photos from './pages/Photos.jsx';

function App() {
    return (
        <div className='App'>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/about'>About</NavLink>
                        <NavLink to='/photos'>Photos</NavLink>
                    </li>
                </ul>
            </nav>
            <div className='container'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='photos' element={<Photos />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
