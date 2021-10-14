import React from 'react'

export default function Info(props) {
    return (
      <section className="info">
        <div className="info-group">
          <div className="info__text">
            <h1 className="info__text__title">Tip Amount</h1>
            <p className="info__text__description">/ person</p>
          </div>
          <h2 className="amount" id="tipAmount">$ {props.tipAmount === "" ? "0.00" : props.tipAmount}</h2>
        </div>
        <div className="info-group">
          <div className="info__text">
            <h1 className="info__text__title">Total</h1>
            <p className="info__text__description">/ person</p>
          </div>
          <h2 className="amount" id="total">{`$${props.total === "" ? "0.00" : props.total}`}</h2>
        </div>
      </section>
    );
}
