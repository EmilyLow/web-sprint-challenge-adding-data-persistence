//!! What is the best way to do node (not react) from scratch?

const express = require("express")
// const helmet = require("helmet")
//Routers
const resourceRouter = require("./routers/resource");
const projectRouter = require("./routers/project");
const taskRouter = require("./routers/task");

const server = express()
const port = process.env.PORT || 5000

// server.use(helmet())
server.use(express.json())

//Use routers
server.use(resourceRouter);
server.use(projectRouter);
server.use(taskRouter);

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})
