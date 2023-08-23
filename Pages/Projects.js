import React, { useState, useEffect } from 'react';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <div>
      <h1>My Projects</h1>
      {projects.map(project => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;
