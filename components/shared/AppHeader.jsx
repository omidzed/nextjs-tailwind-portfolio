import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

<<<<<<< HEAD
function AppHeader() {
	const [showMenu, setShowMenu] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [theme, toggleTheme] = useThemeSwitcher();
	const isDarkMode = theme === 'dark';
=======
const AppHeader = () => {
  const [theme, toggleTheme] = useThemeSwitcher();
  const isDarkMode = theme === 'dark';
>>>>>>> d3891ab3f10495f2dd1496504c43aca2a5c720f6

<<<<<<< HEAD
	const handleToggleDarkMode = () => {
		toggleTheme(); // Call the toggleTheme function from useThemeSwitcher hook
	};
=======
  const toggleDarkMode = () => {
    toggleTheme(); // Call the toggleTheme function from useThemeSwitcher hook
  };
>>>>>>> d3891ab3f10495f2dd1496504c43aca2a5c720f6

<<<<<<< HEAD
	function toggleMenu() {
		if (!showMenu) {
			setShowMenu(true);
		} else {
			setShowMenu(false);
		}
	}

	function showHireMeModal() {
		if (!showModal) {
			document.getElementsByTagName('html')[0].classList.add('overflow-y-hidden');
			setShowModal(true);
		} else {
			document.getElementsByTagName('html')[0].classList.remove('overflow-y-hidden');
			setShowModal(false);
		}
	}

	return (
		<motion.nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			id='nav'
			className='sm:container sm:mx-auto'>
			<div className='flex justify-between items-center pt-8 ml-4'>
				<Link href='/'>
					<Image
						src={isDarkMode ? '/images/logo-light.svg' : '/images/logo-dark.svg'}
						alt='Logo'
						width={150}
						height={120}
						className='cursor-pointer'
					/>
				</Link>

				{/* Header links small screen */}
				<div className={showMenu ? 'block m-0 sm:ml-4 sm:mt-3 md:flex px-5 py-3 sm:p-0 justify-between items-center shadow-lg sm:shadow-none' : 'hidden'}>
					<div className='block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2'>
						<Link
							href='/projects'
							aria-label='Projects'>
							Projects
						</Link>
					</div>
					<div className='block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark'>
						<Link
							href='/about'
							aria-label='About Me'>
							About Me
						</Link>
					</div>
					<div
						className='block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2'
						aria-label='About Me'>
						<Link
							className='hover:underline hover:underline-offset-4'
							href='/about'>
							Qualifications
						</Link>
					</div>
					<div className='block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark'>
						<Link
							href='/contact'
							aria-label='Contact'>
							Contact
						</Link>
					</div>
				</div>

				{/* Header links  large screen */}
				<div className='flex justify-center items-center gap-10'>
					{/* Header links large screen */}
					<div className='font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none'>
						<div
							className='block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2'
							aria-label='Projects'>
							<Link
								className='hover:underline hover:underline-offset-4'
								href='/projects'>
								Projects
							</Link>
						</div>
						<div
							className='block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2'
							aria-label='About Me'>
							<Link
								className='hover:underline hover:underline-offset-4'
								href='/about'>
								About Me
							</Link>
						</div>

						<div
							className='block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2'
							aria-label='Contact'>
							<Link
								className='hover:underline hover:underline-offset-4'
								href='/contact'>
								Contact
							</Link>
						</div>
					</div>

					<DarkModeSwitch
						className='dark:hover:text-yellow-400 hover:text-blue-300 mr-8'
						moonColor='#3C82F6'
						sunColor='white'
						checked={!isDarkMode}
						onChange={handleToggleDarkMode}
						size={25}
					/>
				</div>
			</div>
			<div className='hidden sm:flex justify-between items-center flex-col md:flex-row'></div>

			{/* Header right section buttons */}
			<div className='hidden sm:flex justify-between items-center md:flex-row'>
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
=======
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
>>>>>>> d3891ab3f10495f2dd1496504c43aca2a5c720f6

export default AppHeader;
