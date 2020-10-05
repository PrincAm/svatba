import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const BoxCentered = styled.div`
  text-align: center;
`;

const Link = styled.a`
  text-decoration: none;
`;

const Index = ({ data }) => (
  <Layout>
    <BoxCentered>
      <Box>
        <Title as="h2" size="large">
          Vážená rodino, přátelé, kamarádi!
        </Title>
        <br />
        <p>
          Svatba byla nádherná, ještě jednou za vše děkujeme{' '}
          <span role="img" aria-label="smiling face">
            😊
          </span>
        </p>
      </Box>
      <Link
        href="https://ondrejcechvala.passgallery.com/-annaadam/gallery"
        target="_blank"
        rel="noopener noreferrer"
      >
        Fotogalerie
      </Link>
      <Link
        href="https://ondrejcechvala.passgallery.com/-annaadam/gallery"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Box>
          <Img
            fluid={data.homeJson.coupleImage.childImageSharp.fluid}
            alt="couple"
          />
        </Box>
      </Link>
    </BoxCentered>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }

      coupleImage {
        childImageSharp {
          fluid(maxHeight: 500, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      announcementImage {
        childImageSharp {
          fluid(maxHeight: 500, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
