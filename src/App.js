// import { Routes, Route } from 'react-router-dom';
import './App.css';
// import About from './Components/About';
import Navabar from './Components/Navabar';
import Textform from './Components/Textform';

function App() {
  return (
    <>
      <Navabar title="TextUtils" aboutText="About TextUtils" />
      <div className="container my-3">
        {/* <Routes>
          <Route path="/" element = { <Textform heading="Enter the Text to Analyze" />} />
          <Route path="About" element={<About/>} />
        </Routes> */}
        <Textform heading="Enter the Text to Analyze" />
      </div>

    </>
  );
}

export default App;
