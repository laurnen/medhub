import express from "express";
import cors from "cors";
import patient from "./routes/patient.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/patient", patient);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});