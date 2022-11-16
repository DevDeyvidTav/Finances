import { Container, Header, LogImg, MenuContainer, MenuItemLink, Title } from "./style"
import logo from '../../assets/logo.svg'
import { AiFillHome, AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineLogout } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { useAuthentication } from "../../hooks/useAuthentication"



export function Aside() {
    const{ logout } = useAuthentication()
    function handleLogout(e:any) {
        e.preventDefault()
        logout()
    }

    return (
        <Container className="hidden sm:block">
            <Header>
                <LogImg src={logo} alt="logo finances" />
                <Title>Finances</Title>
            </Header>
            <MenuContainer>
                <NavLink to="/">
                    <MenuItemLink>
                        <AiFillHome />
                        Dashboard
                    </MenuItemLink>
                </NavLink>
                <NavLink to='/list/entry-balance'>
                    <MenuItemLink>
                        <AiOutlineArrowUp />
                        Entradas
                    </MenuItemLink>
                </NavLink>
                <NavLink to="/list/exit-balance">
                    <MenuItemLink href="exit-balance">
                        <AiOutlineArrowDown />
                        Saídas
                    </MenuItemLink>
                </NavLink>
                <MenuItemLink onClick={(e) => handleLogout(e)} >
                    <AiOutlineLogout />
                    Encerrar sessão
                </MenuItemLink>
            </MenuContainer>
        </Container>
    )
}