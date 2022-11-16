import React, { useState } from 'react';
import { useAuthValue } from '../../context/AuthContext';
import { useInsertDocument } from '../../hooks/useInsertDocuments';

import { 
    Container,
    Title,
    Controllers ,
    Modal
}  from './style';




export function ContentHeader ({title}:any){ 
    const [add, setAdd] = useState(false)
    const {user} = useAuthValue();
    const uid = user.uid;
    const [name, setName] = useState('')
    const [valueR$, setValueR$] = useState< string | any>('')
    const [date, setDate] = useState('')
    const [errorForm, setErrorForm] = useState('')
    const docCollection = title === 'Entradas' ? 'entrys' : 'exits';
    const { insertDocument, response } = useInsertDocument(docCollection)
    


    function handleSubmit(e:any){
        e.preventDefault()
        const post = {
            name: name,
            value: parseInt(valueR$),
            date: date,
            uid
        }
        if(name === ''){
            setErrorForm('o evento precisa de um nome')
        
        }
        else if(valueR$ === ''){
            setErrorForm('digite o valor do evento')
        }
        else if(date === ''){
            setErrorForm('digite a data do evento')
        }
        else {
            insertDocument(post)
            setName('')
            setValueR$('')
            setErrorForm('')
            setAdd(false)
        }
        

    }
    
    return(
        <Container>
            <Title>
                <h1>{title}</h1>                
            </Title>
            <Controllers>
                <form className={`${title === 'Entradas'? 'hidden lg:flex' : 'hidden'}  gap-2`}>
                    <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder={'Nome da entrada'} className='text-black rounded-md border border-solid' />
                    <input value={valueR$} onChange={(e)=>setValueR$(e.target.value)} type="number" placeholder='Valor da entrada' className='text-black rounded-md border border-solid' />
                    <input value={date} onChange={(e) => setDate(e.target.value)} type="text" placeholder='Dia da entrada DD/MM/AAAA' className='text-black rounded-md border border-solid' />
                    <button onClick={(e) => handleSubmit(e)} className='bg-green-400 p-1 rounded-md hover:duration-300 hover:bg-green-300'>Adicionar</button>
                </form>
                <form className={`${title === 'Exits'? 'hidden lg:flex' : 'hidden'} flex gap-2`}>
                    <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder={'Nome da saída'} className='text-black rounded-md  border border-solid' />
                    <input value={valueR$} onChange={(e)=>setValueR$(e.target.value)} type="number" placeholder='Valor da saída' className='text-black  rounded-md border border-solid' />
                    <input value={date} onChange={(e) => setDate(e.target.value)} type="text" placeholder='Dia da saída DD/MM/AAAA' className='text-black  rounded-md border border-solid' />
                    <button onClick={(e) => handleSubmit(e)} className='bg-red-400 p-1 rounded-md hover:duration-300 hover:bg-red-300'>Adicionar</button>
                </form>
                <button onClick={() => setAdd(true)} className={`${title === 'Entradas' ? 'bg-green-400 hover:bg-green-300  hover:duration-300' : 'hidden'} lg:hidden p-1 rounded-md`}>Adicionar um novo evento</button>
                <button onClick={() => setAdd(true)} className={`${title === 'Exits' ? 'bg-red-400 hover:bg-red-300  hover:duration-300' : 'hidden'} lg:hidden p-1 rounded-md`}>Adicionar um novo evento</button>
            </Controllers>
            <Modal className={`${add ? 'translate-y-0' : '-translate-y-[80rem]'} rounded-md p-1 duration-300 ease-in fixed w-5/6 sm:w-3/6 sm:ml-3 shadow-2xl  items-center flex flex-col h-[70%] bg-zinc-700`}>
                <p className='flex w-full justify-end' onClick={() => setAdd(false)}>x</p>
                <h1 className='text-center text-2xl mb-10'>Adicione um novo Evento finaceiro</h1>
                <form className={`${title === 'Entradas'? 'flex' : 'hidden'} w-4/5 flex-col ml-7 gap-2`}>
                    <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder={'Nome da entrada'} className='text-black h-12 rounded-md border border-solid' />
                    <input value={valueR$} onChange={(e)=>setValueR$(e.target.value)} type="number" placeholder='Valor da entrada' className='text-black h-12 rounded-md border border-solid' />
                    <input value={date} onChange={(e) => setDate(e.target.value)} type="text" placeholder='Dia da entrada DD/MM/AAAA' className='text-black h-12 rounded-md border border-solid' />
                    <button onClick={(e) => handleSubmit(e)} className='bg-green-400 p-1 rounded-md hover:duration-300 hover:bg-green-300'>Adicionar</button>
                </form>
                <form className={`${title === 'Exits'? 'flex' : 'hidden'} ml-7 w-4/5 flex-col gap-2`}>
                    <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder={'Nome da saída'} className='text-black h-12 rounded-md border border-solid' />
                    <input value={valueR$} onChange={(e)=>setValueR$(e.target.value)} type="number" placeholder='Valor da saída' className='text-black h-12 rounded-md border border-solid' />
                    <input value={date} onChange={(e) => setDate(e.target.value)} type="text" placeholder='Dia da saída DD/MM/AAAA' className='text-black h-12 rounded-md border border-solid' />
                    <button onClick={(e) => handleSubmit(e)} className='bg-red-400 p-1 rounded-md hover:duration-300 hover:bg-red-300'>Adicionar</button>
                </form>
                {errorForm && <p className='text-red-400 text-center'> {errorForm}</p>}
                
            </Modal>

        </Container>
    )
}

