import React, { useState, useContext, useEffect } from 'react'
import { ResetContext } from 'layouts/Input';

export default function Info(props) {
    const { reset, isReset } = useContext(ResetContext);
    const { disabled, isDisabled } = useContext(ResetContext);

    const handleReset = () => {
      isReset(true);
    }
    return (
      <section className="info">
        <div className="info-group amount-group">
          <div className="info__text">
            <h1 className="info__text__title">Tip Amount</h1>
            <p className="info__text__description">/ person</p>
          </div>
          <h2 className="amount" id="tipAmount">{`$${props.tipAmount === "" ? "0.00" : props.tipAmount}`}</h2>
        </div>
        <div className="info-group">
          <div className="info__text">
            <h1 className="info__text__title">Total</h1>
            <p className="info__text__description">/ person</p>
          </div>
          <h2 className="amount" id="total">{`$${props.total === "" ? "0.00" : props.total}`}</h2>
        </div>
        <button className={`btn btn--reset ${!disabled ? "" : "btn-disabled"}`} id="buttonReset" onClick={handleReset}>
          RESET
        </button>
      </section>
    );
}
