import styled from 'styled-components';

export const CharacterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  opacity: ${({ active }) => active};
  transition: opacity 1.2s ease-in-out;
`;

export const CharacterTitle = styled.h1`
  align-items: center;
  color: #fff;
  display: flex;
  justify-content: center;
  margin-bottom: 0;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.6);
`;
