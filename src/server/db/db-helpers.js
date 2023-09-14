import { MongoClient } from "mongodb";
import { DB_NAME } from "./db.js";

export const setDBData = async (collectionName, data) => {
  const client = await MongoClient.connect(
    `mongodb://localhost:27017/${DB_NAME}`
  );

  const db = client.db(DB_NAME);

  await db.collection(collectionName).insertMany(data);

  await client.close();
};

export const getDBData = async (collectionName) => {
  const client = await MongoClient.connect(
    `mongodb://localhost:27017/${DB_NAME}`
  );

  const db = client.db(DB_NAME);

  const result = await db.collection(collectionName).find().toArray();

  await client.close();

  return result;
};

export const resetDB = async () => {
  const client = await MongoClient.connect(
    `mongodb://localhost:27017/${DB_NAME}`
  );

  const db = client.db(DB_NAME);

  await db.dropDatabase();

  await client.close();
};
