const db = require("../data/config")

function getResources() {
    return db("resources");
}

function addResource(data) {

    return db("schemes").insert(data);
}

module.exports = {
    getResources, addResource
}