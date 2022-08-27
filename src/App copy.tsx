import { ChakraProvider ,Button, ButtonGroup } from '@chakra-ui/react'
import React, { useState } from "react";
import {BrowserRouter} from "react-router-dom";

import theme from "./theme/theme";
import { Router } from "./router/Router"


type priceType = {
  koumoku:string;
  tanka: number;
  suuryou: number;
  tani: string;
  goukei: number;
}

export default function App() {
  const [koumokuText, setKoumokuText] = useState("");
  const [tanka, setTanka] = useState(0);
  const [suuryou, setSuuryou] = useState(0);
  const [taniText, setTaniText] = useState("");
  const [price, setPrice] = useState<Array<priceType>>([
    {
      koumoku: "",
      tanka: 0 ,
      suuryou: 0 ,
      tani: "",
      goukei: 0
    }
  ]);

  const onChangeKoumokuText = (event:React.ChangeEvent<HTMLInputElement>) => setKoumokuText(event.target.value);
  const onChangeTanka = (event:React.ChangeEvent<HTMLInputElement>) => setTanka(event.target.valueAsNumber);
  const onChangeSuuryou = (event:React.ChangeEvent<HTMLInputElement>) => setSuuryou(event.target.valueAsNumber);
  const onChangeTaniText = (event:React.ChangeEvent<HTMLInputElement>) => setTaniText(event.target.value);
  console.log("単価" + tanka);
  console.log("数量" + suuryou);

  const onClickAdd = () => {
    const newPriceObject = {
      koumoku: koumokuText,
      tanka: tanka,
      suuryou: suuryou,
      tani: taniText,
      goukei: tanka * suuryou
    };

    const newPrice = [...price, newPriceObject];
    setPrice(newPrice);
    console.log(price);

    //inputのリセット
    setKoumokuText("");
    setTanka(0);
    setSuuryou(0);
    setTaniText("");
  };

  const total = price.reduce((p, x) => p + x.goukei, 0);
  console.log(total);

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
       
      </BrowserRouter>
    </ChakraProvider>
  );
}
