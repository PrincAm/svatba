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

const Program = ({ data }) => (
  <Layout>
    <Head pageTitle={data.programJson.title} />
    <Box>
      <Title as="h2" size="large">
        {data.programJson.title}
      </Title>
    </Box>
    <Box>
      <p>
        <Bold>Sobota 5.9.</Bold>
      </p>
      <p>
        <Bold>
          Do 15:00 check-in{' '}
          <span role="img" aria-label="hotel emoji">
            🏨
          </span>
        </Bold>{' '}
        na Horském hotelu Eva. Bližší informace pod záložkou Místo.
      </p>
      <p>
        <Bold>
          16:00 Svatební obřad{' '}
          <span role="img" aria-label="bride emoji">
            👰🏻
          </span>
        </Bold>{' '}
        Svoje &quot;Ano!&quot; si povíme v prostorách Městského úřadu města
        Svätý Jur. K budově se můžete dopravit autem, nebo i pěšky. Budova je
        vzdálená cca 20 min chůze od Horského hotelu Eva, dámám a slečnám tedy
        doporučujeme pohodlnější obuv.
      </p>
      <p>
        <Bold>
          17:00 Svatební hostina{' '}
          <span role="img" aria-label="dinner emoji">
            🍽️
          </span>
        </Bold>{' '}
        Veselka se bude odehrávat v prostorech Horského hotelu Eva. Můžete se
        tešit na skvělé jídlo (prosíme, informujte nás, pokud máte jakékoliv
        alergie anebo omezení) a živou hudbu v podání kapely Na kolená. Doufáme,
        že do kolen nepůjdeme předčasně, a protancujeme celou noc!
      </p>
      <p>
        <Bold>
          23:00 Čepčenie a Redový{' '}
          <span role="img" aria-label="dance emoji">
            💃🏼
          </span>
        </Bold>{' '}
        Znamená, v té najtradičnější podobě, přechod ženy ze svobodného stavu do
        stavu manželského. To vše za doprovodu charakteristických svatebních
        písní. Tento akt doprovázejí i rituály, jako je přísaha na vařečku a
        nožík či odebrání od rodičů anebo kamarádek, jako takzvaný redový tanec.
        Redový tanec je tancem nevěsty se svatebními hosty. Svatební hosté za
        tanec s něvěstou obvykle platí malými bankovkami. Tečku za tancem,
        takzvanou vykrúcankou, dělá ženich únosem nevěsty.
      </p>
      <p>
        <Bold>
          00:00 Svatební kapustnica{' '}
          <span role="img" aria-label="dance emoji">
            🥄
          </span>
        </Bold>{' '}
        Kapustnica je závěrečným jídlem naší hostiny. Koláče, pití a hudba jsou
        však k dispozici až do rána bílého.
      </p>
      <p>
        <Bold>Neděle 6.9.</Bold>
      </p>
      <p>
        <Bold>
          Od 8:00 do 10:00 snídaně{' '}
          <span role="img" aria-label="cooking emoji">
            🍳
          </span>
        </Bold>{' '}
        formou bufetu.
      </p>
      <p>
        <Bold>
          Do 10:00 check-out{' '}
          <span role="img" aria-label="hotel emoji">
            🏨
          </span>
        </Bold>{' '}
        z hotelu.
      </p>
    </Box>
  </Layout>
);

Program.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Program;

export const query = graphql`
  query ProgramQuery {
    programJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
