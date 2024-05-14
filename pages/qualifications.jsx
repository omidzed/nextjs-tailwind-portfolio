import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Create a functional component for the qualifications section
const Qualifications = () => {
  return (
    <div className="container mx-auto">
      <section className="text-center text-ternary-dark dark:text-ternary-light">
        <h1 className="text-2xl sm:text-4xl text-ternary-dark dark:text-ternary-light mb-8">
          Qualifications
        </h1>

        <div className="group qualification border-2 border-blue-500 dark:border-white max-w-80 border-opacity-100 rounded-2xl p-5 md:mx-20 my-[15px] transition duration-400 bg-opacity-40 hover:bg-blue-600 text-start hover:text-white">
          <Link
            href="https://learningfuze.com/"
            className="qualification-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-end mb-4">
              <Image
                src={'/images/learningfuze_logo.jpg'}
                alt="Logo"
                width={100}
                height={100}
                className="m-2"
              />

              <div className="pb-2">
                <h3 className="qualification-title text-left mx-2">
                  LearningFuze
                </h3>
                <h6 className="qualification-date text-left mx-2">
                  Oct 2023 - Feb 2024
                </h6>
              </div>
            </div>
            <p className="qualification-description text-left mx-2">
              Full Immersion Program for a career in Software Development in a
              simulated, agile work environment.
            </p>
            <p className="qualification-description text-left mx-2">
              Over 800 hours of web development programming (70 hours/week),
              going over critical concepts, including:
            </p>
            <ul className="list-disc list-inside m-2">
              <li className="qualification-bullet text-left">
                Fundamentals of Web Development (HTML5, CSS3, JavaScript -
                ES5/6), Flexbox, Git, AJAX, JSON, and APIs
              </li>
              <li className="qualification-bullet text-left">
                Problem-Solving, Debugging, Project Planning in Agile, and
                Collaboration
              </li>
              <li className="qualification-bullet text-left">
                Implementation of libraries and frameworks (React.js, Node.js,
                Express, and more)
              </li>
              <li className="qualification-bullet text-left">
                Researching and learning new technologies as needed for
                application solutions
              </li>
              <li className="qualification-bullet text-left">
                Prototyping and designing with Figma Design Tool
              </li>
            </ul>
            {/* Additional descriptions and list of qualifications would be similarly translated from the original template */}
          </Link>
        </div>

        {/* More qualification blocks would be added here following the same pattern */}
      </section>
    </div>
  );
};

export default Qualifications;
