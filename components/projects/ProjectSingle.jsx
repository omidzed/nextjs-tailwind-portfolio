import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

const ProjectSingle = ({ id, img, title, category }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <Link href={`/projects/${id}`} aria-label="Single Project" passHref>
        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
          <Image
            src={img}
            alt="Single Project"
            layout="responsive"
            width={100}
            height={90}
            className="rounded-t-xl border-none"
          />
        </div>
        <div className="text-center px-4 py-6">
          <p className="font-general-medium text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2">
            {title}
          </p>
          <span className="text-lg text-ternary-dark dark:text-ternary-light">
            {category}
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

ProjectSingle.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default ProjectSingle;
