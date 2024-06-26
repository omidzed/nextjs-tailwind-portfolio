import Image from 'next/image';
import React from 'react';
import PropTypes from 'prop-types';

const AboutClientSingle = ({ title, image }) => {
  return (
    <div className="py-5 px-10 border bg-secondary-light border-ternary-light dark:border-ternary-dark  shadow-sm rounded-lg mb-5 cursor-pointer">
      <Image
        src={image}
        alt={title}
        layout="responsive"
        width={100}
        height={50}
      />
    </div>
  );
};

AboutClientSingle.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

export default AboutClientSingle;
