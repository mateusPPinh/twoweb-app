import styled from 'styled-components';
import { shade } from 'polished';

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
  cursor: pointer;
  &:hover {
    transform: translateX(1rem);
  }
`;

export const CardContainer = styled.div`
  max-width: 800px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin: 0 auto;
`;

export const Cards = styled.div`
  margin-top: 3rem;
  padding: 1rem;
  background: #7159c1;
  width: 15rem;
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
    border-radius: 0.5rem;
    font-weight: bold;
    transition: background 0.2s;

    &:hover {
      background: ${shade(0.1, '#ffff')};
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  margin-top: 5rem;
  justify-content: space-between;
  align-items: center;

  button {
    background: #333;
    border: 0;
    width: 10rem;
    height: 3rem;
    border-radius: 0.8rem 0.4rem;
    color: #ffff;
    font-weight: bold;
    transition: background 0.2s;

    &:hover {
      background: ${shade(0.1, '#333')};
    }
  }
`;
