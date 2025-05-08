import "./styles/partials/_global.scss";
import "./app.scss";
import { useState } from "react";
import Form from "./components/Form/Form";
import Result from "./components/Result/Result";

function App() {
  const [amount, setAmount] = useState("");
  const [year, setYear] = useState("");
  const [interest, setInterest] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [interestPayment, setInterestPayment] = useState("");

  const handleFormSubmit = function (event) {
    event.preventDefault();

    const P = parseFloat(amount);
    const annualRate = parseFloat(interest);
    const r = annualRate / 100 / 12;
    const n = parseFloat(year) * 12;

    const monthlyPayment = (P * r * (1 + r) ** n) / ((1 + r) ** n - 1);
    const totalInterest = monthlyPayment * n - P;
    const monthlyInterest = totalInterest / n;

    if (selectedOption === "Repayments") {
      console.log("Repayment" + monthlyPayment);
      setMonthlyPayment(monthlyPayment);
    } else {
      console.log("Interest Only" + monthlyInterest);
      setInterestPayment(monthlyInterest);
    }
  };

  const handleClear = function () {
    setAmount("");
    setYear("");
    setInterest("");
    setSelectedOption("");
  };

  return (
    <>
      <main className="main">
        <div className="form__container">
          <div>
            <h3 className="title"> Mortgage Calculator</h3>
            <button type="button" className="clear" onClick={handleClear}>
              Clear All
            </button>
          </div>
          <Form
            amount={amount}
            setAmount={setAmount}
            year={year}
            setYear={setYear}
            interest={interest}
            setInterest={setInterest}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            monthlyPayment={monthlyPayment}
            setMonthlyPayment={setMonthlyPayment}
            handleFormSubmit={handleFormSubmit}
          />
        </div>
        <Result monthlyPayment={monthlyPayment} year={year} interestPayment={interestPayment} />
      </main>
    </>
  );
}

export default App;
