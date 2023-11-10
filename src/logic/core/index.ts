import ServicosTransacao from "./finances/TransactionServices";
import ServicosUsuario from "./user/UserServices";

class Servicos {
    get transacao() { return new ServicosTransacao() }
    get usuario() { return new ServicosUsuario() }
}

const servicos = new Servicos()
export default servicos