require("dotenv").config()
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(cors());
app.get('/', async(req, res) => {

    return res.status(200).render('index.ejs');
});
app.listen(PORT, () => console.log(`Server listening for request on ${PORT}`));