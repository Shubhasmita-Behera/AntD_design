const express = require('express');
const { MongoClient } = require('mongodb');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
  });

const mongoUrl = 'mongodb://localhost:27017';
const mongoDbName = 'Dishes';
const pgConfig = {
  user: 'postgres',
  password: 'Shubha@2018',
  host: 'localhost',
  port: 5432,
  database: 'demo_db',
};

// MongoDB setup
const mongoClient = new MongoClient(mongoUrl, { useUnifiedTopology: true });

// PostgreSQL setup
const pgPool = new Pool(pgConfig);

// Connect to MongoDB and PostgreSQL
Promise.all([ pgPool.connect()])
  .then(() => {
    console.log('Connected to MongoDB and PostgreSQL');
  })
  .catch((err) => {
    console.error('Error connecting to databases:', err);
  });

// API endpoint to insert a dish into MongoDB and create records in PostgreSQL
app.post('/dishes', async (req, res) => {
  try {
    // console.log("received;"+ JSON.stringify(req)  )
    const { name, ingredients } = req.body;
     
    // Insert the dish into MongoDB
    const db = mongoClient.db(mongoDbName);
    const collection = db.collection('dishes');
    await collection.insertOne({ name, ingredients });

    // Insert records into PostgreSQL
    // const insertPromises = ingredients.map((ingredient) => {
      // const insertPromises = ingredients.map((ingredient) => {
      const query = {
        text: 'INSERT INTO ingredients (ingredient, dish_name) VALUES ($1, $2)',
        values: [ingredients, name],
      };
      return pgPool.query(query);
    // );
    // await Promise.all(insertPromises);

    res.sendStatus(201);
  } catch (error) {
    console.error('Error inserting dish and ingredients:', error);
    res.status(500).json({ error: 'An error occurred while inserting dish and ingredients.' });
  }
});
// API endpoint to get a dish with its ingredients from MongoDB
app.get('/dishes/:dishName', async (req, res) => {
  try {
    const dishName = req.params.dishName;

    // Retrieve the dish from MongoDB
    const db = mongoClient.db(mongoDbName);
    const collection = db.collection('dishes');
    const dish = await collection.findOne({ name: dishName });

    if (!dish) {
      res.status(404).json({ error: 'Dish not found.' });
      return;
    }

    res.json(dish);
  } catch (error) {
    console.error('Error retrieving dish:', error);
    res.status(500).json({ error: 'An error occurred while retrieving the dish.' });
  }
});

// API endpoint to get dishes for a single ingredient from PostgreSQL
app.get('/ingredients/:ingredient', async (req, res) => {
  try {
    const ingredient = req.params.ingredient;

    // Retrieve dishes from PostgreSQL
    const query = {
      text: 'SELECT * FROM ingredients WHERE ingredient = $1',
      values: [ingredient],
    };
    const result = await pgPool.query(query);

    const dishes = result.rows.map((row) => row.dish_name);

    res.json({ dishes });
  } catch (error) {
    console.error('Error retrieving dishes for ingredient:', error);
    res.status(500).json({ error: 'An error occurred while retrieving dishes for the ingredient.' });
  }
});

// API endpoint to get all dishes from MongoDB
app.get('/dishes', async (req, res) => {
try {
  // Retrieve all dishes from MongoDB
  const db = mongoClient.db(mongoDbName);
  const collection = db.collection('dishes');
  const dishes = await collection.find().toArray();

  res.json(dishes);
} catch (error) {
  console.error('Error retrieving dishes:', error);
  res.status(500).json({ error: 'An error occurred while retrieving the dishes.' });
}
});

// API endpoint to get all ingredients from PostgreSQL
app.get('/ingredients', async (req, res) => {
try {
  // Retrieve all ingredients from PostgreSQL
  const query = 'SELECT * FROM ingredients';
  const result = await pgPool.query(query);

  const ingredients = result.rows.map((row) => row.ingredient);

  res.json({ ingredients });
} catch (error) {
  console.error('Error retrieving ingredients:', error);
  res.status(500).json({ error: 'An error occurred while retrieving the ingredients.' });
}
});


app.listen(5599, () => {
  console.log('Server with mongo + pg is running on port 5599');
});
