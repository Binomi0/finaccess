import styled from 'styled-components';

export const StyledCharacter = styled.div`
  background-color: ${(props) =>
    props.selected ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.8)'};
  color: ${({ selected }) =>
    selected ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'};
  width: 100%;
  cursor: pointer;
`;

export const StyledCharacterHeader = styled.div`
  padding: 0;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  h4,
  p {
    padding: 0 1rem;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  padding: 0 1rem;
`;
