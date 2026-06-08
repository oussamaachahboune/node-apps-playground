const request = require("supertest");
const app = require("../src/app");

test("should signup a new user", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "Oussama",
      email: "oussama@example.com",
      password: "Red12345!",
    })
    .expect(201);
});
