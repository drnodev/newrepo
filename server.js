/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const env = require("dotenv").config()
const app = express()
const static = require("./routes/static")
const inventoryRoute = require('./routes/inventoryRoute')

const baseController = require("./controllers/baseController")
const util = require('./utilities')

/* ***********************
 * Routes
 *************************/

app.set("view engine", "ejs")
app.use(expressLayouts)
app.set("layout", "./layouts/layout")

app.use("/inv", inventoryRoute)


app.use(static)

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT
const host = process.env.HOST




app.get('/',baseController.buildHome)



app.use((req, res, next) => util.renderErrorPage(404, req,res,next))
app.use((err, req, res, next) => util.renderErrorPage(500, req,res,next))

process.on('uncaughtException',(err,origin)=>{
  console.log("Error uncaughtException")
  console.log(process.stderr.fd,`${err}\n ${origin}`)
})


/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`)
})
