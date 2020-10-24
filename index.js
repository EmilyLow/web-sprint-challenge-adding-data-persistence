//!! What is the best way to do node (not react) from scratch?

const express = require("express")
// const helmet = require("helmet")
//Routers
// const recipeRouter = require("./recipe-router");


const server = express()
const port = process.env.PORT || 5000

// server.use(helmet())
server.use(express.json())

//Use routers
// server.use(recipeRouter);

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})
