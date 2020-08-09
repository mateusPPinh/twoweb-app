import React from 'react';

import { Container, ContainerTitle, CardContainer, Cards } from './styles';
import HeaderComponent from '../../components/Header';

export default function DashboardConfigurations() {
  return (
    <Container>
      <HeaderComponent />

      <ContainerTitle>Atualize informações dos seus usuários</ContainerTitle>

      <CardContainer>
        <Cards>
          <img src="https://images.unsplash.com/photo-1561055657-b9e0bf0fa360?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="User Profile Pic" />
          <strong>Maurilio</strong>
          <p>CPF: 04130547054</p>

          <button>Editar Informações</button>
        </Cards>

        <Cards>
          <img src="https://images.unsplash.com/photo-1561055657-b9e0bf0fa360?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="User Profile Pic" />
          <strong>Maurilio</strong>
          <p>CPF: 04130547054</p>

          <button>Editar Informações</button>
        </Cards>

        <Cards>
          <img src="https://images.unsplash.com/photo-1561055657-b9e0bf0fa360?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="User Profile Pic" />
          <strong>Maurilio</strong>
          <p>CPF: 04130547054</p>

          <button>Editar Informações</button>
        </Cards>
      </CardContainer>
    </Container>
  );
}