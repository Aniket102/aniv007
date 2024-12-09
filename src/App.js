import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills/Skills';
import Blogs from './pages/Blogs';
import CV from './pages/CV';  // Import the CV component
import Footer from './components/Footer/Footer';
import './App.css';
import React from 'react';



function App() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Router>
                <NavBar />
                <Container sx={{ flex: 1, py: 3 }}>
                    <Routes>
                        <Route path="/" exact element={<Home />} />
                        <Route path="/projects" exact element={<Projects />} />
                        <Route path="/blogs" exact element={<Blogs />} />
                        <Route path="/skills" exact element={<Skills />} />
                        <Route path="/cv" exact element={<CV />} />  {/* Added the CV route */}
                    </Routes>
                </Container>
                <Footer />
            </Router>
        </Box>
    );
}

export default App;
