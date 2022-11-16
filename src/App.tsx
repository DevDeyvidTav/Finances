import { Layout } from "./components/Layout/Index"
import GlobalStyles from "./styles/GlobalStyles"
import { ThemeProvider } from "styled-components"
import dark from "./styles/themes/dark"
import light from "./styles/themes/light"
import { AiFillHome, AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineLogout } from 'react-icons/ai'
import { Routes } from "./routes"
import { Login } from "./pages/Singin/Index"
import { useState, useEffect } from "react"
import { auth } from "./firebase/config"
import { onAuthStateChanged } from 'firebase/auth'
import { AuthProvider } from "./context/AuthContext"
import { MainMobile } from "./Main-mobile"
import { NavLink } from "react-router-dom"
import { Switch } from "@headlessui/react"
import logo from  './assets/logo.svg'
import { useAuthentication } from "./hooks/useAuthentication"

export function App() {
  const{ logout } = useAuthentication()
  function handleLogout(e:any) {
      e.preventDefault()
      logout()
      setAsideMobile(false)
  }
  const [enabled, setEnabled] = useState(false)
  const [asideMobile, setAsideMobile] = useState(false)
  const [user, setUser] = useState(undefined)
  const [themeMode, setThemeMode] = useState(false)
  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      setUser(user)
    })
  }, [auth])
  return (
    <AuthProvider value={{ user, themeMode, setThemeMode, setAsideMobile, asideMobile }}>
      <ThemeProvider theme={themeMode ? dark : light}>
        <GlobalStyles />
        <MainMobile className={`${asideMobile ? 'translate-x-0' : '-translate-x-full'} flex flex-col justify-between ease-in-out duration-300 w-[70%] h-[100%] shadow-2xl fixed`}>
          <div className="flex justify-between w-full"><h1 className="text-4xl flex items-center justify-center"> <img src={logo} alt="" /> Finances</h1> <button className="mr-2" onClick={() => setAsideMobile(false)}>x</button></div>
          <div className="flex flex-col ml-2 gap-3 text-xl ">
            <NavLink onClick={() => setAsideMobile(false)} className='flex items-center gap-2' to='/'><AiFillHome/>Dashboard</NavLink>
            <NavLink onClick={() => setAsideMobile(false)} className='flex items-center gap-2' to='/list/entry-balance'><AiOutlineArrowUp/>Entradas</NavLink>
            <NavLink onClick={() => setAsideMobile(false)} className='flex items-center gap-2' to='/list/exit-balance'><AiOutlineArrowDown/>Saídas</NavLink>
            <p onClick={(e)=> handleLogout(e)} className='flex cursor-pointer items-center gap-2' ><AiOutlineLogout/>Logout</p>
          </div>
          <Switch
          onClick={() => setThemeMode(!themeMode)}
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? 'bg-zinc-700' : 'bg-gray-200'
                    } ml-3 mb-44 relative inline-flex h-6 w-11 items-center rounded-full`}>
                <span className="sr-only">Enable notifications</span>
                <span
                    className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
            </Switch>
        </MainMobile>
        {!user ? <Login /> : <Routes />}
      </ThemeProvider>
    </AuthProvider>
  )
}
