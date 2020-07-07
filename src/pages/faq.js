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
      <p>
        Děti{' '}
        <span role="img" aria-label="baby emoji">
          👶
        </span>{' '}
        máme všichni rádi, věříme však, že pokud miminko necháte u babičky a
        dědy, tak se lépe pobavíte i vy! Hotel poskytuje pět dětských židlí,
        kočárek si můžete odložit na recepci. Pokoje jsou pro 4 osoby, bez
        možnosti dětské postýlky, proto vás poprosíme i o ohleduplnost vůči
        vašim budoucim spolubydlícím. Ubytování je přímo nad hostinou, proto
        prosím zvažte zda tento set up nebude velmi rušivý pro spánek miminka.
        Pokud si nejste jistí, napište nám.
      </p>
    </Box>
    <Box>
      <Title>Můžeme přijet se psy?</Title>
      <p>
        Havkáči{' '}
        <span role="img" aria-label="dog emoji">
          🐕
        </span>{' '}
        jsou radost, pokud dokáží vydržet v pokoji sami, když vy budete
        tancovat. Opět si myslíme, že pokud si budete moci zařídit hlídání, bude
        to lepší pro vás, i vašeho čtyřnohého miláčka. Naší obavou je hlučné
        prostředí a pes zavřený sám na pokoji, což by mohlo být velmi
        stresující, a to bychom neradi. Každopádně hotel povoluje zvířata na
        pokoji, je však třeba je nahlásit napřed, ubytovací poplatek je 5 EUR na
        noc. Ozvěte se v případě nejasností.
      </p>
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
