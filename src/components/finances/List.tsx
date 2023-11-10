import Transaction from "@/logic/core/finances/Transaction"
import DateFormat from "@/logic/utils/DateFormat"
import Money from "@/logic/utils/Money"

interface ListProps {
    transactions: Transaction[]
}

export default function List(props: ListProps) {   
    function renderLine(transaction: Transaction, index: number) {
        return (
            <div key={transaction.id} className={`
                flex items-center gap-3 p-3 cursor-pointer
                ${index % 2 === 0 ? 'bg-zinc-900' : 'bg-zinc-800'}
            `} onClick={() => {}}>
                <span className="w-full md:w-1/2">{transaction.description}</span>
                <span className="hidden md:inline flex-1">{DateFormat.ddmmyy.format(transaction.date)}</span>
                <span>{Money.format(transaction.value)}</span>
            </div>
        )
    }

    return (
        <div>
            {props.transactions.map(renderLine)}
        </div>
    )
}