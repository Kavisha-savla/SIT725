const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5500;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});