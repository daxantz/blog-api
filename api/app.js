import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/register.js";

import prisma from "./prisma/database.js";

const app = express();

app.use(cors());
app.use(express.json()); // Built-in middleware for JSON
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

async function main() {
  app.listen(3000, (req, res) => {
    console.log("Server running on port 3000");
  });
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
