import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

// React components
import Home from './client/components/Home';

// Set up express
const app = express();

// Set up public directory
app.use(express.static('public'));

// Set up routes
app.get('/', (req, res) => {
    const content = renderToString(<Home />);

    const html = `
        <html>
            <head></head>
            <body>
                <div>${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;

    res.send(html);
});

// Start server
app.listen(3000, () => {
    console.log('Listening on port 3000');
});