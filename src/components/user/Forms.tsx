import MiniForm from "../templates/MiniForm"
import { TextInput } from "@mantine/core"

export default function Forms() {
    return (
        <div>
            <MiniForm
                title="Seu Nome"
                description="Como você gostaria de ser chamado?"
                msgFooter="O nome deve possuir entre 3 e 60 caracteres, mais que isso já é um texto!"
                canSave={true}
                save={() => {}}
            >
                <TextInput />
            </MiniForm>
        </div>
    )
}