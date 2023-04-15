import React from 'react';
import Container from 'react-bootstrap/Container';
import CarouselView from './Carousel'
import { Link } from 'react-router-dom';

function Home() {
  return (
        
      <Container className='main'> 
                
            <p>The Town Elementary School is offering an After School Enrichment Program for students in Grades 3 through 5. There is no cost to the student.  This program is funded through a grant.  This is an 8 week program that will run from Monday, March 6 through Thursday, May 4. Note: There will be no classes during the week of Spring Recess.</p>
                      
            <CarouselView />
            <br></br>
            <Link to="/Programs">
              <button className='btn-link'>Click to see Complete List of Programs</button>
            </Link>
          
         
        </Container>
              
  );
}  

export default Home;