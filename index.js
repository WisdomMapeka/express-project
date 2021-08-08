const express = require('express');
const path = require('path');
const logger = require('./middleware/Logger');


const app = express();


// init middleware
app.use(logger);



// SETTING STATIC FOLDER
app.use(express.static(path.join(__dirname, "public")));

// members api routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log(`Server is running on port: ${PORT}`));