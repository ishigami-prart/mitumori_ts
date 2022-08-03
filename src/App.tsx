import React, { useState } from "react";
import "./styles.css";

type PriceType = {
    koumoku:string;
    tanka:number;
    suuryou:number;
    tani:string;
    goukei:number;
}

export default function App() {
  const [koumokuText, setKoumokuText] = useState<string>("");
  const [tankaText, setTankaText] = useState<number>();
  const [suuryouText, setSuuryouText] = useState<number>();
  const [taniText, setTaniText] = useState<string>("");
  const [price, setPrice] = useState<Array<PriceType>>([]);

  const onChangeKoumokuText = (event: React.FormEvent<HTMLInputElement>) => setKoumokuText(event.target.value);
  const onChangeTankaText = (event: React.FormEvent<HTMLInputElement>) => setTankaText(event.target.value);
  const onChangeSuuryouText = (event: React.FormEvent<HTMLInputElement>) => {
    setSuuryouText(event.target.value);
  };
  const onChangeTaniText = (event: React.FormEvent<HTMLInputElement>) => setTaniText(event.target.value);
  console.log("単価" + tankaText);
  console.log("数量" + suuryouText);

  const onClickAdd = () => {
    const newPriceObject = {
      koumoku: koumokuText,
      tanka: tankaText,
      suuryou: suuryouText,
      tani: taniText,
      goukei: tankaText * suuryouText
    };

    const newPrice = [...price, newPriceObject];
    setPrice(newPrice);
    console.log(price);

    //inputのリセット
    setKoumokuText("");
    setTankaText("");
    setSuuryouText("");
    setTaniText("");
  };

  const total = price.reduce((p, x) => p + x.goukei, 0);
  console.log(total);

  return (
    <>
      <div className="input_erea">
        <input
          placeholder="項目"
          value={koumokuText}
          onChange={onChangeKoumokuText}
        />
        <input
          placeholder="単価"
          value={tankaText}
          onChange={onChangeTankaText}
        />
        <input
          placeholder="数量"
          value={suuryouText}
          onChange={onChangeSuuryouText}
        />
        <input
          placeholder="単位"
          value={taniText}
          onChange={onChangeTaniText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      {price.map((s, index) => {
        return (
          <div key={index} className="mitumori_table">
            <p>{s.koumoku}</p>
            <p>{s.tanka}</p>
            <p>{s.suuryou}</p>
            <p>{s.tani}</p>
            <p>{s.goukei}円</p>
          </div>
        );
      })}
      <div className="ddd">{total}</div>
    </>
  );
}
