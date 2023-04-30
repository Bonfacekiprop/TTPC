import {CopyrightText, StyledTextInput, StyledFormArea, StyledFormButton, StyledLabel,Avatar, StyledTitle, colors, ButtonGroup, ExtraText, TextLink} from './../componenets/style';
import Logo from './../assets/logo.png';

import {Formik, Form} from 'formik';
import { TextInput } from '../componenets/FormLib';
 import {FiMail, FiLock} from 'react-icons/fi';
 import * as Yup from 'yup';
const Login = () => {
    return(
        <div>
            <StyledFormArea>
               <Avatar image={Logo}/>
               <StyledTitle  color={colors.theme} size ={30}>

                Member Login
               </StyledTitle>
               <Formik 
               
               initialValues = {{
                email: "",
                password: "",
            }}

            validationSchema ={
                Yup.object({
                    email: Yup.string().email("Invalid email address")
                    .required("Required"),
                    password: Yup.string().min(8, "password is too short").max(30, "password is too long ").required(),
                })
            }
            onSubmit={(values, {setSubmitting}) =>{
                console.log(values)
            }}
               
               >  


                    
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
               <ExtraText>
                    New here? <TextLink to="/signup"> Signup</TextLink>
               </ExtraText>


            </StyledFormArea>
            <CopyrightText>
                All rights reserved &copy;2023 
            </CopyrightText>
        </div>
    )
}

export default Login;