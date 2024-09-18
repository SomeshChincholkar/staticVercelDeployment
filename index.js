import express from 'express';
import path from 'path';

const app = express();

// Set the views directory and view engine
app.set('views', path.resolve('views')); // Ensure 'views' folder is correctly set
app.set('view engine', 'ejs');

// Serve static files from the 'public' folder
app.use(express.static(path.resolve('./public'))); // This will serve everything in 'public', including images

// Define a route
app.get('/', (req, res) => {
    res.render('index'); // Render 'index.ejs' from the 'views' folder
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
