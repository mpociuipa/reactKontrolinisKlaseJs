import React from 'react';

const MessageTable = ({ messages }) => {
  return (
    <table border="1" cellPadding="10" cellSpacing="0">
      <thead>
        <tr>
          <th>Vardas</th>
          <th>Pavardė</th>
          <th>El. paštas</th>
          <th>Žinutė</th>
        </tr>
      </thead>
      <tbody>
        {messages.map((message, index) => (
          <tr key={index} style={{ backgroundColor: message.firstName === 'Jonas' ? 'red' : 'white' }}>
            <td>{message.firstName}</td>
            <td>{message.lastName}</td>
            <td>{message.email}</td>
            <td>{message.message}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MessageTable;
