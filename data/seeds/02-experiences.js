exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('experiences').del()
      .then(function () {
          return knex('experiences').insert({
              id: 1,
              title: "The Grand Canyon",
              description: "The Grand Canyon is a beautiful place to travel in the US",
              backgroundImg: "https://www.nps.gov/grca/planyourvisit/images/0531fyp.jpg?maxwidth=650&autorotate=false",
              location: "Arizona",
              share: "Please share!",
              ratings: 10,
              reviews: 5,
              faveIt: false
          });
      });
  };
  