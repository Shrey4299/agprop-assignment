const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  projectTitle: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  links: {
    type: String,
  },
  technicalStacks: {
    type: String,
    required: true,
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
