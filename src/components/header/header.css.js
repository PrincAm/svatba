import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;
  max-width: 70rem;
  margin: 0 auto;

  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
    padding-bottom: 2rem;
  }
`;
