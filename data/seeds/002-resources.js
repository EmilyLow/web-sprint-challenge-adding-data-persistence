
exports.seed = async function(knex) {
  
  await knex('resources').insert([
        {name: "Cell phone", description: 'Work provided phone'},
        {name: "Office", description: 'Personal office'},
        {name: "Conference room", description: 'Seats eight'},
        {name: "Client records", description: "History and details of clients"},
        {name: "Projector", description: "Projector in conference room 3"}
       
      ]);
    
};
