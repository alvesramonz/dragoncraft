import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import dragonApi from "../../../services/api";
import * as C from "./styles";

const Detail = () => {
  const [dragon, setDragon] = useState();
  const [dragonName, setDragonName] = useState("");
  const [dragonType, setDragonType] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  let { id } = useParams();

  useEffect(() => {
    dragonApi
      .get(`/api/v1/dragon/${id}`)
      .then((response) => setDragon(response.data))
      .catch((err) => {
        console.error("Ops! ocorreu um erro" + err);
      });
  }, []);

  const handlePut = () => {
    if (!dragonName | !dragonType) {
      setError("Preencha todos os campos para atualizar");
      return;
    }

    dragonApi
      .put(`/api/v1/dragon/${id}`, {
        name: dragonName,
        type: dragonType,
      })
      .then((response) => setDragon(response.data))
      .catch((err) => {
        console.error("Ops! ocorreu um erro" + err);
      });

    alert("Dragão atualizado com sucesso!");
    navigate("/dashboard");
  };

  const handleDelete = () => {
    dragonApi
      .delete(`/api/v1/dragon/${id}`)
      .then((response) => setDragon(response.data))
      .catch((err) => {
        console.error("Ops! ocorreu um erro" + err);
      });

    alert("Dragão deletado com sucesso!");
    navigate("/dashboard");
  };

  return (
    <C.Container>
      <C.Label>DUNGEONCRAFT</C.Label>
      <C.Content>
        <Input
          placeholder={`Nome do Dragão Atual: ${dragon?.name}`}
          value={dragonName}
          onChange={(e) => [setDragonName(e.target.value)]}
        />
        <Input
          placeholder={`Tipo do Dragão Atual: ${dragon?.type}`}
          value={dragonType}
          onChange={(e) => [setDragonType(e.target.value)]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Deletar Dragão" onClick={handleDelete} />
        <Button Text="Atualizar" onClick={handlePut} />
        <Button Text="Voltar" onClick={() => [navigate("/dashboard")]}>
          Voltar
        </Button>
      </C.Content>
    </C.Container>
  );
};

export default Detail;
