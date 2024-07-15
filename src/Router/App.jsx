import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogInPage from '../components/LogInPage';
import Home from '../components/Home'; // Adjust the import based on your file structure

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LogInPage />} />
                <Route path="LogInPage" element={<LogInPage />} />
                <Route path="home" element={<Home />} />
                {/* Add other routes as needed */}
            </Routes>
        </BrowserRouter>
    );
}
