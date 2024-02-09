import React from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormBody from "./components/FormBody";
import InputFirst from "./components/InputFirst";
import Rules from "./components/Rules";
import Button from "./components/Button";
import MainContextProvider from "./store/ContextStore";

export default function App() {
  return (
    <div>
      <MainContextProvider>
        <Header></Header>
        <FormBody>
          <InputFirst> </InputFirst>
          <Rules></Rules>
          <Button></Button>
        </FormBody>
      </MainContextProvider>
    </div>
  );
}
