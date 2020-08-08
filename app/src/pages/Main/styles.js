import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  margin: 50px auto;
  padding: 95px;
  max-width: 1200px;
  background: #ffff;
  border-radius: 8px;
`;

export const SectionContainer = styled.div`
  padding: 1rem;
  width: 35rem;
  margin-top: 2rem;

  h2 {
    font-size: 2rem;
    color: #333;
  }
`;

export const RegisterUser = styled.div`
  margin-top: 2rem;
  padding: 1rem;

  form {
    margin-top: 2rem;
    display: flex;
    max-width: 40rem;
    flex-direction: column;
    padding-bottom: 2rem;

    p {
      margin-bottom: 1rem;
    }

    h3 {
      margin-bottom: 0.5rem;
      font-size: 1rem;
    }

    .field_group {
      flex: 1;
      display: flex;
      justify-content: space-between;
    }

    input {
      text-indent: 1rem;
      height: 3.5rem;
      background: rgba(3, 3, 3, 0.1);
      border: none;
      border-radius: 0.8rem;
      font-size: 0.90rem;
      caret-color: #333;
      margin-bottom: 1rem;

      &::placeholder {
        font-size: 0.90rem;
      }
    }

    button {
      margin-top: 1rem;
      height: 3.5rem;
      background: #7159c1;
      border: 0;
      border-radius: 0.5rem;
      color: #ffff;
      font-size: 1rem;
      font-weight: bold;
      transition: background 0.2s;

      &:hover {
        background: ${shade(0.1, '#7159c1')};
      }
    }
  }
`;