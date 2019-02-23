import styled from 'styled-components';

export const StyledCharacter = styled.div`
  background-color: rgba(255, 255, 255, 0.8);

  width: 100%;
`;

export const Header = styled.div`
  padding: 0;
  /* display: flex;
  justify-content: space-between; */
  img {
    object-fit: contain;
    width: 100%;
    max-height: 100%;
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
