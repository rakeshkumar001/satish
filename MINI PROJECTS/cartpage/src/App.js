import React, { useState } from 'react'
import "./App.css";
const DataList = [
    {
        name: "Sword Toy",
        price: 300,
        id: 1,
        img:
            "https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/09/howto-resize-pixel-art-photoshop-f.png"
    },
    {
        name: "DumBoy Toy",
        price: 200,
        id: 2,
        img: "https://art.pixilart.com/fdfd41fac3151ad.png"
    }
];

export default function App() {
    const [priceList, setPriceList] = useState(DataList.map((val) => val.price));

    const handleOnChange = (index, value) => {
        let a = priceList;
        a[index] = value * DataList[index].price
        setPriceList([...a])
        //NOTE;- You're calling setSelectValue / setPriceList  and passing it the array it already has. You've changed one of its values but it's still the same array, 
        //and I suspect React doesn't see any reason to re-render because state hasn't changed; the new array is the old array. i.e. [.. , ...]
        //One easy way to avoid this is by spreading the array into a new array:
        // example:-  setNumbers([...old])
    }
    return (
        <div className='wrapper'>
            {DataList.map((val, index) => {
                return (
                    <div key={val.id} className="container">
                        <div className="image">
                            <img src={val.img} alt="profilePic" />
                        </div>
                        <div className="content_container">
                            <h1 className='title'>{val.name}</h1>
                            <div className="product">
                                <table>
                                    <tr>
                                        <th>Price/piece</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                    <tr>
                                        <td>${DataList[index].price}</td>
                                        <td>
                                            <select onChange={(e) => handleOnChange(index, parseInt(e.target.value))}>
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                            </select>
                                        </td>
                                        <td>${priceList[index]}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                );
            })}
            <h4 className='total'><p> Your Total Subtotal is :-</p> <p className='totalPrice'>${priceList.reduce((previousValue, currentValue) => previousValue + currentValue, 0)}</p></h4>
        </div>

    )
}
