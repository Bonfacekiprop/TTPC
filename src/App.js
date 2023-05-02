// styled components
import { StyledContainer }  from "./componenets/style";
import Home from "./pages/home";
import Login  from "./pages/login";
import Signup from "./pages/signup";
import {
  BrowserRouter as Router,Switch , Route  
} from 'react-router-dom';
// react spinner
// import ClipLoader from "react-spinners";

function App() {
  return (
    <Router>
    <StyledContainer>
       <Signup/> 
    </StyledContainer>
    </Router>
  );
}

export default App;
