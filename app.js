const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path: "./config/config.env"})
const DBConnect = require('./db/DB_Connect')
const indexRouter = require('./router/indexRouter')

const PortNo = process.env.PortNo || 2000

DBConnect.DB_Connect(process.env.DB_Name, process.env.DB_URL)

const app = express()

app.use(express.json())

app.use("", indexRouter.router)

app.listen(PortNo, ()=> {
    console.log(`Server started at http://localhost:${PortNo}`);
})