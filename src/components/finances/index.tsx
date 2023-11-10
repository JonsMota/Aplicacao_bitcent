import Page from "../templates/Page"
import Header from "../templates/Header"
import Content from "../templates/Content"
import List from "./List"
import Form from "./Form"
import NotFound from "../templates/NotFound"
import { Button, SegmentedControl } from "@mantine/core"
import { IconLayoutGrid, IconList, IconPlus } from "@tabler/icons-react"
import useTransactions, { TipoExibicao } from "@/data/hooks/useTransactions"
import { emptyTransaction } from "@/logic/core/finances/Transaction"
import FieldYearMonth from "../templates/FieldYearMonth"
import Gride from "./Gride"

export default function Finances() {
    const {
        data, alterarData,
        tipoExibicao, alterarExibicao,
        transactions, transaction, select, saveTransaction, deleteTransaction
    } = useTransactions()

    function renderControls() {
        return (
            <div className="flex justify-between">
                <FieldYearMonth 
                    data={data}
                    dataMudou={alterarData}
                />
                <div className="flex gap-50">
                    <Button
                        className="bg-blue-500"
                        leftIcon={<IconPlus />}
                        onClick={() => select(emptyTransaction)}
                    >
                        Nova transação
                    </Button>
                    <SegmentedControl
                        data={[
                            { label: <IconList />, value: 'lista' },
                            { label: <IconLayoutGrid />, value: 'gride' }
                        ]}
                        onChange={tipo => alterarExibicao(tipo as TipoExibicao)}
                    />
                </div>
            </div>    
        )
    }

    function renderTransactions() {
        const props = {transactions, selectTransaction: select}
        return tipoExibicao === 'lista' ? <List {...props} /> : <Gride {...props} />
    } 

    return (
        <Page>
            <Header />
            <Content className="gap-5">
                {renderControls()}
                {transaction ? (
                    <Form
                        transaction={transaction}
                        cancel={() => select(null)}
                        save={saveTransaction}
                        delete={deleteTransaction}
                    />
                ) : transactions.length ? (
                    renderTransactions()
                ) :(
                    <NotFound>
                        Nenhuma transação encontrada
                    </NotFound>
                )}
            </Content>
        </Page>
    )
}