import styled from 'styled-components';

//background
/* you have not finished setting the background and downloading of styles 
 use yarn add style components*/
import background from './../assets/jj.jpeg'

export const colors ={
    primary: "#fff",
    theme: "#BE185D",
    light1: "#3F4F6",
    light2: "#ESE7EB",
    dark1: "#1F2937",
    dark2: "#4B5563",
    dark3: "#DC2626",
    red: "#DC2626"

}
export const StyledContainer = styled.div`
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;    
    align-items: center;
    background: linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background});
    background-size: cover;
    background-attachment: fixed;
`;
//Home
export const StyledTitle =  styled.h2`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color: colors.primary }
    padding: 5px;
    margin-bottom: 25px;`;
export const StyledSubTitle = styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color: colors.primary }
    padding: 5px;
    margin-bottom: 25px;

`;