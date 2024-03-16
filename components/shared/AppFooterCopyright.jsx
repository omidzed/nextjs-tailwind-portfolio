import React from "react";

function AppFooterCopyright() {
	return (
		<div className='font-general-regular flex justify-center items-center text-center'>
			<div className='flex flex-wrap justify-center mx-10 text-lg text-ternary-dark dark:text-ternary-light'>
				&copy; {new Date().getFullYear()}
				<a
					href='https://github.com/realstoman/nextjs-tailwindcss-portfolio'
					target='__blank'
					className='hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500'>
					Next.js & Tailwind CSS Portfolio
				</a>
				. <p>Template developed by</p>
				<a
					href='https://stoman.me'
					target='__blank'
					className='text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500'>
					Stoman
				</a>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
