import React from 'react';

import classes from './Logo.module.css';

interface Props {}

const Logo: React.FC<Props> = (props) => {
  return <div className={classes.logo}>Max&apos; Next Blog</div>;
};

export default Logo;
