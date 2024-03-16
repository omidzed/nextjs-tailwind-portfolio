import React from 'react';
import ProjectSingle from './ProjectSingle';
import { projectsData } from '../../data/projectsData';

function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-5">
      {projectsData.map((project, index) => (
        <ProjectSingle key={index} {...project} />
      ))}
    </div>
  );
}

export default ProjectsGrid;
