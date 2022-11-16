import { Container } from "./style"
import { ContentHeader } from "../../components/ContentHeader/Index"
import { useFetchDocuments } from "../../hooks/useFetchDocuments"
import { useAuthValue } from "../../context/AuthContext"
import { HistoryFinanceCard } from "../../components/HistoryFinanceCard/Index"


export function Entrys() {
    const {user} = useAuthValue()
    const uid = user.uid
    const {documents, loading} = useFetchDocuments('entrys', null, uid)

    return (
        <Container>
            <ContentHeader  title="Entradas"/>
            {documents && documents.map((doc:any, i:number)=> {
                return(
                    <HistoryFinanceCard title={doc.name}
                     tagColor="#05DA73" 
                     amount={doc.value} 
                     date={doc.date}
                     docCollection="entrys"
                     id={doc.id} />
                )
            })}
        </Container>
    )
}