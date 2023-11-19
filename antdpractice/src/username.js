import React, { useEffect, useState } from 'react';
import axios from 'axios';
import App2 from './App2';

function userList() {
  const [username, setUsername] = useState([]);
  const [mail, setmail] = useState([]);
  
  useEffect(() => {
    

    // Fetch ingredients from PostgreSQL
    axios.get('http://localhost:8080/username')
      .then(response => {
        setusername(response.data.username);
      })
      .catch(error => {
        console.error('Error fetching ingredients:', error);
      });
  }, []);

  return (
    <div>
      <h2>mailID</h2>
      <ul>
        {dishes.map(mail => (
          <li key={mail._id}>{mail.name}</li>
        ))}
      </ul>

      <h2>Username</h2>
      <ul>
        {username.map(username => (
          <li key={username}>{username}</li>
        ))}
      </ul>
    </div>
  );
}

export default userList;
