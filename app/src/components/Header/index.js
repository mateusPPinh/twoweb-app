/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Container, HeaderContent } from "./styles";

export default function Header() {

  const history = useHistory();
  const { pathname } = history.location;

  return (
    <Container>
      <HeaderContent>
        <h1>dash | board</h1>

        {pathname !== '/dashboard-configurations' && (
          <Link to="/dashboard-configurations">
            Alterar Usuários
          </Link>
        )}

        {pathname !== '/' && (
          <Link to="/">
            Voltar
          </Link>
        )}

        <div>
          <img
            src="https://images.unsplash.com/photo-1525550557089-27c1bfedd06c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          />
          <strong>Oi, Maria.</strong>
        </div>
      </HeaderContent>
    </Container>
  );
}