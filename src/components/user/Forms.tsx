import MiniForm from "../templates/MiniForm"
import { TextInput } from "@mantine/core"
import useForm from "@/data/hooks/useForm"
import User from "@/logic/core/user/User"
import Text from "@/logic/utils/Text"
import Cpf from "@/logic/utils/Cpf"
import Phone from "@/logic/utils/Phone"
import { useContext, useEffect } from "react"
import AutenticacaoContext from "@/data/contexts/AutenticacaoContext"

export default function Forms() {
    const { usuario, atualizarUsuario } = useContext(AutenticacaoContext)
    const { data, changeData, setData} = useForm<User>()

    useEffect(() => {
        if(!usuario) return
        setData(usuario)
    }, [usuario, setData])

    async function save() {
        if(!usuario) return
        await atualizarUsuario(data)
    }

    return (
        <div className="flex flex-col gap-5">
            <MiniForm
                title="Seu Nome"
                description="Como você gostaria de ser chamado?"
                msgFooter="O nome deve possuir entre 3 e 60 caracteres, mais que isso já é um texto!"
                canSave={Text.between(data.name, 3, 80)}
                save={save}
            >
                <TextInput 
                    value={data.name}
                    onChange={changeData('name')}
                />
            </MiniForm>
            <MiniForm
                title="CPF"
                description="Seu CPF é usado internamente pelo sistema."
                msgFooter="Pode relaxar, daqui ele não sai!"
                canSave={Text.between(data.name, 3, 80)}
                save={save}
            >
                <TextInput 
                    value={Cpf.format(data.cpf?? '')}
                    onChange={changeData('cpf', Cpf.unformat)}
                />
            </MiniForm>
            <MiniForm
                title="Telefone"
                description="Usado para notificações importantes sobre a sua conta."
                msgFooter="Se receber ligação a cobrar, não foi a gente!"
                canSave={Text.between(data.name, 3, 80)}
                save={save}
            >
                <TextInput 
                    value={Phone.format(data.phone?? '')}
                    onChange={changeData('phone', Phone.unformat)}
                />
            </MiniForm>
        </div>
    )
}