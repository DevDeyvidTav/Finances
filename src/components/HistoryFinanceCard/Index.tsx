import { useDeleteDoc } from "../../hooks/useDeleteDoc";
import { Container } from "./style"
import {db} from '../../firebase/config'
import {doc, deleteDoc} from "firebase/firestore"

interface IHistoryFinanceCardProps {
    
    cardColor: string;
    tagColor: string;
    title: string;
    subTitle: string;
    amount: string;

}

export function HistoryFinanceCard<IHistoryFinanceCardProps>({
    cardColor, tagColor, title, amount, date, id, docCollection
}:any) {
    async function handleDeleteDoc<promise>(e:any){
        e.preventDefault();
    
        await deleteDoc(doc(db, docCollection, id ));
       }
    return (
        <Container>
        
        <div>
            <span>{title}</span>
            <small>{date}</small>
        </div>        
        <h3>R${amount}</h3>
        <h2 onClick={(e) => handleDeleteDoc(e)}>x</h2>
    </Container>
);
}