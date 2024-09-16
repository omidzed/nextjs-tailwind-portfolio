import React, { useState } from 'react';
import Image from 'next/image';
import { FiClock, FiTag } from 'react-icons/fi';
import PagesMetaHead from '../../components/PagesMetaHead';
import { projectsData } from '../../data/projectsData';
import PropTypes from 'prop-types';
import { IoClose } from 'react-icons/io5';

const ProjectSingle = ({ project }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // State to manage selected image
  const [selectedImage, setSelectedImage] = useState('');

  // Function to open modal and set the selected image
  const openModal = imgSrc => {
    setSelectedImage(imgSrc);
    setModalIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalIsOpen(false);
  };
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
        {project.ProjectImages.map(image => (
          <div
            className="mb-10 sm:mb-0"
            key={image.id}
            onClick={() => openModal(image.img)}
          >
            <Image
              src={image.img}
              className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
              alt={image.title}
              layout="responsive"
              width={100}
              height={90}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalIsOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center cursor-pointer"
          onClick={() => closeModal()}
        >
          <div
            className="modal-content bg-gray-100 p-2 rounded-xl shadow-lg w-11/12 md:w-3/4 lg:w-2/5 cursor-default"
            onClick={e => e.stopPropagation()}
          >
            <div className="text-right">
              <button
                className="border-gray-100 border-2 mr-1 rounded-full hover:border-black hover:bg-white transition-transform ease-in duration-75 transform hover:scale-90"
                style={{ transformOrigin: 'center' }}
                onClick={closeModal}
              >
                <IoClose size={25} />
              </button>
            </div>
            <Image
              className="rounded-xl p-1"
              src={selectedImage}
              alt="Expanded View"
              layout="responsive"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      )}

      {/* Info */}
      <div className="block sm:flex gap-0 sm:gap-10 mx-24 mt-14">
        <div className="w-full text-left">
          {/* Single project client details */}
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
              {project.ProjectInfo.ClientHeading}
            </p>
            <ul className="leading-loose">
              {project.ProjectInfo.CompanyInfo.map(info => {
                return (
                  <li
                    className="font-general-regular text-ternary-dark dark:text-ternary-light"
                    key={info.id}
                  >
                    <span>{info.title}: </span>
                    <a
                      href={project.url}
                      className={
                        info.title === 'Website' || info.title === 'Phone'
                          ? 'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
                          : ''
                      }
                      aria-label="Project Website and Phone"
                    >
                      {info.details}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

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

          {/* Single project social sharing */}
          <div>
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {project.ProjectInfo.SocialSharingHeading}
            </p>
          </div>
        </div>

        {/*  Single project right section details */}
        <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
          <p className="text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
            {project.ProjectInfo.ProjectDetailsHeading}
          </p>
        </div>
      </div>
    </div>
  );
};

ProjectSingle.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    ProjectHeader: PropTypes.shape({
      title: PropTypes.string.isRequired,
      publishDate: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired,
    ProjectImages: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired, // or string if your IDs are strings
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      })
    ).isRequired,
    ProjectInfo: PropTypes.shape({
      ObjectivesHeading: PropTypes.string.isRequired,
      ObjectivesDetails: PropTypes.string.isRequired,
      ClientHeading: PropTypes.string, // If it's not required, remove isRequired
      CompanyInfo: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string, // If it's not required, remove isRequired
          title: PropTypes.string.isRequired,
          details: PropTypes.string.isRequired,
        })
      ),
      Technologies: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          techs: PropTypes.arrayOf(PropTypes.string).isRequired,
        })
      ).isRequired,
      ProjectDetailsHeading: PropTypes.string.isRequired,
      ProjectDetails: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string, // If it's not required, remove isRequired
          details: PropTypes.string.isRequired,
        })
      ).isRequired,
      SocialSharingHeading: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export async function getServerSideProps({ query }) {
  const { id } = query;
  const project = projectsData.find(project => project.id === id);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
}

export default ProjectSingle;
