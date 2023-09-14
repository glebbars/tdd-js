import { expect } from "chai";
import { getUserByUsername } from "./db.js";
import { getDBData, resetDB, setDBData } from "./db-helpers.js";
import { mockedUsers } from "./mocks.js";

describe("getUserByUserName", () => {
  afterEach("reset the database", async () => {
    await resetDB();
  });
  it("get the correct user from the database given a username", async () => {
    await setDBData("users", mockedUsers);
    const usernameToDB = "abc";

    const actual = await getUserByUsername(usernameToDB);
    const finalDbState = await getDBData("users");

    const expected = mockedUsers.find(
      (mockedUser) => mockedUser.username === usernameToDB
    );

    expect(actual).excludingEvery("_id").to.deep.equal(expected);
    expect(finalDbState).excludingEvery("_id").to.deep.equal(mockedUsers);
  });

  it("returns null when the user is not found", async () => {
    await setDBData("users", mockedUsers);

    const actual = await getUserByUsername("notFoundUser");
    const finalDbState = await getDBData("users");

    expect(actual).to.be.null;
    expect(finalDbState).excludingEvery("_id").to.deep.equal(mockedUsers);
  });
});
