import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllCaseListPage from './pages/casePages/AllCaseListPage';


function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<AllCaseListPage />} />
    </Routes>
    </Router>
  );
}

export default App;
