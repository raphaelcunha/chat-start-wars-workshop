import express from "express";
import { v4 as uuidv4 } from "uuid";
import db, { sql } from "./db/setup.mjs";

const app = express();

// create delay middleware
app.use(function (req, res, next) {
  setTimeout(next, 3000);
});

// remove cors
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// create a GET route to receive messages of chat room
app.get("/chat/messages", async function (req, res) {
  // get all messages each users sent in the chat room
  const results = await db.query(
    sql`
        SELECT
            messages.id,
            users.name as userName,
            messages.userId,
            messages.message,
            messages.status,
            messages.createdAt,
            messages.updatedAt
        FROM messages
        JOIN users ON messages.userId = users.id
    `
  );
  res.send(results);
});

// create a POST route to send messages to chat room
app.post("/chat/messages", async function (req, res) {
  // validate the request body
  if (!req.body.userId || !req.body.message) {
    res.status(400).send("Invalid request");
    return;
  }

  // insert the message into the database
  const results = await db.query(
    sql`INSET INTO messages (id, userId, message, createdAt, updatedAt) VALUES (${uuidv4()}, ${
      req.body.userId
    }, ${req.body.message}, ${new Date()}, ${new Date()})})`
  );
  res.send(results);
});

// create a PUT route to update a message in the chat room
app.put("/chat/messages/:id", async function (req, res) {
  // validate the request body
  if (!req.params.id || !req.body.message) {
    res.status(400).send("Invalid request");
    return;
  }

  // update the message in the database
  const results = await db.query(
    sql`UPDATE messages SET message = ${
      req.body.message
    }, updatedAt = ${new Date()} WHERE id = ${req.params.id}`
  );
  res.send(results);
});

// delete a message from the chat room
app.delete("/chat/messages/:id", async function (req, res) {
  // validate the request body
  if (!req.params.id) {
    res.status(400).send("Invalid request");
    return;
  }

  // delete the message from the database
  const results = await db.query(
    sql`DELETE FROM messages WHERE id = ${req.params.id}`
  );
  res.send(results);
});

// start the server
app.listen(3000, function () {
  console.log("Server is running on http://localhost:3000");
});
