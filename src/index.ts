import express from "express";
import diagnoseRouter from "./routes/diagnoses";
import patientRoute from "./routes/patients";

const app = express();
app.use(express.json());

const PORT = 3001;

app.get("/api/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

app.use("/api/diagnoses", diagnoseRouter);
app.use("/api/patients", patientRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
