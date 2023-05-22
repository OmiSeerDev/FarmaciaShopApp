import React from "react";
import Product from "./Product";
import styled from "styled-components";
import { imageSetter } from "../constants/images/imageSetter";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export type Info = {
  name: string;
  img?: any;
  precio: number;
};

export const ProductsInfo: Info[] = [
  { name: "Paracetamol", img: imageSetter[0], precio: 10.0 },
  { name: "Butilhioscina", img: imageSetter[1], precio: 40.2 },
  { name: "Ibuprofeno", img: imageSetter[2], precio: 62.0 },
  { name: "Difenhidramina", img: imageSetter[3], precio: 28.5 },
  { name: "Electrolito", img: imageSetter[4], precio: 24.0 },
  { name: "Jeringa5", img: imageSetter[5], precio: 5.0 },
  { name: "Jeringa10", img: imageSetter[6], precio: 8.0 },
  { name: "Tribedoce", img: imageSetter[7], precio: 49.99 },
  { name: "Loperamida", img: imageSetter[8], precio: 16.0 },
  { name: "Omeprazol", img: imageSetter[9], precio: 44.98 },
  { name: "Venda", img: imageSetter[10], precio: 8.0 },
  { name: "Miconazol", img: imageSetter[11], precio: 15.6 },
];
const ProductsList = () => {
  return (
    <div className={"products-list"}>
      <Container>
        <Product
          productName={ProductsInfo[0].name}
          imgString={ProductsInfo[0].img}
          price={ProductsInfo[0].precio}
        ></Product>
        <Product
          productName={ProductsInfo[1].name}
          imgString={ProductsInfo[1].img}
          price={ProductsInfo[1].precio}
        ></Product>
        <Product
          productName={ProductsInfo[2].name}
          imgString={ProductsInfo[2].img}
          price={ProductsInfo[2].precio}
        ></Product>
        <Product
          productName={ProductsInfo[3].name}
          imgString={ProductsInfo[3].img}
          price={ProductsInfo[3].precio}
        ></Product>
        <Product
          productName={ProductsInfo[4].name}
          imgString={ProductsInfo[4].img}
          price={ProductsInfo[4].precio}
        ></Product>
        <Product
          productName={ProductsInfo[5].name}
          imgString={ProductsInfo[5].img}
          price={ProductsInfo[5].precio}
        ></Product>
        <Product
          productName={ProductsInfo[6].name}
          imgString={ProductsInfo[6].img}
          price={ProductsInfo[6].precio}
        ></Product>
        <Product
          productName={ProductsInfo[7].name}
          imgString={ProductsInfo[7].img}
          price={ProductsInfo[7].precio}
        ></Product>
        <Product
          productName={ProductsInfo[8].name}
          imgString={ProductsInfo[8].img}
          price={ProductsInfo[8].precio}
        ></Product>
        <Product
          productName={ProductsInfo[9].name}
          imgString={ProductsInfo[9].img}
          price={ProductsInfo[9].precio}
        ></Product>
        <Product
          productName={ProductsInfo[10].name}
          imgString={ProductsInfo[10].img}
          price={ProductsInfo[10].precio}
        ></Product>
        <Product
          productName={ProductsInfo[11].name}
          imgString={ProductsInfo[11].img}
          price={ProductsInfo[11].precio}
        ></Product>
      </Container>
    </div>
  );
};

export default ProductsList;
