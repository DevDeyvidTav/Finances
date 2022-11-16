import { HistoryFinanceCard } from '../../components/HistoryFinanceCard/Index'
import { Container, Filters } from './style'



export function List() {
    return (
        <Container>

        <Filters>
            <button className='tag-filter recurrent '>Recorrentes</button>
            <button className='tag-filter eventual'>Eventuais</button>
        </Filters>
            <HistoryFinanceCard
             
                tagColor="#F35A4E"
                title="conta de luz"
                subTitle="21/09/2022"
                amount="R$ 130,00"
            />
             
        </Container>
    )
}