import Image from 'next/legacy/image';
import { useState } from 'react';
import { aboutMeData } from '../../data/aboutMeData';
import React from 'react';

const AboutMeBio = () => {
  // eslint-disable-next-line no-unused-vars
  const [aboutMe, setAboutMe] = useState(aboutMeData);
  return (
    <div className=" border-2 mb-20 border-[#0275B4] dark:border-white w-full border-opacity-100 rounded-2xl px-20 py-10 transition duration-400 bg-opacity-40 flex items-center text-lg sm:flex sm:gap-10 mt-10 sm:mt-20">
      <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
        <Image
          src="/images/profile.png"
          width={250}
          height={250}
          className="rounded-lg"
          alt="Profile Image"
        />
      </div>

      <div className="font-general-regular w-full sm:w-3/4 text-justify">
        {aboutMe.map(bio => (
          <p
            className="mb-4 text-ternary-dark dark:text-ternary-light text-md"
            key={bio.id}
          >
            {bio.bio}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AboutMeBio;
