import Collection from "@/logic/firebase/db/Collection";
import Transaction from "./Transaction";
import User from "../user/User";

export default class TransactionServices {
    private _collection = new Collection()

    async save(transactions: Transaction, user: User) {
        return this._collection.salvar(
            `finances/${user.email}/transactions`,
            transactions
        )
    }
}