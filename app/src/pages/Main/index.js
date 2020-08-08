import React, { useState } from "react";

import { Container, SectionContainer, RegisterUser } from './styles';

import HeaderComponent from '../../components/Header';
import MessageOk from '../../components/SuccessInfo';

export default function Main() {
  const [success, setSuccess] = useState(false);

  function handleSuccessMessage() {
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 10000)
  }

  return (
    <Container>
      {
        success && (
          <MessageOk />
        )
      }
      <HeaderComponent />

      <SectionContainer>
        <h2>Cadastre aqui seus novos clientes.</h2>
      </SectionContainer>

      <RegisterUser>
        <legend>
          <p>Dados necessários</p>
        </legend>
        <form onSubmit={handleSuccessMessage}>
          <input
            type="text"
            placeholder="Nome completo"
            autoComplete="false"
          />

          <input
            type="email"
            placeholder="Melhor e-mail"
            autoComplete="false"
          />

          <div className="field_group">
            <input
              type="number"
              placeholder="CPF"
              autoComplete="false"
            />

            <input
              type="number"
              placeholder="Telefone"
              autoComplete="false"
            />

            <input
              type="number"
              placeholder="CEP"
              autoComplete="false"
            />
          </div>

          <input
            type="text"
            placeholder="Endereço"
            autoComplete="false"
          />

          <div className="field_group">
            <input
              type="text"
              placeholder="Cidade"
              autoComplete="false"
            />

            <input
              type="text"
              placeholder="Estado"
              maxLength="2"
              autoComplete="false"
            />

            <input
              type="text"
              placeholder="Bairro"
              autoComplete="false"
            />
          </div>

          <div className="field_group">
            <input
              type="text"
              placeholder="Rua"
              autoComplete="false"
            />

            <input
              type="text"
              placeholder="Número"
              autoComplete="false"
            />

            <input
              type="text"
              placeholder="Complemento"
              autoComplete="false"
            />
          </div>

          <legend>
            <p>Dados secundários(Opcional)</p>
          </legend>

          <input
            type="text"
            placeholder="Endereço Alternativo"
            autoComplete="false"
          />

          <input
            type="email"
            placeholder="Rua"
            autoComplete="false"
          />

          <div className="field_group">
            <input
              type="text"
              placeholder="Telefone"
              autoComplete="false"
            />

            <input
              type="text"
              placeholder="Número"
              autoComplete="false"
            />

            <input
              type="text"
              placeholder="Complemento"
              autoComplete="false"
            />
          </div>

          <button type="submit">Salvar novo usuário</button>
        </form>
      </RegisterUser>
    </Container>
  );
}
