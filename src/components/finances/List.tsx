import Transaction from "@/logic/core/finances/Transaction"
import DateFormat from "../../logic/utils/DateFormat" 
import Money from "@/logic/utils/Money"
import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

interface ListProps {
    transactions: Transaction[]
    selectTransaction?: (Transaction: Transaction) => void

}

export default function List(props: ListProps) {   
    function renderType(transaction: Transaction) {
        return (
            <span className={`
                flex justify-center items-center 
                h-8 w-8 sm:w-10 sm:h-10 p-1.5 rounded-full
                ${transaction.type === 'receita' ? 'bg-green-500' : 'bg-red-500'}
            `}>
                {transaction.type === 'receita'
                    ? <IconTrendingUp />
                    : <IconTrendingDown />}
            </span>
        )
    }

    function renderLine(transaction: Transaction, index: number) {
        return (
            <div key={transaction.id} className={`
                flex items-center gap-3 p-3 cursor-pointer
                ${index % 2 === 0 ? 'bg-zinc-900' : 'bg-zinc-800'}
            `} onClick={() => {props.selectTransaction?.(transaction)}}>
                {renderType(transaction)}
                <span className="w-full md:w-1/2">{transaction.description}</span>
                <span className="hidden md:inline flex-1">{DateFormat.ddmmyy.format(transaction.date)}</span>
                <span>{Money.format(transaction.value)}</span>
            </div>
        )
    }

    return (
        <div className={`
            flex flex-col border border-zinc-700
            rounded-xl overflow-hidden
        `}>
            {props.transactions.map(renderLine)}
        </div>
    )
}