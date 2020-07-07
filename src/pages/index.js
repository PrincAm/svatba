import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        Vážená rodino, přátelé, kamarádi!
      </Title>
      <p>
        Děkujeme, že jste navštívili naše stránky. Doufáme, že zde naleznete
        všechny informace a odpovědi na otázky, které se týkají naší svatby.
        Těšíme se, že tento den strávíte s námi! Budeme se snažit vám ho co
        nejvíce zpříjemnit.
      </p>
    </Box>
    <Box>
      <Img
        fluid={data.homeJson.coupleImage.childImageSharp.fluid}
        alt="couple"
      />

      <Img
        fluid={data.homeJson.announcementImage.childImageSharp.fluid}
        alt="announcement"
      />
    </Box>
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
