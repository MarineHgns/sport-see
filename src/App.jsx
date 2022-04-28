import { Routes, Route } from "react-router-dom"
import Home from './pages/home'
import Header from "./components/header";
import Error from "./pages/error";
import Navbar from "./components/navbar"
import "../src/css/app.css"
import Dashboard from "./pages/dashboard"


function App() {

  return (
      <div className="App">
       <Header />
        <Navbar />
        
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/user/:id" element={<Dashboard />} />
            <Route path="/*" element={<Error />}/>
            <Route path="/user/*" element={<Error />}/>
          </Routes>

      </div>
  );
}



export default App