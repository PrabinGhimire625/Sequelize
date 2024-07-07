import express from "express";
import dotenv from "dotenv";
import router from "./route/router.js";
import sequelize from "./connection/sequelize.js";
import cors from "cors";
import cookieParser from "cookie-parser";   //read and handle cookies in your server.  always import in server.js pages

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//connect front end and backend
app.use(
  cors({
    origin: ["http://localhost:5173"], // Frontend URL
    methods: ["GET", "POST"],
    credentials: true,         //
  })
);

// Include your router
app.use("/", router);

// Start the Express server
sequelize
  .sync() // Create tables if they don't exist
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error syncing sequelize:", error);
  });
