import {StyledTextInput, StyledFormArea, StyledFormButton, StyledLabel,Avatar, StyledTitle, colors, ButtonGroup} from './../componenets/style';
import Logo from './../assets/logo.png';

import {Formik, Form} from 'formik';
import { TextInput } from '../componenets/FormLib';
 import {FiMail, FiLock} from 'react-icons/fi';
const Login = () => {
    return(
        <div>
            <StyledFormArea>
               <Avatar image={Logo}/>
               <StyledTitle  color={colors.theme} size ={30}>

                Member Login
               </StyledTitle>
               <Formik>
                     {() =>(
                        <Form>
                            <TextInput
                                 name="email"
                                 type="text"
                                 label="Email Address"
                                 placeholder="bonnix@example.com"
                                 icon={<FiMail/>}
                            
                            />
                            <TextInput 
                                 name="password"
                                 type="password"
                                 label="password"
                                 placeholder="**********"
                                 icon={<FiLock/>}
                                 
                            />
                            <ButtonGroup>
                                <StyledFormButton 
                                type="submit"> Login 

                                </StyledFormButton>
                            </ButtonGroup>

                        </Form>
                     )

                     }
               </Formik>


            </StyledFormArea>
        </div>
    )
}

export default Login;