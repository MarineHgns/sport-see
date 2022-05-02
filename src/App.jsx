import { Routes, Route } from "react-router-dom"
import Home from './pages/home'
import Header from "./components/header";
import Error from "./pages/error";
import Navbar from "./components/navbar"
import "../src/css/app.css"
import Dashboard from "./pages/dashboard"


/**
 * The App function returns a div with a Header (horizontal navbar), Navbar (vertical navbar), and Routes (users, error)
 * @returns The return statement is returning the JSX code.
 */

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