import Page from "../templates/Page"
import Header from "../templates/Header"
import Content from "../templates/Content"
import List from "./List"
import { useState } from "react"
import Transaction from "@/logic/core/finances/Transaction"
import falseTransactions from "@/data/constants/falseTransactions"

export default function Finances() {
    const [transactions, setTransactions] = useState<Transaction[]>(falseTransactions)
    return (
        <Page>
            <Header />
            <Content>
                <List transactions={transactions} />
            </Content>
        </Page>
    )
}