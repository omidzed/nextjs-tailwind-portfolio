import React from 'react';
import AppHeader from '../shared/AppHeader';
import AppFooter from '../shared/AppFooter';
import PagesMetaHead from '../PagesMetaHead';
import PropTypes from 'prop-types';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <PagesMetaHead />
      <AppHeader />
      <div>{children}</div>
      <AppFooter />
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
