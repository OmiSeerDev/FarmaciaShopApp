import React from "react";
import styled from "styled-components";
import axios from "axios";
import routes from "../constants/routes";
import { Cart } from "../constants/types";

const Frame = styled.div`
  width: 210px;
  height: 364px;
  display: flex;
  flex-direction: column;
  background-color: #ffebcdff;
  border-radius: 20px;
  margin: 10px;
  align-items: center;
`;

const CountingContainer = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Name = styled.div`
  width: 144px;
  text-align: center;
  font-size: 17px;
  font-weight: bold;
  font-family: Serif, serif;
  color: #0000ff;
`;
const Image = styled.img`
  width: 144px;
  height: 144px;
  margin: 10px 0 10px 0;
  border: 1px solid #3d3d3d;
`;
const Price = styled.div`
  text-align: center;
  width: 60%;
  height: 10%;
  margin: 10px 0;
`;

const AddButton = styled.button<{
  background: string;
  backgroundHover: string;
}>`
  color: #000000;
  width: 160px;
  height: 20px;
  font-size: 12px;
  //border-radius: 20px;
  font-weight: bold;
  border: 0.2px solid #2f2f2f;
  justify-items: center;
  background-color: ${({ background }) => background}; //#acff97

  :hover {
    background-color: ${({ backgroundHover }) => backgroundHover}; //#34d34d
  }
`;

type ProductProps = {
  productName: string;
  imgString: string;
  price: number;
  counter?: number;
};

const Product = ({
  productName,
  imgString,
  price,
}: ProductProps): JSX.Element => {

  type CartResponseProps = {
    cart?: Cart;
    error?: { message: string };
  };
  const addToCartAsync = async (
    product: string
  ): Promise<CartResponseProps> => {
    try {
      product = productName;
      const postBody = {
        products: ["646ac4a72b71a71172603c11"],
        user: "6467e4aa412655b027ca0bd9",
      };
      const currentCart = await axios.post<Cart>(
        `${routes.post.cart}`,
        postBody
      );
      const selectedProduct = await axios.get(
        `${routes.get.products}/name/${productName}`
      );
      const putBody = {
        product: [selectedProduct.data._id],
      };
      await axios.put(`${routes.put.cart}/646867412a7e846eb360cb32`, putBody);
      return { cart: currentCart.data };
    } catch (e) {
      return { error: { message: "Error creating cart" } };
    }
  };

  // @ts-ignore
  // @ts-ignore
  return (
    <Frame>
      <Name>{productName}</Name>
      <Image src={imgString} />
      <Price>${price}</Price>
      <CountingContainer>
          <AddButton
              background={"#acff97"}
          backgroundHover={"#34d34d"}>
          Añadir al Carrito
          </AddButton>
      </CountingContainer>
    </Frame>
  );
};

export default Product;
