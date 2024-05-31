import { FiGithub, FiLinkedin } from 'react-icons/fi';
import AppFooterCopyright from './AppFooterCopyright';
import React from 'react';

const socialLinks = [
  {
    id: 1,
    icon: <FiGithub />,
    url: 'https://github.com/omidzed',
  },

  {
    id: 2,
    icon: <FiLinkedin />,
    url: 'https://www.linkedin.com/in/omidzasadi/',
  },
];

const AppFooter = () => {
  return (
    <div className="container mx-auto">
      <div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-gray-200 dark:border-secondary-dark">
        {/* Footer social links */}
        <div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
          <p className="text-3xl sm:text-2xl text-primary-dark dark:text-primary-light mb-5">
            Follow me
          </p>
          <ul className="flex gap-4 sm:gap-8">
            {socialLinks.map(link => (
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                className="text-gray-700 dark:text-gray-400 dark:hover:text-yellow-300 hover:bg-blue-600 hover:text-yellow-200 cursor-pointer rounded-lg dark:bg-ternary-dark bg-blue-300 shadow-sm p-4 duration-300"
              >
                <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
              </a>
            ))}
          </ul>
        </div>

        <AppFooterCopyright />
      </div>
    </div>
  );
};

export default AppFooter;
