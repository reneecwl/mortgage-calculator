import "./Form.scss";

export default function Form() {
  return (
    <form
      className="form"
      // onSubmit={handleFormSubmit}
    >
      <label className="form__label">
        Mortgage Amount
        <input
          type="number"
          name="amount"
          id="amount"
          className="form__amount"
          // onChange={(event) => {
          //   setName(event.target.value);
          // }}
          // onBlur={() => {
          //   setIsTouched(true);
          // }}
          // value={amount}
        />{" "}
      </label>

      <label className="form__label">
        Mortgage Term
        <input
          type="number"
          name="year"
          id="year"
          className="form__year"

          // onChange={(event) => {
          //   setComment(event.target.value);
          // }}
          // onBlur={() => {
          //   setIsTouched(true);
          // }}
          // value="year"
        />{" "}
      </label>

      <label className="form__label">
        Interest Rate
        <textarea
          type="number"
          name="interest"
          id="interest"
          className="form__interest"
          step="0.01"
          // onChange={(event) => {
          //   setComment(event.target.value);
          // }}
          // onBlur={() => {
          //   setIsTouched(true);
          // }}
          // value="year"
        ></textarea>{" "}
      </label>

      <label className="form__label">Mortgage Type</label>
      <div>
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
