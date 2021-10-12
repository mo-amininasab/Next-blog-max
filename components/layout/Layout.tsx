import React, { Fragment } from 'react';
import MainNavigation from './MainNavigation';

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
