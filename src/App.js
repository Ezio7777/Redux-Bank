import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
