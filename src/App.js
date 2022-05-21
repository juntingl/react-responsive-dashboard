import { Routes, Route } from "react-router-dom";
import Home from './Home'
import Page0001 from './0001'
import Page0002 from './0002'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/0001" element={<Page0001 />}/>
        <Route path="/0002" element={<Page0002 />}/>
      </Routes>
    </>
  );
}

export default App;
