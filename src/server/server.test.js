import sinon from "sinon";
import request from "supertest";
import { expect } from "chai";
import db from "./db/db.js";
import { app } from "./server.js";

const mockedUser = {
  id: "123",
  username: "abc",
  email: "abc@gmail.com",
};
const mockedUsername = mockedUser.username;
const mockedNotFoundUserName = "notFound";

describe("GET /users/:username", () => {
  it("sends the correct response when a user with the username is found", async () => {
    const stub = sinon.stub(db, "getUserByUsername").resolves(mockedUser);

    await request(app)
      .get(`/users/${mockedUsername}`)
      .expect(200)
      .expect("Content-Type", /json/)
      .expect(mockedUser);

    expect(stub.getCall(0).args[0]).to.equal(mockedUsername);

    stub.restore();
  });

  it("sends the correct response when there is an error", async () => {
    const error = { message: "Something went wrong" };

    const stub = sinon.stub(db, "getUserByUsername").throws(error);

    await request(app)
      .get(`/users/${mockedUsername}`)
      .expect(500)
      .expect("Content-Type", /json/)
      .expect(error);

    stub.restore();
  });

  it("returns the appropriate response when the user is not found", async () => {
    const stub = sinon.stub(db, "getUserByUsername").resolves(null);

    await request(app).get(`/users/${mockedNotFoundUserName}`).expect(404);

    expect(stub.getCall(0).args[0]).to.equal(mockedNotFoundUserName);

    stub.restore();
  });
});
