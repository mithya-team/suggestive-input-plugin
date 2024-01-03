import * as React from "react";
import InputPlayground from "./components/InputPlayground";
import ReactFormExample from "./components/ReactFormExample";

const App: React.FC = () => {
  return (
    <>
      <div>
        <h1>Input Component Playground</h1>

        <div>
          <h2>Standalone Component</h2>
          <InputPlayground />
        </div>

        <div>
          <h2>With React Hook Form</h2>
          <ReactFormExample />
        </div>
      </div>
    </>
  );
};

export default App;
