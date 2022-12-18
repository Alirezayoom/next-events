function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Inavlid email address." });
      return;
    }

    console.log(email);
    res.status(201).json({ message: "signed up!" });
  }
}

export default handler;
