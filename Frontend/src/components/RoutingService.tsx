import React from "react";
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import Main from "./Main";
import ProductsList from "./ProductsList";
import ShoppingCart from "./ShoppingCart";
import styled from "styled-components";
import Login from "./Login";

const Screen = styled.div`
  background-color: #61dafb;
`;

type RouteProps = {
  CartId: string;
};
const RoutingService = (): JSX.Element => {
  return (
    <Screen>
      <BrowserRouter>
        <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/products" element={<ProductsList />}></Route>
            <Route path="/shopping-cart" element={<ShoppingCart />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Route>
        </Routes>
        </HashRouter>
      </BrowserRouter>
    </Screen>
  );
};
export default RoutingService;
