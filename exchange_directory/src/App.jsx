import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import ExchangeDetails from './components/exchangeDetails/ExchangeDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="h-[100vh] p-5 overflow-y-auto xl:flex xl:items-center xl:justify-center">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/exchanges/:id" element={<ExchangeDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
