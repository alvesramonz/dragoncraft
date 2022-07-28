import React, { useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import dragonApi from "../../../services/api";
import * as C from "./styles";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [dragonName, setDragonName] = useState("");
  const [dragonType, setDragonType] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignup = () => {
    if (!dragonName | !dragonType) {
      setError("Preencha todos os campos");
      return;
    }

    dragonApi
      .post("/api/v1/dragon", {
        name: dragonName,
        type: dragonType,
      })
      .catch((err) => {
        setError(err);
        console.error("Ops! ocorreu um erro" + err);
      });

    alert("Dragão cadatrado com sucesso!");
    navigate("/dashboard");
  };

  return (
    <C.Container>
      <C.Label>DRAGONCRAFT</C.Label>
      <C.Content>
        <Input
          placeholder="Nome do Dragão"
          value={dragonName}
          onChange={(e) => [setDragonName(e.target.value), setError("")]}
        />
        <Input
          placeholder="Tipo do Dragão"
          value={dragonType}
          onChange={(e) => [setDragonType(e.target.value), setError("")]}
        />
        <Button Text="Registrar Dragão" onClick={handleSignup} />
        <C.labelError>{error}</C.labelError>
        <Button Text="Voltar" onClick={() => [navigate("/dashboard")]}>
          Voltar
        </Button>
      </C.Content>
    </C.Container>
  );
};

export default Register;
