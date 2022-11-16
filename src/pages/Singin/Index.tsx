
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/config'



export function Login() {
    const [popoverRegister, setPopoverRegister] = useState<boolean>(false)
    const { login, error, loading, createUser} = useAuthentication()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [passwordReg1, setPasswordReg1] = useState<string>('')
    const [passwordReg2, setPasswordReg2] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [emailReg, setEmailReg] = useState<string>('')
    const [regError, setRegError] = useState<null | string>(null)
    
  
    async function handleRegister(e:any): Promise<void>{
        e.preventDefault();

        const user = {
            name,
            emailReg,
            passwordReg1
        }
        const res = await createUser(user)
        
        console.log(res)

        if (passwordReg1 !== passwordReg2){
            setRegError('As senhas estão diferentes')
            return
        }
        else{
            setRegError('')
        }

        console.log(user)
        setEmailReg('')
        setName('')
        setPasswordReg1('')
        setPasswordReg2('')
    }

useEffect(() => setRegError(error), [error])
   
    async function handleSubmit(e: any): Promise<void> {
        e.preventDefault(e);

        const user = {
            email,
            password
        }
        const res = await login(user)

        console.log(res)
        console.log(user)
        setEmail('')
        setPassword('')
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center max-w-full max-h-full bg-[#252A48]'>
            <div className='md:w-2/4 w-5/6 h-3/4 border border-solid flex flex-col justify-center items-center rounded-md border-yellow-400 '>
                <div className={`${popoverRegister ? '-translate-y-0' : 'translate-y-[200rem]'} flex flex-col items-center duration-300 bg-[#1B1F38] fixed w-5/6 md:w-2/4 shadow-2xl shadow-black rounded-md h-3/4`} >
                    <div className=' flex justify-end pr-2 pt-2 w-full text-yellow-400 h-10' >
                        <svg onClick={() => setPopoverRegister(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 cursor-pointer h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div> 
                    <h2 className='text-4xl text-white font-black'>Registre-se</h2>
                    <form className=' w-5/6 flex flex-col text-white gap-3 items-center justify-center h-3/4'>
                        <input value={name} onChange={(e) => setName(e.target.value)} className='md:w-2/4 pl-3 rounded-md h-12 border border-solid bg-[#252A48] border-yellow-400'  placeholder='Seu Nome' type="text" />
                        <input value={emailReg} onChange={(e) => setEmailReg(e.target.value)} className='md:w-2/4 pl-3 rounded-md h-12 border border-solid bg-[#252A48] border-yellow-400'  placeholder='Seu Email' type="email" />
                        <input value={passwordReg1} onChange={(e) => setPasswordReg1(e.target.value)} className='md:w-2/4 pl-3 rounded-md h-12 border border-solid bg-[#252A48] border-yellow-400' placeholder='Sua senha' type="password" />
                        <input value={passwordReg2} onChange={(e) => setPasswordReg2(e.target.value)} className='md:w-2/4 pl-3 rounded-md h-12 border border-solid bg-[#252A48] border-yellow-400' placeholder='Confirme sua senha' type="password" />
                        <button onClick={(e) => handleRegister(e)}  className='bg-yellow-400 mt-10 p-1 px-20 text-xl text-white rounded-md hover:bg-yellow-300 hover:duration-300'>{loading? 'carregando...' : 'Registrar'}</button>
                        {regError && <p>{regError}</p>}
                    </form>
                </div>
                <form className=' flex flex-col items-center gap-3 h-3/4  md:w-3/4'>
                    <h2 className='text-4xl mb-10 font-black text-white text-center '>Entre com Email e senha</h2>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type="text" className='border border-yellow-400 bg-[#252A48] text-white pl-5 md:w-3/5 rounded-md h-12 border-solid' />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Senha' type="password" className='border border-yellow-400 bg-[#252A48] text-white pl-5 md:w-3/5 rounded-md h-12 border-solid' />
                    <button onClick={(e) => handleSubmit(e)} className='bg-yellow-400 p-1 px-20 text-xl text-white rounded-md hover:bg-yellow-300 hover:duration-300'>Entrar</button>
                    {error && <p className='text-red-400'>{error}</p>}
                    <p className='text-white mt-10'>não possui conta?</p>
                    <p onClick={() => setPopoverRegister(true)} className='cursor-pointer text-yellow-400'>Cadastre-se</p>
                </form>
            </div>
        </div>
    )
}