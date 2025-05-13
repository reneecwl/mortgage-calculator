import "./Form.scss";
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
  isTouched,
  setIsTouched,
}) {
  return (
    <>
      <form className="form" onSubmit={handleFormSubmit}>
        <label className="form__label">
          Mortgage Amount
          <div className={`amount__container ${isTouched.amount && !amount ? "amount__container-error" : ""}`}>
            <span className={`amount__pound ${isTouched.amount && !amount ? "amount__pound-error" : ""}`}>£</span>
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
              onBlur={() => {
                setIsTouched({ ...isTouched, amount: true });
              }}
            />
          </div>{" "}
          {isTouched.amount && !amount && <span className="error__message">This field is required</span>}
        </label>
        <div className="form__middle-container">
          <label className="form__label form__label-half">
            Mortgage Term
            <div className={`year__container ${isTouched.year && !year ? "year__container-error" : ""}`}>
              <input
                type="number"
                name="year"
                id="year"
                className="year__input"
                onChange={(event) => {
                  setYear(event.target.value);
                }}
                value={year}
                onBlur={() => {
                  setIsTouched({ ...isTouched, year: true });
                }}
              />{" "}
              <span className={`year__unit ${isTouched.year && !year ? "year__unit-error" : ""}`}>year</span>
            </div>
            {isTouched.year && !year && <span className="error__message">This field is required</span>}
          </label>

          <label className="form__label form__label-half">
            Interest Rate
            <div
              className={`interest__container ${isTouched.interest && !interest ? "interest__container-error" : ""}`}
            >
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
                onBlur={() => {
                  setIsTouched({ ...isTouched, interest: true });
                }}
              />{" "}
              <span className={`interest__unit ${isTouched.interest && !interest ? "interest__unit-error" : ""}`}>
                %
              </span>
            </div>
            {isTouched.interest && !interest && <span className="error__message">This field is required</span>}
          </label>
        </div>
        <div
          className="form__type-container"
          tabIndex={0}
          onBlur={() => {
            setIsTouched((prev) => ({ ...prev, mortgageType: true }));
          }}
        >
          <h3 className="form__label-type">Mortgage Type</h3>

          <div className={`form__type ${selectedOption === "Repayments" ? "form__type--active" : ""}`}>
            <input
              type="radio"
              name="type"
              id="repayments"
              value="Repayments"
              checked={selectedOption === "Repayments"}
              onChange={(event) => {
                setSelectedOption(event.target.value);
                setIsTouched({ ...isTouched, mortgageType: true });
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
              onChange={(event) => {
                setSelectedOption(event.target.value);
                setIsTouched({ ...isTouched, mortgageType: true });
              }}
              checked={selectedOption === "Interest Only"}
              className="form__radio"
            />
            <label htmlFor="interest-only" className="form__radio-label">
              Interest Only
            </label>
          </div>
          {isTouched.mortgageType && !selectedOption && <span className="error__message">This field is required</span>}
        </div>

        <button type="submit" className="form__submit">
          <img className="submit__icon" src={calculator} alt="calculator" />
          Calculate Repayments
        </button>
      </form>
    </>
  );
}
