
exports.seed = function (knex) {
  return knex('items').insert([
    { item_name: 'Chicken', potluck_id: 1, user_id: 1 },
    { item_name: 'Potato salad', potluck_id: 2, user_id: 2 }
  ]);
};
