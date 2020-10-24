const db = require("../data/config")

//! How to return project name just once
function getTasks() {
    return db("tasks as t")
        .innerJoin("projects as p", "p.id", "t.project_id")
        .select("p.name as project_name", "p.description as project_description", "t.description as task_description", "t.notes as task_notes" )
    }

function addTask(data) {
    
    return db("tasks").insert(data);
}

module.exports = {
    getTasks, addTask
}