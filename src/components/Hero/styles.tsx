import styled from 'styled-components';

import { colors, fonts, weight, shadow, breakpoints } from 'styles/variables';

export const HeroSearch = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FormHeader = styled.a`
  color: ${colors.black};
  font-size: 4rem;
  font-weight: ${weight.extrabook};
`;

export const GithubAnchor = styled.span`
  font-family: ${fonts.roboto};
  font-weight: ${weight.medium};
`;

export const Fieldset = styled.fieldset`
  border: none;
  position: relative;
  width: calc(100vw - 2.62rem);

  @media (min-width: ${breakpoints.md}) {
    width: 43.75rem;
  }
`;
export const Input = styled.input`
  border: none;
  box-shadow: ${shadow.default};
  color: ${colors.gray};
  font-size: 1.25rem;
  font-weight: ${weight.book};
  padding: 0.75rem 1.12rem;
  width: calc(100% - 6.25rem);

  @media (min-width: ${breakpoints.md}) {
    width: 37.5rem;
  }
`;

export const Button = styled.button`
  align-items: center;
  background-color: ${colors.purple};
  border-bottom-right-radius: 0.12rem;
  border-top-right-radius: 0.12rem;
  border: none;
  cursor: pointer;
  display: inline-flex;
  height: 2.9rem;
  justify-content: center;
  position: absolute;
  width: 6.25rem;
`;
