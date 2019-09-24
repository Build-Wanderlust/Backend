const faker = require('faker');

const randomSummary = [];

for (let i = 0; i < 15; i++) {
  randomSummary.push(faker.random.words());
}

const summary = randomSummary.join(" ");

const createFakeExperience = () => ({
  title: faker.random.words(),
  summary: summary
})

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('experiences').del()
    .then(function () {
      // Inserts seed entries
        /// fake users
        const fakeExperiences = [];

        const desiredFakeExperiences = 5;

        for(let i = 0; i < desiredFakeExperiences; i++) {
          fakeExperiences.push(createFakeExperience());
        }

        return knex('experiences').insert(fakeExperiences);
    });
};