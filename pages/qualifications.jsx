import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LearningFuzeLogo from '../public/images/logos/learningfuze_logo.jpg';
import LinkinLogo from '../public/images/logos/LinkedIn_logo.png';


const Qualifications = () => {
  return (
    <div className="container mx-auto">
      <section className="text-center text-ternary-dark dark:text-ternary-light">
        <h1 className="text-2xl sm:text-4xl text-ternary-dark dark:text-ternary-light my-12">
          Qualifications
        </h1>

        <div className="border-2 mb-8 border-[#0275B4] dark:border-white w-full border-opacity-100 rounded-2xl px-20 py-10 transition duration-400 dark:hover:bg-blue-700 bg-opacity-40 hover:bg-yellow-200 hover:border-blue-600">
          <Link
            href="https://learningfuze.com/"
            className="qualification-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-end mb-4">
              <Image
                src={LearningFuzeLogo}
                alt="Logo"
                width={100}
                height={100}
                className="m-2 mr-6 rounded-md"
              />

              <div className="pb-2">
                <h3 className="text-left mx-2 text-2xl">LearningFuze</h3>
                <h6 className="text-left mx-2 text-lg italic">
                  Oct 2023 - Feb 2024
                </h6>
              </div>
            </div>
            <p className="text-left mx-2 text-lg">
              Full Immersion Program for a career in Software Development in a
              simulated, agile work environment.
            </p>
            <p className="text-left mx-2 text-lg">
              Over 800 hours of web development programming (70 hours/week),
              going over critical concepts, including:
            </p>
            <ul className="list-disc list-inside m-2">
              <li className="text-left text-lg">
                Fundamentals of Web Development{' '}
                <span className="font-medium">
                  (HTML5, CSS3, JavaScript - ES5/6), Flexbox, Git, AJAX, JSON,
                  and API&#39; s
                </span>
              </li>
              <li className="text-left text-lg">
                Problem-Solving, Debugging, Project Planning in Agile, and
                Collaboration
              </li>
              <li className="text-left">
                Implementation of libraries and frameworks (
                <span className="font-medium">React.js, Node.js, Express</span>,
                and more)
              </li>
              <li className="text-left text-lg">
                Researching and learning new technologies as needed for
                application solutions
              </li>
              <li className="text-left text-lg">
                Prototyping and designing with Figma Design Tool
              </li>
            </ul>
          </Link>
        </div>

        <div className="border-2 border-[#0275B4] dark:border-white w-full border-opacity-100 rounded-2xl px-20 py-10 transition duration-400 dark:hover:bg-blue-700 bg-opacity-40 hover:bg-yellow-200 hover:border-blue-600">
          <Link
            href="https://www.linkedin.com/in/omidzasadi/details/recommendations/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-end mb-8">
              <Image
                src={LinkinLogo}
                alt="Logo"
                width={100}
                height={100}
                className="m-2 mr-6 rounded-md"
              />

              <div className="pb-2">
                <h3 className="text-left mx-2 text-2xl">
                  {' '}
                  Robert Gardner, Ph.D.
                </h3>
                <h6 className="text-left mx-2 text-lg italic">
                  March 19, 2024
                </h6>
                <h6 className="text-left mx-2 text-lg">
                  Omid’s Software Development Instructor
                </h6>
              </div>
            </div>
            <p className="text-left mx-2 text-lg mb-4">
              I taught Omid at LearningFuze, where he learned full stack
              development with React, Node, and PostgreSQL, using TypeScript.
              This was an intense course that required Omid to write a full
              stack application on his own.
            </p>
            <p className="text-left mx-2 text-lg mb-4">
              At LearningFuze, Omid developed his sense for writing software. He
              studied hard, asked probing and insightful questions, worked his
              way over hurdles he faced, and became a solid developer. For his
              final project, Omid wrote an app to help people learn more about
              sports betting. Omid learned, on his own, several technologies for
              this, such as Tailwind, money input/output, and open source React
              components. He also had to analyze several APIs to find the
              information he wanted, and process those API results to adapt them
              to his needs.
            </p>
            <p className="text-left mx-2 text-lg mb-4">
              Omid was a good student who developed a good understanding of how
              software works, how to write good, clean code, and how to design
              and organize the code to make it easy to work with. He has a solid
              grasp of basic data structures and complexity analysis and how to
              use them to solve common software problems. Omid has an
              outstanding work ethic and strives to always do his best work. I
              was impressed with how hard Omid worked to make sure he understood
              the material correctly.
            </p>
            <p className="text-left mx-2 text-lg">
              As a former Director of Engineering at Google, I can say with
              confidence that Omid will be an asset to any team he joins.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Qualifications;
