const express = require("express");

const server = express();

server.use(express.json());

projects = [];

server.get("/projects", (req, res) => {
  res.json(projects);
});

server.post("/projects", (req, res) => {
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

server.put("/projects/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(project => project.id == id);
  project.title = title;

  res.json(projects);
});

server.delete("/projects/:id", (req, res) => {
  const { id } = req.params;

  const project = projects.findIndex(project => project.id == id);

  projects.splice(project, 1);

  return res.json(projects);
});

server.post("/projects/:id/tasks", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(project => project.id == id);

  project.tasks.push(title);

  res.json(projects);
});

server.listen(3333);
