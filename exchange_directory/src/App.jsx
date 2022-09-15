import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ExchangeDetails from './ExchangeDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="h-[100vh] p-5 overflow-y-auto xl:flex xl:items-center xl:justify-center">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/exchanges/:id" element={<ExchangeDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
