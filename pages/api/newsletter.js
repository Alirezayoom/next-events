import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Inavlid email address." });
      return;
    }

    const client = await MongoClient.connect(
      "mongodb+srv://ali:ali@cluster0.qafjedp.mongodb.net/events?retryWrites=true&w=majority"
    );
    const db = client.db();

    await db.collection("newsletter").insertOne({ email });
    client.close();

    res.status(201).json({ message: "signed up!" });
  }
}

export default handler;
