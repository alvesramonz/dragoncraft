import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/Button";
import dragonApi from "../../../services/api";
import * as C from "./styles";

const Detail = () => {
  const [dragon, setDragon] = useState();
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

  return (
    <C.Container>
      <C.Label>DRAGONCRAFT DETAIL</C.Label>
      <C.Content>

      <br></br>
      <C.Label>Nome: {dragon?.name}</C.Label>
      <C.Label>Tipo: {dragon?.type}</C.Label>
      <C.Label>Data de Criação: {dragon?.createdAt}</C.Label>

      <br></br>
      <Button Text="Editar" onClick={() => [navigate(`/dashboard/edit_dragon/${id}`)]}>
        Editar
      </Button>
      <Button Text="Voltar" onClick={() => [navigate("/dashboard")]}>
        Voltar
      </Button>
      </C.Content>

    </C.Container>
  );
};

export default Detail;
