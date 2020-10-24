const db = require("../data/config")

function getProjects() {
    return db("projects");
}

function addProject(data) {

    return db("projects").insert(data);
}

module.exports = {
    getProjects, addProject
}