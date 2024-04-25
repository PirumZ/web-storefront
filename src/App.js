import "bootstrap/dist/css/bootstrap.min.css";
import SockList from "./SockList";  
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./NavBar";

/*App function depicting the movielist to the screen utilizing BS
for responsiveness, along with some imports from BS.*/
function App() {
  return (
    <div>
    <Router>
  <Routes>
    <Route path="/" />
    <Route path="/cart" />
    
  </Routes>


  </Router>


<NavigationBar />
  <SockList />
  </div>);
}

export default App;
