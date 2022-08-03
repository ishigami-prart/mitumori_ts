import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [koumokuText, setKoumokuText] = useState("");
  const [tankaText, setTankaText] = useState("");
  const [suuryouText, setSuuryouText] = useState("");
  const [taniText, setTaniText] = useState("");
  const [price, setPrice] = useState([]);

  const onChangeKoumokuText = (event) => setKoumokuText(event.target.value);
  const onChangeTankaText = (event) => setTankaText(event.target.value);
  const onChangeSuuryouText = (event) => {
    setSuuryouText(event.target.value);
  };
  const onChangeTaniText = (event) => setTaniText(event.target.value);
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
