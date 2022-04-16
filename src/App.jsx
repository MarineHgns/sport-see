import { Routes, Route } from "react-router-dom"
import Home from './pages/home'
import Header from "./components/header";
import Error from "./pages/error";
import Navbar from "./components/navbar"
import "../src/css/app.css"

function App() {
  return (
      <div className="App">
       <Header />
        <Navbar />
        
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/*" element={<Error />}/>
          </Routes>

      </div>
  );
}



export default App