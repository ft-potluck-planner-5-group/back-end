
exports.seed = function (knex) {
  return knex('potlucks').insert([
    { potluck_name: 'potluck1', date: 'November 15th', time: '2:00 PM', location: 'City park', organizer_id: 1 },
    { potluck_name: 'potluck2', date: 'November 30th', time: '5:30 PM', location: 'My house', organizer_id: 2 }
  ]);
};
