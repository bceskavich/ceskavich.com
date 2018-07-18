import styled from 'styled-components';

export const baseColor = '#0e1419';
export const accentColor = '#f273bc';

// Thank you css-tricks
// https://css-tricks.com/snippets/css/fluid-typography/
export const DynamicHeader = styled.h1`
  font-size: ${props => props.minSize}px;
  @media screen and (min-width: 320px) {
    font-size: calc(
      ${props => props.minSize}px +
        (${props => props.maxSize} - ${props => props.minSize}) *
        ((100vw - 320px) / (1500 - 320))
    );
  }
  @media screen and (min-width: 1024px) {
    font-size: ${props => props.maxSize}px;
  }
`;
