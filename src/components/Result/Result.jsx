import "./Result.scss";
import illustration from "../../assets/images/illustration-empty.svg";
import PaymentBox from "../PaymentBox/PaymentBox";

export default function Results({ monthlyPayment, year, interestPayment }) {
  const hasResults = monthlyPayment || interestPayment;

  return (
    <div className="results">
      {hasResults ? (
        <div className="payment">
          <h3 className="payment__header">Your results</h3>
          <p className="payment__content">
            Your results are shown below based on the information you provided. To adjust the results, edit the form and
            click “calculate repayments” again.
          </p>

          {monthlyPayment ? (
            <PaymentBox
              label="Your Monthly repayments"
              monthlyAmount={monthlyPayment}
              totalAmount={monthlyPayment * year * 12}
            />
          ) : (
            <PaymentBox
              label="Your Monthly interest"
              monthlyAmount={interestPayment}
              totalAmount={interestPayment * year * 12}
            />
          )}
        </div>
      ) : (
        <div className="results__no-result">
          <img className="results__image" src={illustration} alt="illustration" />
          <h3 className="results__header">Results shown here</h3>
          <p className="results__content">
            Complete the form and click “calculate repayments” to see what your monthly repayments would be.{" "}
          </p>
        </div>
      )}
    </div>
  );
}
