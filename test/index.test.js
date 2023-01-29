import app from "../src/app.js";
import request from "supertest";
import { expect, test, describe } from "@jest/globals";
describe("get/ProductCategory", () => {
  //should respond wiht a 200 status code
  test("should respond whit a 200 status code", async () => {
    const response = await request(app).get("/shop/women").send();
    expect(response.statusCode).toBe(200);
  });
  //should respond with a object
  test("should respond whit a object", async () => {
    const response = await request(app).get("/shop/women").send();

    expect(response.body).toEqual(expect.arrayContaining([]));
  });

  //should respond with a json object containing the product whir table women
});

describe("post/product/admi", () => {
  const newProduct = {
    name: "some name",
    description: "some description",
    price: 33252,
    image: "http://localhost:4000/public",
    category: "women",
  };
  const missingProduct = {
    name: "",
    description: "some description",
    price: 33252,
    image: "http://localhost:4000/public",
    category: "women",
  };
  //should respond with a 200 status code
  test("should respond wiht a 200 status code", async () => {
    const response = await request(app)
      .post("/admi/newProduct")
      .send(newProduct);
    expect(response.statusCode).toBe(200);
  });
  //should respond with a content-type of application/json
  test("should respond with a contet-type of application/json", async () => {
    const response = await request(app)
      .post("/admi/newProduct")
      .send(newProduct);

    expect(response.headers["content-type"]).toContain(
      "application/json; charset=utf-8"
    );
  });

  //validate product not null
  test("should validate product not null", async () => {
    const response = await request(app)
      .post("/admi/newProduct")
      .send(missingProduct);
    expect(response.statusCode).toBe(404);
    expect(response.body.message).toBe(
      "something fields  is missing data ,please review"
    );
  });
});

//patch route
describe("patch route", () => {
  //const for prube
  const newProduct = {
    name: "some name",
    description: "some description",
    price: 33252,
    image: "http://localhost:4000/public",
    category: "women",
  };
  const missingProduct = {
    name: "",
    description: "some description",
    price: 33252,
    image: "http://localhost:4000/public",
    category: "women",
  };
  //should respond with a 200 status code
  test("should respond with a 200 status code", async () => {
    const response = await request(app)
      .patch("/admi/updateProduct/2")
      .send(newProduct);
    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toContain(
      "application/json; charset=utf-8"
    );
  });
  //should respond with a content-type of application/json
  test("should content headers ", async () => {
    const response = await request(app)
      .patch("/admi/updateProduct/2")
      .send(newProduct);

    expect(response.headers["content-type"]).toContain(
      "application/json; charset=utf-8"
    );
  });
  //should respond with s status code 404
  test("should validate product not null", async () => {
    const response = await request(app)
      .patch("/admi/updateProduct/2")
      .send(missingProduct);
    expect(response.statusCode).toBe(404);
    expect(response.body.message).toBe(
      "something fields  is missing data ,please review"
    );
  });
  //should respond with a object
  test("should respond with a object", async () => {
    const response = await request(app)
      .patch("/admi/updateProduct/2")
      .send(newProduct);
    expect(response.body).toEqual(expect.arrayContaining([]));
  });
});
