import React from 'react';
import Icons from '../../icons';

const IconLoader = ({ name }) => {
  const Icon = Icons[name];
  if (!Icon) {
    throw new Error(`Icon ${name} is not supported`);
  }
  return <Icon />;
};

export default IconLoader;
