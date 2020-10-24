
exports.seed = async function(knex) {
  
  await knex('projects').insert([
        {name: "Priority 1", description: 'Give investors updates'},
        {name: "Priority 2", description: 'Contact clients'},
        {name: "Priority 3", description: 'Give presentation'},
       
      ]);
    
};
