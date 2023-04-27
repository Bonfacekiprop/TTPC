import {useField} from 'formik';
import {
    StyledTextInput, StyledLabel,StyledIcon
 
} from './../componenets/style';

export const TextInput = ({icon,  ...props}) => {
    const [field, meta] = useField(props);

    return(
        <div style={{position: "relative"}}>
            <StyledLabel htmlFor={props.name}>
                {props.label}

            </StyledLabel>
            <StyledTextInput
               {...field}
               {...props}
            />
            <StyledIcon>
                {icon}
            </StyledIcon>


        </div>
    )

} 