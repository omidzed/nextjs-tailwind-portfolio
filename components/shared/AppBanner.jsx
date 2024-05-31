import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/legacy/image';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { TbExternalLink } from 'react-icons/tb';

const AppBanner = () => {
  const [activeTheme] = useThemeSwitcher();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
      className="flex lg:justify-around sm:justify-between items-center sm:flex-row mt-5 md:mt-2"
    >
      <div className="w-full md:w-1/2">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.9,
            delay: 0.1,
          }}
          className="font-general-medium text-2xl lg:text-2xl xl:text-3xl text-left text-ternary-dark dark:text-primary-light"
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
          className="font-general-regular mt-4 text-lg md:text-xl text-left leading-normal text-gray-500 dark:text-gray-200"
        >
          A Full-Stack Software Engineer
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.8,
            delay: 0.2,
          }}
        >
          <a
            href="/files/Omid-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-general-medium flex gap-1 justify-center md:min-w-[14rem] items-baseline mx-44 dark:border-white border-blue-200 hover:border-yellow-400 mt-12 text-lg border py-3 shadow-md rounded-lg bg-blue-600 dark:hover:bg-blue-700 text-white hover:scale-95 hover:bg-blue-700 duration-300"
            aria-label="View Resume"
          >
            <button className="flex items-center gap-4 justify-center text-sm sm:text-lg px-2 whitespace-nowrap duration-100">
              <TbExternalLink size={12} /> View My Resume!
            </button>
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
        className="w-1/2 sm:w-1/3 text-right float-right mt-8 sm:mt-0 pr-20 bg-zinc-500 border-2 dark:border border-blue-400 rounded-xl pl-20 dark:border-white shadow-lg"
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
};

export default AppBanner;
