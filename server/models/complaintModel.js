import mongoose from "mongoose";

const complaintSchema = mongoose.Schema(
  {
    complaintId: {
      type: String,
      required: true,
    },
    complaintDesc: {
      type: String,
      required: true,
    },
    complaintLocation: {
      type: String,
      required: true,
    },
    complaintDepartment: {
      type: String,
      required: true,
    },
    complaintPhotoURL: {
      type: String,
      required: false,
    },
    complaintFileURL: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Complaint = mongoose.model("Complaint", complaintSchema);
