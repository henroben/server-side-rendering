import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

// Set up express
const app = express();

// Set up public directory
app.use(express.static('public'));

// Set up routes
app.get('*', (req, res) => {
    const store = createStore();

    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData ? route.loadData(store) : null;
    });

    Promise.all(promises).then(() => {
        res.send(renderer(req, store));
    });

});

// Start server
app.listen(3000, () => {
    console.log('Listening on port 3000');
});