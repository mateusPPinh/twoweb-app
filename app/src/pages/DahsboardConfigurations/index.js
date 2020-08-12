import React, { useState, useEffect } from 'react';

import {
  Container,
  ContainerTitle,
  CardContainer,
  Cards,
  Pagination,
} from './styles';

import HeaderComponent from '../../components/Header';
import api from '../../services/api';

export default function DashboardConfigurations() {
  const [userProfile, setUserProfile] = useState([]);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    async function loadData() {
      const response = await api.get(`users?page=${pages}`);
      setUserProfile(response.data);
    }
    loadData();
  }, []);

  return (
    <Container>
      <HeaderComponent />

      <ContainerTitle>Atualize informações dos seus usuários</ContainerTitle>

      <CardContainer>
        {userProfile.map((users) => (
          <Cards key={users.id}>
            <img
              src="https://images.unsplash.com/photo-1561055657-b9e0bf0fa360?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              alt="User Profile Pic"
            />
            <strong>{users.name}</strong>
            <p>CPF: <b>{users.cpf}</b></p>

            <button type="button">Editar</button>
          </Cards>
        ))}
      </CardContainer>

      <Pagination>
        <button type="button">Página Anterior</button>
        <button type="button">Próxima página</button>
      </Pagination>
    </Container>
  );
}
