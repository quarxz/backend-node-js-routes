const { Router } = require("express");
const postgres = require("@vercel/postgres");
const createTables = require("../lib/createTables");

const r = Router({ mergeParams: true });

r.use("/:user", user);

r.get("/", async (req, res) => {
  createTables();
  const { user, id } = req.params;

  /* select a single note from a specific user */
  const { rows } = await postgres.sql`SELECT * FROM users`;

  if (!rows.length) {
    return res.json({ message: "users not found" });
  }

  return res.json(rows);
});

module.exports = r;
