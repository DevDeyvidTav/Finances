import { Container } from "./style"
import { MainHeader } from "../MainHeader/Index"
import { Content } from "../Content/Index"
import { Aside } from "../Aside/Index"
import { List } from "../../pages/List/Index"
import { ContentHeader } from "../ContentHeader/Index"

export function Layout({children}:any) {
    return (
        <Container className="w-screen max-w-full">
            <MainHeader/>
            <Aside/>
            <Content>
                {children}
            </Content>
        </Container>
    )
}