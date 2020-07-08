import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import Title from 'components/title';

const Bold = styled.span`
  font-weight: 600;
`;

const Link = styled.a`
  text-decoration: none;
`;

const Place = ({ data }) => (
  <Layout>
    <Head pageTitle={data.placeJson.title} />
    <Box>
      <Title as="h2" size="large">
        {data.placeJson.title}
      </Title>
    </Box>
    <Box>
      Svatba se uskuteční v <Bold>sobotu 5. září 2020</Bold> ve starobylém
      městečku <Bold>Svätý Jur</Bold> nedaleko Bratislavy. Svätý Jur se pyšní
      více než 700-letou vinařskou tradicí a je obklopen unikátními terasovitými
      vinohrady na úpatí Malých Karpat. Název města Svätý Jur je odvozen od
      jména patrona města - svatého Jiřího, přičemž Jur je archaická podoba
      jména Juraj (Jiří). Pokud se vám podaří přijít dříve, doporučujeme vám
      procházku jeho malebným centrem!
    </Box>
    <Box>
      <Title>
        Obřad{' '}
        <span role="img" aria-label="wedding emoji">
          💒
        </span>
      </Title>
      <p>
        Obřad bude v prostorách{' '}
        <Link
          href="https://www.svatyjur.sk/content/mestsky-urad"
          target="_blank"
          rel="noopener noreferrer"
        >
          městského úřadu
        </Link>{' '}
        od 16:00 hod. Původní šlechtický dům rodu Zichyovců slouží od roku 1865
        jako městský úřad. Dnešní neogotickou podobu dostala fasáda v druhé
        polovině 19. století. Obřadní síň je velmi prostorná s dostatečným
        místem k sezení. K síni vede několik schodů, doufáme, že vám to
        nezpůsobí žádné potíže.
      </p>
    </Box>
    <Box>
      <Title>
        Hotel{' '}
        <span role="img" aria-label="hotel emoji">
          🏨
        </span>
      </Title>
      <p>
        Svatební hostina i ubytování budou v{' '}
        <Link
          href="https://horskyhotel-eva.sk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Horském hotelu Eva
        </Link>
        . Hotel se nachází na pokraji Svätého Jura, což nám zaručí klid a
        nerušenou zábavu! Okolí poskytuje dostatek parkovacích míst.
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2656.073411169109!2d17.192488415806473!3d48.262961779233656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c91986659412b%3A0x517c91b0828cba89!2sMountain%20hotel%20Eva!5e0!3m2!1scs!2scz!4v1594059050869!5m2!1scs!2scz" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
          }}
        />
      </p>
      <p>
        Pro všechny hosty je zajistěno ubytování v pokojích po 4 lůžkách{' '}
        <span role="img" aria-label="bed emoji">
          🛏️
        </span>{' '}
        Z hotelu na obřad a zpět můžete přejet autem nebo se projít pěšky.
      </p>
    </Box>
  </Layout>
);

Place.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Place;

export const query = graphql`
  query PlaceQuery {
    placeJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
