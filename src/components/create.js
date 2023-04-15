import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

export default function Create() {
    let history = useNavigate();
    // const [image, setImage] = useState('')
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [day, setDay] = useState('');
    const [instructor, setInstructor] = useState('');
    const [room, setRoom] = useState('');
    const postData = (event) => {
      event.preventDefault()
      axios.post(`https://6436e01c3e4d2b4a12de0097.mockapi.io/After_Programs`, {
          // image,
          title,
          description,
          day,
          instructor,
          room
         })
            .then(()=> {
            history('/read')
            })
    }

    const popover = (
      <Popover id="popover-basic">
        <Popover.Header as="h3">Form Instructions</Popover.Header>
        <Popover.Body>
          Fill in the form fields and Click to Submit the data.
        </Popover.Body>
      </Popover>
    );
    
          return (
            
              <div className='main-table'>
                <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                  <Button variant="success">Click to see Form Instructions</Button>
                </OverlayTrigger>

                <Form className='create-form'>
                  <Form.Group className="mb-3">
                    <Form.Label>Program Title</Form.Label>
                    <Form.Control type="text" placeholder="program title" onChange={(e) => setTitle(e.target.value)}/>
                  </Form.Group>
                                  
                  <Form.Group className="mb-3">
                    <Form.Label>Program Day</Form.Label>
                    <Form.Control type="text" placeholder="program day" onChange={(e) => setDay(e.target.value)}/>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Instructor</Form.Label>
                    <Form.Control type="text" placeholder="instructor name" onChange={(e) => setInstructor(e.target.value)}/>
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Room</Form.Label>
                    <Form.Control type="text" placeholder="room" onChange={(e) => setRoom(e.target.value)}/>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Program Description</Form.Label>
                    <Form.Control type="textarea" rows={3} placeholder="description" onChange={(e) => setDescription(e.target.value)}/>
                  </Form.Group>
                  
                  <Button variant="success" onClick={postData} type="submit">
                    Submit
                  </Button>
                </Form>
               
              </div>
  );
}