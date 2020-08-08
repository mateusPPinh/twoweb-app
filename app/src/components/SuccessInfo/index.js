import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

import { Container } from './styles';

export default function SuccessInfo() {
  return (
    <Container>
      <span>
        <FiCheckCircle />
      </span>
      <h1>Usuário Salvo!</h1>
    </Container>
  );
}