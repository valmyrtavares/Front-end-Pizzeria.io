"use client";

import { CreateRequest } from "@/actions/request";
import { ChangeEvent } from "react";
import React from "react";

interface ItemPageProps {
  idItem: string;
}

interface Product {
  id: string;
  title: string;
  comment: string;
  value: number;
  image: string;
  parent: string;
}

export default function IncludeRequest({ idItem }: ItemPageProps) {
  const [partOf, setPartOf] = React.useState(true);
  const [data, setData] = React.useState<Product>();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value == "meia") {
      setPartOf(true);
    } else {
      setPartOf(false);
    }
  }

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3333/product?id=${idItem}`,
        );
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData);
      } catch (error) {
        console.error("Error fetch data", error);
      }
    };
    fetchData();
  }, [idItem]);

  return (
    <form action={CreateRequest} className="Pizza_Form">
      <div className="size_container">
        <div>
          <label htmlFor="size">
            <input
              type="radio"
              id="opcao1"
              name="size"
              value="pequena"
              disabled={partOf}
            />
            Pequena
          </label>
          <p>valor: R$ 40,00</p>
        </div>
        <div>
          <label htmlFor="opcao2">
            <input
              type="radio"
              id="opcao2"
              name="size"
              value="media"
              disabled={partOf}
            />
            Média
          </label>
          <p>valor: R$ 40,00</p>
        </div>
        <div>
          <label htmlFor="opcao3">
            <input
              type="radio"
              id="opcao3"
              name="size"
              value="grande"
              disabled={partOf}
            />
            Grande
          </label>
          <p>valor: R$ 40,00</p>
        </div>
      </div>
      {partOf && (
        <p className="warning">
          As opções media e pequena só estão disponiveis para pizza inteira a
          opção meia está disponivel apenas para o tamanho grande{" "}
        </p>
      )}
      <div className="part_container">
        <label htmlFor="opcao2">
          <input
            type="radio"
            id="opcao2"
            name="part"
            value="inteira"
            onChange={handleChange}
          />
          Inteira
        </label>

        <label htmlFor="opcao3">
          <input
            type="radio"
            id="opcao3"
            name="part"
            value="meia"
            onChange={handleChange}
          />
          Meia
        </label>
      </div>
      <div className="btn part_container">
        <button type="submit">Incluir Pedido</button>
      </div>
    </form>
  );
}
