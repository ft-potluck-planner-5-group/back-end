
exports.seed = function (knex) {
  return knex('organizers').insert([
    { organizer_username: 'org1', organizer_password: 'red' },
    { organizer_username: 'org2', organizer_password: 'blue' }
  ]);
};
