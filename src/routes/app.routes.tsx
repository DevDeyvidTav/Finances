import { Dashboard } from "../pages/Dashboard/Index";
import { Routes, Route } from "react-router-dom"
import { Layout } from "../components/Layout/Index";
import { Exits } from '../pages/Exits/Index'
import { Entrys } from '../pages/Entrys/Index'



interface IPropsRoutes {   
    routeTitleEntry: string;
    routeTitleExit: string;
}

export function AppRoutes({routeTitleEntry}:any, {routeTitleExit}:any) {
    routeTitleEntry = 'Entradas'
    routeTitleExit = "Saídas"
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/list/entry-balance" element={<Entrys />} />
                <Route path="/list/exit-balance" element={<Exits />} />
            </Routes>
        </Layout>
    )
}