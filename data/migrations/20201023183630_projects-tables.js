
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
  
    await knex.schema.createTable("recipe_ingredients", (table) => {
        table
          .integer("recipe_id")
          .references("id")
          .inTable("recipes")
          .onDelete("CASCADE")
          .onUpdate("CASCADE")
          .notNull()
        table 
          .integer("ingredient_id")
          .references("id")
          .inTable("ingredients")
          .onDelete("CASCADE")
          .onUpdate("CASCADE")
          .notNull()
      table
          .real("quantity")
          .notNull()
      table.primary(["recipe_id", "ingredient_id"])
  
    })
  };
  
  
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("recipe_ingredients")
    await knex.schema.dropTableIfExists("steps")
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("recipes")
  };
  