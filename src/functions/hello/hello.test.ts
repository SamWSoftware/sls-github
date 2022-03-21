import { main as helloHandler } from "./handler";

describe("hello tests", () => {
  it("should return a hello message", async () => {
    const event = {
      body: JSON.stringify({ name: "John Doe" }),
    };
    // @ts-expect-error
    const response = await helloHandler(event);
    expect(response.statusCode).toBe(200);
    const resBody = JSON.parse(response.body);
    expect(resBody).toEqual({
      message: "Hello John Doe, welcome to the exciting Serverless world!",
    });
  });
});
