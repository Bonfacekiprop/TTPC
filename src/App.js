// styled components
import { StyledContainer }  from "./componenets/style";
import Home from "./pages/home";
import Login  from "./pages/login";
import {
  BrowserRouter as Router,Switch , Route
    
  
} from 'react-router-dom';
function App() {
  return (
    <Router>
    <StyledContainer>
       <Home/> 
    </StyledContainer>
    </Router>
  );
}

export default App;
