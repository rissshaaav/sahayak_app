import express from "express";
import mongoose from "mongoose";
import { Complaint } from "./models/complaintModel.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(express.json());

app.post("/complaint", async (req, res) => {
  if (
    !req.body.complaintId ||
    !req.body.complaintDesc ||
    !req.body.complaintLocation ||
    !req.body.complaintDepartment
  ) {
    return res.send({ message: "one or more required fields missing" });
  }
  try {
    const newComplaint = {
      complaintId: req.body.complaintId,
      complaintDesc: req.body.complaintDesc,
      complaintDepartment: req.body.complaintDepartment,
      complaintLocation: req.body.complaintLocation,
      complaintPhotoURL: req.body.complaintPhotoURL || null,
      complaintFileURL: req.body.complaintFileURL || null,
    };
    const complaint = await Complaint.create(newComplaint);
    return res.status(201).send(complaint);
  } catch (error) {
    // console.log(error.message);
    return res.status(500).send(error.message);
  }
});

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connected to db");
    app.listen(process.env.PORT, () => {
      console.log("server running on port: ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
    console.log("error connecting to db");
  });
