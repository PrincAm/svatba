import React from 'react';
import Box from 'components/box';
import Layout from 'components/layout';

const NotFound = () => (
  <Layout>
    <Box>
      Stránka nenalezena, zkuste jinou{' '}
      <span role="img" aria-label="wink emoji">
        😉
      </span>
    </Box>
  </Layout>
);

export default NotFound;
