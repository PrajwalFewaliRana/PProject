import Boxing from "./components/Boxing";
import Login from "./components/Login";
import Marathon from "./components/Marathon";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Stretching from "./components/Stretching";
import HomePage from "./components/HomePage";
import Dashboard from "./components/Dashboard";
import Notification from "./components/Notification";
import Sell from "./components/Sell";


function App() {

  return (
    <Router>
      <Navbar />
      <Notification />
      <Routes>
        <Route path="/buy and sell" element={<Sell />} />
        <Route path="/" element={<HomePage />}/>
        <Route path="/dashboard" element= {<Dashboard />} />
        <Route path="/marathon" element={<Marathon />} />
        <Route path="/boxing" element={<Boxing />} />
        <Route path="/stretching" element={<Stretching />} />
      </Routes>
      <Login />
    </Router>
  )
}

export default App
