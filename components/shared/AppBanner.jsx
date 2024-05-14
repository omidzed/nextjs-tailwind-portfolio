import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/legacy/image';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { TbExternalLink } from 'react-icons/tb';

function AppBanner() {
  const [activeTheme] = useThemeSwitcher();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
      className="flex flex-col sm:justify-between items-center sm:flex-row mt-5 md:mt-2"
    >
      <div className="w-full md:w-1/2 text-left pl-10">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.9,
            delay: 0.1,
          }}
          className="font-general-medium text-2xl lg:text-2xl xl:text-3xl text-center sm:text-left text-ternary-dark dark:text-primary-light"
        >
          Hi, I&apos;m Omid
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.9,
            delay: 0.2,
          }}
          className="font-general-regular mt-4 text-lg md:text-xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
        >
          A Full-Stack Software Engineer
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.9,
            delay: 0.3,
          }}
          className="flex justify-center sm:block"
        >
          <a
            href="/files/Omid-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-general-medium flex gap-1 justify-center md:min-w-[14rem] items-baseline mx-40 dark:border-white border-blue-200 hover:border-yellow-400 mt-12 mb-6 sm:mb-0 text-lg border-2 py-3 sm:py-3 shadow-md rounded-lg bg-blue-600 dark:hover:bg-blue-700 text-white hover:scale-95 hover:bg-blue-700 duration-500"
            aria-label="View Resume"
          >
            <TbExternalLink size={12} />
            <span className="flex justify-center text-sm sm:text-lg px-2 whitespace-nowrap duration-100 ">
              View My Resume!
            </span>
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
        className="w-1/2 sm:w-1/3 text-right float-right mt-8 sm:mt-0 pr-20"
      >
        <Image
          width={200}
          height={200}
          layout="responsive"
          src={
            activeTheme === 'dark'
              ? '/images/developer.svg'
              : '/images/developer-dark.svg'
          }
          alt="Developer"
        />
      </motion.div>
    </motion.section>
  );
}

export default AppBanner;
