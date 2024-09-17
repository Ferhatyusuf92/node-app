const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get users');
});

router.post('/', (req, res) => {
  res.send('Got a POST request');
});

router.put('/:id', (req, res) => {
  res.send('Got a PUT request at /user');
});

router.delete('/:id', (req, res) => {
  res.send('Got a DELETE request at /user');
});

module.exports = router;
