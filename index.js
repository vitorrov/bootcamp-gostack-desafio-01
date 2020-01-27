const express = require("express");

const server = express();

server.use(express.json());

projects = [];

function checkIdExists(req, res, next) {
  const { id } = req.params;
  const project = projects.find(project => project.id == id);

  if (!project) {
    res.status(400).json({ error: "ID not found" });
  }

  return next();
}

function logCounter(req, res, next) {
  console.count("Requisições feitas");
  return next();
}

server.get("/projects", logCounter, (req, res) => {
  res.json(projects);
});

server.post("/projects", logCounter, (req, res) => {
  const { id } = req.body;
  const { title } = req.body;
  const { tasks } = req.body;

  const project = {
    id,
    title,
    tasks
  };

  projects.push(project);

  res.json({ message: "Sucesso." });
});

server.put("/projects/:id", checkIdExists, logCounter, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(project => project.id == id);
  project.title = title;

  res.json(project);
});

server.delete("/projects/:id", checkIdExists, logCounter, (req, res) => {
  const { id } = req.params;

  const project = projects.find(project => project.id == id);

  projects.splice(project, 1);

  return res.json({ message: "Deletado com sucesso." });
});

server.post("/projects/:id/tasks", checkIdExists, logCounter, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(project => project.id == id);

  project.tasks.push(title);

  res.json(projects);
});

server.listen(3333);
