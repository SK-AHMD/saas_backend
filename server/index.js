const express = require('express');

const app = express();
const PORT = 5000;

const cors = require('cors');
// Middlewares

app.use(express.json()); // req.body will be in json format so to encode that we use this middleware 
app.use(cors()); // so that our backend can interact with our frontend


// ROUTERS 





app.listen(PORT, () => console.log(`Server Starte at PORT : ${PORT}`))