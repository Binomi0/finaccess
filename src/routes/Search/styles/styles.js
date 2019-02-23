import styled from 'styled-components';

export const CharacterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  opacity: ${({ active }) => active};
  transition: opacity 2s;
`;
