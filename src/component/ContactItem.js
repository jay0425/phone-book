import React from 'react';
import { Col, Row } from 'react-bootstrap';

const ContactItem = () => {
  return (
    <div>
      <Row className="contact-item">
        <Col className="user-img" lg={2}>
          <img
            width={50}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg"
            alt="유저 이미지"
          />
        </Col>
        <Col lg={10}>
          <div>김재희</div>
          <div>01012345678</div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactItem;
