import "./Form.scss";
import { useState } from "react";
import calculator from "../../assets/images/icon-calculator.svg";

export default function Form({
  amount,
  setAmount,
  year,
  setYear,
  interest,
  setInterest,
  selectedOption,
  setSelectedOption,
  handleFormSubmit,
}) {
  const [value, setValue] = useState("");

  return (
    <>
      <form className="form" onSubmit={handleFormSubmit}>
        <label className="form__label">
          Mortgage Amount
          <div className="amount__container">
            <span className="amount__pound">£</span>
            <input
              type="text"
              name="amount"
              id="amount"
              className="amount__input"
              onChange={(event) => {
                const rawValue = event.target.value.replace(/,/g, "").replace(/\D/g, "");
                const formatted = rawValue ? Number(rawValue).toLocaleString() : "";
                setAmount(formatted);
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
            <input
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
            <input
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

        <div className="form__type-container">
          <h3 className="form__label">Mortgage Type</h3>

          <div className={`form__type ${selectedOption === "Repayments" ? "form__type--active" : ""}`}>
            <input
              type="radio"
              name="type"
              id="repayments"
              value="Repayments"
              checked={selectedOption === "Repayments"}
              onChange={(event) => {
                console.log("Clicked:", event.target.value);
                setSelectedOption(event.target.value);
              }}
              className="form__radio"
            />
            <label htmlFor="repayments" className="form__radio-label">
              Repayments
            </label>
          </div>

          <div className={`form__type ${selectedOption === "Interest Only" ? "form__type--active" : ""}`}>
            <input
              type="radio"
              name="type"
              id="interest-only"
              value="Interest Only"
              checked={selectedOption === "Interest Only"}
              onChange={(event) => {
                console.log("Clicked:", event.target.value);
                setSelectedOption(event.target.value);
              }}
              className="form__radio"
            />
            <label htmlFor="interest-only" className="form__radio-label">
              Interest Only
            </label>
          </div>
        </div>

        <button type="submit" className="form__submit">
          <img className="submit__icon" src={calculator} alt="calculator" />
          Calculate Repayments
        </button>
      </form>
    </>
  );
}
