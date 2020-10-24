
exports.up = async function(knex) {
    await knex.schema.createTable("projects", (table) => {
        table.increments("id")
        table.text("name").notNull().unique()
        table.text("description")
        //check this
        table.integer("completed").defaultTo("0")
    })
  
    await knex.schema.createTable("resources", (table) => {
        table.increments("id")
        table.text("name").notNull().unique()
        table.text("description")
    })
  
    await knex.schema.createTable("tasks", (table) => {
        table.increments("id")
        table
        .integer("project_id")
        .references("id")
        .inTable("projects")
        .onDelete("SET NULL")
        .onUpdate("CASCADE")
          //Are .onDelete and onUpdate necessary for function?
        table.integer("description").notNull()
        table.integer("notes")
        table.integer("completed").defaultTo("0");
    })
  
    await knex.schema.createTable("project_resources", (table) => {
        table
          .integer("project_id")
          .references("id")
          .inTable("projects")
          .onDelete("CASCADE")
          .onUpdate("CASCADE")
          .notNull()
        table 
          .integer("resource_id")
          .references("id")
          .inTable("resources")
          .onDelete("CASCADE")
          .onUpdate("CASCADE")
          .notNull()
      table.primary(["project_id", "resource_id"])
  
    })
  };
  
  
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("project_resources")
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("resources")
    await knex.schema.dropTableIfExists("projects")
  };
  