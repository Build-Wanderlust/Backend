const request = require("supertest");

const db = require("../data/dbConfig.js")

const server = require("../server.js");

describe("usersRouter", () => {

    beforeAll(async () => {
        await db('users')
            .truncate();
      });

      describe("GET /users", () => {
        it("should return status 201", () => {
            return request(server)
                .get("/api/users")
                .then(res => {
                    expect(res.status).toBe(201)
                })
        })
    })
});