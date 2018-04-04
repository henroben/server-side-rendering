const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;

// React components
const Home = require('./client/components/Home').default;

// Set up express
const app = express();

// Set up routes
app.get('/', (req, res) => {
    const content = renderToString(<Home />);

    res.send(content);
});

// Start server
app.listen(3000, () => {
    console.log('Listening on port 3000');
});