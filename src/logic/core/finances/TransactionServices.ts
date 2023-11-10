import Collection from "@/logic/firebase/db/Collection";
import Transaction from "./Transaction";
import User from "../user/User";
import DateFormat from "@/logic/utils/DateFormat";

export default class TransactionServices {
    private _collection = new Collection()

    async save(transactions: Transaction, user: User) {
        return this._collection.salvar(
            `finances/${user.email}/transactions`,
            transactions
        )
    }

    async search(user: User) {
        const path = `finances/${user.email}/transactions`
        return await this._collection.consultar(path, "date", "desc")
    }

    async searchByMonth(user: User, data: Date) {
        const path = `finances/${user.email}/transactions`
        return await this._collection.consultarComFiltros(path, [
            { atributo: 'date', op: ">=", valor: DateFormat.primeiroDia(data) },
            { atributo: 'date', op: "<=", valor: DateFormat.ultimoDia(data) },
        ])
    }

    async delete(transaction: Transaction,user: User) {
        return this._collection.excluir(
            `finances/${user.email}/transactions`,
            transaction.id
        )
    }
}