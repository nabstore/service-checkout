import { useState } from "react";
import { useNavigate } from "react-router";
import api from "../../services/api";
import { SubmitButton } from "../AddProduto/styles";
import { Container } from "./styles";

const AddColaborador = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConfirm, setSenhaConfirm] = useState("");
  const [senhaError, setSenhaError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (senha.length < 6) {
      setSenhaError("A senha deve possuir pelo menos 6 caracteres.");
      return;
    }

    if (senha !== senhaConfirm) {
      setSenhaError("Senhas não conferem.");
      return;
    }
    setSenhaError("");

    api
      .createUsuario({
        nome,
        email,
        senha,
        tipoUsuarioId: 2,
      })
      .then((resp) => {
        navigate(`/login`);
      })
      .catch((err) => {
        if (
          err.response.status === 400 &&
          err.response.data?.errors[0].message ===
            "Usuarios.email must be unique"
        ) {
          setEmailError("Este e-mail já está cadastrado.");
        } else {
          console.error("Erro ao criar colaborador", err);
        }
      });
  };

  return (
    <Container className="container">
      <div className="d-flex justify-content-center">
        <h1>Adição de Colaborador</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label className="mt-3 mb-1" htmlFor="nome">
          Nome Completo
        </label>
        <input
          autoFocus
          type="text"
          id="nome"
          className="form-control"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label className="mt-3 mb-1" htmlFor="email">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          className={
            emailError === "" ? "form-control" : "form-control is-invalid"
          }
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="invalid-feedback">{emailError}</div>

        <label className="mt-3 mb-1" htmlFor="senha">
          Senha
        </label>
        <input
          type="password"
          id="senha"
          className={
            senhaError === "" ? "form-control" : "form-control is-invalid"
          }
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <label className="mt-3 mb-1" htmlFor="confirmSenha">
          Confirme a senha
        </label>
        <input
          type="password"
          id="confirmSenha"
          className={
            senhaError === "" ? "form-control" : "form-control is-invalid"
          }
          value={senhaConfirm}
          onChange={(e) => setSenhaConfirm(e.target.value)}
        />
        <div className="invalid-feedback">{senhaError}</div>

        <SubmitButton>Criar</SubmitButton>
      </form>
    </Container>
  );
};

export default AddColaborador;
