 // packages import
const express = require('express');
// import router
const router = require("./router/router");
// add database
require("./db/conn");

// add functionality of express
const app = express();
// add port number
const port = process.env.PORT || 3000;
// add json object
app.use(express.json());
// add router
app.use(router);

// Server is listening 
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
