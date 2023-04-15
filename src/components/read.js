import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://6436e01c3e4d2b4a12de0097.mockapi.io/After_Programs`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);

    const setData = (data) => {
        let { id, title, description, day, instructor, room } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Title', title);
        localStorage.setItem('Description', description);
        localStorage.setItem('Day', day);
        localStorage.setItem('Instructor', instructor);
        localStorage.setItem('Room', room)
    }

    const getData = () => {
        axios.get(`https://6436e01c3e4d2b4a12de0097.mockapi.io/After_Programs`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://6436e01c3e4d2b4a12de0097.mockapi.io/After_Programs/${id}`)
        .then(() => {
            getData();
        })
    }

    return (
        <div className='main-table'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Day</th>
                        <th>Instructor</th>
                        <th>Room</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {APIData.map((data) => {
                        
                        return (
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.title}</td>
                                <td>{data.day}</td>
                                <td>{data.instructor}</td>
                                <td>{data.room}</td>
                                  
                                <td> <Link to='/update'>
                                    <Button size='sm' onClick={() => setData(data)}>Update</Button>
                                    </Link>
                                </td>
                                
                                <td>
                                    <Button size='sm' variant='dark' onClick={() => onDelete(data.id)}>Delete</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
            
    )
}
export default Read;