import styled from 'styled-components';

import { colors } from 'styles/variables';

export const NotFoundContainer = styled.div`
  height: 100vh;
  margin: 0 auto;
  max-width: 1150px;
  padding: 2.2rem 1.6rem;
  width: 100vw;
`;

export const NotFoundContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 7.5rem;

  & h2 {
    color: ${colors.purple};
    font-size: 2.5rem;
  }
`;
