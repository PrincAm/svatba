import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import Title from 'components/title';

const Link = styled.a`
  text-decoration: none;
  margin-left: 0.4rem;
`;

const Contact = ({ data }) => (
  <Layout>
    <Head pageTitle={data.contactJson.title} />
    <Box>
      <Title as="h2" size="large">
        {data.contactJson.title}
      </Title>
    </Box>
    <Box>
      <p>Pokud by vám bylo cokoliv nejasné, prosím, ozvěte se nám!</p>
      <Title>Adam</Title>
      <Box>
        <p>
          <span role="img" aria-label="envelop emoji">
            ✉️
          </span>{' '}
          <Link
            href="mailto:blazekadam1@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            blazekadam1@gmail.com
          </Link>
        </p>
        <p>
          <span role="img" aria-label="phone emoji">
            📞
          </span>{' '}
          <Link href="tel:+420728698425">+420 728 698425</Link>
        </p>
      </Box>
      <Title>Anička</Title>
      <Box>
        <p>
          <span role="img" aria-label="envelop emoji">
            ✉️
          </span>{' '}
          <Link
            href="mailto:melnicekova@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            melnicekova@gmail.com
          </Link>
        </p>
        <p>
          <span role="img" aria-label="phone emoji">
            📞
          </span>{' '}
          <Link href="tel:+420735542939">+420 735 542939</Link>
        </p>
      </Box>
    </Box>
  </Layout>
);

Contact.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Contact;

export const query = graphql`
  query ContactQuery {
    contactJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
