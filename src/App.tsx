import * as React from "react";
import UserDetailsForm from "./components/UserDetailsForm";

const App: React.FC = () => {
  return (
    <>
      <div>
        <h1>Form Component Playground</h1>

        <div>
          <UserDetailsForm />
        </div>
      </div>
    </>
  );
};

export default App;
