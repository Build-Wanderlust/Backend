const faker = require('faker');

const createFakeUser = () => ({
  firstname: faker.name.firstName(),
  lastname: faker.name.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password()
})

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
        /// fake users
        const fakeUsers = [];

        const desiredFakeUsers = 50;

        for(let i = 0; i < desiredFakeUsers; i++) {
          fakeUsers.push(createFakeUser());
        }

        return knex('users').insert(fakeUsers);
    });
};
