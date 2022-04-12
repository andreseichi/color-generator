import styled from 'styled-components';

interface Props {
  backgroundColor: string;
}

interface TextProps {
  index: number;
}

export const Article = styled.article<Props>`
  padding: 1rem 2rem;
  cursor: pointer;
  font-size: 1rem;
  text-transform: none;

  background-color: ${({ backgroundColor }) => `rgb(${backgroundColor})`};
`;

export const Text = styled.p<TextProps>`
  margin-bottom: 0;
  color: var(--clr-grey-1);

  color: ${({ index }) => (index > 10 ? 'white' : 'black')};
`;
