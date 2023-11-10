export default class Money {
    private static _lingua = "pt-BR"
    private static _moeda = "BRL"

    static format(num: number): string {
        return (num ?? 0).toLocaleString(Money._lingua, {
            style: "currency", currency: Money._moeda
        })
    }
}