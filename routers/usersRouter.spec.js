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
    describe("POST /users/register", () => {
        it("should return 201 when registering a user", () => {
            return request(server)
                .post("/api/users/register")
                .send({ firstname: "test", lastname: "testlast", email: "tyler@12344gmail.com", password: "1234cmon" })
                .then(res => {
                    expect(res.status).toBe(201)
                })
        });
    })    
});