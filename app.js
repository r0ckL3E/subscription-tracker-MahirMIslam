// Create express server
import express from 'express';

//Use the port coming from config and thus pulling data from the development environment
import { PORT } from './config/env.js'

// Initialise app
const app = express();

// Create first route

// Refer to app instace
app.get('/', (req, res) => {
    res.send('Welcome to the Subscription Tracker API');
});

// Make the server listen trying to access specific routes
app.listen(PORT, () => {
    console.log(`Subscription Tracker API is running on http://localhost:${PORT}`);
})

export default app;