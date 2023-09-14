import { MongoClient } from "mongodb";

export const DB_NAME = process.env.NODE_ENV === "test" ? "TEST_DB" : "PROD_DB";

export const getUserByUsername = async (username) => {
  const client = await MongoClient.connect(
    `mongodb://localhost:27017/${DB_NAME}`
  );
  const db = client.db(DB_NAME);

  const result = await db.collection("users").findOne({ username });

  await client.close();

  return result;
};

export default { getUserByUsername };
