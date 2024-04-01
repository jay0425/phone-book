import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
//  값을 던지는 건 useDispatch
//  값을 가져오는건 useSelector

/*

사용자가 입력한 name 값과 phoneNumber 값을 받아 리덕스로 보낸다.

*/

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(0);
  const dispatch = useDispatch();

  const addContact = (event) => {
    // addContact 함수의 역할은 값들을 리덕스로 보내는 것.

    // submit의 특징으로 클릭할 때마다 새로고침이 되는데 이를 막기 위해 아래 코드 한줄을 작성해준다.
    event.preventDefault();
    // 값을 던지는 역할을 dispatch가 해준다.
    // dispatch는 action을 파라미터로 갖는다.
    // action은 type(내가 작동하고 싶은 action의 이름)과 payload(넘겨주고 싶은 값) 두가지 키를 갖는다.
    // dispatch({ type: 'ADD_CONTACT', payload: { name: name, phoneNumber: phoneNumber } });
    // -> 키이름과 value 값이 같으면 한단어로 써줘도 된다.
    dispatch({ type: 'ADD_CONTACT', payload: { name, phoneNumber } });
    // 이렇게 action을 던지면 reducer로 간다.
  };
  return (
    <div>
      {/* button의 type이 submit이면 onClick 함수가 아니라 onSubmit 함수를 사용한다. */}
      <Form onSubmit={addContact}>
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
        {/* 값들을 리덕스로 넘겨주는 시점은 Button을 클릭했을 때이다. */}
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
