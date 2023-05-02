import { StyledTitle, StyledSubTitle, Avatar, StyledButton,ButtonGroup,StyledFormArea, colors} from "../componenets/style";
//logo
import Logo from "./../assets/logo.png";

const Dashboard = () => {
    return (
        <div>
            <div style={{
              position: "relative",
              top: 0,
              right: "60 px",
              backgroundColor: "transparent",
              width: "100",
              padding: "40px",
              display: "flex",
              justifyContent: "flex-start"
              

            }}> 
              <Avatar image = {Logo}/>
            </div>
            <StyledFormArea bg={colors.dark2}>
            <StyledTitle size={65}>
            Welcome, User
          </StyledTitle>
          <StyledSubTitle size={27}>
            Feel free to explore our page 

          </StyledSubTitle>
          <ButtonGroup>
          <StyledButton to="#">Logout</StyledButton>
          
          </ButtonGroup>
                
            </StyledFormArea>
          
        </div>
    );
}

export default Dashboard; 