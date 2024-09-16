import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

const ProjectSingle = ({ id, img, title }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
			className='border-2 border-transparent hover:border-white transition-border duration-300 rounded-xl hover:dark:bg-blue-600'>
			<Link
				href={`/projects/${id}`}
				aria-label='Single Project'
				passHref>
				<div className='text-center px-4 py-6'>
					<p className='font-general-small text-xl text-ternary-dark dark:text-ternary-light mb-1 italic'>{title}</p>
				</div>
				<div className='rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark'>
					<Image
						src={img}
						alt='Single Project'
						layout='responsive'
						width={100}
						height={90}
						className='rounded-xl'
					/>
				</div>
			</Link>
		</motion.div>
	);
};

ProjectSingle.propTypes = {
	id: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default ProjectSingle;
