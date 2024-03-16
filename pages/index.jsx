import PagesMetaHead from '../components/PagesMetaHead';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import AppBanner from '../components/shared/AppBanner';
import React from 'react';

export default function Home() {
  return (
    <div className="container mx-auto">
      <PagesMetaHead title="Home" />

      <AppBanner />

      <ProjectsGrid />
    </div>
  );
}
