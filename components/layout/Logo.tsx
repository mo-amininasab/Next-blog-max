import React from 'react';

import classes from './Logo.module.css';

interface Props {}

const Logo: React.FC<Props> = (props) => {
  return <div className={classes.logo}>Max' Next Blog</div>;
};

export default Logo;
