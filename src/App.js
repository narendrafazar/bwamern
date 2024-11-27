import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import { BrowserRouter as Router, Route } from "react-router-dom"; //shortcut buat import react router dom => imrr

function App() {
  return (
    <div className="App">
      <div>
        <p>HAHAHAHAHAHAHA</p>
      </div>
      <Router>
        <Route path="/" Component={LandingPage}></Route>
      </Router>
    </div>
  );
}

export default App;
