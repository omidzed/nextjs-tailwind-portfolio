import React from 'react';
import ProjectSingle from './ProjectSingle';
import { projectsData } from '../../data/projectsData';

const ProjectsGrid = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-20 ">
      {projectsData.map((project, index) => (
        <ProjectSingle key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectsGrid;
