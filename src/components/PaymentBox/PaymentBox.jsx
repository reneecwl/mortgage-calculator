import "./PaymentBox.scss";

export default function PaymentBox({ label, monthlyAmount, totalAmount }) {
  return (
    <div className="payment__box">
      <div className="payment__monthly">
        {label}
        <span className="payment__monthly-amount">£{parseFloat(monthlyAmount.toFixed(2)).toLocaleString()}</span>
      </div>
      <div className="payment__total">
        Total {label.includes("interest") ? "interest" : "you'll repay"} over the term
        <span className="payment__total-amount"> £{Number(totalAmount.toFixed(2)).toLocaleString()}</span>
      </div>
    </div>
  );
}
