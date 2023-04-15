import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import schoolKids from '../images/schoolKids.jpg';

function ProgramCard() {
  const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://6436e01c3e4d2b4a12de0097.mockapi.io/After_Programs`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);

    return (
        <div className='card-container'>
          
        {APIData.map((data) => {
            return (
        <div>
              <Card className='cardBox'>
                <Card.Img className='cardImg' variant="top" src={schoolKids} />
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text className='card-text'>
                    {data.description}
                  </Card.Text>
                </Card.Body>
                
                  <ListGroup className="list-group-flush">
                  <ListGroup.Item>Day: {data.day} - Room: {data.room}</ListGroup.Item>
                  <ListGroup.Item>Instructor: {data.instructor}</ListGroup.Item>
                  
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#inactive" disabled>Register - tbd</Card.Link>
                  
                </Card.Body>
              </Card> 
            </div> 
            )               
          })}     
        </div>
            
    )
}
export default ProgramCard;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  