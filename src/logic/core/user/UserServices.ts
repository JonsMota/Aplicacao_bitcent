import Autenticacao, { CancelarMonitoramento, MonitorarUsuario } from "@/logic/firebase/auth/Autenticacao"
import Colecao from "@/logic/firebase/db/Collection"
import Usuario from "./User"

export default class ServicosUsuario {
    private _autenticacao = new Autenticacao()
    private _colecao = new Colecao()

    async loginGoogle(): Promise<Usuario | null> {
        const usuario = await this._autenticacao.loginGoogle()
        if (!usuario) return null

        let usuarioDoBanco = await this.consultar(usuario.email)
        console.log(usuarioDoBanco)
        if (!usuarioDoBanco) usuarioDoBanco = await this.salvar(usuario)

        return { ...usuario, ...usuarioDoBanco }
    }

    async salvar(usuario: Usuario) {
        return await this._colecao.salvar(
            'usuarios', usuario, usuario.email
        )
    }

    async consultar(email: string) {
        return await this._colecao.consultarPorId(
            'usuarios', email
        )
    }
}