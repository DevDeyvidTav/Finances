import { Container } from "./style"
import { ContentHeader } from "../../components/ContentHeader/Index"
import { List } from "../List/Index"
import { useFetchDocuments } from "../../hooks/useFetchDocuments"
import { HistoryFinanceCard } from "../../components/HistoryFinanceCard/Index"
import { useAuthValue } from "../../context/AuthContext"

export function Exits() {

        const {user} = useAuthValue()
        const uid = user.uid
        const {documents, loading} = useFetchDocuments('exits', null, uid)
    
        return (
            <Container>
                <ContentHeader  title="Exits"/>
                {documents && documents.map((doc:any, i:number)=> {
                    return(
                        <HistoryFinanceCard 
                        title={doc.name}
                        tagColor="#F61F1F"
                        amount={doc.value} 
                        date={doc.date}
                        docCollection="exits" 
                        id={doc.id}
                        />
                    )
                })}
            </Container>
        )
}