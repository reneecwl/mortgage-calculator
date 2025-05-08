import "./Result.scss";
import illustration from "../../assets/images/illustration-empty.svg";

export default function Results({ monthlyPayment, year, interestPayment }) {
  return (
    <div className="results">
      {monthlyPayment || interestPayment ? (
        <div className="payment">
          <div className="payment__monthly">
            Your Monthly repayments
            <span className="payment__monthly-amount">£{monthlyPayment}</span>
          </div>
          <div className="payment__total">
            Total you'll repay over the term
            <span className="payment__total-amount">£{{ monthlyPayment } * { year } * 12}</span>
          </div>
        </div>
      ) : (
        <div className="results__no-result">
          <img src={illustration} alt="illustration" />
          <h3 className="results__header">Results shown here</h3>
          <p className="restuls__content">
            Complete the form and click “calculate repayments” to see what your monthly repayments would be.{" "}
          </p>
        </div>
      )}
    </div>
  );
}
