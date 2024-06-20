import React, { useState } from 'react';
import MessageForm from '../messageform/MessageForm';
import MessageTable from '../messagetable/MessageTable';

const Contacts = () => {
  const [messages, setMessages] = useState([
    
  ]);

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div>
      <h1>Labas Contacts</h1>
      <p>Šiandienos data: {new Date().toLocaleDateString('lt-LT')}</p>
      <h2>Pridėti žinutę</h2>
      <MessageForm onAddMessage={addMessage} />
      <h2>Vartotojo žinutės</h2>
      <MessageTable messages={messages} />
    </div>
  );
};

export default Contacts;

