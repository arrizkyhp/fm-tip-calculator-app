import React, { useState, useEffect, createContext, useRef } from 'react'

import Button from 'components/Button';
import Info from 'layouts/Info';
export const ResetContext = createContext({
  reset: false,
  isReset: () => {}
});

export default function Input() {
    let [reset, isReset] = useState(false);
    let value = { reset, isReset };

    let [bill, setBill] = useState(0)
    const [tip, setTip] = useState("")
    let [people, setPeople] = useState(0)
    const [customValue, setCustomValue] = useState("");

    const [peopleClass, isPeopleClass] = useState(false)
    const [billClass, isBillClass] = useState(false)

    let [tipAmount, setTipAmount] = useState("")
    let [total, setTotal] = useState("")

    const billEl = useRef(null);


    useEffect(() => {
           if (people < 1) {
             setTipAmount("")
             setTotal("")
            //  console.log("cannot be zero");
           } else {
               count();
           }

           if (reset) {
             isReset(false);
             setBill(0);
             setCustomValue("")
             setTip("");
             setPeople(0)
             setTipAmount("");
             setTotal("");

           }
    }, [people, tip, reset, bill])

    const handleBill = (e) => {
        if (e.target.value < 0) {
          e.target.value = 0;
        }

        let billValue = e.target.value

        if (billValue < 0 ) {
            billValue = 0;
            setBill(bill)
        } else if (e.target.value === 0) {
          isBillClass(true);
          setBill(0)
        } else {
          isBillClass(false);
          setBill(billValue);
        }
    }

    const handleCustomTip = (e) => {
        if (e.target.value < 0) {
            e.target.value = 0;
            setTip(0)
            setCustomValue(0)
        } else {
            setTip(e.target.value/100);
            setCustomValue(e.target.value)
        }
    }

    const handlePeople = (e) => {
        if (e.target.value < 0) {
            e.target.value = 0;
        }

        let nop = e.target.value
        if(nop === "0" ) {
            console.log("cannot be zero")
            setPeople(0)
            isPeopleClass(true);
          }else if (nop === "" ) {
           isPeopleClass(true);
           setPeople("")
        } else if (nop < 0 ) {
          nop = 0;
          setPeople(people)
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
      <ResetContext.Provider value={value}>
        <section className="input">
          <div className="form-group">
            <label htmlFor="bill">Bill</label>
            <input type="number" pattern="[0-9]+([\.][0-9]+)?" className={`input-bill form-control ${billClass ? "error" : ""}`} value={bill} id="bill" min="0" onChange={handleBill} />
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

            <input type="number" className="custom-tip" min="0" id="tip" value={customValue} onChange={handleCustomTip} placeholder="custom" />
          </div>

          <div className="form-group">
            <label htmlFor="nop">Number of People</label>
            <input type="number" className={`input-nop form-control ${peopleClass ? "error" : ""}`} id="nop" min="0" value={people} onChange={handlePeople} />
          </div>
        </section>

        <Info tipAmount={tipAmount} total={total} />
      </ResetContext.Provider>
    );
}
