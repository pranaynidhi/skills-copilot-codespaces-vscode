// Create web server
// Create a new comment
// Read all comments
// Read a comment
// Update a comment
// Delete a comment
// Read all comments of a post
// Read all comments of a user

// Create an Express app
const express = require('express');
const app = express();

// Create a new comment
app.post('/comments', (req, res) => {
  res.send('Create a new comment');
});

// Read all comments
app.get('/comments', (req, res) => {
  res.send('Read all comments');
});

// Read a comment
app.get('/comments/:id', (req, res) => {
  res.send('Read a comment');
});

// Update a comment
app.put('/comments/:id', (req, res) => {
  res.send('Update a comment');
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
  res.send('Delete a comment');
});

// Read all comments of a post
app.get('/posts/:id/comments', (req, res) => {
  res.send('Read all comments of a post');
});

// Read all comments of a user
app.get('/users/:id/comments', (req, res) => {
  res.send('Read all comments of a user');
});

// Start the server
app.listen(3000, () => {
  console.log('Server started');
});