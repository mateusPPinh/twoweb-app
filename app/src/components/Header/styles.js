import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  padding: 1rem 1rem;
  align-items: center;
`;

export const HeaderContent = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    color: #333;
    background: #7159c1;
    height: 3rem;
    width: 10rem;
    justify-content: center;
    color: #fff;
    border-radius: 0.5rem;
    transition: background 0.2s;

    &:hover {
      background: ${shade(0.1, '#7159c1')};
    }
  }

  .header_info {
    display: flex;
    align-items: center;

    strong {
      margin-right: 2rem;
    }
  }

  h1 {
    color: #333;
    font-size: 1.5rem;
  }

 div {
   align-items: center;
   display: flex;
   transition: transform 0.2s;

   &:hover {
      transform: translateX(1rem);
    }

  img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    border: 2px solid #333;
    transition: border-radius 0.2s;

    &:hover {
      border-radius: 40%;
    }
  }

  strong {
    margin-left: 1rem;
    color: #333;
  }
}
`;

