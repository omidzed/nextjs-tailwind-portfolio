import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowDownCircle } from 'react-icons/fi';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';

function AppBanner() {
	const [activeTheme] = useThemeSwitcher();

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className='flex flex-col sm:justify-between items-center sm:flex-row mt-5 md:mt-2'>
			<div className='w-full md:w-1/3 text-left'>
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className='font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light'>
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
					className='font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-2xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200'>
					A Full-Stack Developer & Design Enthusiast
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
						download='Omid-Resume.pdf'
						href='/files/Omid-Resume.pdf'
						className='font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500'
						aria-label='Download Resume'>
						<FiArrowDownCircle className='ml-0 sm:ml-1 mr-1 h-4 w-6 sn:w-8 sm:h-5 duration-100'></FiArrowDownCircle>
						<span className='text-sm sm:text-lg pr-2 whitespace-nowrap duration-100'>View My Resume!</span>
					</a>
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className='w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0'>
				<Image
					width={800}
					height={800}
					layout='responsive'
					src={activeTheme === 'dark' ? '/images/developer.svg' : '/images/developer-dark.svg'}
					alt='Developer'
				/>
			</motion.div>
		</motion.section>
	);
}

export default AppBanner;
