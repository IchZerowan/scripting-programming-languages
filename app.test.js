const app = require("./server");
const supertest = require("supertest");
const request = supertest(app);

it("index text", async () => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello node.js");
}); 
