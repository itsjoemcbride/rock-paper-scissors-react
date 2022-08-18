import Choice from "components/Choice/Choice";
import "./App.css";

const choices = ["Rock", "Paper", "Scissors"];

function App() {
  /**
   * TODO: Map over choices and create Button component for each choice
   * TODO: Map over choices and create a Display component for each one
   * Hint: You can use the `key` prop to help with this.
   *
   * Stretch goal: Use only one map to take care of both things above.
   */
  return (
    <div className="text-center">
      <h1>Lets Go!</h1>
      <div className="">
        <Choice choices={choices} />
      </div>
    </div>
  );
}

export default App;
