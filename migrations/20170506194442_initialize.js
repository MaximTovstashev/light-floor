exports.up = function(knex) {
    return Promise.resolve()
      .then(()=>{
        return knex.schema.createTable('person_type', (table) => {
          table.increments('id').primary();
          table.string('key', 64).notNullable();
          table.boolean('is_admin').notNullable();
        });
      })
      .then(()=>{
        return knex('person_type').insert({
          key: 'admin',
          is_admin: true
        })
      })
      .then(()=>{
        return knex.schema.createTable('person', (table) => {
          table.increments('id').primary();
          table.string('first_name', 128).notNullable();
          table.string('last_name', 128).notNullable();
          table.string('middle_name', 128).notNullable();
          table.string('date_of_birth', 10).nullable();
          table.string('gender', 1).notNullable();
          table.integer('person_type_id').notNullable();
          table.foreign('person_type_id').references('person_type.id').onUpdate('CASCADE').onDelete('CASCADE');
        });
      })
};

exports.down = function(knex) {
  return Promise.all([
      knex.schema.dropTable('person_type'),
      knex.schema.dropTable('person')
    ]);
};
