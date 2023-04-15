import React from "react";
//import NavLine from './components/NavLine'
import NavBar from './NavBar';
import Container from 'react-bootstrap/Container';

const Header = () => {
    return(
        <header>
            <Container className="heading">
                <NavBar />
                <h2>After School Enrichment Program</h2>
            </Container>
        </header>
    )
}

export default Header