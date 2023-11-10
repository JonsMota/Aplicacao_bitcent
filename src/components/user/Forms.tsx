import MiniForm from "../templates/MiniForm"
import { TextInput } from "@mantine/core"
import falseUser from "@/data/constants/falseUser"
import useForm from "@/data/hooks/useForm"
import User from "@/logic/core/user/User"
import Text from "@/logic/utils/Text"

export default function Forms() {
    const { data, changeData } = useForm<User>(falseUser)
    return (
        <div>
            <MiniForm
                title="Seu Nome"
                description="Como você gostaria de ser chamado?"
                msgFooter="O nome deve possuir entre 3 e 60 caracteres, mais que isso já é um texto!"
                canSave={Text.between(data.name, 3, 80)}
                save={() => {}}
            >
                <TextInput 
                    value={data.name}
                    onChange={changeData('name')}
                />
            </MiniForm>
        </div>
    )
}