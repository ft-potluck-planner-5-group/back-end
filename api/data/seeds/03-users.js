
exports.seed = function (knex) {
  return knex('users').insert([
    { username: 'user1', password: 'abc', isGoing: true, potluck_id: 1 },
    { username: 'user2', password: 'def', isGoing: false, potluck_id: 2 }
  ]);
};
