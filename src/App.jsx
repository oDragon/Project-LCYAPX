import Home from "./components/Home";
import Create from "./components/Create";
import Update from "./components/Update";
import { Routes, Route, HashRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App;