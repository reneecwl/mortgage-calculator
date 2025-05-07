import "./Form.scss";
import { useState } from "react";

export default function Form() {
  const [amount, setAmount] = useState("");
  const [year, setYear] = useState("");
  const [interest, setInterest] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");

  const handleFormSubmit = function (event) {
    event.preventDefault();

    const P = parseFloat(amount);
    const annualRate = parseFloat(interest);
    const r = annualRate / 100 / 12;
    const n = parseFloat(year) * 12;

    const monthlyPayment = (P * r * (1 + r) ** n) / ((1 + r) ** n - 1);
    const totalInterest = monthlyPayment * n - P;
    const monthlyInterest = totalInterest / n;

    if (selectedOption === "Repayment") {
      console.log("Repayment" + monthlyPayment);
      setMonthlyPayment(monthlyPayment);
    } else {
      console.log("Interest Only" + monthlyInterest);
      return monthlyInterest;
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleFormSubmit}>
        <label className="form__label">
          Mortgage Amount
          <div className="amount__container">
            <span className="amount__pound">£</span>
            <textarea
              type="number"
              name="amount"
              id="amount"
              className="amount__input"
              onChange={(event) => {
                setAmount(event.target.value);
              }}
              value={amount}
              // onBlur={() => {
              //   setIsTouched(true);
              // }}
            />
          </div>
        </label>

        <label className="form__label">
          Mortgage Term
          <div className="year__container">
            <textarea
              type="number"
              name="year"
              id="year"
              className="year__input"
              onChange={(event) => {
                setYear(event.target.value);
              }}
              value={year}
              // onBlur={() => {
              //   setIsTouched(true);
              // }}
            />
            <span className="year__unit">years</span>
          </div>
        </label>

        <label className="form__label">
          Interest Rate
          <div className="interest__container">
            <textarea
              type="number"
              name="interest"
              id="interest"
              className="interest__input"
              step="0.01"
              onChange={(event) => {
                setInterest(event.target.value);
              }}
              value={interest}
              // onBlur={() => {
              //   setIsTouched(true);
              // }}
            />{" "}
            <span className="interest__unit">%</span>
          </div>{" "}
        </label>

        <label className="form__label">Mortgage Type</label>
        <div className="form__type">
          <label className="form__radio-label">
            <input
              type="radio"
              name="type"
              id="repayment"
              value="Repayment"
              checked={selectedOption === "Repayment"}
              onChange={(event) => {
                setSelectedOption(event.target.value);
              }}
              className="form__type"
            />
            Repayment
          </label>

          <label className="form__radio-label">
            <input
              type="radio"
              name="type"
              id="type"
              value="Interest Only"
              checked={selectedOption === "Interest Only"}
              onChange={(event) => {
                setSelectedOption(event.target.value);
              }}
              className="form__type"
            />
            Interest Only
          </label>
        </div>

        <button type="submit" className="form__submit">
          Calculate {selectedOption}
        </button>
      </form>
      <div className="results">
        {monthlyPayment ? (
          <div className="payment">
            <div className="payment__monthly">
              Your Monthly repayments
              <span className="payment__monthly-amount">{monthlyPayment}</span>
            </div>
            <div className="payment__total">
              Total you'll repay over the term
              <span className="payment__monthly-amount">{{ monthlyPayment } * { year } * 12}</span>
            </div>
          </div>
        ) : (
          <div className="results__no-result">
            <h3 className="results__header">Results shown here</h3>
            <p className="restuls__content">
              Complete the form and click “calculate repayments” to see what your monthly repayments would be.{" "}
            </p>
          </div>
        )}
      </div>
    </>
  );
}
