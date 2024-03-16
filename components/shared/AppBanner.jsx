import React from "react";
import { motion } from 'framer-motion';
import Image from "next/legacy/image";
import useThemeSwitcher from '../../hooks/useThemeSwitcher';

function AppBanner() {
	const [activeTheme] = useThemeSwitcher();

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className='flex flex-col sm:justify-between items-center sm:flex-row mt-5 md:mt-2'>
			<div className='w-full md:w-1/2 text-left pl-10'>
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className='font-general-medium text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light'>
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
					className='font-general-regular mt-4 text-lg md:text-xl lg:text-2xl xl:text-2xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200'>
					A Full-Stack Software Developer
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					className='flex justify-center sm:block'>
					<a
						href='/files/Omid-Resume.pdf'
						className='font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-[#016DFD] py-3 sm:py-3 shadow-lg rounded-lg bg-blue-500 focus:ring-1 focus:[#016DFD] hover:bg-blue-700 text-white hover:text-yellow-200 duration-500'
						aria-label='View Resume'>

						<span className='flex justify-center text-sm sm:text-lg pr-2 whitespace-nowrap duration-100'>View My Resume!</span>
					</a>
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className='w-1/2 sm:w-1/3 text-right float-right mt-8 sm:mt-0 pr-20'>
				<Image
					width={600}
					height={600}
					layout='responsive'
					src={activeTheme === 'dark' ? '/images/developer.svg' : '/images/developer-dark.svg'}
					alt='Developer'
				/>
			</motion.div>
		</motion.section>
	);
}

export default AppBanner;
