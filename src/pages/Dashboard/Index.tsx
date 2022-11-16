import { ContentHeader } from "../../components/ContentHeader/Index";
import { Container } from "./styled";
import React, { PureComponent, useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";



export function Dashboard() {
    const {asideMobile} = useAuthValue()
    const { user } = useAuthValue()
    const uid = user.uid
    const { documents: entries } = useFetchDocuments('entrys', null, uid)
    const { documents: exits } = useFetchDocuments('exits', null, uid)
    const entriesValueInArray = entries?.map((entry: any) => entry.value)
    const exitsValueInArray = exits?.map((exit: any) => exit.value)
    var somaEntries = 0;
    for (var i = 0; i < entriesValueInArray?.length; i++) {
        somaEntries += entriesValueInArray[i];
    }


    var somaExits = 0;
    for (var i = 0; i < exitsValueInArray?.length; i++) {
        somaExits += exitsValueInArray[i];
    }
    const profit = somaEntries - somaExits
    const totalSum = somaExits + somaEntries
    const percentGains = (somaEntries / totalSum) * 100;
    const percentLoss = (somaExits / totalSum) * 100;
    const data = [
        {
            name: 'Entradas',
            value: somaEntries,
            percent: Number(percentGains.toFixed(1)),
            color: '#05DA73'
        },
        {
            name: 'Saídas',
            value: somaExits,
            percent: Number(percentLoss.toFixed(1)),
            color: '#F87171'
        }
    ]


    return (


        <Container>
            <ContentHeader title="Dashboard" />
            <div className="flex flex-wrap gap-2 justify-center md:mt-10">
                <div className={`${profit >= 0 ? 'bg-green-400' : 'bg-red-400'} gap-3 flex-col w-56 h-44 text-white rounded-md flex justify-center items-center`}>
                    <p>Lucro: R${profit}</p>
                    <p className="text-center">{profit >= 0 ? 'Parabéns!!, você não tem dívidas' : 'Cuidado!!, você tem dívidas'}</p>

                </div>
                <div className="w-56 h-44 bg-green-400 text-white rounded-md flex justify-center items-center ">
                    Entradas: R${somaEntries}
                </div>
                <div className="w-56 h-44 bg-red-400 text-white rounded-md flex justify-center items-center ">
                    Saídas: R${somaExits}
                </div>
                <div className={`${asideMobile ? 'hidden' : ''} w-56 h-44 justify-center`}> 
            <ResponsiveContainer >
                <PieChart>
                    <Pie data={data} dataKey="percent">
                        {
                            data.map((indicator: any) => (
                                <Cell key={indicator.name} fill={indicator.color} />
                            ))
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className="flex ml-6 gap-3">
                <p className="flex items-center gap-1"> <div className="w-3 h-3 bg-green-400"></div> Entradas: {percentGains.toFixed(1)}%</p>
                <p className="flex items-center gap-1"> <div className="w-3 h-3 bg-red-400"></div> Saídas: {percentLoss.toFixed(1)}%</p>
            </div>
            </div>
            </div>


        </Container>
    )
}