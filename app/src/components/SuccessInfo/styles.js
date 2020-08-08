import styled from 'styled-components';

export const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.85);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10001;

  span {
    color: #7159c1;
    font-size: 5rem;
  }

  h1 {
    color: #fafafa;
    font-size: 3rem;
    font-weight: 700;
    margin-top: 15px;
  }
`;
