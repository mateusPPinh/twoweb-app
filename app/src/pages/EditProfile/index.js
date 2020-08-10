import React from 'react';

import {
  Container,
  EditContainer,
  ProfileImage,
  SectionTitle,
  RegisterUser,
} from './styles';

export default function EditProfile() {
  return (
    <Container>
      <EditContainer>
        <ProfileImage src="https://images.unsplash.com/photo-1546422401-68b415cbf8de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
        <SectionTitle>Antônia Maria</SectionTitle>
        <RegisterUser>
          <legend>
            <p>Edite os dados</p>
          </legend>
          <form>
            <input placeholder="Nome completo" autoComplete="false" required />

            <input
              type="email"
              placeholder="Melhor e-mail"
              autoComplete="false"
              required
            />

            <div className="field_group">
              <input placeholder="Telefone" autoComplete="false" required />

              <input placeholder="CEP" autoComplete="false" required />
            </div>

            <input placeholder="Endereço" autoComplete="false" required />

            <div className="field_group">
              <input placeholder="Cidade" autoComplete="false" required />

              <input
                placeholder="Estado"
                maxLength="2"
                autoComplete="false"
                required
              />

              <input placeholder="Bairro" autoComplete="false" required />
            </div>

            <div className="field_group">
              <input placeholder="Rua" autoComplete="false" />

              <input placeholder="Número" autoComplete="false" />

              <input placeholder="Complemento" autoComplete="false" />
            </div>
            <button type="submit">Salvar alterações</button>
          </form>
        </RegisterUser>
      </EditContainer>
    </Container>
  );
}
