const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors'); 
const app = express();
app.use(cors());

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "Shubha@2018",
  database: "Antd_DB"
});

app.use(bodyParser.json());

app.post('/username',async(req, res)=>{
    try{
        const { username, mail} = req.body;
    const insertPromises = username.map((username) => {
        const query = {
          text: 'INSERT INTO Userlist (Username, "Email_Id") VALUES ($1, $2)',
          values: [username, mail],
        };
        return pool.query(query);
      });
      await Promise.all(insertPromises);
  
      res.sendStatus(201);
    } catch (error) {
      console.error('Error inserting dish and ingredients:', error);
      res.status(500).json({ error: 'An error occurred while inserting dish and ingredients.' });
    }
  });

const PORT = 8080;
app.listen(PORT, "localhost" ,() => {
  console.log(`Server Listening to ${PORT}`);
});
