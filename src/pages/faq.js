import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import Title from 'components/title';

const Faq = ({ data }) => (
  <Layout>
    <Head pageTitle={data.faqJson.title} />
    <Box>
      <Title as="h2" size="large">
        {data.faqJson.title}
      </Title>
    </Box>
    <Box>
      <Title>Můžeme přivést děti?</Title>
      <p>Test</p>
    </Box>
    <Box>
      <Title>Můžeme přijet se psy?</Title>
      <p>Test</p>
    </Box>
    <Box>
      <Title>Co si přejete za svatební dar?</Title>
      <p>
        Nic si nepřejeme a nežádáme, téměř vše máme{' '}
        <span role="img" aria-label="smile emoji">
          🙂
        </span>{' '}
        Kdyby jste nám i tak chtěli něco darovat, uvítáme finanční příspěvek na
        pokrytí nákladů svatby a svatební cesty{' '}
        <span role="img" aria-label="island emoji">
          🏖️
        </span>
      </p>
    </Box>
  </Layout>
);

Faq.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Faq;

export const query = graphql`
  query FaqQuery {
    faqJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
