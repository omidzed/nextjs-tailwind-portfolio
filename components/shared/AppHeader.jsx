import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const AppHeader = () => {
  const [theme, toggleTheme] = useThemeSwitcher();
  const isDarkMode = theme === 'dark';

  const toggleDarkMode = () => {
    toggleTheme(); // Call the toggleTheme function from useThemeSwitcher hook
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="sm:container sm:mx-auto mb-12"
    >
      <div className="sm:flex justify-between items-start mt-4">
        <Link href="/">
          <Image
            src={
              isDarkMode ? '/images/logo-light.svg' : '/images/logo-dark.svg'
            }
            alt="Logo"
            width={140}
            height={140}
            className="cursor-pointer ml-4 drop-shadow-lg"
          />
        </Link>
        <div className="flex justify-center items-center gap-10">
          {/* Header links large screen */}
          <div className="font-general-medium m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
            <div
              className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
              aria-label="Projects"
            >
              <Link
                className="hover:underline hover:underline-offset-4"
                href="/projects"
              >
                Projects
              </Link>
            </div>
            <div
              className="block text-left text-lg whitespace-nowrap font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
              aria-label="About Me"
            >
              <Link
                className="hover:underline hover:underline-offset-4"
                href="/about"
              >
                About Me
              </Link>
            </div>
            <div
              className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
              aria-label="Qualifications"
            >
              <Link
                className="hover:underline hover:underline-offset-4"
                href="/qualifications"
              >
                Qualifications
              </Link>
            </div>
            <div
              className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
              aria-label="Contact"
            >
              <Link
                className="hover:underline hover:underline-offset-4"
                href="/contact"
              >
                Contact
              </Link>
            </div>
          </div>

          <DarkModeSwitch
            className="dark:hover:text-yellow-400 hover:drop-shadow-xl"
            moonColor="dodgerblue"
            sunColor="white"
            checked={!isDarkMode}
            onChange={toggleDarkMode}
            size={25}
          />
        </div>
      </div>
    </motion.nav>
  );
};

export default AppHeader;
