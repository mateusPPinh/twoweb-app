import React, { useState, useEffect } from 'react';

import { Container, ContainerTitle, CardContainer, Cards } from './styles';
import HeaderComponent from '../../components/Header';
import api from '../../services/api';

export default function DashboardConfigurations() {
  const [userProfile, setUserProfile] = useState([]);

  useEffect(() => {
    api.get('users').then(response => {
      setUserProfile(response.data);
    });
  }, [])

  return (
    <Container>
      <HeaderComponent />

      <ContainerTitle>Atualize informações dos seus usuários</ContainerTitle>

      <CardContainer>
        {userProfile.map(users => (
          <Cards>
            <img src="https://images.unsplash.com/photo-1561055657-b9e0bf0fa360?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="User Profile Pic" />
            <strong>{users.name}</strong>
            <p>CPF: {users.cpf}</p>

            <button>Editar Informações</button>
          </Cards>
        ))}
      </CardContainer>
    </Container>
  );
}