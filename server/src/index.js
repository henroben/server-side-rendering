import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

// Set up express
const app = express();

// Set up public directory
app.use(express.static('public'));

// Set up routes
app.get('*', (req, res) => {
    const store = createStore();
    // TODO: initialise and load data into store
    res.send(renderer(req, store));
});

// Start server
app.listen(3000, () => {
    console.log('Listening on port 3000');
});