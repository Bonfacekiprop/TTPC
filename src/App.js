// styled components
import { StyledContainer }  from "./componenets/style";
import Home from "./pages/home";
import Login  from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import {
  BrowserRouter as Router,Switch , Route  
} from 'react-router-dom';
// react spinner
// import ClipLoader from "react-spinners";

function App() {
  return (
    <Router>
    <StyledContainer>
      <Switch>
        <Route path="/signup">
          <Signup/>

        </Route>
        <Route path="/login">
          <Login/>

        </Route>
        <Route path="/dashboard">
          <Dashboard/>

        </Route>
        <Route path="/">
          <Home/>

        </Route>
      </Switch>
      
    </StyledContainer>
    </Router>
  );
}

export default App;
