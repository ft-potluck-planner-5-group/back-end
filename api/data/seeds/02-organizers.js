
exports.seed = function (knex) {
  return knex('organizers').insert([
    { username: 'org1', password: '1234' },
    { username: 'org2', password: '5678' }
  ]);
};
