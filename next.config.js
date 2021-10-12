const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

}

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'mohammad',
        mongodb_password: 'b7UpEq1WlYMFvcjU',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'myBlog-dev',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'mohammad',
      mongodb_password: 'b7UpEq1WlYMFvcjU',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'myBlog',
    },
  };
};
