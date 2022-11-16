import { Container, Profile, Welcome, UserName } from "./style"
import emojis from "../utils/emojis"
import { useMemo, useState } from "react"
import { Toggle } from "../Toggle/Index"
import { useAuthValue } from "../../context/AuthContext"


export function MainHeader() {
    const { user, setAsideMobile, asideMobile } = useAuthValue()
    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length)
        return emojis[indice]

    }, [])

    return (
        <Container>
            <svg onClick={() => setAsideMobile(!asideMobile)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 sm:hidden">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            <Toggle  />
            <Profile>
                <Welcome>Olá,{emoji}</Welcome>
                <UserName>{user.displayName}</UserName>
            </Profile>
           
        </Container>
    )
}