import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import HireMeModal from '../HireMeModal';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function AppHeader() {
  const [showModal, setShowModal] = useState(false);
  const [theme, toggleTheme] = useThemeSwitcher();
  const isDarkMode = theme === 'dark';

  const handleToggleDarkMode = () => {
    toggleTheme(); // Call the toggleTheme function from useThemeSwitcher hook
  };

  function showHireMeModal() {
    if (!showModal) {
      document
        .getElementsByTagName('html')[0]
        .classList.add('overflow-y-hidden');
      setShowModal(true);
    } else {
      document
        .getElementsByTagName('html')[0]
        .classList.remove('overflow-y-hidden');
      setShowModal(false);
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      //id="nav"
      className="sm:container sm:mx-auto"
    >
      <div className="flex justify-between items-center pt-8 ml-4">
        <Link href="/">
          <Image
            src={
              isDarkMode ? '/images/logo-light.svg' : '/images/logo-dark.svg'
            }
            alt="Logo"
            width={150}
            height={120}
            className="cursor-pointer"
          />
        </Link>
        <div className="flex justify-center items-center gap-10">
          {/* Header links large screen */}
          <div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
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
              className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
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
            className="dark:hover:text-yellow-400 hover:text-blue-300 mr-8"
            moonColor="#3C82F6"
            sunColor="white"
            checked={!isDarkMode}
            onChange={handleToggleDarkMode}
            size={25}
          />
        </div>
      </div>
      <div className="hidden sm:flex justify-between items-center flex-col md:flex-row"></div>

      {/* Header right section buttons */}
      <div className="hidden sm:flex justify-between items-center md:flex-row">
        <div>
          {showModal ? (
            <HireMeModal
              onClose={showHireMeModal}
              onRequest={showHireMeModal}
            />
          ) : null}
          {showModal ? showHireMeModal : null}
        </div>
      </div>
    </motion.nav>
  );
}

export default AppHeader;
