import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Home, Contact, About, NotFound } from '../pages'



const MyRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />

            {/* Редирект на 404 */}
            <Route path="*" element={<Navigate to="/404" />} />
            {/* Страница 404 */}
            <Route path="/404" element={<NotFound />} />
        </Routes>
    </Router>
);

export default MyRoutes;
