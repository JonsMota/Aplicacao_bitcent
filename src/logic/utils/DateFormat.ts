export default class DateFormat {

    private static _lingua = 'pt-BR'

    static ddmmyy = {
        format(dt: Date, separador: string = '/'): string {
            const dia = dt.getDate().toString().padStart(2, '0')
            const mes = (dt.getMonth() + 1).toString().padStart(2, '0')
            return `${dia}${separador}${mes}${separador}${dt.getFullYear()}`
        }
    }

    static mmyy = {
        format(dt: Date, lingua?: string): string {
            return dt?.toLocaleDateString?.(lingua ?? DateFormat._lingua, {
                month: 'long',
                year: 'numeric',
            } as Intl.DateTimeFormatOptions)
        },
    }

    static ddmm = {
        format(dt: Date, lingua?: string): string {
            return dt?.toLocaleDateString?.(lingua ?? DateFormat._lingua, {
                day: '2-digit',
                month: 'short'
            } as Intl.DateTimeFormatOptions)
        }
    }
    

    static meses() {
        return Array(12).fill(0).map((_, i) => new Date(2000, i, 1)
            .toLocaleDateString(DateFormat._lingua, { month: 'short' })
            .toUpperCase()
            .substring(0, 3))
    }

    static primeiroDia(dt: Date) {
        return new Date(dt.getFullYear(), dt.getMonth(), 1)
    }

    static ultimoDia(dt: Date) {
        return new Date(dt.getFullYear(), dt.getMonth() + 1, 0, 23, 59, 59)
    }
}