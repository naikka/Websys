import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LogInPage from '../components/LogInPage';

export default function App() {
    return(
        <BrowserRouter>
            <Routes>
            <Route index element={ <LogInPage/> } />
            <Route path='login' element={ <LogInPage />} />
            </Routes>
        </BrowserRouter>
    );
}