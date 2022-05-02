import { Routes, Route } from "react-router-dom"
import Home from './pages/home'
import Header from "./components/header";
import Error from "./pages/error";
import Navbar from "./components/navbar"
import "../src/css/app.css"
import Dashboard from "./pages/dashboard"


/**
 * The App function returns a div with the Header component (horizontal navbar), Navbar component (vertical navbar), 
 *  and Routes (users profile, error page)
 * @returns the router component.
 * @returns {reactElement}
 */

function App() {

  return (
      <div className="App">
       <Header />
        <Navbar />
        
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/sport-see" element={<Home />}/>
            <Route path="/user/:id" element={<Dashboard />} />
            <Route path="/*" element={<Error />}/>
            <Route path="/user/*" element={<Error />}/>
          </Routes>

      </div>
  );
}



export default App