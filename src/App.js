import "bootstrap/dist/css/bootstrap.min.css";
import SockList from "./SockList";  
import "./App.css";
import NavigationBar from "./NavBar";

/*App function depicting the movielist to the screen utilizing BS
for responsiveness, along with some imports from BS.*/
function App() {
  return (
    <div className="App">
    
    <NavigationBar />



  


  <SockList />
  </div>);
}

export default App;
