import React from 'react';
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';
// 값을 보여주는건 useSelector
// 값을 던져주는건 useDispatch

const ContactList = () => {
  const contactList = useSelector((state) => state.contactList);

  return (
    <div>
      <SearchBox />
      {contactList.map((item, index) => (
        <ContactItem item={item} key={index} />
      ))}
    </div>
  );
};

export default ContactList;
