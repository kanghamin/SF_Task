import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ExchangeDetails from "./ExchangeDetails";
import './App.css';

function App() {
 
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route
          path="/exchanges/:id"
          element={ <ExchangeDetails /> }
        />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
