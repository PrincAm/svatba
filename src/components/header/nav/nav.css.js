import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    @media (max-width: 767px) {
      margin-top: 1rem;
    }

    li {
      text-transform: uppercase;
      font-size: 1.3rem;
      @media (max-width: 767px) {
        font-size: 1.2rem;
      }

      & + li {
        margin-left: 2rem;
        @media (max-width: 767px) {
          margin-left: 1.3rem;
        }
      }
    }
  }
`;
