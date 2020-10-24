
exports.seed = async function(knex) {
  
  await knex('tasks').insert([
        {project_id: " 1", description: 'Ensure privacy', notes: "Prevents repeat of the incident in August"},
        {project_id: " 1", description: 'Update Jeremy on financial situation', notes: "Attempt positive spin."},
        {project_id: " 1", description: 'Update Maria on new client info'},
        {project_id: "2", description: 'Tell Andrew his project will be two weeks late.', notes: "Politely mention this is due to his last minute changes"},
        {project_id: "2", description: 'Remind Amy to pay us', notes: "Three weeks late already"},
        {project_id: "3", description: 'Book conference room', notes: "By monday"},
        {project_id: "3", description: 'Invite attendees', notes: "By Wednesday"},
        {project_id: "3", description: 'Give presentation', notes: "Friday"},
       
      ]);
    
};
