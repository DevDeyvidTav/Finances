import { Children } from "react"
import { Container } from "./style"
import { List } from "../../pages/List/Index"

export function Content({children}:any) {
    
    return (
        <Container>
            {children}
        </Container>
    )
}