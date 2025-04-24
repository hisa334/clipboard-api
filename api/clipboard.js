let latestText = ""

export default function handler(req, res) {
  if (req.method === "POST") {
    const { text } = req.body
    if (text) {
      latestText = text
      console.log("Received text:", text)
      return res.status(200).json({ status: "ok" })
    } else {
      return res.status(400).json({ error: "No text received" })
    }
  }

  if (req.method === "GET") {
    return res.status(200).json({ text: latestText })
  }

  return res.status(405).json({ error: "Method Not Allowed" })
}
