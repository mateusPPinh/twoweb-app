import React from 'react';

import successImage from '../../assets/success.png';

import { Container } from './styles';

export default function SuccessInfo() {
  return (
    <Container>
      <img src={successImage} alt="Woman and Dog" />
      <h1>Usuário Salvo!</h1>
    </Container>
  );
}
