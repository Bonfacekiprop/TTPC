// styled components
import { StyledContainer }  from "./componenets/style";
import Home from "./pages/home";
import Login  from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import {
  BrowserRouter as Router,Routes , Route  
} from 'react-router-dom';
// react spinner
// import ClipLoader from "react-spinners";

const App = () => {
  return (
    
    <StyledContainer>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
      
    </StyledContainer>
    
  );
}

export default App;
