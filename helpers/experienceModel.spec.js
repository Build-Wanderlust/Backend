const request = require("supertest");

const db = require("../data/dbConfig.js")

const server = require("../server.js");

const experiences = require('./experiencesModel');

describe('experiences server', () => {
	beforeEach( async () => {
		await db('experiences').truncate();
	})

	describe('get to api/experiences', () => {
		it('should return an array of experiences', async () => {
			const experiencelist = await experiences.find();
			expect(experiencelist).toBeDefined();
		})
    })

    describe('insert to api/experiences', () => {
		it('add a new experience', async () => {
            const experience = { title: 'Banana', description: "fun", backgroundImg: "funimage", "location": "Boston", "ratings": 2, "reviews": 5 }
            const newExperiences = await experiences.add(experience);
			const experienceList = await experiences.find();

			expect(experienceList.length > 1)
		})

		it('should resolve to new experience', async () => {
            const experience = { title: 'Banana', description: "fun", backgroundImg: "funimage", "location": "Boston", "ratings": 2, "reviews": 5 }
            const newExperience = await experiences.add(experience);

			expect(newExperience).toEqual({ id: 1, share: null, faveIt: null, title: 'Banana', description: "fun", backgroundImg: "funimage", "location": "Boston", "ratings": 2, "reviews": 5 })
		})
	})
});