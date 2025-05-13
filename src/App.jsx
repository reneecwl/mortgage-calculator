import "./styles/partials/_global.scss";
// import "./App.scss";
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
  const [isTouched, setIsTouched] = useState({
    amount: false,
    year: false,
    interest: false,
    mortageType: false,
  });

  const handleFormSubmit = function (event) {
    event.preventDefault();
    setMonthlyPayment("");
    setInterestPayment("");
    const P = parseFloat(amount.replace(/,/g, ""), 10);
    const annualRate = parseFloat(interest);
    const r = annualRate / 100 / 12;
    const n = parseFloat(year) * 12;

    const monthlyPayment = (P * r * (1 + r) ** n) / ((1 + r) ** n - 1);
    const totalInterest = monthlyPayment * n - P;
    const monthlyInterest = totalInterest / n;

    if (selectedOption === "Repayments") {
      setMonthlyPayment(monthlyPayment);
    } else {
      console.log("Interest Only" + monthlyInterest);
      setInterestPayment(parseFloat(monthlyInterest.toFixed(2)));
    }
  };

  const handleClear = function () {
    setAmount("");
    setYear("");
    setInterest("");
    setSelectedOption("");
    setMonthlyPayment("");
    setInterestPayment("");
    setIsTouched({ amount: false, year: false, interest: false });
  };

  return (
    <main className="main">
      <div className="main__container">
        {/* <div className="content__container"> */}

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
          isTouched={isTouched}
          setIsTouched={setIsTouched}
          handleClear={handleClear}
        />

        <Result monthlyPayment={monthlyPayment} year={year} interestPayment={interestPayment} />
        {/* </div>{" "} */}
      </div>
    </main>
  );
}

export default App;
