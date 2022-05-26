import app from "./../src/app";
import supertest from "supertest";

describe("GET /api/v1/pets/", () => {
	test("should return status code 200", async () => {
		const response = await request(app).get("/api/v1/pets");
		expect(response.status).toBe(200);
	});
}

);

describe("POST /api/v1/user", () => {
	describe("given a username and password", () => {
  
		test("should respond with a 200 status code", async () => {
			const response = await request(app).post("/api/v1/user").send({
				username: "username",
				password: "password"
			});
			expect(response.statusCode).toBe(200);
		});
		test("should specify json in the content type header", async () => {
			const response = await request(app).post("/api/v1/user").send({
				username: "username",
				password: "password"
			});
			expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
		});
		test("response has userId", async () => {
			const response = await request(app).post("/api/v1/user").send({
				username: "username",
				password: "password"
			});
			expect(response.body.userId).toBeDefined();
		});
	});
  
	describe("when the username and password is missing", () => {
		test("should respond with a status code of 400", async () => {
			const bodyData = [
				{username: "username"},
				{password: "password"},
				{}
			];
			for (const body of bodyData) {
				const response = await request(app).post("/api/v1/user").send(body);
				expect(response.statusCode).toBe(400);
			}
		});
	});
  
});