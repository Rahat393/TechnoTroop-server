const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express());

app.get('/', (req, res) => {
    res.send('server running....')
});

app.listen(port, () => {
    console.log(`server running on ${port}`);
})