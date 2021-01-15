const express = require('express');
const cors = require('cors');
const router = require('./routes');
var cookieParser = require('cookie-parser');

const app = express();


app.use(express.json())
app.use(cors());
app.use(cookieParser())
app.use(router)



app.listen(8888,()=>{
    console.log('listen port 8888')
})