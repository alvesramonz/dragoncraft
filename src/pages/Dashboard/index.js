import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

const Dashboard = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.Title>DRAGONCRAFT DASHBOARD</C.Title>
      <Button
        Text="Cadastrar Dragão"
        onClick={() => [navigate("/dashboard/register")]}
      >
        Cadastrar Dragão
      </Button>
      <Button
        Text="Lista de Dragões"
        onClick={() => [navigate("/dashboard/list")]}
      >
        Lista de Dragões
      </Button>
      <br></br>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </C.Container>
  );
};

export default Dashboard;
