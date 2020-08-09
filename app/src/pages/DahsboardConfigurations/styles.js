import styled from 'styled-components';

export const Container = styled.div`
  margin: 50px auto;
  padding: 95px;
  max-width: 1200px;
  background: #ffff;
  border-radius: 8px;
`;

export const ContainerTitle = styled.h2`
  font-size: 2rem;
  width: 30rem;

  margin-top: 5rem;
  padding: 1rem;
  transition: transform 0.2s;

  &:hover {
    transform: translateX(1rem);
  }
`;

export const CardContainer = styled.div`
  max-width: 800px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;

export const Cards = styled.div`
  margin-top: 3rem;
  padding: 1rem;
  background: #7159c1;
  width: 20rem;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    border: 2px solid #ffff;
  }

  strong {
    color: #ffff;
    margin-top: 1rem;
  }

  p {
    color: #ffff;
    margin-top: 1rem;
  }

  button {
    background: #ffff;
    border: none;
    margin-top: 1rem;
    height: 2rem;
    width: 10rem;
    border-radius: 0.7rem;
    font-weight: bold;
  }
`;