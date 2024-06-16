import express from "express";
import cors from "cors";
import ConnectDb from "./config/config";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

//env config
dotenv.config();

//monogdb config
ConnectDb();

//rest object
const app = express();

//middlewares
app.use(
  cors({
    origin: ["http://localhost:3000", "https://devanics-assignment.vercel.app"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

//routes import
import company from "./routes/company";

//routes
app.use("/api/v1", company);

//test
app.get("/", (req, resp) => {
  return resp.status(200).send({
    success: true,
    message: "API WORKS FINE",
  });
});

//port
const PORT = process.env.PORT || 8000;

//listen
app.listen(PORT, () => {
  console.log(
    `Server is Running on port ${PORT} on ${process.env.NODE_ENV} mode`
  );
});
