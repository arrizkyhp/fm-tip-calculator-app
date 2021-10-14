import Button from 'components/Button';
import Info from 'layouts/Info';
import React, { useState, useEffect } from 'react'

export default function Input() {
    const [bill, setBill] = useState(0)
    const [tip, setTip] = useState("")
    const [people, setPeople] = useState(0)
    const [customValue, setCustomValue] = useState("");
    const [peopleClass, isPeopleClass] = useState(false)

    let [tipAmount, setTipAmount] = useState("")
    let [total, setTotal] = useState("")

    useEffect(() => {
           if (people < 1) {
             setTipAmount("")
             setTotal("")

            //  console.log("cannot be zero");
           } else {
               count();
           }
    }, [people, tip])

    const handleBill = (e) => {
        if(e.target.value < 0 ) {
            e.target.value = 0;
            setBill(bill)
        } else {
            setBill(e.target.value);
         }
    }

    const handleCustomTip = (e) => {
        if (e.target.value < 0) {
            e.target.value = 0;
            setTip(0)
            setCustomValue(0)
        } else {
            setTip(e.target.value/100);
        }
    }

    const handlePeople = (e) => {
        if (e.target.value < 0) {
            e.target.value = 0;
        }

        let nop = e.target.value
        if(nop === 0 || nop === "") {
            console.log("cannot be zero")
            isPeopleClass(true);
        } else {
            setPeople(nop)
        }
    }

    const count = () => {
         let tipTotal = bill * tip;
         let amountTip = parseFloat(tipTotal) / Number(people);
         setTipAmount(Number(amountTip).toFixed(2));

         let total = (parseFloat(tipTotal) + parseFloat(bill)) / people;
         setTotal(Number(total).toFixed(2));
         isPeopleClass(false)
    }

    return (
      <>
        <section className="input">
          <div className="form-group">
            <label htmlFor="bill">Bill</label>
            <input type="number" className="input-bill form-control" id="bill" min="0" defaultValue={bill} onChange={handleBill} />
          </div>

          <div className="form-group">
            <label htmlFor="tip">Select Tip %</label>
            <Button
              hasShadow
              isTip
              onClick={() => {
                setTip(0.05);
              }}
            >
              5%
            </Button>
            <Button
              hasShadow
              isTip
              onClick={() => {
                setTip(0.1);
              }}
            >
              10%
            </Button>
            <Button
              hasShadow
              isTip
              onClick={() => {
                setTip(0.15);
              }}
            >
              15%
            </Button>
            <Button
              hasShadow
              isTip
              onClick={() => {
                setTip(0.25);
              }}
            >
              25%
            </Button>
            <Button
              hasShadow
              isTip
              onClick={() => {
                setTip(0.5);
              }}
            >
              50%
            </Button>

            <input type="number" className="custom-tip" min="0" id="tip" defaultValue={customValue} onChange={handleCustomTip} placeholder="custom" />
          </div>

          <div className="form-group">
            <label htmlFor="nop">Number of People</label>
            <input type="number" className={`input-nop form-control ${peopleClass ? "error" : ""}`} id="nop" min="0" defaultValue={people} onChange={handlePeople} />
          </div>
        </section>
        <Info tipAmount={tipAmount} total={total} />
      </>
    );
}
