import { MongoClient } from "mongodb";

async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://ali:ali@cluster0.qafjedp.mongodb.net/events?retryWrites=true&w=majority"
  );
  return client;
}

async function insertDocument(client, document) {
  const db = client.db();

  await db.collection("newsletter").insertOne(document);
}

async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Inavlid email address." });
      return;
    }

    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "connecting to db faild!" });
      return;
    }

    try {
      await insertDocument(client, { email });
      client.close();
    } catch (error) {
      res.status(500).json({ message: "connecting to db faild!" });
      return;
    }

    res.status(201).json({ message: "signed up!" });
  }
}

export default handler;
