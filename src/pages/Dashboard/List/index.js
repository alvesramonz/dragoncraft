import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import dragonApi from "../../../services/api";
import * as C from "./styles";

const List = () => {
  const [dragonList, setDragonList] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    dragonApi
      .get("/api/v1/dragon")
      .then((response) => setDragonList(response.data))
      .catch((err) => {
        console.error("Ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <C.Container>
      <C.Title>DRAGON LIST</C.Title>

      {dragonList
        ?.sort(function (a, b) {
          return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        })
        .map((dragon) => (
          <Button
            key={dragon.id}
            Text={dragon.name}
            onClick={() => [navigate(`/dashboard/list/${dragon.id}`)]}
          >
            {dragon.name}
          </Button>
        ))}

      <br></br>
      <Button Text="Voltar" onClick={() => [navigate("/dashboard")]}>
        Voltar
      </Button>
    </C.Container>
  );
};

export default List;
