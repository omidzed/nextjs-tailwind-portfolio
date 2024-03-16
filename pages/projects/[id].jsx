// import Image from 'next/image';
// import { FiClock, FiTag } from 'react-icons/fi';
// import PagesMetaHead from '../../components/PagesMetaHead';
// import { projectsData } from '../../data/projectsData';
// import React from 'react';

// function ProjectSingle({ project }) {
//   return (
//     <div className="container mx-auto">
//       <PagesMetaHead title={project.ProjectHeader.title} />

//       {/* Header */}
//       <div>
//         <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
//           {project.ProjectHeader.title}
//         </p>
//         <div className="flex">
//           <div className="flex items-center mr-10">
//             <FiClock className="text-xl text-ternary-dark dark:text-ternary-light" />
//             <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
//               {project.ProjectHeader.publishDate}
//             </span>
//           </div>
//           <div className="flex items-center">
//             <FiTag className="w-4 h-4 text-ternary-dark dark:text-ternary-light" />
//             <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
//               {project.ProjectHeader.tags}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Gallery */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
//         {project.ProjectImages.map(image => {
//           return (
//             <div className="mb-10 sm:mb-0" key={image.id}>
//               <Image
//                 src={image.img}
//                 className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
//                 alt={image.title}
//                 layout="responsive"
//                 width={100}
//                 height={90}
//               />
//             </div>
//           );
//         })}

//         {/* Single project objectives */}
//         <div className="mb-7">
//           <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
//             {project.ProjectInfo.ObjectivesHeading}
//           </p>
//           <p className="font-general-regular text-primary-dark dark:text-ternary-light">
//             {project.ProjectInfo.ObjectivesDetails}
//           </p>
//         </div>

//         {/* Single project technologies */}
//         <div className="mb-7">
//           <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
//             {project.ProjectInfo.Technologies[0].title}
//           </p>
//           <p className="font-general-regular text-primary-dark dark:text-ternary-light">
//             {project.ProjectInfo.Technologies[0].techs.join(', ')}
//           </p>
//         </div>

//         <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
//           <p className="text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
//             {project.ProjectInfo.ProjectDetailsHeading}
//           </p>
//           {project.ProjectInfo.ProjectDetails.map(details => {
//             return (
//               <p
//                 key={details.id}
//                 className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
//               >
//                 {details.details}
//               </p>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProjectSingle;

import React from 'react';
import Image from 'next/image';
import { FiClock, FiTag } from 'react-icons/fi';
import PagesMetaHead from '../../components/PagesMetaHead';
import { projectsData } from '../../data/projectsData';
import PropTypes from 'prop-types';

function ProjectSingle({project}) {
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
        {project.ProjectImages.map(project => {
          return (
            <div className="mb-10 sm:mb-0" key={project.id}>
              <Image
                src={project.img}
                className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                alt={project.title}
                key={project.id}
                layout="responsive"
                width={100}
                height={90}
              />
            </div>
          );
        })}
      </div>

      {/* Info */}
      <div className="block sm:flex gap-0 sm:gap-10 mt-14">
        <div className="w-full sm:w-1/3 text-left">
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
                      href="https://stoman.me"
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

// ProjectSingle.propTypes = {
//   project: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     ProjectHeader: PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       publishDate: PropTypes.string.isRequired,
//       tags: PropTypes.string.isRequired,
//     }),
//     ProjectImages: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         img: PropTypes.string.isRequired,
//         title: PropTypes.string.isRequired,
//       })
//     ),
//     ProjectInfo: PropTypes.shape({
//       ObjectivesHeading: PropTypes.string.isRequired,
//       ObjectivesDetails: PropTypes.string.isRequired,
//       ClientHeading: PropTypes.string,
//       CompanyInfo: PropTypes.arrayOf(
//         PropTypes.shape({
//           id: PropTypes.string,
//           title: PropTypes.string,
//           details: PropTypes.string,
//         })
//       ),
//       Technologies: PropTypes.arrayOf(
//         PropTypes.shape({
//           title: PropTypes.string.isRequired,
//           techs: PropTypes.arrayOf(PropTypes.string),
//         })
//       ),
//       ProjectDetailsHeading: PropTypes.string,
//       ProjectDetails: PropTypes.arrayOf(
//         PropTypes.shape({
//           id: PropTypes.string,
//           details: PropTypes.string,
//         })
//       ),
//     }),
//   }).isRequired,
// };
ProjectSingle.propTypes = {
  project: PropTypes.shape({
    // Correctly match the expected data types to your project's data structure
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    ProjectHeader: PropTypes.shape({
      title: PropTypes.string.isRequired,
      publishDate: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired,
    ProjectImages: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired, // or string if your IDs are strings
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
      SocialSharingHeading: PropTypes.string, // Add this if it exists in your data and is not required
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
