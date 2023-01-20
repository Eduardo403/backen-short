import app from "../src/app.js";
import request from "supertest";
import { expect, test, describe } from "@jest/globals";
describe("get/women", () => {
  const newProduct = {
    name: "some name",
    description: "some description",
    price: 33252,
    image: "http://localhost:4000/public",
  };
  const missingProduct = {
    name: "",
    description: "some description",
    price: 33252,
    image: "http://localhost:4000/public",
  };
  //should respond wiht a 200 status code
  test("should respond whit a 200 status code", async () => {
    const response = await request(app).get("/women").send();
    expect(response.statusCode).toBe(200);
  });
  //should respond with a object
  test("should respond whit a object", async () => {
    const response = await request(app).get("/women").send();

    expect(response.body).toEqual(expect.arrayContaining([]));
  });
  //should respond with a content-type of application/json
  test("should respond with a contet-type of application/json", async () => {
    const response = await request(app).post("/women").send(newProduct);
    expect(response.headers["Content-Type"]).toBe("json");
  });

  //validate product not null
  test("should validate product not null", async () => {
    const response = await request(app).post("/women").send(missingProduct);
    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual("missing something data in the form");
  });
  //should respond with a json object containing the product whir table women
});
