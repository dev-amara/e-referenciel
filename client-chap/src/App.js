import { Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import Dashboard from "./dashboard/Dashboard";

function App() {
  return (
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<SignIn />} />
      </Routes>
  );
}

export default App;
