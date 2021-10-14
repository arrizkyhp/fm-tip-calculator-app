import React, { useState } from 'react'

export default function Counter() {
    const [bill, setBill] = useState("");
    const [people, setPeople] = useState("")
    const [tipAmount, setTipAmount] = useState("");
    const [total, setTotal] = useState("");

    const handleTip = (e) => {
        let tipTotal = bill * e
        let tipAmount =  tipTotal / people
        setTipAmount(Number(tipAmount).toFixed(2));

        let total = (parseFloat(tipTotal) + parseFloat(bill)) / 5;
        setTotal(Number(total).toFixed(2))
        // console.log(e)
        // console.log(bill)
        // console.log(people)
    }

    return (
      <div className="test-counter">
        <label htmlFor="bill">Bill</label>
        <input type="number" id="bill" onChange={(e) => setBill(e.target.value)} />

        <label htmlFor="tip">Select Tip %</label>
        <button onClick={() => handleTip(0.15)}>15%</button>

        <label htmlFor="nop">Number of People</label>
        <input type="number" id="nop" onChange={(e) => setPeople(e.target.value)} />

        <div className="count">
          <div className="info">
            <span>Tip amout</span>
            <h2>$ {tipAmount === "" ? "0.00" : `${tipAmount}`}</h2>
          </div>
          <div className="info">
            <span>Total</span>
            <h2>$ {total === "" ? "0.00" : `${total}`}</h2>
          </div>
        </div>
      </div>
    );
}
