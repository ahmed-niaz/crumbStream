import app from "./src/app";
import { calculateDiscount } from "./utils";
import request from "supertest";

describe("app", () => {
  it("should return correct discount count", () => {
    // unit test
    const discount = calculateDiscount({ price: 100, percentage: 10 });
    expect(discount).toBe(10);
  });

  it("should return 200 status code", async () => {
    const response = await request(app).get("/").send();

    expect(response.statusCode).toBe(200);
  });
});
