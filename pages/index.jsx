import PagesMetaHead from '../components/PagesMetaHead';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import AppBanner from '../components/shared/AppBanner';
import React from 'react';

export default function Home() {
  return (
    <div className="container mx-auto">
      <PagesMetaHead title="Home" />

      <AppBanner />

      <span className="flex justify-center dark:text-white text-black mt-36 mb-8 text-3xl underline underline-offset-8 tracking-widest">
        Projects
      </span>
      <ProjectsGrid />
    </div>
  );
}
