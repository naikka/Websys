import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../components/Home';

export default function App() {
    return(
        <BrowserRouter>
            <Routes>
            <Route index element={ <Home/> } />
            <Route path='home' element={ <Home />} />
            </Routes>
        </BrowserRouter>
    );
}