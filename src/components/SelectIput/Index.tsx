import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import { Container } from "./style";


interface ISelectInputProps {
    options: {
        value: string | number;
        label: string | number;
    }
}[];

export function SelectInput<ISelectInputProps>({options}: any){
    return(
        <Container>
            <select>
               { options.map((option: { value: string | number | readonly string[] | undefined; label: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => (
                <option value={option.value}>{option.label}</option>
               ))
                
                
                }
            </select>
        </Container>
    )
}