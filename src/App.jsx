import "./styles/partials/_global.scss";
import Form from "./components/Form/Form";

function App() {
  return (
    <>
      <header>
        <h3 className="title"> Mortgage Calculator</h3>
        <h5 className="subtitle">Clear All</h5>
      </header>
      <Form />
    </>
  );
}

export default App;
