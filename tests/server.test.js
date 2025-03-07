const request = require("supertest");
const app = require("../src/server");

test("Deve retornar status 200 e mensagem correta", async () => {
  const res = await request(app).get("/");
  expect(res.statusCode).toBe(200);
  expect(res.text).toBe("Aplicação funcionando!");
});
