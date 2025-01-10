import { useState, useEffect } from "react";
import "./App.css";
const DataList = [
  {
    name: "swordToy",
    price: 300,
    id: 1,
    img:
      "https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/09/howto-resize-pixel-art-photoshop-f.png"
  },
  {
    name: "dumBoyToy",
    price: 200,
    id: 2,
    img: "https://art.pixilart.com/fdfd41fac3151ad.png"
  }
];

export default function App() {
  const [data, setData] = useState(DataList);
  const [multiplier, setMultiplier] = useState(DataList.map(() => 1));
  const [selectValue, setSelectValue] = useState(1);
  const [price, setPrice] = useState(0);

  // ===========================================================
  const multiplierHandler = (multiplierValue, index) => {
    let a = multiplier;
    a[index] = parseInt(multiplierValue);
    setMultiplier(a);
    setSelectValue(multiplierValue);
  };

  const setTotalPrice = (price) => {
    let totalPrice = price;
    console.log(multiplier)
    data.map((val, index) => {
      totalPrice = totalPrice + (val.price * multiplier[index])
    })
    return totalPrice
  }
  // ===========================================================

  return (
    <div className="App">

      <div>
        <h1>Code for SUBTOTAL = MULTIPLIER x individual PRICE</h1>
        {data.map((val, index) => {
          return (
            <div key={val.id} className="container">
              <div className="image">
                <img src={val.img} alt="profilePic" />
              </div>
              <div className="content_container">
                <h2>{val.name}</h2>
                <div className="product">
                  <p>
                    {multiplier[index]} x {val.name} ............ ${val.price * multiplier[index]}
                  </p>
                  <p>
                    <select
                      name=""
                      id=""
                      onChange={(e) => multiplierHandler(e.target.value, index)}
                      value={multiplier[index]}
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                    </select>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        <h4>Your Total Subtotal is :- ${setTotalPrice(price)}</h4>
      </div>
    </div>
  );
}
