
import React, { useState } from 'react';


export default function Set() {
    const [contacts, setContacts] = useState([]); 
    const [newContact, setNewContact] = useState({ name: '', phoneNumber: '' }); 
  
   
    const addContact = () => {
      if (newContact.name && newContact.phoneNumber) {
        setContacts([...contacts, newContact]);
        setNewContact({ name: '', phoneNumber: '' });
      }
    };
  
    return (
      <div className="App">
        <h1>Contact List</h1>
  
        <div>
          <input
            type="text"
            placeholder="Name"
            value={newContact.name}
            onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={newContact.phoneNumber}
            onChange={(e) => setNewContact({ ...newContact, phoneNumber: e.target.value })}
          />
          <button onClick={addContact}>Add Contact</button>
        </div>
  
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index}>
                <td>{contact.name}</td>
                <td>{contact.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
