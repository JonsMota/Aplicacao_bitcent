import Transaction from "@/logic/core/finances/Transaction"

interface ListProps {
    transactions: Transaction[]
}

export default function List(props: ListProps) {   
    function renderLine(transaction: Transaction) {
        return (
            <div key={transaction.id}>
                <span>{transaction.description}</span>
                <span>{transaction.value}</span>
            </div>
        )
    }

    return (
        <div>
            {props.transactions.map(renderLine)}
        </div>
    )
}