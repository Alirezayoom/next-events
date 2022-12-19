import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from "../../../helpers/db-u";

async function handler(req, res) {
  const eventId = req.query.eventId;

  let client;

  try {
    const client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "connecting to db faild" });
    return;
  }

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      client.close();
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    let result;

    try {
      result = await insertDocument(client, "comments", newComment);
      newComment._id = result.insertedId;

      res.status(201).json({ message: "comment added.", comment: newComment });
    } catch (error) {
      res.status(500).json({ message: "inserting to db fiald!" });
    }
  }

  if (req.method === "GET") {
    try {
      await getAllDocuments(client, "comments", { _id: -1 });
      res.status(201).json({ comments: documents });
    } catch (error) {
      res.status(500).json({ message: "getting comments faild" });
    }
  }

  client.close();
}

export default handler;
