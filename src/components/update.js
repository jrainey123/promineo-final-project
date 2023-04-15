import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Update() {
    let history = useNavigate();
    const [id, setID] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [day, setDay] = useState('');
    const [instructor, setInstructor] = useState('');
    const [room, setRoom] = useState('');
    
    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setTitle(localStorage.getItem('Title'));
        setDescription(localStorage.getItem('Description'));
        setDay(localStorage.getItem('Day'));
        setInstructor(localStorage.getItem('Instructor'));
        setRoom(localStorage.getItem('Room'));
    }, []);

    const updateAPIData = (event) => {
      event.preventDefault()
        axios.put(`https://6436e01c3e4d2b4a12de0097.mockapi.io/After_Programs/${id}`, {
            id,
            title,
            description,
            day,
            instructor,
            room
        }).then(() => {
            history('/read')
        })
    }
    return (
        <div className='main-table'>
        <Form className='create-form'>
        <Form.Group className="mb-3">
          <Form.Label>Program Title</Form.Label>
          <Form.Control type="text" placeholder="program title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Program Day</Form.Label>
          <Form.Control type="text" placeholder="program day" value={day} onChange={(e) => setDay(e.target.value)}/>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Instructor</Form.Label>
          <Form.Control type="text" placeholder="instructor name" value={instructor} onChange={(e) => setInstructor(e.target.value)}/>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Room</Form.Label>
          <Form.Control type="text" placeholder="room" value={room} onChange={(e) => setRoom(e.target.value)}/>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Program Description</Form.Label>
          <Form.Control type="text" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
        </Form.Group>
        
        <Button variant="primary" type='submit' onClick={updateAPIData}>
          Update
        </Button>
      </Form>
     </div> 
    );
       
}
