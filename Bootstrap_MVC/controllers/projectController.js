const Project = require('../models/project');

// Create a new butterfly project
exports.createProject = async (req, res) => {
  const { title, image, link, description, species, color } = req.body;

  const newProject = new Project({
    title,
    image,
    link,
    description,
    species,
    color,
  });

  try {
    const savedProject = await newProject.save();
    res.status(201).json({ message: 'Project created successfully', project: savedProject });
  } catch (error) {
    console.error('Error saving project:', error);
    res.status(500).json({ message: 'Error saving project', error });
  }
};

// Get all butterfly projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json({ projects });
  } catch (error) {
    console.error('Error retrieving projects:', error);
    res.status(500).json({ message: 'Error retrieving projects', error });
  }
};
