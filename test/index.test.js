import app from "../src/app.js";
import request from "supertest";

describe("get/all", () => {
  test("should respond whit a 200 status code", async () => {
    const response = await request(app).get("/colectionll").send();
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(expect.arrayContaining([]));
  });
});

describe("get/women", () => {
  //should respond wiht a 200 status code
  test("should respond whit a 200 status code", async () => {
    const response = await request(app).get("/women").send();
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(expect.arrayContaining([]));
  });
  //should respond with a object
  test("should respond whit a object", async () => {
    const response = await request(app).get("/women").send();

    expect(response.body).toEqual(expect.arrayContaining([]));
  });
  //should respond with a content-type of application/json

  //should respond with a json object containing the product whir table women
});

describe("get/men", () => {
  //should respond wiht a 200 status code
  test("should respond whit a 200 status code", async () => {
    const response = await request(app).get("/men").send();
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(expect.arrayContaining([]));
  });
  //should respond with a object
  test("should respond whit a object", async () => {
    const response = await request(app).get("/men").send();

    expect(response.body).toEqual(expect.arrayContaining([]));
  });
  //should respond with a content-type of application/json

  //should respond with a json object containing the product whir table women
});
