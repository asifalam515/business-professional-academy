import { Button } from 'bootstrap';
import React from 'react';
import { ButtonGroup, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';


const ConatckUs = () => {
  return (
    
    <div className='container'>
<Header></Header>
    <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Your Email Address
    </Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Your Message:</Form.Label>
   

    <Form.Control as="textarea" rows={3} />
    <button  type='submit'>Submit</button>
   

  </Form.Group>
</Form>
      
    </div>
  );
};

export default ConatckUs;