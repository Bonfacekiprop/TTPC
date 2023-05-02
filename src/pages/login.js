import {CopyrightText, StyledTextInput, StyledFormArea, StyledFormButton, StyledLabel,Avatar, StyledTitle, colors, ButtonGroup, ExtraText, TextLink} from './../componenets/style';
import Logo from './../assets/logo.png';
// forms
import {Formik, Form} from 'formik';
import { TextInput } from '../componenets/FormLib';
// icons for password
 import {FiMail, FiLock} from 'react-icons/fi';
 import * as Yup from 'yup';
 //loaders
 import {Bars} from 'react-loader-spinner';
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


                    
                     {({isSubmitting}) =>(
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
                                {!isSubmitting && (
                                <StyledFormButton 
                                type="submit"> Login 

                                </StyledFormButton>)}
                                {isSubmitting && (
                                    <Bars
                                       type="ThreeDots"
                                       color={colors.theme}
                                       height={45}
                                       width={100}
                                    />
                                )}
                                
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