import React from 'react';
import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import Home from './components/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Footer from './components/Footer';
import Programs from './components/Programs';

function App() {
  return (
      
   <Router>
          <Header /> 
          <Container>   
            <Routes>
                <Route path='/' element={<Home/>}/>    
              
                <Route path='/create' element={<Create />}/>
              
                <Route path='/update' element={<Update />}/>
                
                <Route path='/read' element={<Read />}/>

                <Route path='/Programs' element={<Programs />}/>
              </Routes>
        </Container>
        <Footer />  
    </Router>
  );
}  

export default App;
