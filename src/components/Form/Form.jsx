import "./Form.scss";

export default function Form() {
  return (
    <form
      className="form"
      // onSubmit={handleFormSubmit}
    >
      <label className="form__label">
        Mortgage Amount
        <div className="amount__container">
          <span className="amount__pound">£</span>
          <textarea
            type="number"
            name="amount"
            id="amount"
            className="amount__input"
            // onChange={(event) => {
            //   setName(event.target.value);
            // }}
            // onBlur={() => {
            //   setIsTouched(true);
            // }}
            // value={amount}
          />{" "}
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
            // onChange={(event) => {
            //   setComment(event.target.value);
            // }}
            // onBlur={() => {
            //   setIsTouched(true);
            // }}
            // value="year"
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
            // onChange={(event) => {
            //   setComment(event.target.value);
            // }}
            // onBlur={() => {
            //   setIsTouched(true);
            // }}
            // value="year"
          />{" "}
          <span className="interest__unit">%</span>
        </div>{" "}
      </label>

      <label className="form__label">Mortgage Type</label>
      <div className="form__type">
        <label className="form__radio-label">
          <input type="radio" name="type" id="repayment" value="repayment" className="form__type" />
          Repayment
        </label>

        <label className="form__radio-label">
          <input type="radio" name="type" id="type" value="repayment" className="form__type" />
          Interest Only
        </label>
      </div>

      <button type="submit" className="form__submit">
        Calculate Repayments
      </button>
    </form>
  );
}
