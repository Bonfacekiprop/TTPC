import { StyledTitle, StyledSubTitle, Avatar} from "../componenets/style";
//logo
import Logo from "./../assets/logo.png";

const Home = () => {
    return (
        <div>
            <div style={{
              position: "absolute",
              top: "95px",
              backgroundColor: "transparent",
              width: "100",
              padding: "40px",
              display: "flex",
              justifyContent: "flex-start"
              

            }}> 
              <Avatar image = {Logo}/>
            </div>
          <StyledTitle size={65}>
            Welcome to TTPC
          </StyledTitle>
          <StyledSubTitle size={27}>
            Feel free to explore our page 

          </StyledSubTitle>
          
        </div>
    );
}

export default Home; 