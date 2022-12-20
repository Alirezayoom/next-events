import { connectDatabase, insertDocument } from "../../helpers/db-u";

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
      await insertDocument(client, "newsletter", { email });
      client.close();
    } catch (error) {
      res.status(500).json({ message: "connecting to db faild!" });
      return;
    }

    res.status(201).json({ message: "signed up!" });
  }
}

export default handler;
