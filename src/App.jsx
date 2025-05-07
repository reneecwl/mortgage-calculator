import "./styles/partials/_global.scss";
import "./app.scss";
import Form from "./components/Form/Form";
// import Result from "./components/Result/Result";

function App() {
  return (
    <>
      <header>
        <h3 className="title"> Mortgage Calculator</h3>
        <h5 className="subtitle">Clear All</h5>
      </header>
      <Form />
      {/* <Result /> */}
    </>
  );
}

export default App;
