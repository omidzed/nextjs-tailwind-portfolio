import PagesMetaHead from '../../components/PagesMetaHead';
import ProjectsGrid from '../../components/projects/ProjectsGrid';
import React from 'react';

function index() {
  return (
    <div className="container mx-auto my-20">
      <PagesMetaHead title="Projects" />

      <ProjectsGrid />
    </div>
  );
}

export default index;
