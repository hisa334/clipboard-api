// index.js
const express = require("express")
const cors = require("cors")

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

let latestText = ""

// POSTエンドポイント（Windows側から送信）
app.post("/clipboard", (req, res) => {
  const { text } = req.body
  if (text) {
    latestText = text
    console.log("Received text:", text)
    res.send({ status: "ok" })
  } else {
    res.status(400).send({ error: "No text received" })
  }
})

// GETエンドポイント（iPad側が取得）
app.get("/clipboard", (req, res) => {
  res.send({ text: latestText })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
// index.js
const express = require("express")
const cors = require("cors")

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

let latestText = ""

// POSTエンドポイント（Windows側から送信）
app.post("/clipboard", (req, res) => {
  const { text } = req.body
  if (text) {
    latestText = text
    console.log("Received text:", text)
    res.send({ status: "ok" })
  } else {
    res.status(400).send({ error: "No text received" })
  }
})

// GETエンドポイント（iPad側が取得）
app.get("/clipboard", (req, res) => {
  res.send({ text: latestText })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
