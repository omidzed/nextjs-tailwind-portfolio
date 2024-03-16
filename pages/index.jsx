import PagesMetaHead from '../components/PagesMetaHead';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import AppBanner from '../components/shared/AppBanner';
import React from 'react';

export default function Home() {
  return (
    <div className="container mx-auto">
      <PagesMetaHead title="Home" />

      <AppBanner />

      <span className="flex justify-center text-white mt-20 my-20 text-4xl">
        Projects
      </span>
      <ProjectsGrid />
    </div>
  );
}
