import Image from 'next/image';
import { FiClock, FiTag } from 'react-icons/fi';
import PagesMetaHead from '../../components/PagesMetaHead';
import { projectsData } from '../../data/projectsData';
import React from 'react';
import PropTypes from 'prop-types';

function ProjectSingle({ project }) {
  return (
    <div className="container mx-auto">
      <PagesMetaHead title={project.title} />

      {/* Header */}
      <div>
        <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
          {project.ProjectHeader.title}
        </p>
        <div className="flex">
          <div className="flex items-center mr-10">
            <FiClock className="text-xl text-ternary-dark dark:text-ternary-light" />
            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
              {project.ProjectHeader.publishDate}
            </span>
          </div>
          <div className="flex items-center">
            <FiTag className="w-4 h-4 text-ternary-dark dark:text-ternary-light" />
            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
              {project.ProjectHeader.tags}
            </span>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
        {project.ProjectImages.map(image => {
          return (
            <div className="mb-10 sm:mb-0" key={image.id}>
              <Image
                src={image.img}
                className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                alt={image.title}
                layout="responsive"
                width={100}
                height={90}
              />
            </div>
          );
        })}

        {/* Single project objectives */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {project.ProjectInfo.ObjectivesHeading}
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {project.ProjectInfo.ObjectivesDetails}
          </p>
        </div>

        {/* Single project technologies */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {project.ProjectInfo.Technologies[0].title}
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {project.ProjectInfo.Technologies[0].techs.join(', ')}
          </p>
        </div>

        <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
          <p className="text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
            {project.ProjectInfo.ProjectDetailsHeading}
          </p>
          {project.ProjectInfo.ProjectDetails.map(details => {
            return (
              <p
                key={details.id}
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
                {details.details}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

ProjectSingle.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    ProjectHeader: PropTypes.shape({
      title: PropTypes.string.isRequired,
      publishDate: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
    ProjectImages: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      })
    ),
    ProjectInfo: PropTypes.shape({
      ObjectivesHeading: PropTypes.string.isRequired,
      ObjectivesDetails: PropTypes.string.isRequired,
      ClientHeading: PropTypes.string,
      CompanyInfo: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          details: PropTypes.string,
        })
      ),
      Technologies: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          techs: PropTypes.arrayOf(PropTypes.string),
        })
      ),
      ProjectDetailsHeading: PropTypes.string,
      ProjectDetails: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          details: PropTypes.string,
        })
      ),
    }),
  }).isRequired,
};

export async function getServerSideProps({ query }) {
  const { id } = query;
  return {
    props: {
      project: projectsData.filter(project => project.id === parseInt(id))[0],
    },
  };
}

export default ProjectSingle;
