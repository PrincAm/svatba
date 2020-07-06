import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import Title from 'components/title';

const Gifts = ({ data }) => (
  <Layout>
    <Head pageTitle={data.giftsJson.title} />
    <Box>
      <Title as="h2" size="large">
        {data.giftsJson.title}
      </Title>
    </Box>
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.giftsJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Gifts.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Gifts;

export const query = graphql`
  query GiftsQuery {
    giftsJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
