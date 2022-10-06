import Toggle from "components/Toggle/Toggle";
import { Accordion } from "components/Accordion/Accordion";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Toggle.Accordion>
          <Accordion options={["option 1", "option 2"]} title={"Accordion 1"} />
        </Toggle.Accordion>
      </div>
    </div>
  );
}

export default App;
