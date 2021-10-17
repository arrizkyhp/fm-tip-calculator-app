import React, { useState, useEffect, createContext, useRef } from 'react'

import Button from 'components/Button';
import Info from 'layouts/Info';
export const ResetContext = createContext({
  reset: false,
  isReset: () => {},
  disabled: true,
  isDisabled: () => {},
});

export default function Input() {
    let [reset, isReset] = useState(false);
    let [disabled, isDisabled] = useState(true);
    let [selected, setSelected] = useState(0);


    let value = { reset, isReset, disabled, isDisabled,};

    let [bill, setBill] = useState("")
    const [tip, setTip] = useState("")
    let [people, setPeople] = useState("")
    const [customValue, setCustomValue] = useState("");

    const [peopleClass, isPeopleClass] = useState(false)
    const [billClass, isBillClass] = useState(false)

    let [tipAmount, setTipAmount] = useState("")
    let [total, setTotal] = useState("")

    useEffect(() => {
           if (people < 1 || bill === "") {
             setTipAmount("")
             setTotal("")
            //  console.log("cannot be zero");
           } else {
               count();
           }

           if (reset) {
             isReset(false);
             isDisabled(true);
             setSelected("");
             setBill("");
             setCustomValue("")
             setTip("");
             setPeople("")
             setTipAmount("");
             setTotal("");
            }

            if (selected > 1) {
              setCustomValue("")
           }


    }, [people, tip, reset, bill, disabled, selected])

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
      setSelected("");
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
            e.target.value = "";
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
         isDisabled(false);


    }

    return (
      <ResetContext.Provider value={value}>
        <div className="input">
          <div className="form-group input-bill-icon">
            <label htmlFor="bill">Bill</label>
            <input type="number" className={`input-bill form-control ${billClass ? "error" : ""}`} placeholder="0" value={bill} id="bill" min="0" onChange={handleBill} />
          </div>

          <div className="form-group tip-group">
            <label htmlFor="tip">Select Tip %</label>
            <div className="btn-group">
              <Button
                hasShadow
                isTip
                className={selected === 5 ? "active" : ""}
                onClick={() => {
                  setTip(0.05);
                  setSelected(5);
                }}
              >
                5%
              </Button>
              <Button
                hasShadow
                isTip
                className={selected === 10 ? "active" : ""}
                onClick={() => {
                  setTip(0.1);
                  setSelected(10);
                }}
              >
                10%
              </Button>
              <Button
                hasShadow
                isTip
                className={selected === 15 ? "active" : ""}
                onClick={() => {
                  setTip(0.15);
                  setSelected(15);
                }}
              >
                15%
              </Button>
              <Button
                hasShadow
                isTip
                className={selected === 25 ? "active" : ""}
                onClick={() => {
                  setTip(0.25);
                  setSelected(25);
                }}
              >
                25%
              </Button>
              <Button
                hasShadow
                isTip
                className={selected === 50 ? "active" : ""}
                onClick={() => {
                  setTip(0.5);
                  setSelected(50);
                }}
              >
                50%
              </Button>
              <input type="number" className="custom-tip select-tip" min="0" id="tip" value={customValue} onChange={handleCustomTip} placeholder="Custom" />
            </div>
          </div>

          <div className="form-group input-nop-icon">
            <label htmlFor="nop">Number of People</label>
            {peopleClass && <p className="nop-error">Can't be zero</p>}
            <input type="number" className={`input-nop form-control ${selected === "custom" ? "active" : ""} ${peopleClass ? "error" : ""}`} id="nop" min="0" placeholder="0" value={people} onChange={handlePeople} />
          </div>
        </div>

        <Info tipAmount={tipAmount} total={total} />
      </ResetContext.Provider>
    );
}
