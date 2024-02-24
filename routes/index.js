const { Router } = require("express");
const alluser = require("./allusers.route");

const r = Router();

r.use("/", alluser);

r.get("/", async (request, response) => {
  return response.json({
    message: "Welcome to the note-taking backend app!",
  });
});

module.exports = r;
