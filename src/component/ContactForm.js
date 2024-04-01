import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phonNumber, setPhoneNumber] = useState(0);

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          {/* // 모든 event 핸들러는 event라는 매개변수를 넘긴다. */}
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter phone number"
            onChange={(event) => {
              setPhoneNumber(event.target.value);
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
