const ProjectModel = require('../models/projectmodel'); 

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await ProjectModel.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};


exports.createProject = async (req, res) => {
  try {
    const {id, projectTitle, description, links, technicalStacks, createdBy } = req.body;

    const newProject = new ProjectModel({
      id,
      projectTitle,
      description,
      links,
      technicalStacks,
      createdBy
    });

    const savedProject = await newProject.save();

    res.status(201).json(savedProject);
  } catch (error) {
    console.error(error); 
    res.status(500).json({ error: 'Server error occurred' });
  }
};


exports.getProjectById = async (req, res) => {
  try {
    const project = await ProjectModel.findOne({ id: req.params.projectId });
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const updatedProject = await ProjectModel.findOneAndUpdate(
      { id: req.params.projectId },
      req.body,
      { new: true }
    );
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    await ProjectModel.findOneAndRemove({ id: req.params.projectId });
    res.status(200).json({ message: "Project deleted" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};



exports.getProjectsByTechnicalStack = async (req, res) => {
    try {
        const technicalStack = req.body.technicalStack; 
        
        console.log(technicalStack)

        const projects = await ProjectModel.find({
            technicalStacks: technicalStack
        }); 
        
        res.status(200).json(projects);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};



