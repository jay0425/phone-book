import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const SearchBox = () => {
  return (
    <div>
      <Row>
        <Col lg="10">
          <Form.Control type="text" placeholder="Enter name" />
        </Col>
        <Col lg="2">
          <Button>Find</Button>
        </Col>
      </Row>
    </div>
  );
};

export default SearchBox;
